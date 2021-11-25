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

// create HSL color from given hue, returns a Color object
export function baseColor(hue) {
  const color = chroma.hsl(hue, sat, light);
  return color;
}

// split complementary theme (+180º), seed on left
export function splitComplementaryTheme(seedColor) {
  const seedHue = chroma(seedColor).get("hsl.h");
  const s = chroma(seedColor).get("hsl.s");
  const l = chroma(seedColor).get("hsl.l");
  const delta1 = 165;
  const delta2 = 195;
  const hue1 = seedHue + delta1;
  const hue2 = seedHue + delta2;
  const colorLeft2 = chroma.hsl(seedHue + 60, s, l);
  const colorRight1 = chroma.hsl(hue1, s, l);
  const colorRight2 = chroma.hsl(hue2, s, l);
  let colors = chroma
    .scale([colorLeft2, seedColor])
    .correctLightness()
    .mode("lrgb")
    .colors(3);
  colors = [...colors, chroma(colorRight1).hex(), chroma(colorRight2).hex()];
  console.log("colors...:");
  console.log(colors);
  return colors;
}

// complementary theme (+180º), seed on left
export function complementaryTheme(seedColor) {
  const seedHue = chroma(seedColor).get("hsl.h");
  const s = chroma(seedColor).get("hsl.s");
  const l = chroma(seedColor).get("hsl.l");
  const delta = 180;
  const hue = seedHue + delta;
  const colorRight = chroma.hsl(hue, s, l);
  const colors = chroma
    .scale([seedColor, colorRight])
    .correctLightness()
    .mode("lab")
    .colors(5);
  return colors;
}

// analogous theme (0, 30, 60), seed on left
export function analogousTheme(seedColor) {
  const seedHue = chroma(seedColor).get("hsl.h");
  // const seedHue = 50;
  console.log("seedColor: ");
  console.log(chroma(seedColor).hsl());
  const s = chroma(seedColor).get("hsl.s");
  const l = chroma(seedColor).get("hsl.l");
  const delta = 80;
  const hue = (seedHue + delta) % 360;
  const colorLeft = chroma.hsl(seedHue, 0.8, 0.5);
  // const colorCenter = chroma.hsl(seedHue + 30, 0.8, 0.6);
  const colorRight = chroma.hsl(hue, 0.3, 0.5);
  const colors = chroma
    // .bezier([colorLeft, colorRight])
    .scale([colorLeft, colorRight])
    .correctLightness()
    .mode("lab")
    .colors(5);
  return colors;
}

// monochromatic theme, seed on left
export function monochromaticTheme(seedColor) {
  const hue = chroma(seedColor).get("hsl.h");
  const s = chroma(seedColor).get("hsl.s");
  const l = chroma(seedColor).get("hsl.l");
  const colorLeft = chroma.hsl(hue, 0.7, 0.2);
  const colorRight = chroma.hsl(hue + 180, 0.6, 0.96);
  const colors = chroma
    .bezier([colorLeft, colorRight])
    .scale()
    .correctLightness()
    .mode("lab")
    .colors(5);
  return colors;
}

// check contrast
export function checkMinContrast(color1, color2) {
  if (chroma.contrast(color1, color2) < 4.5) {
    return false;
  } else {
    return true;
  }
}
