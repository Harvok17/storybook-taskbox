import { PureTaskList } from "./TaskList";
import { TaskListProps } from "../lib/redux";
import { Meta, Story } from "@storybook/react";
import { defaultValueList } from "./defaultVal";

const meta: Meta = {
  component: PureTaskList,
  title: "TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  argTypes: {
    tasks: {
      defaultValue: defaultValueList.tasks,
    },
  },
};
export default meta;

const Template: Story<TaskListProps> = (args) => <PureTaskList {...args} />;

export const Default = Template.bind({});

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...defaultValueList.tasks.slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
