import "./Menu.css";
import { useState } from "react";

export default function Menu({ savePNG, imgData, setThemeMethod }) {
  const [activeMenu, setActiveMenu] = useState("complementary");
  function saveImage() {
    savePNG.current();
    console.log(savePNG.current);
  }
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
        <ul className="sidebarMenuInner">
          <li className="menu title">color combination</li>
          <li className="menu">
            <a
              className="menuItem"
              href="#"
              onClick={() => setThemeMethod("splitComplementary")}
            >
              split complementary
            </a>
          </li>
          <li className="menu">
            <a
              className="menuItem"
              href="#"
              onClick={() => setThemeMethod("complementary")}
              // {activeMenu && className='activeMenu'}
            >
              complementary
            </a>
          </li>
          <li className="menu">
            <a
              className="menuItem"
              href="#"
              onClick={() => setThemeMethod("analogous")}
            >
              analogous
            </a>
          </li>
          <li className="menu">
            <a
              className="menuItem"
              href="#"
              onClick={() => setThemeMethod("monochromatic")}
            >
              monochromatic
            </a>
          </li>
          <li className="menu">
            <a className="menuItem" href="#">
              triad
            </a>
          </li>
          <li className="menu">
            <a className="menuItem" href="#">
              tetrad
            </a>
          </li>
          <li className="menu title">number of colors</li>
          <div id="numInput">
            <input
              type="range"
              id="numColors"
              name="numColors"
              min="3"
              max="12"
            />
          </div>
          <li className="menu title">export colors</li>
          <li className="menu">
            <a
              className="menuItem"
              download="color-theme.png"
              href={imgData}
              onClick={saveImage}
            >
              png
            </a>
          </li>
          <li className="menu">
            <a className="menuItem" href="#">
              json
            </a>
          </li>
          <li className="menu">
            <a className="menuItem" href="#">
              sass
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
