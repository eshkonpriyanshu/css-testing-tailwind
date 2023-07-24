import { argv } from "process";
import Button from "../app/components/Button";
import type { Meta } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

const Templete = (args) => <Button {...args} />;

export const Red = Templete.bind({});

Red.args = {
  backgroundColor: "red",
  label: "press me",
};
