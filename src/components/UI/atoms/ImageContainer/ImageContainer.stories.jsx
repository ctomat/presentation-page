import React from "react";
import SampleImage from "../../../../assets/img/sample-image.png";

import ImageContainer from "./ImageContainer.component.jsx";

export default {
  component: ImageContainer,
  title: "UI/Atoms/ImageContainer",
};

const Template = (args) => <ImageContainer {...args} />;

export const regular = Template.bind({});
regular.args = { image: SampleImage, alt: "Sample Image" };

export const cardImage = Template.bind({});
cardImage.args = { image: SampleImage, alt: "Sample Image", card: true };
