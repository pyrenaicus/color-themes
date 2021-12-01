import {
  getHue,
  getSaturation,
  getLightness,
  createColor,
  createScale,
} from "../utils/colorUtils";

// complementary theme (+180º), seed on left
export default function createComplementaryTheme(seedColor) {
  const seedHue = getHue(seedColor);
  const s = getSaturation(seedColor);
  const l = getLightness(seedColor);
  const delta = 180;
  const hue = seedHue + delta;
  const rightColor = createColor(hue, s, l);
  return createScale(seedColor, rightColor, "lab", 5);
}
