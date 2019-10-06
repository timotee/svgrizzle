function anchorPoint(spec) {
  const el = document.createElement("div");
  const { x, y } = spec;

  el.style.position = "absolute";
  el.style.height = 8 + "px";
  el.style.width = 8 + "px";
  el.style.top = y + "px";
  el.style.left = x + "px";
  el.style.backgroundColor = "#dd3";
  el.style.cursor = "pointer";

  el.addEventListener("click", function() {
    console.log(this);
  });

  return el;
}

export default anchorPoint;
