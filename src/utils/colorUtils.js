import chroma from "chroma-js";

const sat = 0.8;
const light = 0.6;
// random value btw 0 and 360
export function generateRandomHue() {
  return Math.trunc(Math.random() * 361);
}

export function getHue(color) {
  return chroma(color).get("hsl.h");
}

export function getSaturation(color) {
  return chroma(color).get("hsl.s");
}

export function getLightness(color) {
  return chroma(color).get("hsl.l");
}

export function createColor(h, s, l) {
  return chroma.hsl(h, s, l);
}

export function createScale(leftColor, rightColor, mode, numColors) {
  return chroma
    .scale([leftColor, rightColor])
    .correctLightness()
    .mode(mode)
    .colors(numColors);
}

// create HSL color from given hue, returns a Color object
export function baseColor(hue) {
  const color = chroma.hsl(hue, sat, light);
  return color;
}

// Color from Hex string
export function colorHex(hex) {
  return chroma(hex);
}

// return hex string for given color
export function hexColor(color) {
  return chroma(color).hex();
}

// remove # from hex string
export function removeHex(string) {
  return string.replace("#", "");
}

// generate a random color
export function randomColor(hue, angularDist) {
  let randomHue = generateRandomHue();
  // setting minimum distance btw random colors
  if (Math.abs(randomHue - hue) < angularDist) {
    randomHue = randomHue + 16;
  }
  return baseColor(randomHue);
}

// check contrast
export function checkMinContrast(color1, color2) {
  if (chroma.contrast(color1, color2) < 4.5) {
    return false;
  } else {
    return true;
  }
}
