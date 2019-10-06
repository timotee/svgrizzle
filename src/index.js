import _ from "lodash";
import "./style.scss";
import { qs } from "./lib/dom";

import svgObject from "./components/svgObject";
import svGrizzle from "./components/svGrizzle";
import svGrabstah from "./components/svGrabstah";
import anchorPoint from "./components/anchorPoint";
function app() {
  const body = qs("body");
  const el = document.createElement("div");
  el.style.position = "absolute";
  el.style.top = "100px";
  el.style.left = "100px";
  el.style.width = "100px";
  el.style.left = "100px";

  const points = [
    {
      x: 80,
      y: 80
    },
    {
      x: 160,
      y: 80
    },
    {
      x: 160,
      y: 160
    },
    {
      x: 80,
      y: 160
    }
  ];

  points.forEach(function(point) {
    const p = anchorPoint(point);
    body.append(p);
  });
}

app();

// document.body.appendChild(app());
/*

1. Click - Add element (x, y, w, h)
2. Drag to resize


 */
