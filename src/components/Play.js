import * as color from "../utils/colorGenerators";
import { useState, useEffect } from "react";
import Icon from "../assets/icons/play_circle_outline.svg";
import "./Play.css";

export default function Play({ colors, setColors, themeMethod }) {
  const [randomHue, setRandomHue] = useState(30);

  let randColor;
  let hue = color.generateRandomHue();
  // setting minimum distance btw random colors

  if (Math.abs(hue - randomHue) < 16) {
    console.log("too small!");
    hue = hue + 16;
  } else {
    console.log("right distance!");
  }
  // randColor = color.generateHsluvColor(hue, 80, 60);
  randColor = color.baseColor(hue);
  let palette;
  // const palette = color.generatePaletteHsluv(randColor);

  switch (themeMethod) {
    case "splitComplementary":
      palette = color.generateThemeSplit(randColor);
      break;
    case "analogous":
      palette = color.generateThemeAnalogous(randColor);
      break;
    default:
      break;
  }

  const handleClick = () => {
    setColors((prevColors) => palette);
    console.log(colors);
    console.log("palette: " + palette);
  };

  return (
    <div className="playIcon" onClick={handleClick}>
      <img src={Icon} alt="play icon" />
    </div>
  );
}
