import { useRef, useEffect, useState } from "react";

export default function HiddenCanvas({ colors, savePNG, setImgData }) {
  // const { colorLeft2, colorLeft1, colorCenter, colorRight1, colorRight2 } =
  //   colors;
  const colorLeft2 = colors[0];
  const colorLeft1 = colors[1];
  const colorCenter = colors[2];
  const colorRight1 = colors[3];
  const colorRight2 = colors[4];
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = colorLeft2;
    ctx.fillRect(0, 0, 150, 500);
    ctx.fillStyle = colorLeft1;
    ctx.fillRect(150, 0, 150, 500);
    ctx.fillStyle = colorCenter;
    ctx.fillRect(300, 0, 150, 500);
    ctx.fillStyle = colorRight1;
    ctx.fillRect(450, 0, 150, 500);
    ctx.fillStyle = colorRight2;
    ctx.fillRect(600, 0, 150, 500);
    ctx.fillStyle = "#222";
    ctx.font = "20px Source Code Pro, monospace";
    ctx.fillText(colorLeft2.toUpperCase(), 30, 450);
    ctx.fillText(colorLeft1.toUpperCase(), 180, 450);
    ctx.fillText(colorCenter.toUpperCase(), 330, 450);
    ctx.fillText(colorRight1.toUpperCase(), 480, 450);
    ctx.fillText(colorRight2.toUpperCase(), 630, 450);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
    savePNG.current = saveCanvas;
  }, [draw]);

  function saveCanvas() {
    let dataURL = canvasRef.current.toDataURL();
    // strip off invalid data for saving image
    // this drove me crazy! just comment below line and it works fine!
    // dataURL = dataURL.replace("data:image/png;base64,", "");
    setImgData(dataURL);
    console.log("WHOOO!");
  }

  return (
    <canvas
      width="750"
      height="500"
      ref={canvasRef}
      style={{ display: "none" }}
    ></canvas>
  );
}
