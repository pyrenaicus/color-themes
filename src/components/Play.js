import {
  randomColor,
  complementaryTheme,
  splitComplementaryTheme,
  analogousTheme,
  monochromaticTheme,
} from "../utils/colorGenerators";
import Icon from "../assets/icons/play_circle_outline.svg";
import "./Play.css";

export default function Play({ randomHue, colors, setColors, themeMethod }) {
  const randColor = randomColor(randomHue, 16);
  console.log("base color: ");
  console.log(randColor);
  let palette;
  palette = complementaryTheme(randColor); // default
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
    <div className="playIcon">
      <img src={Icon} alt="play icon" onClick={handleClick} />
    </div>
  );
}
