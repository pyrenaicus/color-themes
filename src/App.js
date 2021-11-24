import { useState, useRef } from "react";
import "./App.css";
import * as colors from "./utils/colorGenerators";
import ColorTheme from "./components/ColorTheme";
import Menu from "./components/Menu";
import Play from "./components/Play";
import HiddenCanvas from "./components/HiddenCanvas";

export default function App() {
  const [colors, setColors] = useState({
    colorRight2: "#558332",
    colorRight1: "#837832",
    colorCenter: "#4fa6d9",
    colorLeft1: "#4074d4",
    colorLeft2: "#8b5be2",
  });

  const [themeMethod, setThemeMethod] = useState("splitComplementary");

  const [imgData, setImgData] = useState("");

  const savePNG = useRef(null);

  return (
    <>
      <Menu
        savePNG={savePNG}
        imgData={imgData}
        setThemeMethod={setThemeMethod}
      />
      <ColorTheme colors={colors} />
      <Play colors={colors} setColors={setColors} themeMethod={themeMethod} />
      <HiddenCanvas colors={colors} savePNG={savePNG} setImgData={setImgData} />
    </>
  );
}
