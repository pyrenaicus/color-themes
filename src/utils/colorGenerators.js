import { hsluvToHex } from "hsluv";
import chroma from "chroma-js";

// const saturation = 60;
// const lightness = 60;

const sat = 0.8;
const light = 0.6;
// random value btw 0 and 360
export function generateRandomHue() {
  return Math.trunc(Math.random() * 361);
}

export function baseColor(hue) {
  console.log("chroma...");
  console.log(chroma(hue, sat, light, "hsl"));
  return chroma(hue, sat, light, "hsl").hex();
}

export function generateHsluvColor(hue, saturation, lightness) {
  const hsluvColor = [hue, saturation, lightness];
  console.log(`hsluv color: ${hsluvColor}`);
  return hsluvColor;
}

// export function generateHsluvRandomColor(saturation, lightness) {
//   const hsluvColor = [generateRandomHue(), saturation, lightness];
//   console.log(`hsluv color: ${hsluvColor}`);
//   return hsluvColor;
// }

export function generatePaletteHsluv(centralColor) {
  const centralHue = centralColor[0];
  const saturation = centralColor[1];
  const lightness = centralColor[2];

  const colors = {
    colorRight2: hsluvToHex([(centralHue + 240) % 360, saturation, lightness]),
    colorRight1: hsluvToHex([(centralHue + 200) % 360, saturation, lightness]),
    colorCenter: hsluvToHex(centralColor),
    colorLeft1: hsluvToHex([(centralHue + 30) % 360, saturation, lightness]),
    colorLeft2: hsluvToHex([(centralHue + 60) % 360, saturation, lightness]),
  };

  return colors;
}
// split complementary theme
export function generateThemeSplit(centralColor) {
  const hsl = chroma(centralColor).hsl();
  const centralHue = hsl[0];
  const saturation = hsl[1];
  const lightness = hsl[2];
  const colorRight = chroma([
    (centralHue + 195) % 360,
    saturation,
    lightness,
    "hsl",
  ]).hex();
  const colorCenter = centralColor;
  const colorLeft = chroma([
    (centralHue - 30) % 360,
    saturation,
    lightness,
    "hsl",
  ]).hex();
  const colors = chroma.scale([colorRight, colorCenter, colorLeft]).colors(5);
  console.log("colors");
  console.log(colors);
  return colors;
}

// analogous theme
export function generateThemeAnalogous(centralColor) {
  const centralHue = centralColor[0];
  const saturation = centralColor[1];
  const lightness = centralColor[2];

  const colors = {
    colorRight2: hsluvToHex([(centralHue - 40) % 360, saturation, lightness]),
    colorRight1: hsluvToHex([(centralHue - 20) % 360, saturation, lightness]),
    colorCenter: hsluvToHex(centralColor),
    colorLeft1: hsluvToHex([(centralHue + 20) % 360, saturation, lightness]),
    colorLeft2: hsluvToHex([(centralHue + 40) % 360, saturation, lightness]),
  };

  return colors;
}
