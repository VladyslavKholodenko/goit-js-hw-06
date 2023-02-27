const refs = {
    controlsEl: document.querySelector("#controls"),
    controlsInputEl: document.querySelector("#controls > input"),
    buttonCreateEl: document.querySelector("#controls button[data-create]"),
    buttonDestroyEl: document.querySelector("#controls button[data-destroy]"),
    boxesEl: document.querySelector("#boxes"),
};

refs.buttonCreateEl.addEventListener("click", getAmount);
refs.buttonDestroyEl.addEventListener("click", onbuttonDestroyClick);

function getAmount(event) {
    const currentValue = refs.controlsInputEl.value;
    createBoxes(currentValue);
}

function createBoxes(amount) {
    const result = [];
    const startSize = 30;

for (let i = 0; i < amount; i += 1) {
    let newBox = document.createElement("div");
    let width = startSize + i * 10;
    let height = startSize + i * 10;

    newBox.style.height = height + "px";
    newBox.style.width = width + "px";
    newBox.style.backgroundColor = getRandomHexColor();
result.push(newBox);
}

refs.boxesEl.append(...result);
}

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onbuttonDestroyClick(element) {
refs.boxesEl.innerHTML = "";
}
