const wrappers = [...document.querySelectorAll(".main__content__wrap")];

wrappers.forEach((wrapper) => {
  const tableRows = [...wrapper.querySelectorAll(".table__row__wrapper")];
  const mobTableRows = [...wrapper.querySelectorAll(".mobile__table__row")];
  const pageSizeSelector = wrapper.querySelector(".quantity");
  const pageSelector = wrapper.querySelector(".page__num__btn");

  if (tableRows.length && mobTableRows.length) {
    tableRows.shift();

    changePageSize(tableRows, 6);
    changePageSize(mobTableRows, 6);
    changePage(tableRows, 6, 1);
    changePage(mobTableRows, 6, 1);

    pageSizeSelector.addEventListener("change", (e) => {
      let pageSize = e.target.value;
      changePageSize(tableRows, pageSize);
      changePageSize(mobTableRows, pageSize);
    });

    pageSelector.addEventListener("change", (e) => {
      let pageSize = pageSizeSelector.value;
      changePage(tableRows, pageSize, +e.target.value);
      changePage(mobTableRows, pageSize, +e.target.value);
    });
  }

  function changePageSize(arr, pageSize) {
    arr.forEach((elem) => {
      let elemIndex = arr.indexOf(elem);
      if (elemIndex >= pageSize) {
        arr[elemIndex].style.display = "none";
      } else {
        arr[elemIndex].style.display = "block";
      }
    });
  }

  function changePage(arr, pageSize, currentPage) {
    let pages = Math.ceil(arr.length / pageSize);
    if (currentPage > pages) {
      currentPage = pages;
    }
    let max = pageSize * currentPage;
    let min = max - pageSize;
    arr.forEach((elem) => {
      let elemIndex = arr.indexOf(elem);
      if (elemIndex >= min && elemIndex < max) {
        arr[elemIndex].style.display = "block";
      } else {
        arr[elemIndex].style.display = "none";
      }
    });
  }
});
