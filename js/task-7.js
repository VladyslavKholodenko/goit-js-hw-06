const inputEl = document.querySelector("input#font-size-control");
const spanEl = document.querySelector("span#text");

inputEl.addEventListener("input", onInputElChange);

function onInputElChange(event) {
    spanEl.style.fontSize = event.currentTarget.value + "px";
}
