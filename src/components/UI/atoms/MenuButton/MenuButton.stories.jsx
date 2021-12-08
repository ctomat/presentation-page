import React from "react";

import MenuButton from "./MenuButton.component.jsx";

export default {
  component: MenuButton,
  title: "UI/Atoms/MenuButton",
};

const Template = (args) => <MenuButton {...args} />;

export const Regular = Template.bind({});
Regular.args = {};
