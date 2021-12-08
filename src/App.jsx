import Button from "./components/UI/atoms/Button/Button.component";
import MenuButton from "./components/UI/atoms/MenuButton/MenuButton.component.jsx";
import CardPerks from "./components/UI/molecules/CardPerks/CardPerks.component";

import SampleImage from "./assets/img/sample-image.png";

function App() {
  return (
    <div className="bg-red-200">
      <div>
        <CardPerks
          title="Card Title"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatem illo rem repudiandae laboriosam ducimus laudantium ullam quo magnam."
          image={SampleImage}
          alt="Card Image"
          card={true}
        />
      </div>
    </div>
  );
}

export default App;
