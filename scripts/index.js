import Card from './Card.js'
import FormValidator from './FormValidator.js'
import { initialCards, cardTemplateConfig, formValidationConfig } from './constants.js'

//const template = document.querySelector('#template').content.querySelector('.element')

const cardsContainer = document.querySelector('.elements__grid')

const formEdit = document.forms['form_edit']
const formAdd = document.forms['form_add']

const editBtn = document.querySelector('.profile__edit-button')
const editUserModal = document.querySelector('.popup_type_edit-user')

const addBtn = document.querySelector('.profile__add-button')
const addCardModal = document.querySelector('.popup_type_add-card')

//const closeButtons = document.querySelectorAll('.popup__btn-close')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const nameInput = document.querySelector('.popup__form_type_name')
const aboutInput = document.querySelector('.popup__form_type_about')

// const zoomImg = document.querySelector('.popup__zoomCont-image')
// const zoomHeader = document.querySelector('.popup__zoomCont-header')
// const imageBtn = document.querySelector('.popup_type_zoom-image')

const inputName = document.querySelector('.popup__form_type_place')
const inputLink = document.querySelector('.popup__form_type_place-link')

const popupList = document.querySelectorAll('.popup');
const formList = document.querySelectorAll('.form')


//функция ОТКРЫТИЯ модальных окон
const openModal = (popup) => {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape)
}

//функция отрисовки карточки методом prepend()
const renderCard = (dataCard) => {
  const card = new Card(dataCard, cardTemplateConfig.templateSelector, openModal)
  cardsContainer.prepend(card.generateCard(dataCard))
}

//итерация каждого элемента массива
// initialCards.forEach((dataCard) => {
//   renderCard(dataCard)
// })
initialCards.forEach(renderCard)

// function resetForms() {
//   formList.forEach(form => form.reset())
// }

const formValidatorForEditForm = new FormValidator(formValidationConfig, formEdit)
formValidatorForEditForm.enableValidation()

const formValidatorForAddForm = new FormValidator(formValidationConfig, formAdd)
formValidatorForAddForm.enableValidation()

//слушатели 'click' для modal open
editBtn.addEventListener('click', () => {
  //resetForms()
  formEdit.reset()
  nameInput.value = profileName.textContent
  aboutInput.value = profileDescription.textContent
  openModal(editUserModal)

  formValidatorForEditForm.resetValidation()
})


addBtn.addEventListener('click', () => {
  //resetForms()
  formAdd.reset()
  openModal(addCardModal)

  formValidatorForAddForm.resetValidation()
})

//функция ЗАКРЫТИЯ модальных окон
const closeModal = (popup) => {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape)
}

popupList.forEach(popup => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closeModal(popup)
    }
    else if (evt.target.classList.contains('popup__btn-close')) {
      closeModal(popup)
    }
  })
})

//функция-обработчик 'submit' для editUser
const handleSubmitEditUser = (evt) => {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = aboutInput.value

  closeModal(editUserModal)
}

//слушатель 'submit' для editUser
formEdit.addEventListener('submit', handleSubmitEditUser);

//функция-обработчик 'submit' для addCard
const handleSubmitAddCard = (evt) => {
  evt.preventDefault()
  renderCard({name: inputName.value, link: inputLink.value})
  evt.target.reset()

  closeModal(addCardModal)
}

//слушатель 'submit' для addCard
formAdd.addEventListener('submit', handleSubmitAddCard)

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedModal = document.querySelector('.popup_opened')
    closeModal(openedModal)
  }
}