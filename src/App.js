import { useState, useRef } from "react";
import "./App.css";
import { baseColor, complementaryTheme } from "./utils/colorGenerators";
import ColorTheme from "./components/ColorTheme";
import Menu from "./components/Menu";
import Play from "./components/Play";
import HiddenCanvas from "./components/HiddenCanvas";

export default function App() {
  const [randomHue, setRandomHue] = useState(30);
  const [colors, setColors] = useState(complementaryTheme(baseColor(60)));
  console.log("first colors:");
  console.log(colors);

  const [themeMethod, setThemeMethod] = useState("complementary");

  const [imgData, setImgData] = useState("");
  // useRef hook to reference savePNG, passed as props to <Menu />
  const savePNG = useRef(null);

  return (
    <>
      <Menu
        savePNG={savePNG}
        imgData={imgData}
        setThemeMethod={setThemeMethod}
        themeMethod={themeMethod}
        colors={colors}
        setColors={setColors}
        randomHue={randomHue}
      />
      <ColorTheme colors={colors} />
      <Play
        colors={colors}
        setColors={setColors}
        themeMethod={themeMethod}
        randomHue={randomHue}
      />
      <HiddenCanvas colors={colors} savePNG={savePNG} setImgData={setImgData} />
    </>
  );
}
