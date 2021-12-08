import Logo from "../../atoms/Logo/Logo.component.jsx";
import MenuButton from "../../atoms/MenuButton/MenuButton.component.jsx";

const Header = ({ firstName, lastName }) => {
  return (
    <div className="flex items-center justify-between">
      <Logo firstName={firstName} lastName={lastName} />
      <MenuButton />
    </div>
  );
};

export default Header;
