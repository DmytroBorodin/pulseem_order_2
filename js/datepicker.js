let datapickersArr = [...document.querySelectorAll(".date__input__wrapper")];
let wkBlock = document.querySelector(".wk__date__block");
let ffBlock = document.querySelector(".ff__date__block");

datapickersArr.forEach((elem) => {
  let picker = elem.querySelector(".date__input");
  picker.addEventListener("click", (e) => {
    picker.focus();
  });
  picker.addEventListener("focus", () => {
    picker.classList.add("focused");
    picker.classList.add("active");
  });
});

if (navigator.userAgent.indexOf("Firefox") !== -1) {
  wkBlock.style.display = "none";
  ffBlock.style.display = "flex";
  datapickersArr.forEach((elem) => {
    let img = elem.querySelector("img");
    let picker = elem.querySelector(".date__input");
    picker.addEventListener("click", (e) => {
      picker.focus();
    });
    picker.addEventListener("focus", () => {
      img.style.display = "none";
      picker.classList.add("active");
      picker.setAttribute("type", "date");
    });
  });
}
