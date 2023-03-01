const initialCards = [
  {
    name: 'Карелия',
    link: 'https://images.unsplash.com/photo-1609800971317-05898953d4f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8JUQwJUJBJUQwJUIwJUQxJTgwJUQwJUI1JUQwJUJCJUQwJUI4JUQxJThGfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Сочи',
    link: 'https://images.unsplash.com/photo-1612274059446-5c480106b1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUQwJUIwJUQwJUI0JUQwJUJCJUQwJUI1JUQxJTgwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1613327345946-551b8ecf2afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJUJDJUQwJUJFJUQxJTgxJUQwJUJBJUQwJUIyJUQwJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Воронеж',
    link: 'https://images.unsplash.com/photo-1617554575308-a2bda60cbef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8JUQwJUIyJUQwJUJFJUQxJTgwJUQwJUJFJUQwJUJEJUQwJUI1JUQwJUI2fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Челябинск',
    link: 'https://images.unsplash.com/photo-1589793242170-029606c12c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JUQxJTg3JUQwJUI1JUQwJUJCJUQxJThGJUQwJUIxJUQwJUI4JUQwJUJEJUQxJTgxJUQwJUJBfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Камчатка',
    link: 'https://images.unsplash.com/photo-1645016978367-5a81d12f915d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JUQwJUJBJUQwJUIwJUQwJUJDJUQxJTg3JUQwJUIwJUQxJTgyJUQwJUJBJUQwJUIwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  }
];

//DOM узлы

const template = document.querySelector('#template').content.querySelector('.element')

const cardsContainer = document.querySelector('.elements__grid')

const formEdit = document.querySelector('.popup_form_edit')
const formAdd = document.querySelector('.popup_form_add')


const editBtn = document.querySelector('.profile__edit-button')
const editUserModal = document.querySelector('.popup_type_edit-user')

const addBtn = document.querySelector('.profile__add-button')
const addCardModal = document.querySelector('.popup_type_add-card')

const closeModal = document.querySelectorAll('.popup__btn-close')

const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')
const nameInput = document.querySelector('.popup__form_type_name')
const aboutInput = document.querySelector('.popup__form_type_about')


//функция для открытия модального окна по клику на картинку
const handleClickImageModal = (evt) => {
  const zoomImg = document.querySelector('.popup__zoomCont-image')
  const zoomHeader = document.querySelector('.popup__zoomCont-header')
  const imageBtn = document.querySelector('.popup_type_zoom-image')
 
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
  popup.classList.add('popup_opened')
  if (editUserModal.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent
    aboutInput.value = profileDescription.textContent
  }
}
//слушатели 'click' для modal open
editBtn.addEventListener('click', () => {
  handleClickModalOpen(editUserModal)
})
addBtn.addEventListener('click', () => {
  handleClickModalOpen(addCardModal)
})

//функция ЗАКРЫТИЯ модальных окон
const handleClickModalClose = (popup) => {
  popup.classList.remove('popup_opened')
}
//слушатели 'click' для modal close
closeModal.forEach((item) => {
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
  const inputName = document.querySelector('.popup__form_type_place')
  const inputLink = document.querySelector('.popup__form_type_place-link')
  renderCard({name: inputName.value, link: inputLink.value})
  inputName.value = ''
  inputLink.value = ''

  handleClickModalClose(addCardModal)
}
//слушатель 'submit' для addCard
formAdd.addEventListener('submit', handleSubmitAddCard)