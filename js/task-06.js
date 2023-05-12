const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value.trim();
  const inputLength = parseInt(input.dataset.length, 10);

  if (inputValue.length === inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
