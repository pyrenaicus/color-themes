import {
  generateRandomHue,
  baseColor,
  complementaryTheme,
  splitComplementaryTheme,
  analogousTheme,
  monochromaticTheme,
} from "../utils/colorGenerators";
import { useState, useEffect } from "react";
import Icon from "../assets/icons/play_circle_outline.svg";
import "./Play.css";

export default function Play({ colors, setColors, themeMethod }) {
  const [randomHue, setRandomHue] = useState(30);

  let randColor;
  let hue = generateRandomHue();
  // setting minimum distance btw random colors
  if (Math.abs(hue - randomHue) < 16) {
    hue = hue + 16;
  }
  // randColor = color.generateHsluvColor(hue, 80, 60);
  randColor = baseColor(hue);
  console.log("base color: ");
  console.log(randColor);
  let palette;
  palette = complementaryTheme(randColor);
  switch (themeMethod) {
    case "complementary":
      palette = complementaryTheme(randColor);
      break;
    case "splitComplementary":
      palette = splitComplementaryTheme(randColor);
      break;
    case "analogous":
      palette = analogousTheme(randColor);
      break;
    case "monochromatic":
      palette = monochromaticTheme(randColor);
      break;
    default:
      palette = complementaryTheme(randColor);
      break;
  }

  const handleClick = () => {
    setColors((prevColors) => palette);
    console.log(colors);
    console.log("palette: ");
    console.log(palette);
  };

  return (
    <div className="playIcon" onClick={handleClick}>
      <img src={Icon} alt="play icon" />
    </div>
  );
}
