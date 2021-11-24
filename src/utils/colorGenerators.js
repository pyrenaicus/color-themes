import { hsluvToHex } from "hsluv";

// const saturation = 60;
// const lightness = 60;

// random value btw 0 and 360
export function generateRandomHue() {
  return Math.trunc(Math.random() * 361);
}

export function generateHsluvColor(hue, saturation, lightness) {
  const hsluvColor = [hue, saturation, lightness];
  console.log(`hsluv color: ${hsluvColor}`);
  return hsluvColor;
}

export function generateHsluvRandomColor(saturation, lightness) {
  const hsluvColor = [generateRandomHue(), saturation, lightness];
  console.log(`hsluv color: ${hsluvColor}`);
  return hsluvColor;
}

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
  const centralHue = centralColor[0];
  const saturation = centralColor[1];
  const lightness = centralColor[2];

  const colors = {
    colorRight2: hsluvToHex([(centralHue + 195) % 360, saturation, lightness]),
    colorRight1: hsluvToHex([(centralHue + 165) % 360, saturation, lightness]),
    colorCenter: hsluvToHex(centralColor),
    colorLeft1: hsluvToHex([(centralHue + 30) % 360, saturation, lightness]),
    colorLeft2: hsluvToHex([(centralHue - 30) % 360, saturation, lightness]),
  };

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
