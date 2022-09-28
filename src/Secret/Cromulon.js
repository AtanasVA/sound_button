import React from "react";
import "./Cromulon.css";
// import Cromulon from "./img/pngegg.png";

const Cromulon = () => {
  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const anchor = document.getElementById("anchor");
    const rect = anchor.getBoundingClientRect();

    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    const eyes = document.querySelectorAll(".eye");
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    });
  });

  return (
    <>
      <div id="cromulon">
        <img id="anchor" src={require("./img/pngegg.png")} />
        <div id="eyes">
          <img className="eye" id="eye1" src={require("./img/eye4.png")} />
          <img className="eye" id="eye2" src={require("./img/eye4.png")} />
        </div>
      </div>
    </>
  );
};

export default Cromulon;
