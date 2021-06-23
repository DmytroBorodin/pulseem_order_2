let datapickersArr = [...document.querySelectorAll(".date__input__wrapper")];

datapickersArr.forEach((elem) => {
  let img = elem.querySelector("img");
  let picker = elem.querySelector(".date__input");
  picker.addEventListener("click", (e) => {
    picker.focus();
    img.style.display = "none";
  });
  picker.addEventListener("focus", () => {
    picker.classList.add("active");
    picker.setAttribute("type", "date");
  });
  picker.addEventListener("blur", () => {
    picker.setAttribute("type", "text");
    img.style.display = "block";
  });
});
