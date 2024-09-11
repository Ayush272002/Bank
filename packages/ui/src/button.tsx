"use client";

import Stack from "@mui/material/Stack";
import MuiButton from "@mui/material/Button";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <div className="ml-2">
      <Stack spacing={2} direction="row">
        <MuiButton
          variant="contained"
          onClick={onClick}
          className={`w-full ${className}`}
        >
          {children || "Enter button text"}
        </MuiButton>
      </Stack>
    </div>
  );
};
