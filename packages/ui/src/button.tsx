"use client";

import Stack from "@mui/material/Stack";
import MuiButton from "@mui/material/Button";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  sx?: object;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children = "Enter button text",
  sx = {}, // Default empty object for sx
}) => {
  return (
    <div className="ml-2">
      <Stack spacing={2} direction="row">
        <MuiButton
          variant="contained"
          onClick={onClick}
          className="w-full"
          sx={sx}
        >
          {children}
        </MuiButton>
      </Stack>
    </div>
  );
};
