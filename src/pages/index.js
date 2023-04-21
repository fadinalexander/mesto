import './index.css'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

import { initialCards, cardTemplateConfig, formValidationConfig } from '../utils/constants.js'

const formEdit = document.forms['form_edit']
const formAdd = document.forms['form_add']
const bottonEdit = document.querySelector('.profile__edit-button')
const bottonAdd = document.querySelector('.profile__add-button')

//отображение информации о пользователе страницы
const userInfo = new UserInfo ({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description'
})

//console.log(userInfo.getUserInfo());

//принимает объект карточки и возвращает разметку, используя класс Card
const createCard = (data) => {
  const card = new Card({
    data,
    handleCardClick: () => {
      popupWithImage.open({
        link: data.link,
        name: data.name
      })
    }
  }, cardTemplateConfig.templateSelector)
  return card.generateCard()
}

//отрисовывает список карточек
const cardList = new Section ({
  items: initialCards,
  renderer: (data) => {
    cardList.addItem(createCard(data))
  }
}, '.elements__grid')

//открывает попап с увеличенной картинкой карточки
const popupWithImage = new PopupWithImage('.popup_type_zoom-image')

//объект класса позволяет редактировать профиль пользователя
const popupCardEdit = new PopupWithForm(
  '.popup_type_edit-user',
  {handleSubmitForm: (inputValue) => {
    userInfo.setUserInfo(inputValue)
    popupCardEdit.close()
  }}
)

//объект класса позволяет добавлять новую карточку на страницу
const popupCardAdd = new PopupWithForm(
  '.popup_type_add-card',
  {handleSubmitForm: (inputValue) => {
    cardList.addItem(createCard({
      name: inputValue.name,
      link: inputValue.link
    }))
    popupCardAdd.close()
  }}
)

//валидация
const formValidatorForEditForm = new FormValidator(formValidationConfig, formEdit)
formValidatorForEditForm.enableValidation()

//валидация
const formValidatorForAddForm = new FormValidator(formValidationConfig, formAdd)
formValidatorForAddForm.enableValidation()

//назначаем обработчиков на кнопку добавления карточек
bottonAdd.addEventListener('click', () => {
  formAdd.reset()
  popupCardAdd.open()
  formValidatorForAddForm.resetValidation()
})

//назначаем обработчиков на кнопку редактирования профиля
bottonEdit.addEventListener('click', () => {
  formEdit.reset()
  popupCardEdit.addCurrentUserData(userInfo.getUserInfo())
  popupCardEdit.open()
  formValidatorForEditForm.resetValidation()
})

popupWithImage.setEventListeners()
popupCardEdit.setEventListeners()
popupCardAdd.setEventListeners()

//отрисовываем карточки на странице
cardList.renderItems()