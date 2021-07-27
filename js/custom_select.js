let customSelectBlock = document.querySelectorAll(".custom__select__block");

customSelectBlock.forEach((block) => {
  let customOptions = [...block.querySelectorAll(".custom__option")];
  let customTitleElement = block.querySelector(".custom__title");
  customOptions.forEach((option) => {
    option.addEventListener("click", () => {
      let title = customTitleElement.innerText;
      customTitleElement.innerText = option.innerText;
      option.innerText = title;
    });
  });
});
