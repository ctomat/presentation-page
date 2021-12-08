import React from "react";

import ProgressSquareBar from "./ProgressSquareBar.component.jsx";

export default {
  component: ProgressSquareBar,
  title: "UI/Atoms/ProgressSquareBar",
};

const Template = (args) => <ProgressSquareBar {...args} />;

export const regular = Template.bind({});
regular.args = {};
