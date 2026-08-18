const futureSpan = document.querySelector(".future");
const maskText = document.querySelector("#future-mask-text");
const main = document.querySelector("main");

function positionMask() {
  const spanRect = futureSpan.getBoundingClientRect();
  const mainRect = main.getBoundingClientRect();

  const fontSize = parseFloat(getComputedStyle(futureSpan).fontSize);
  const x = spanRect.left - mainRect.left + spanRect.width / 2;
  const y = spanRect.top - mainRect.top + fontSize * 0.78;

  maskText.setAttribute("x", x.toFixed(1));
  maskText.setAttribute("y", y.toFixed(1));
  maskText.setAttribute("font-size", fontSize);
  maskText.setAttribute("letter-spacing", "-5px");
}

positionMask();
window.addEventListener("resize", positionMask);