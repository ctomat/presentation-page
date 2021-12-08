const Button = ({ buttonLabel, green }) => {
  return (
    <div className="m-4">
      <button
        className={`${
          green ? "bg-nice-green" : "bg-nice-purple"
        } text-title font-title text-xl w-36 h-10 rounded-lg md:w-42 md:h-12 md:text-2xl`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Button;
