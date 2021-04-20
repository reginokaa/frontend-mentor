let button = document.querySelector('.btn-share')

button.addEventListener('click', function () {
	let popUp = document.querySelector('.share-popup')

	popUp.classList.toggle('popup-open')
})
