const tableRows = [...document.querySelectorAll(".table__row__wrapper")];
const mobTableRows = [...document.querySelectorAll(".mobile__table__row")];
const pageSizeSelector = document.querySelector(".quantity");
const pageSelector = document.querySelector(".page__num__btn");

tableRows.shift();

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
  let pages = arr.length / pageSize;
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
