import React from "react";

import CardTitle from "./CardTitle.component.jsx";

export default {
  component: CardTitle,
  title: "UI/Atoms/CardTitle",
};

const Template = (args) => <CardTitle {...args} />;

export const regular = Template.bind({});
regular.args = { titleText: "Card Title" };
