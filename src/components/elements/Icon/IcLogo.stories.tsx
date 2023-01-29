import { ComponentMeta, ComponentStory } from "@storybook/react";

import IcLogo from "./IcLogo";

export default {
  title: "elements/IcLogo",
  component: IcLogo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof IcLogo>;

const Template: ComponentStory<typeof IcLogo> = args => <IcLogo {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {};
