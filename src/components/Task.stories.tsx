import Task from "./Task";
import { TaskProps } from "./Task";
import { Meta, Story } from "@storybook/react";
import { defaultVal } from "./defaultVal";

const meta: Meta = {
  component: Task,
  title: "Task",
  argTypes: {
    task: {
      defaultValue: defaultVal,
    },
  },
};
export default meta;

const Template: Story<TaskProps> = (args) => <Task {...args} />;

export const Default = Template.bind({});

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...defaultVal,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...defaultVal,
    state: "TASK_ARCHIVED",
  },
};
