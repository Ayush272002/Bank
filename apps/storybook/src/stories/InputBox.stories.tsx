import type { Meta, StoryObj } from "@storybook/react";
import { InputBox } from "@repo/ui/input-box";

const meta: Meta = {
  title: "Components/InputBox",
  component: InputBox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input box",
    },
    onChange: { action: "changed", description: "Called when input changes" },
  },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    className:
      "border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500",
  },
};
