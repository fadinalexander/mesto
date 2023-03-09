//DOM узлы

const template = document.querySelector('#template').content.querySelector('.element')

const cardsContainer = document.querySelector('.elements__grid')

const formEdit = document.querySelector('.form_edit')
const formAdd = document.querySelector('.form_add')


const editBtn = document.querySelector('.profile__edit-button')
const editUserModal = document.querySelector('.popup_type_edit-user')

const addBtn = document.querySelector('.profile__add-button')
const addCardModal = document.querySelector('.popup_type_add-card')

const closeModals = document.querySelectorAll('.popup__btn-close')

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
const handleClickImageModal = (evt) => {
 
  const imgSrc = evt.target.getAttribute('src')
  const imgAlt = evt.target.getAttribute('alt')

  zoomImg.setAttribute('src', imgSrc)
  zoomImg.setAttribute('alt', imgAlt)
  zoomHeader.textContent = imgAlt
 
  

  handleClickModalOpen(imageBtn)
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
  
  imgLink.addEventListener('click', handleClickImageModal)
  
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
initialCards.forEach((dataCard) => {
  renderCard(dataCard)
})


//функция ОТКРЫТИЯ модальных окон
const handleClickModalOpen = (popup) => {
  resetValidation(addCardModal, formValidationConfig)
  resetValidation(editUserModal, formValidationConfig)
  popup.classList.add('popup_opened')

}

function formReset() {
  formList.forEach(form => form.reset())
}


formReset()
//слушатели 'click' для modal open
editBtn.addEventListener('click', () => {
  formReset()
  nameInput.value = profileName.textContent
  aboutInput.value = profileDescription.textContent
  handleClickModalOpen(editUserModal)

})
addBtn.addEventListener('click', () => {
  formReset()
  handleClickModalOpen(addCardModal)
})

//функция ЗАКРЫТИЯ модальных окон
const handleClickModalClose = (popup) => {
  popup.classList.remove('popup_opened')
}

//слушатели 'click' для modal close
closeModals.forEach((item) => {
  const modal = item.closest('.popup')
  item.addEventListener('click', () => handleClickModalClose(modal))
})

//функция-обработчик 'submit' для editUser
const handleSubmitEditUser = (evt) => {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = aboutInput.value

  handleClickModalClose(editUserModal)
}
//слушатель 'submit' для editUser
formEdit.addEventListener('submit', handleSubmitEditUser);

//функция-обработчик 'submit' для addCard
const handleSubmitAddCard = (evt) => {
  evt.preventDefault()
  renderCard({name: inputName.value, link: inputLink.value})
  evt.target.reset()

  handleClickModalClose(addCardModal)
}
//слушатель 'submit' для addCard
formAdd.addEventListener('submit', handleSubmitAddCard)

//закрытие всех модальных окон при клике на overlay
popupList.forEach(popup => {
  popup.addEventListener('click', handleOverlayClick)
  document.addEventListener('keydown', handleOverlayClick)
})

function handleOverlayClick(evt) {
  popupList.forEach(popup => {
    if (evt.target === evt.currentTarget || evt.key === 'Escape') {
      popup.classList.remove('popup_opened')
    }
  })
}
