import { useState, useRef, useEffect } from "react";
import "./App.css";
import { baseColor } from "./utils/colorUtils";
import createComplementaryTheme from "./logic/createComplementaryTheme";
import ColorTheme from "./components/ColorTheme";
import Menu from "./components/Menu";
import Play from "./components/Play";
import HiddenCanvas from "./components/HiddenCanvas";
import GithubCorner from "./components/GithubCorner";

export default function App() {
  const [randomHue, setRandomHue] = useState(30);
  const [colors, setColors] = useState(createComplementaryTheme(baseColor(60)));
  // if mobile, don't render github link
  const [isMobile, setIsMobile] = useState(false);
  console.log("first colors:");
  console.log(colors);

  const [themeMethod, setThemeMethod] = useState("complementary");

  const [imgData, setImgData] = useState("");
  // useRef hook to reference savePNG, passed as props to <Menu />
  const savePNG = useRef(null);

  useEffect(() => {
    const screenSize = window.innerWidth;
    screenSize < 600 ? setIsMobile(true) : setIsMobile(false);
  }, []);

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
      {!isMobile ? <GithubCorner colors={colors} /> : null}
    </>
  );
}
