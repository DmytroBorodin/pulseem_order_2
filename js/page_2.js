let buttons = document.querySelector('.buttons');
let buttonsArr = [...document.querySelectorAll('.page__btn')];

buttonsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		buttonsArr.forEach(item => {
			item.classList.remove('active');
		})
		btn.classList.add('active');
	})
});

let showHiddenRowBtn = document.querySelector('.show__hidden');

let hiddenRowArr = [...document.querySelectorAll('.hide')];

showHiddenRowBtn.addEventListener('click', () => {
	hiddenRowArr.forEach(item => {
		item.classList.toggle('hide');
		if (!item.classList.contains('hide')) {
			showHiddenRowBtn.classList.add('active');
			item.scrollIntoView();
		}else if (item.classList.contains('hide')) {
			showHiddenRowBtn.classList.remove('active');
		}
	})
})