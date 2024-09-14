import type { Meta, StoryObj } from "@storybook/react";
import { LinkItem } from "@repo/ui/link-item";

const meta: Meta<typeof LinkItem> = {
  title: "Components/LinkItem",
  component: LinkItem,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text", description: "Text label of the link item" },
    onClick: { action: "clicked", description: "Link item click handler" },
  },
} satisfies Meta<typeof LinkItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Current Account",
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: "Mortgages",
  },
};

export const WithClickAction: Story = {
  args: {
    label: "Credit cards",
    onClick: () => alert("Link item clicked"),
  },
};

export const NoClickHandler: Story = {
  args: {
    label: "Savings",
    onClick: undefined,
  },
};
