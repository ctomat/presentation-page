import React from "react";
import SampleImage from "../../../../assets/img/sample-image.png";

import CardPerks from "./CardPerks.component.jsx";

export default {
  component: CardPerks,
  title: "UI/Molecules/CardPerks",
};

const Template = (args) => <CardPerks {...args} />;

export const regular = Template.bind({});
regular.args = {
  title: "Card Title",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem illo rem repudiandae laboriosam ducimus laudantium ullam quo magnam.",
  image: SampleImage,
  alt: "Sample Image",
  card: true,
};
