import "./ColorTheme.css";

export default function ColorTheme({ colors }) {
  const colorBar = colors.map((color) => (
    <div className="color" style={{ backgroundColor: color }} key={color}>
      <p className="hexCode">{color}</p>
    </div>
  ));
  return <div className="container">{colorBar}</div>;
}
