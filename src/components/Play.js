import { randomColor } from "../utils/colorUtils";
import createSplitComplementaryTheme from "../logic/createSplitComplementaryTheme";
import createMonochromaticTheme from "../logic/createMonochromaticTheme";
import createComplementaryTheme from "../logic/createComplementaryTheme";
import createAnalogousTheme from "../logic/createAnalogousTheme";
import Icon from "../assets/icons/play_circle_outline.svg";
import "./Play.css";

export default function Play({ randomHue, colors, setColors, themeMethod }) {
  const randColor = randomColor(randomHue, 16);
  console.log("base color: ");
  console.log(randColor);
  let palette;
  palette = createComplementaryTheme(randColor); // default
  switch (themeMethod) {
    case "complementary":
      palette = createComplementaryTheme(randColor);
      break;
    case "splitComplementary":
      palette = createSplitComplementaryTheme(randColor);
      break;
    case "analogous":
      palette = createAnalogousTheme(randColor);
      break;
    case "monochromatic":
      palette = createMonochromaticTheme(randColor);
      break;
    default:
      palette = createComplementaryTheme(randColor);
      break;
  }

  const handleClick = () => {
    setColors((prevColors) => palette);
    console.log(colors);
    console.log("palette: ");
    console.log(palette);
  };

  return (
    <div className="playIcon">
      <img src={Icon} alt="play icon" onClick={handleClick} />
    </div>
  );
}
