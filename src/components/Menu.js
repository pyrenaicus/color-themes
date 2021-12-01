import "./Menu.css";
import { useState, useEffect } from "react";
import { checkMinContrast, randomColor } from "../utils/colorUtils";
import createAnalogousTheme from "../logic/createAnalogousTheme";
import createMonochromaticTheme from "../logic/createMonochromaticTheme";
import createComplementaryTheme from "../logic/createComplementaryTheme";
import createSplitComplementaryTheme from "../logic/createSplitComplementaryTheme";
import SaveJson from "./SaveJson";

export default function Menu({
  savePNG,
  imgData,
  setThemeMethod,
  themeMethod,
  colors,
  setColors,
  randomHue,
}) {
  const [lowContrast, setLowContrast] = useState(false);
  const menuColor = "#fff";

  // check contrast between text and background color
  useEffect(() => {
    if (!checkMinContrast(menuColor, colors[0])) {
      setLowContrast(true);
    } else {
      setLowContrast(false);
    }
  }, [colors]);
  // save PNG
  function saveImage() {
    savePNG.current();
  }
  // choose btw color themes
  function themeMethodClick(themeMethod) {
    setThemeMethod(themeMethod);
    const randColor = randomColor(randomHue, 16);
    let palette;

    switch (themeMethod) {
      case "complementary":
        palette = createComplementaryTheme(randColor);
        break;
      case "splitComplementary":
        palette = createSplitComplementaryTheme(randColor);
        break;
      case "analogous":
        palette = createAnalogousTheme(randColor);
        break;
      case "monochromatic":
        palette = createMonochromaticTheme(randColor);
        break;
      default:
        palette = createComplementaryTheme(randColor);
        break;
    }

    setColors((prev) => palette);
  }

  // console.log("menuColor: " + menuColor);

  return (
    <>
      <div className="header"></div>
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul
          className={
            !lowContrast ? "sidebarMenuInner white" : "sidebarMenuInner black"
          }
        >
          <li className="menu title">color combination</li>
          <li className="menu">
            <p
              className={
                themeMethod === "splitComplementary"
                  ? "menuItem active"
                  : "menuItem"
              }
              onClick={() => themeMethodClick("splitComplementary")}
            >
              split complementary
            </p>
          </li>
          <li className="menu">
            <p
              className={
                themeMethod === "complementary" ? "menuItem active" : "menuItem"
              }
              onClick={() => themeMethodClick("complementary")}
            >
              complementary
            </p>
          </li>
          <li className="menu">
            <p
              className={
                themeMethod === "analogous" ? "menuItem active" : "menuItem"
              }
              onClick={() => themeMethodClick("analogous")}
            >
              analogous
            </p>
          </li>
          <li className="menu">
            <p
              className={
                themeMethod === "monochromatic" ? "menuItem active" : "menuItem"
              }
              onClick={() => themeMethodClick("monochromatic")}
            >
              monochromatic
            </p>
          </li>
          {/* <li className="menu">
            <p className="menuItem">
              triad
            </p>
          </li>
          <li className="menu">
            <a className="menuItem">
              tetrad
            </a>
          </li> */}
          {/* <li className="menu title">number of colors</li>
          <div id="numInput">
            <input
              type="range"
              id="numColors"
              name="numColors"
              min="3"
              max="12"
            />
          </div> */}
          <li className="menu title">export colors</li>
          <li className="menu">
            <a download="color-theme.png" href={imgData} onClick={saveImage}>
              <p className="menuItem">PNG</p>
            </a>
          </li>
          <li className="menu">
            <SaveJson colors={colors} />
          </li>
          {/* <li className="menu">
            <a className="menuItem" href="#">
              json
            </a>
          </li>
          <li className="menu">
            <a className="menuItem" href="#">
              sass
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
}
