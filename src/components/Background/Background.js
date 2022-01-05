import React, { useEffect } from "react";
import "./Background.scss";

export default function Background() {
  const handleCreateSnowflakes = () => {
    const arrSnowflakes = [];

    for (let row = 0; row < window.innerHeight; row += 60) {
      for (let colum = 0; colum < window.innerWidth; colum++) {
        let size = Math.floor(Math.random() * 10);

        arrSnowflakes.push(
          <div
            className="snowflake"
            style={{
              left: `${colum * 30}px`,
              top: `${Math.floor(Math.random() * 50 + row)}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: `${Math.random()}`,
            }}
          ></div>
        );
      }
    }

    return arrSnowflakes;
  };

  return <div className="background">{handleCreateSnowflakes()}</div>;
}
