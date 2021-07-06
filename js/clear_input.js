let cleanBtns = [...document.querySelectorAll(".clean__btn")];
let searchBtns = [...document.querySelectorAll(".search__btn")];
let searchForms = [...document.querySelectorAll(".search__form")];
searchBtns.forEach((searchBtn) => {
  let index = searchBtns.indexOf(searchBtn);
  searchBtn.addEventListener("click", () => {
    cleanBtns[index].classList.add("active");
  });

  cleanBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      searchForms.forEach((elem) => {
        let picker = elem.querySelector("input");
        picker.value = "";
        picker.classList.remove("focused");
        if (navigator.userAgent.indexOf("Firefox") !== -1) {
          let img = elem.querySelector("img");
          if (img) {
            img.style.display = "block";
          }
          picker.setAttribute("type", "text");
        }
      });
    });
  });
});
