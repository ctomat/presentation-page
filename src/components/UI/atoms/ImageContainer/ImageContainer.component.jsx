const ImageContainer = ({ image, alt, card }) => {
  return (
    <div
      className={`${
        card
          ? "hidden md:block md:w-32 2xl:w-36"
          : "w-48 md:w-96 2lx:w-5/12 2xl:max-w-2xl"
      }`}
    >
      <img className="w-full" src={image} alt={alt} card={card} />
    </div>
  );
};

export default ImageContainer;
