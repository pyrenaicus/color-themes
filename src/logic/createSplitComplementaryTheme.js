import {
  getHue,
  getSaturation,
  getLightness,
  createColor,
  createScale,
  hexColor,
} from "../utils/colorUtils";

// split complementary theme (+180º), seed on left
export default function createSplitComplementaryTheme(seedColor) {
  const seedHue = getHue(seedColor);
  const s = getSaturation(seedColor);
  const l = getLightness(seedColor);
  const delta1 = 165;
  const delta2 = 195;
  const hue1 = seedHue + delta1;
  const hue2 = seedHue + delta2;
  const colorLeft2 = createColor(seedHue + 60, s, l);
  const colorRight1 = createColor(hue1, s, l);
  const colorRight2 = createColor(hue2, s, l);
  let colors = createScale(colorLeft2, seedColor, "lrgb", 3);
  colors = [...colors, hexColor(colorRight1), hexColor(colorRight2)];
  console.log("colors...:");
  console.log(colors);
  return colors;
}
