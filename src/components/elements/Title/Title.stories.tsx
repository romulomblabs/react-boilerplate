import { ComponentMeta, ComponentStory } from "@storybook/react";

import Title from "./Title";

export default {
  title: "elements/Title",
  component: Title,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = args => (
  <Title {...args}>{args.children}</Title>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "Meu Titulo",
  level: 1,
};
