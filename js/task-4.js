const decrementBtn = document.querySelector('button[data-action="decrement"]');
const counterEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
counterValue -= 1;
counterEl.textContent = counterValue;
}

function onIncrementBtnClick() {
counterValue += 1;
counterEl.textContent = counterValue;
}