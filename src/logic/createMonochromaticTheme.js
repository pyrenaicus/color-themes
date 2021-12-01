import {
  getHue,
  // getSaturation,
  // getLightness,
  createColor,
  createScale,
} from "../utils/colorUtils";

// monochromatic theme, seed on left
export default function createMonochromaticTheme(seedColor) {
  const hue = getHue(seedColor);
  const colorLeft = createColor(hue, 0.7, 0.1);
  const colorRight = createColor(hue + 180, 0.9, 0.96);
  return createScale(colorLeft, colorRight, "lab", 5);
}
