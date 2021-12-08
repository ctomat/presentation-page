import React from "react";

import CardText from "./CardText.component.jsx";

export default {
  component: CardText,
  title: "UI/Atoms/CardText",
};

const Template = (args) => <CardText {...args} />;

export const regular = Template.bind({});
regular.args = {
  text:
    "Neque expedita modi aperiam ex qui accusamus distinctio odit ab, dolor quis? Minima tenetur sunt facere dolores molestias maiores voluptatem, odio fugiat!",
};
