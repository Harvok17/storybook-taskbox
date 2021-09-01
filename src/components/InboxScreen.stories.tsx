import { PureInboxScreen } from "./InboxScreen";
import { Meta, Story } from "@storybook/react";
import { Provider } from "react-redux";
import { action } from "@storybook/addon-actions";
import { defaultValueList } from "./defaultVal";

const store: any = {
  getState: () => {
    return {
      tasks: defaultValueList.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: PureInboxScreen,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "InboxScreen",
} as Meta;

const Template: Story<any> = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
