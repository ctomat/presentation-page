import CardText from "../../atoms/CardText/CardText.component";
import CardTitle from "../../atoms/CardTitle/CardTitle.component";
import ImageContainer from "../../atoms/ImageContainer/ImageContainer.component";

import "./CardPerks.css";

const CardPerks = ({ title, description, image, imageAlt, card }) => {
  return (
    <div className="card-size bg-primary-black">
      <div className="flex justify-center py-2 xl:py-4">
        <CardTitle titleText={title} />
      </div>
      <div className="px-3 pl-5 flex justify-center">
        <CardText text={description} />
      </div>
      <div className="flex justify-center py-2 xl:py-4">
        <ImageContainer image={image} imageAlt={imageAlt} card={card} />
      </div>
    </div>
  );
};

export default CardPerks;
