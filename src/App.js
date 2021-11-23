import { useState, useRef } from "react";
import "./App.css";
import { hsluvToHex } from "hsluv";
import ColorTheme from "./components/ColorTheme";
import Menu from "./components/Menu";
import Play from "./components/Play";
import HiddenCanvas from "./components/HiddenCanvas";

export default function App() {
  const [colors, setColors] = useState({
    colorLeft1: "#222222",
    colorLeft2: "#bbbbbb",
    colorCenter: "#222222",
    colorRight1: "#bbbbbb",
    colorRight2: "#222222",
  });

  const [imgData, setImgData] = useState("");

  const savePNG = useRef(null);

  return (
    <>
      <Menu savePNG={savePNG} imgData={imgData} />
      <ColorTheme colors={colors} />
      <Play colors={colors} setColors={setColors} />
      <HiddenCanvas colors={colors} savePNG={savePNG} setImgData={setImgData} />
    </>
  );
}
