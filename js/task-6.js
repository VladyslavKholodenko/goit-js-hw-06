const inputEl = document.querySelector("#validation-input");

const dataAtributeLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", oninputElBlur);

function oninputElBlur(event) {
  const elementInputLength = event.currentTarget.value.trim().length;
  if (elementInputLength === dataAtributeLength) {
    classinvalidRemove(event);
    classValidAdd(event);
  } else {
    classValidRemove(event);
    classinvalidAdd(event);
  }
}

function classValidAdd(event) {
  event.currentTarget.classList.add("valid");
}

function classValidRemove(event) {
  event.currentTarget.classList.remove("valid");
}

function classinvalidAdd(event) {
  event.currentTarget.classList.add("invalid");
}

function classinvalidRemove(event) {
  event.currentTarget.classList.remove("invalid");
}