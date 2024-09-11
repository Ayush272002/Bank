import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    appName: { control: "text" },
    children: { control: "text" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appName: "Primary",
    children: "Primary",
    className: "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600", // Tailwind classes
  },
};

export const Secondary: Story = {
  args: {
    appName: "Secondary",
    children: "Secondary",
    className: "bg-purple-500 text-white py-2 px-4 rounded hover:bg-gray-600", // Tailwind classes
  },
};

export const Large: Story = {
  args: {
    appName: "Large",
    children: "Large Button",
    className:
      "bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600", // Larger Tailwind styles
  },
};

export const Small: Story = {
  args: {
    appName: "Small",
    children: "Small Button",
    className:
      "bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 text-sm", // Smaller Tailwind styles
  },
};
