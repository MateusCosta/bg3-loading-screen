import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoadingIcon } from "./components/LoadingIcon";
import { Slider } from "./components/Slider";
function App() {
  const [loadedPercentage, setLoadedPercentage] = useState(0);
  const images = [
    "https://i.pinimg.com/originals/5b/89/7c/5b897cef18398f00d324d7981090d98f.jpg",
  ];
  return (
    <Slider imageURL={images[0]}>
      <div className="footer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eligendi. Rem rerum eligendi doloribus molestias possimus.</p>
        <LoadingIcon percentage={loadedPercentage} />
      </div>
    </Slider>
  );
}

export default App;
