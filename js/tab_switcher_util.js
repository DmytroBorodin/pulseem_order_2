const tabs = [...document.querySelectorAll(".content__tab")];
const mainContentWrappers = [...document.querySelectorAll(".main__content__wrap")];

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((el) => {
      el.classList.remove("active");
    });
    tab.classList.add("active");
    let index = tabs.indexOf(tab);
    mainContentWrappers.forEach((wrapper) => {
      wrapper.classList.remove("active");
    });
    mainContentWrappers[index].classList.add("active");
  });
});
