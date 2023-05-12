const counter = document.querySelector("#counter");
const valueEl = counter.querySelector("#value");
const minusBtn = counter.querySelector('[data-action="decrement"]');
const plusBtn = counter.querySelector('[data-action="increment"]');
let counterValue = 0;

minusBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
plusBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
