import { qs } from "../lib/dom";
import svgObject from "./svgObject";

function svGrizzle() {
  const ctx = qs("body");
  let svg = "";
  let drawing = false;
  const gridSize = 8;

  ctx.addEventListener("mousedown", onMouseDownHandler);
  ctx.addEventListener("mousemove", onMouseMoveHandler);
  ctx.addEventListener("mouseup", onMouseUpHandler);

  function onMouseDownHandler(e) {
    e.preventDefault();

    if (!drawing) {
      const offsetX = e.clientX % gridSize;
      const offsetY = e.clientY % gridSize;

      svg = svgObject({ x: e.clientX - offsetX, y: e.clientY - offsetY });
      addSVGObject(svg);
      drawing = !drawing;
    }
  }

  function onMouseMoveHandler(e) {
    e.preventDefault();

    if (drawing) {
      const offsetX = e.clientX % gridSize;
      const offsetY = e.clientY % gridSize;

      if (e.clientY % gridSize === 0) {
        svg.updateHeight(e.clientY - offsetY);
      }
      if (e.clientX % gridSize === 0) {
        svg.updateWidth(e.clientX - offsetX);
      }
    }
  }

  function onMouseUpHandler(e) {
    e.preventDefault();

    drawing = false;
  }

  function addSVGObject(obj) {
    ctx.append(obj.getElement());
  }
}

export default svGrizzle;

/**
 * 1. SVG
 */

function svgShape() {
  const svgContainer = svgContainer();
  const shapes = [];
  const selectionInterface = selectionInterface(); // Element that represents 'selection'
}

function svgRect(spec) {
  const { coordsA, coordsB, coordsC, coordsD } = spec;
  const { x, y, width, height, rx, ry, style } = spec;
}

function svgCircle(spec) {
  const { cx, cy, r, pathLength, style } = spec;
}

function svgPolyline(spec) {
  const { points, style } = spec;
}

function svgContainer(spec) {
  const { x, y, width, height, preserveAspectRatio, viewBox } = spec;
  const shapes = [];
}

function selectionInterface() {}
