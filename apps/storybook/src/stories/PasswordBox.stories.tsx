import type { Meta, StoryObj } from "@storybook/react";
import { PasswordBox } from "@repo/ui/password-box";

const meta: Meta<typeof PasswordBox> = {
  title: "Components/PasswordBox",
  component: PasswordBox,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <PasswordBox {...args} />,
  args: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
  },
};
