function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorSpanEl = document.querySelector("span.color");
const colorBattonEl = document.querySelector("button.change-color");

colorBattonEl.addEventListener("click", oncolorBattonClick);

function oncolorBattonClick() {
    colorSpanEl.textContent = getRandomHexColor();
    document.body.style.backgroundColor = colorSpanEl.textContent;
}