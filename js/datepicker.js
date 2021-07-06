let datepickersArr = [...document.querySelectorAll(".search__form.date")];
console.log(datepickersArr);

datepickersArr.forEach((elem) => {
  let picker = elem.querySelector(".date__input");
  let img = elem.querySelector("img");
  elem.classList.contains("ff__date") ? (elem.style.display = "none") : "";
  if (navigator.userAgent.indexOf("Firefox") !== -1) {
    elem.classList.contains("ff__date")
      ? (elem.style.display = "block")
      : (elem.style.display = "none");
  }
  picker.addEventListener("click", (e) => {
    picker.focus();
  });
  picker.addEventListener("focus", () => {
    picker.classList.add("focused");
    picker.classList.add("active");
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      img.style.display = "none";
      picker.setAttribute("type", "date");
    }
  });
});

