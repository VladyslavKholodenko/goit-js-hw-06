const categoryEl = document.querySelector("#categories");
const amountEl = categoryEl.children.length;
console.log(`Number of categories: ${amountEl}`);

const textListEl = document.querySelectorAll("li > ul");
const finalResultEl = textListEl.forEach((item) => {
    const names = item.previousElementSibling.textContent;
        console.log(`Category: ${names}`);
    const length = item.children.length;
        console.log(`Elements: ${length}`);
});