import React from "react";
import "./Tree.scss";

export default function Tree() {
  return (
    <div className="tree-container">
      <div className="tree">
        <div className="leaves small"></div>
        <div className="leaves medium"></div>
        <div className="leaves large"></div>
        <div className="log"></div>
      </div>
    </div>
  );
}
