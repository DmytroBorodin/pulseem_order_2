let customSelectBlock = document.querySelectorAll(".custom__select__block");

function changeSelectTitle(option, customTitleElement, optionsBlock = null) {
  option.addEventListener("click", () => {
    if (option.classList.contains("content__tab")) {
      let tabName = option.querySelector(".tab__name");
      customTitleElement.innerText = tabName.innerText;
      optionsBlock.style.transform = "scaleY(0)";
    } else {
      let title = customTitleElement.innerText;
      customTitleElement.innerText = option.innerText;
      option.innerText = title;
    }
  });
}

customSelectBlock.forEach((block) => {
  let customOptions = [...block.querySelectorAll(".custom__option")];
  let contentTabs = [...block.querySelectorAll(".content__tab")];
  let customTitleElement = block.querySelector(".custom__title");
  let customOptionsBlock = block.querySelector(".custom__options__block");
  let label = block.querySelector("label");
  if (label) {
    block.addEventListener("click", () => {
      block.classList.add("focused");
      label.classList.add("focused");
    });
  }

  customOptions.forEach((option) => {
    changeSelectTitle(option, customTitleElement);
  });

  if (block.getAttribute("id") === "dropdown_menu") {
    block.addEventListener("mouseover", () => {
      customOptionsBlock.style.transform = "scaleY(1)";
    });
  }

  if (contentTabs) {
    contentTabs.forEach((option) => {
      changeSelectTitle(option, customTitleElement, customOptionsBlock);
    });
  }
});
