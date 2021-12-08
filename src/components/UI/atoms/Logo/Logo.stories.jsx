import React from "react";

import Logo from "./Logo.component.jsx";

export default {
  component: Logo,
  title: "UI/Atoms/Logo",
};

const Template = (args) => <Logo {...args} />;

export const Regular = Template.bind({});
Regular.args = { firstName: "Cristian", lastName: "Tomat" };
