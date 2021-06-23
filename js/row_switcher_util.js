const rowWrappers = [
  ...document.querySelectorAll(".table__row__wrapper"),
  ...document.querySelectorAll(".mobile__table__row"),
];

rowWrappers.forEach((wrapper) => {
  let switchBtn = wrapper.querySelector(".plus__btn");
  if (switchBtn) {
    switchBtn.addEventListener("click", () => {
      wrapper.classList.toggle("active");
    });
  }
});
