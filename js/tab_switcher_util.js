const tabSwitchBlock = document.querySelector(".tabs__switch__block");
const dropDownBlock = document.querySelector(".custom__select__block");

const tabs = [...tabSwitchBlock.querySelectorAll(".content__tab")];
const dropDownTabs = [...dropDownBlock.querySelectorAll(".content__tab")];
const mainContentWrappers = [...document.querySelectorAll(".main__content__wrap")];

function switchContentWrapper(tabsArr) {
  tabsArr.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabsArr.forEach((el) => {
        el.classList.remove("active");
      });
      tab.classList.add("active");
      let index = tabsArr.indexOf(tab);
      mainContentWrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });
      mainContentWrappers[index].classList.add("active");
    });
  });
}

switchContentWrapper(tabs);

if (dropDownTabs) {
  switchContentWrapper(dropDownTabs);
}
