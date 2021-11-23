import { hsluvToHex } from "hsluv";
import Icon from "../assets/icons/play_circle_outline.svg";
import "./Play.css";

export default function Play({ colors, setColors }) {
  // const { colorLeft2, colorLeft1, colorCenter, colorRight1, colorRight2 } =
  //   colors;

  const saturation = 80;
  const brightness = 50;

  const randColor = generateHsluvRandomColor(saturation, brightness);
  const palette = generatePaletteHsluv(randColor);

  const handleClick = () => {
    setColors((prevColors) => {
      return {
        ...palette,
      };
    });
    console.log(colors);
    console.log("palette: " + palette);
  };

  // console.log("colorCenter: " + colorCenter);

  // console.log(palette);

  // colorCenter.style.backgroundColor = hsluvToHex(palette.colorCenter);
  // colorRight1.style.backgroundColor = hsluvToHex(palette.colorRight1);
  // colorRight2.style.backgroundColor = hsluvToHex(palette.colorRight2);
  // colorLeft1.style.backgroundColor = hsluvToHex(palette.colorLeft1);
  // colorLeft2.style.backgroundColor = hsluvToHex(palette.colorLeft2);

  // first color randomly generated
  function generateHsluvRandomColor(saturation = 80, lightness = 65) {
    let hue = Math.trunc(Math.random() * 361);
    // keep hue btw bounds
    hue = hue % 360;
    // hue > 360 ? (hue = hue - 360) : hue;
    const hsluvColor = [hue, saturation, lightness];
    console.log(`hsluv color: ${hsluvColor}`);
    return hsluvColor;
  }

  function generatePaletteHsluv(centralColor) {
    const analogDelta = 22;
    const complementaryDelta1 = 180 - analogDelta;
    const complementaryDelta2 = 180 + analogDelta;
    const centralHue = centralColor[0];
    const hueRight1 = centralHue + analogDelta;

    const colors = {
      colorCenter: hsluvToHex(centralColor),
      colorRight1: hsluvToHex([
        centralHue + analogDelta,
        saturation,
        brightness,
      ]),
      colorRight2: hsluvToHex([
        centralHue + analogDelta * 2,
        saturation,
        brightness,
      ]),
      colorLeft1: hsluvToHex([
        centralHue - complementaryDelta1,
        saturation,
        brightness,
      ]),
      colorLeft2: hsluvToHex([
        centralHue - complementaryDelta2 - analogDelta,
        saturation,
        brightness,
      ]),
    };

    return colors;
  }

  return (
    <div className="playIcon" onClick={handleClick}>
      <img src={Icon} alt="play icon" />
    </div>
  );
}
