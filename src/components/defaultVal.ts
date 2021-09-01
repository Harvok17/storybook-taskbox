export const defaultVal = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
  updatedAt: new Date(2021, 0, 1, 9, 0),
};

export const defaultValueList = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in task.stories.js.
  tasks: [
    { ...defaultVal, id: "1", title: "Task 1" },
    { ...defaultVal, id: "2", title: "Task 2" },
    { ...defaultVal, id: "3", title: "Task 3" },
    { ...defaultVal, id: "4", title: "Task 4" },
    { ...defaultVal, id: "5", title: "Task 5" },
    { ...defaultVal, id: "6", title: "Task 6" },
  ],
};
