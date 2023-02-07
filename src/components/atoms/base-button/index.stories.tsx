import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BaseButton } from ".";

export default {
  title: "Components/Atoms/BaseButton",
  component: BaseButton,
  argTypes: {},
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
  variant: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary",
  variant: "tertiary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  variant: "primary",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading",
  variant: "primary",
  loading: true,
};
