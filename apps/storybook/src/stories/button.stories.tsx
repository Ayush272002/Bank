import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: { action: "clicked", description: "Button click handler" },
    children: { control: "text", description: "Button text" },
    sx: { control: "object", description: "Custom Material-UI styles" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const CustomText: Story = {
  args: {
    children: "Custom Text",
    sx: {
      backgroundColor: "green",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "darkgreen",
      },
    },
  },
};

export const CustomAction: Story = {
  args: {
    children: "Action Button",
    onClick: () => alert("Button clicked"),
    sx: {
      backgroundColor: "red",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "darkred",
      },
    },
  },
};

export const DisabledButton: Story = {
  args: {
    children: "Disabled Button",
    sx: {
      backgroundColor: "gray",
      color: "white",
      padding: "8px 16px",
      borderRadius: "8px",
    },
    onClick: undefined,
  },
};
