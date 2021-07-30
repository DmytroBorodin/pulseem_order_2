const inputContainers = [...document.querySelectorAll(".input__container")];

if (localStorage.getItem("inputData")) {
  let inputData = JSON.parse(localStorage.getItem("inputData"));
  console.log(inputData);
  for (let i = 0; i < inputData.length; i++) {
    let id = inputData[i].inputId;
    for (let j = 0; j < inputContainers.length; j++) {
      if (id === j) {
        let input = inputContainers[j].querySelector("input");
        input.value = inputData[i].inputVal;
      }
    }
  }
}

let inputValuesArr = [];

inputContainers.forEach((inputContainer) => {
  const input = inputContainer.querySelector("input");
  const label = inputContainer.querySelector("label");
  const customSelectBlock = inputContainer.querySelector(".custom__select__block");
  let inputObj = {};

  if (input) {
    inputObj = {
      inputId: inputContainers.indexOf(inputContainer),
      inputVal: input.value ? input.value : null,
    };
    inputValuesArr.push(inputObj);
    input.addEventListener("input", (e) => {
      label.classList.add("focused");
      input.classList.add("focused");
    });
    input.addEventListener("focusout", (e) => {
      if (!Array.isArray(inputValuesArr)) {
        inputValuesArr = JSON.parse(inputValuesArr);
      }
      inputValuesArr[inputContainers.indexOf(inputContainer)].inputVal = e.target.value;
      console.log(inputValuesArr);
      inputValuesArr = JSON.stringify(inputValuesArr);
      localStorage.setItem("inputData", inputValuesArr);
      if (!e.target.value) {
        label.classList.remove("focused");
        input.classList.remove("focused");
      }
    });
  } else if (customSelectBlock) {
    customSelectBlock;
  }
});

const datepickers = document.querySelectorAll(".search__form");

datepickers.forEach((datepicker) => {
  datepicker.classList.add("mobile__true");
  if (navigator.userAgent.indexOf("Firefox") !== -1) {
    datepicker.classList.contains("wk__date") ? datepicker.classList.remove("mobile__true") : "";
  } else {
    datepicker.classList.contains("ff__date") ? datepicker.classList.remove("mobile__true") : "";
  }
});
