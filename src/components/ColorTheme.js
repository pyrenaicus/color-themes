import "./ColorTheme.css";

export default function ColorTheme({ colors }) {
  const { colorLeft2, colorLeft1, colorCenter, colorRight1, colorRight2 } =
    colors;

  return (
    <div className="container">
      <div id="colorLeft2" style={{ backgroundColor: colorLeft2 }}></div>
      <div id="colorLeft1" style={{ backgroundColor: colorLeft1 }}></div>
      <div id="colorCenter" style={{ backgroundColor: colorCenter }}></div>
      <div id="colorRight1" style={{ backgroundColor: colorRight1 }}></div>
      <div id="colorRight2" style={{ backgroundColor: colorRight2 }}></div>
    </div>
  );
}
