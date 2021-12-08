const Logo = ({ firstName, lastName }) => {
  return (
    <div>
      <h1 className="text-title font-title text-xl md:text-2xl lg:text-3xl lg:leading-10">
        {firstName} <br />
        <span className="ml-7 bg-nice-purple px-1">{lastName}</span>
      </h1>
    </div>
  );
};

export default Logo;
