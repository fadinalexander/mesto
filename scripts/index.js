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

const popup = document.querySelector('.popup');
  const popupBtnEditUser = document.querySelector('.popup_type_edit-user')
  const popupBtnAddCard = document.querySelector('.popup_type_add-card')
  const popupBtnClose = document.querySelectorAll('.popup__btn-close')


const formEditUser = document.querySelector('.popup_form_edit')
const formAddCard = document.querySelector('.popup_form_add')
const formZoomImage = document.querySelector('.popup_form_zoom')

const editButton = document.querySelector('.profile__edit-button');
const editButtonClose = document.querySelector('.popup_type_edit-user .popup__container .popup__btn-close')

const addCardButton = document.querySelector('.profile__add-button')
const addCardButtonClose = document.querySelector('.popup_type_add-card .popup__container .popup__btn-close');


const formElement = document.querySelector('.popup__form');
  const nameInput = popup.querySelector('.popup__form_type_name');
  const aboutInput = popup.querySelector('.popup__form_type_about');
  const placeInput = document.querySelector('.popup__form_type_place')
  const placeLinkInput = document.querySelector('.popup__form_type_place-link')

  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');

const popupEditCardHeader = popup.querySelector('.popup__header')
const createButton = document.querySelector('.popup__btn-save')

  const template = document.querySelector('.template')
  const itemListWrapper = document.querySelector('.elements__grid')

  const zoomImg = document.querySelector('.popup__zoomCont-image')
  const zoomHeader = document.querySelector('.popup__zoomCont-header')
  const popupZoomImage = document.querySelector('.popup_type_zoom-image')
 

//Метод 1:
//Функция для отрисовки карточек из массива
// initialCards.forEach(({name, link}) => {
//   const newItem = template.content.cloneNode(true)
//   newItem.querySelector('.element__description').textContent = name
//   newItem.querySelector('.element__img').src = link
//   newItem.querySelector('.element__img').setAttribute('alt', name)
//   itemListWrapper.append(newItem)
// })

//Метод 2:
// Функция для отрисовки карточек из массива
const getItem = (header, image) => {
  const newItem = template.content.cloneNode(true)
  newItem.querySelector('.element__description').textContent = header
  newItem.querySelector('.element__img').src = image
  return newItem
}

const renderItem = (wrapper, title, image) => {
  wrapper.append(getItem(title, image))
}

initialCards.forEach(({name, link}) => {
  renderItem(itemListWrapper, name, link)
})

//функция ОТКРЫТИЯ модальных окон
const openPopup = (popupType) => {
  popupType.classList.add('popup_opened')
  if (popupBtnEditUser.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent
    aboutInput.value = profileDescription.textContent
  }
}

//функция ЗАКРЫТИЯ модальных окон
const closePopup = (popupType) => {
  popupType.classList.remove('popup_opened')
}

//слушатель для 'click' ЗАКРЫТИЯ всех модальных окон
popupBtnClose.forEach((item) => {
  const modal = item.closest('.popup')
  item.addEventListener('click', () => closePopup(modal))
})

//слушатель для 'click' открытия модального окна editButton
editButton.addEventListener('click', () => {
  openPopup(popupBtnEditUser)
})

//слушатель для 'click' открытия модального окна addButton
addCardButton.addEventListener('click', () => {
  openPopup(popupBtnAddCard)
})

//функция-обработчик формы 'submit' для редактирования профиля
const handleFormEditSubmit = (evt) => {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = aboutInput.value

  closePopup(popupBtnEditUser)
}

//слушатель для 'submit' для редактирования профиля
popupBtnEditUser.addEventListener('submit', handleFormEditSubmit);

//функция-обработчик формы 'submit' для добавления карточки
const handleFormAddCardSubmit = (evt) => {
  evt.preventDefault()
  const imageTitle = placeInput.value
  const imageLink = placeLinkInput.value
  const newItem = template.content.cloneNode(true)
  newItem.querySelector('.element__description').textContent = imageTitle
  newItem.querySelector('.element__img').src = imageLink
  newItem.querySelector('.element__img').alt = imageTitle
  itemListWrapper.prepend(newItem)
  placeInput.value = ''
  placeLinkInput.value = ''

  const openImage = document.querySelectorAll(".element__img");
openImage.forEach((item) => {
    item.addEventListener("click", openPopupZoomImage)
})
const deleteButton = document.querySelectorAll('.element__delete-button')
deleteButton.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.element')
    card.remove()
  })
})
const likeButton = document.querySelectorAll('.element__like-button')
likeButton.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('element__like-button_active')
  })
})
  
  closePopup(popupBtnAddCard)
}
//слушатель для 'submit' добавления карточки
popupBtnAddCard.addEventListener('submit', handleFormAddCardSubmit);

//функция для открытия модального окна по клику на картинку
const openPopupZoomImage = (evt) => {
  const imgSrc = evt.target.getAttribute('src')
  const imgAlt = evt.target.getAttribute('alt')

  zoomImg.setAttribute('src', imgSrc)
  zoomImg.setAttribute('alt', imgAlt)
  zoomHeader.textContent = imgAlt

  openPopup(popupZoomImage)
}

const openImage = document.querySelectorAll(".element__img");
openImage.forEach((item) => {
    item.addEventListener("click", openPopupZoomImage)
})

const deleteButton = document.querySelectorAll('.element__delete-button')
deleteButton.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.element')
    card.remove()
  })
})

const likeButton = document.querySelectorAll('.element__like-button')
likeButton.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('element__like-button_active')
  })
})

likeButton.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('element__like-button')) {
    evt.target.classList.toggle('element__like-button_active')
  }
})