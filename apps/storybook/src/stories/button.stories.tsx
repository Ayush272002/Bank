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
    className: { control: "text", description: "Custom CSS classes" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click Me",
    className: "",
  },
};

export const CustomText: Story = {
  args: {
    children: "Custom Text",
    className: "bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600",
  },
};

export const CustomAction: Story = {
  args: {
    children: "Action Button",
    onClick: () => alert("Button clicked"),
    className: "bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600",
  },
};
