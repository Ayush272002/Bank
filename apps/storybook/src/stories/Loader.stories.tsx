import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@repo/ui/loader";

const meta: Meta<typeof Loader> = {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    sx: {
      control: "object",
      description: "Custom Material-UI styles for the loader container",
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
