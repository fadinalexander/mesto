import Card from './Card.js'
import FormValidator from './FormValidator.js'

const template = document.querySelector('#template').content.querySelector('.element')

const cardsContainer = document.querySelector('.elements__grid')

const formEdit = document.forms['form_edit']
const formAdd = document.forms['form_add']

const editBtn = document.querySelector('.profile__edit-button')
const editUserModal = document.querySelector('.popup_type_edit-user')

const addBtn = document.querySelector('.profile__add-button')
const addCardModal = document.querySelector('.popup_type_add-card')

const closeButtons = document.querySelectorAll('.popup__btn-close')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const nameInput = document.querySelector('.popup__form_type_name')
const aboutInput = document.querySelector('.popup__form_type_about')

const zoomImg = document.querySelector('.popup__zoomCont-image')
const zoomHeader = document.querySelector('.popup__zoomCont-header')
const imageBtn = document.querySelector('.popup_type_zoom-image')

const inputName = document.querySelector('.popup__form_type_place')
const inputLink = document.querySelector('.popup__form_type_place-link')

const popupList = document.querySelectorAll('.popup');
const formList = document.querySelectorAll('.form')


//функция для открытия модального окна по клику на картинку
const handleClickImageModal = (dataCard) => {
  const imgSrc = dataCard.getAttribute('src')
  const imgAlt = dataCard.getAttribute('alt')

  zoomImg.setAttribute('src', imgSrc)
  zoomImg.setAttribute('alt', imgAlt)
  zoomHeader.textContent = imgAlt
 
  openModal(imageBtn)
}


// функция для кнопки deleteBtn
const handleClickDeleteCard = (evt) => {
  evt.target.closest('.element').remove()
}


//функция для кнопки likeBtn
const handleClickLikeCard = (evt) => {
  evt.target.classList.toggle('element__like-button_active')
}


//функция генерации карточки
const generateCard = (dataCard) => {
  const newCard = template.cloneNode(true)

  const imgLink = newCard.querySelector('.element__img')
  const imgName = newCard.querySelector('.element__description')
  imgName.textContent = dataCard.name
  imgLink.src = dataCard.link
  imgLink.alt = dataCard.name
  
  imgLink.addEventListener('click', () => handleClickImageModal(imgLink))
  
  const deleteBtn = newCard.querySelector('.element__delete-button')
  deleteBtn.addEventListener('click', handleClickDeleteCard)
  
  const likeBtn = newCard.querySelector('.element__like-button')
  likeBtn.addEventListener('click', handleClickLikeCard)

  return newCard
}


//функция отрисовки карточки методом prepend()
const renderCard = (dataCard) => {
  cardsContainer.prepend(generateCard(dataCard))
}


//итерация каждого элемента массива
//Если внутри безымянной (стрелочной) функции вызывается одна функция с точно такими же аргументами, то эта безымянная функция не нужна. Это лишняя обертка вокруг самой функции, которую можно использовать просто сразу в коде
// initialCards.forEach((dataCard) => {
//   renderCard(dataCard)
// })
initialCards.forEach(renderCard)


//функция ОТКРЫТИЯ модальных окон
const openModal = (popup) => {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closeByEscape)
}


function resetForms() {
  formList.forEach(form => form.reset())
}


//слушатели 'click' для modal open
editBtn.addEventListener('click', () => {
  resetForms()
  nameInput.value = profileName.textContent
  aboutInput.value = profileDescription.textContent
  openModal(editUserModal)
  resetValidation(editUserModal, formValidationConfig)
})


addBtn.addEventListener('click', () => {
  resetForms()
  openModal(addCardModal)
  resetValidation(addCardModal, formValidationConfig)
})


//функция ЗАКРЫТИЯ модальных окон
const closeModal = (popup) => {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape)
}


//слушатели 'click' для modal close
// closeButtons.forEach((item) => {
//   const modal = item.closest('.popup')
//   item.addEventListener('click', () => closeModal(modal))
// })

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


//закрытие всех модальных окон при клике на overlay
// popupList.forEach(popup => {
//   popup.addEventListener('mousedown', handleOverlayClick)
//   document.addEventListener('keydown', handleOverlayClick)
// })


// function handleOverlayClick(evt) {
//   popupList.forEach(popup => {
//     if (evt.target === evt.currentTarget || evt.key === 'Escape') {
//       popup.classList.remove('popup_opened')
//     }
//   })
// }

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedModal = document.querySelector('.popup_opened')
    closeModal(openedModal)
  }
}