import type { Meta } from "@storybook/react";
import StoryBookHeroSection from "../app/storybook/StoryBookHeroSection";

const meta: Meta<typeof StoryBookHeroSection> = {
  component: StoryBookHeroSection,
};

export default meta;

const Templete = (args: any) => <StoryBookHeroSection {...args} />;

export const Red = Templete.bind({});

Red.args = {
  backgroundImg: "red",
  description: "press me",
  heading: "cafcca",
};
