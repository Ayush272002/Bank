import { Hono } from "hono";
import prismaClientSingleton from "@repo/db/client";
import { signupInput } from "@repo/zodschema/zodschema";
import { sign, verify } from "hono/jwt";
import { getCookie } from "hono/cookie";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  // console.log("at top of signup");
  const prisma = prismaClientSingleton(c.env.DATABASE_URL);
  const body = await c.req.json();

  // console.log("control here");
  const validatedData = signupInput.safeParse(body);
  if (!validatedData.success) {
    c.status(400);
    return c.json({
      error: validatedData.error.errors.map((err) => err.message).join(", "),
    });
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      c.status(403);
      return c.json({ error: "User already exists" });
    }
  } catch (e) {
    c.status(403);
    return c.json({ error: "Error checking for existing user" });
  }

  async function hashPassword(password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  }

  // console.log("control before try block")
  try {
    const hashedPassword = await hashPassword(body.password);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        number: body.number,
        password: hashedPassword,
        balance: {
          create: {
            amount: 500000,
          },
        },
      },
    });
    console.log("control after user creation");

    const jwt = await sign(
      { id: user.id, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60 }, // 30 days
      c.env.JWT_SECRET,
    );

    // setCookie(c, "auth_token", jwt, {
    //   path: "/",
    //   httpOnly: true,
    //   sameSite: "None",
    //   secure: false,
    //   maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
    // });

    c.status(200);
    return c.json({ jwt: jwt });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Error creating user" });
  }
});

userRouter.post("/signin", async (c) => {
  const prisma = prismaClientSingleton(c.env.DATABASE_URL);
  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (!user) {
    c.status(403);
    return c.json({ error: "User not found" });
  }

  // Function to hash the provided password and compare it to the stored hash
  async function verifyPassword(storedHash: string, password: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex === storedHash;
  }

  // Verify the password
  const passwordMatches = await verifyPassword(user.password, body.password);

  if (!passwordMatches) {
    c.status(403);
    return c.json({ error: "Invalid password" });
  }

  const jwt = await sign(
    { id: user.id, exp: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60 }, // 30 days
    c.env.JWT_SECRET,
  );

  // setCookie(c, "auth_token", jwt, {
  //   path: "/",
  //   httpOnly: true,
  //   sameSite: "None",
  //   secure: false,
  //   maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
  // });

  c.status(200);
  return c.json({ jwt: jwt });
});

userRouter.get("/currUser", async (c) => {
  const header = c.req.header("Authorization");
  if (!header) {
    c.status(403);
    return c.json({ error: "Unauthorized 1" });
  }

  const token = header.split(" ")[1];
  if (!token || header.split(" ")[0] !== "Bearer") {
    c.status(403);
    return c.json({ error: "Unauthorized 2" });
  }

  console.log("control before try");
  try {
    const res = (await verify(token, c.env.JWT_SECRET)) as { id: string };
    console.log("control after verify");
    if (!res || !res.id) {
      return c.json({ error: "unauthorized 3" }, 403);
    }

    console.log("control before prisma");
    const prisma = prismaClientSingleton(c.env.DATABASE_URL);
    const user = await prisma.user.findUnique({
      where: {
        id: Number(res.id),
      },
      select: {
        name: true,
        balance: {
          select: {
            amount: true,
          },
        },
      },
    });

    if (!user) {
      c.status(403);
      return c.json({ error: "User not found" });
    }

    c.status(200);
    return c.json({ name: user.name });
  } catch (e) {
    c.status(403);
    return c.json({ error: "unauthorized 4" });
  }
});
