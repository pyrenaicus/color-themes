import { useState, useRef } from "react";
import "./App.css";
import * as color from "./utils/colorGenerators";
import ColorTheme from "./components/ColorTheme";
import Menu from "./components/Menu";
import Play from "./components/Play";
import HiddenCanvas from "./components/HiddenCanvas";

export default function App() {
  const [colors, setColors] = useState([
    "#558332",
    "#837832",
    "#4fa6d9",
    "#4074d4",
    "#8b5be2",
  ]);

  const [themeMethod, setThemeMethod] = useState("splitComplementary");

  const [imgData, setImgData] = useState("");

  const savePNG = useRef(null);

  return (
    <>
      <Menu
        savePNG={savePNG}
        imgData={imgData}
        setThemeMethod={setThemeMethod}
        themeMethod={themeMethod}
        colors={colors}
      />
      <ColorTheme colors={colors} />
      <Play colors={colors} setColors={setColors} themeMethod={themeMethod} />
      <HiddenCanvas colors={colors} savePNG={savePNG} setImgData={setImgData} />
    </>
  );
}
