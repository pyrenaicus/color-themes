import "./ColorTheme.css";

export default function ColorTheme({ colors }) {
  const colorLeft2 = colors[0];
  const colorLeft1 = colors[1];
  const colorCenter = colors[2];
  const colorRight1 = colors[3];
  const colorRight2 = colors[4];

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
