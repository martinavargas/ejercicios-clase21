const openModal = document.querySelector('.press-button')
const modal = document.querySelector('.modal')
const buttonClose = document.querySelector('.modal-close')
const buttonCancel = document.querySelector('.modal-cancel')
const buttonAccept = document.querySelector('.modal-accept')


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal-show');
})

buttonClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
})

buttonCancel.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal-show');
})

