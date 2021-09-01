import React from "react";
import "../src/index.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <div
      style={{
        border: "2px solid black",
      }}
    >
      <Story />
    </div>
  ),
];
