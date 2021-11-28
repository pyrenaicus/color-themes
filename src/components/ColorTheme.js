import "./ColorTheme.css";

export default function ColorTheme({ colors }) {
  const colorLeft2 = colors[0];
  const colorLeft1 = colors[1];
  const colorCenter = colors[2];
  const colorRight1 = colors[3];
  const colorRight2 = colors[4];

  return (
    <div className="container">
      <div class="color" style={{ backgroundColor: colorLeft2 }}>
        <p className="hexCode">{colors[0]}</p>
        {/* <p className="info">info</p> */}
      </div>
      <div class="color" style={{ backgroundColor: colorLeft1 }}>
        <p className="hexCode">{colors[1]}</p>
      </div>
      <div class="color" style={{ backgroundColor: colorCenter }}>
        <p className="hexCode">{colors[2]}</p>
      </div>
      <div class="color" style={{ backgroundColor: colorRight1 }}>
        <p className="hexCode">{colors[3]}</p>
      </div>
      <div class="color" style={{ backgroundColor: colorRight2 }}>
        <p className="hexCode">{colors[4]}</p>
      </div>
    </div>
  );
}
