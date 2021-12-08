import React from "react";

import Header from "./Header.component.jsx";

export default {
  component: Header,
  title: "UI/Molecules/Header",
};

const Template = (args) => <Header {...args} />;

export const Regular = Template.bind({});
Regular.args = { firstName: "Cristian", lastName: "Tomat" };
