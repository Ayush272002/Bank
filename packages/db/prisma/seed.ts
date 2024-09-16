import crypto from "crypto";
import prismaClientSingleton from "../src";
import dotenv from "dotenv";

dotenv.config();

const prisma = prismaClientSingleton(process.env.ACCELERATE_URL!);

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

async function main() {
  const bobPassword = await hashPassword("bobpassword");
  const alicePassword = await hashPassword("alicepassword");

  // Upsert Bob's data
  const bob = await prisma.user.upsert({
    where: { email: "bob@example.com" },
    update: {
      name: "Bob",
      number: "1234567891",
      password: bobPassword,
      balance: {
        update: {
          amount: 100000,
        },
      },
    },
    create: {
      email: "bob@example.com",
      name: "Bob",
      number: "1234567891",
      password: bobPassword,
      balance: {
        create: {
          amount: 100000,
        },
      },
    },
  });

  // Upsert Alice's data
  const alice = await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {
      name: "Alice",
      number: "0987654322",
      password: alicePassword,
      balance: {
        update: {
          amount: 200000,
        },
      },
    },
    create: {
      email: "alice@example.com",
      name: "Alice",
      number: "0987654322",
      password: alicePassword,
      balance: {
        create: {
          amount: 200000,
        },
      },
    },
  });

  await prisma.transaction.createMany({
    data: [
      {
        amount: 20000,
        type: "TRANSFER",
        senderId: bob.id,
        receiverId: alice.id,
      },
      {
        amount: 30000,
        type: "TRANSFER",
        senderId: alice.id,
        receiverId: bob.id,
      },
      {
        amount: 15000,
        type: "DEPOSIT",
        receiverId: bob.id,
      },
      {
        amount: 50000,
        type: "WITHDRAWAL",
        senderId: alice.id,
      },
      {
        amount: 10000,
        type: "WITHDRAWAL",
        senderId: alice.id,
      },
    ],
  });

  console.log("Seeding complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
