const MenuButton = () => {
  return (
    <div>
      <button className="bg-nice-purple rounded-full w-12 h-12 flex justify-center items-center">
        <ul className="flex flex-wrap w-10/12 justify-center">
          <li className="m-0.5 border-2 border-white w-3 h-3"></li>
          <li className="m-0.5 border-2 border-white w-3 h-3"></li>
          <li className="m-0.5 border-2 border-white w-3 h-3"></li>
          <li className="m-0.5 border-2 border-white w-3 h-3"></li>
        </ul>
      </button>
    </div>
  );
};

export default MenuButton;
