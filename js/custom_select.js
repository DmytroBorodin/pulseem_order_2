const customOptions = [...document.querySelectorAll(".custom__option")];
let customTitleElement = document.querySelector(".custom__title");

customOptions.forEach((option) => {
  option.addEventListener("click", () => {
    let title = customTitleElement.innerText;
    customTitleElement.innerText = option.innerText;
    option.innerText = title;
  });
});
