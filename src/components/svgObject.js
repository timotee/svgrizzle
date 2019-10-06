function svgObject(spec) {
  const { x, y } = spec;

  const svgWrapper = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  svgWrapper.setAttribute("width", "1");
  svgWrapper.setAttribute("height", "1");

  svgWrapper.style.position = "absolute";
  svgWrapper.style.left = x + "px";
  svgWrapper.style.top = y + "px";

  const svgRect = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "rect"
  );

  svgRect.setAttribute("width", "1");

  svgRect.setAttribute(
    "style",
    "fill:rgb(0,0,255);stroke-width:0;stroke:rgb(0,0,0)"
  );

  svgWrapper.append(svgRect);

  function getElement() {
    return svgWrapper;
  }

  function setHeight(height) {
    svgRect.setAttribute("height", height.toString());
  }

  function getHeight() {}

  function updateHeight(height) {
    const h = height - y;
    if (h > 0) {
      svgWrapper.setAttribute("height", h.toString());
      const rect = svgWrapper.querySelector("rect");
      rect.setAttribute("height", h.toString());
    }
  }

  function updateWidth(width) {
    const w = width - x;
    if (w > 0) {
      svgWrapper.setAttribute("width", w.toString());
      const rect = svgWrapper.querySelector("rect");
      rect.setAttribute("width", w.toString());
    }
  }

  return Object.freeze({
    getElement,
    updateHeight,
    updateWidth
  });
}

export default svgObject;
