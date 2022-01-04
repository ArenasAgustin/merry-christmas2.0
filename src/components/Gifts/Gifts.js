import React from "react";
import './Gifts.scss';

export default function Gifts({ offsetX, color }) {
  return (
    <div
      className="gift"
      style={{ "--offset-x": `${offsetX}`, "--color": `${color}` }}
    ></div>
  );
}
