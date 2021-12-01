import {
  getHue,
  getSaturation,
  getLightness,
  createColor,
  createScale,
} from "../utils/colorUtils";

// analogous theme (0, 30, 60), seed on left
export default function createAnalogousTheme(seedColor) {
  const seedHue = getHue(seedColor);
  // const seedHue = 50;
  const s = getSaturation(seedColor);
  const l = getLightness(seedColor);
  const delta = 80;
  const hue = (seedHue + delta) % 360;
  const colorLeft = createColor(seedHue, 0.8, 0.5);
  // const colorCenter = createColor(seedHue + 30, 0.8, 0.6);
  const colorRight = createColor(hue, 0.3, 0.5);
  return createScale(colorLeft, colorRight, "lab", 5);
}
