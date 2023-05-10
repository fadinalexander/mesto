import './index.css'

import Api from '../components/Api.js'
import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'

import { cardTemplateConfig, formValidationConfig } from '../utils/constants.js'
import PopupWithConfirm from '../components/PopupWithConfirm.js'

const formEdit = document.forms['form_edit']
const formAdd = document.forms['form_add']
const formChangeAvatar = document.forms['form_change_avatar']

const buttonEdit = document.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button')
const buttonDelete = document.querySelector('.element__delete-button')

const buttonChangeAvatar = document.querySelector('.profile__avatar-overlay')


const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '591d0fb3-f7a0-4cd1-92a9-2bb64c4f4272',
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData)
    cardList.renderItems(cards)
  })
  .catch((err) => {
    console.log(err)
  })


//отображение информации о пользователе страницы
const userInfo = new UserInfo ({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar'
})

const popupWithConfirm = new PopupWithConfirm('.popup-type-confirm-remove', {
  handleSubmitForm: (cardElement) => {
    popupWithConfirm.handleButtonLoading(true, 'Удаление...')

    api.deleteCard(cardElement.cardId)
      .then(() => {
        cardElement.remove()
      })
        .then(() => popupWithConfirm.close())
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupWithConfirm.handleButtonLoading(false)
      })
  }
})


const createCard = (data, userId) => {
  const card = new Card ({
    handleCardClick: () => {
      popupWithImage.open({
        link: data.link,
        name: data.name
      })
    },
    handleConfirmDelete: () => {
      popupWithConfirm.open(card)
    },
    handleCardLike: () => {

      api.likeCard(card.cardId, card.isLiked(card.likes))
      .then((data) => {
        card.like(data)})
      .catch((err) => {
        console.log(err)
      })
    },
    userId: userId}, data, cardTemplateConfig.templateSelector)

  return card.generateCard()
}


const cardList = new Section ({
  renderer: (data) => {
    const card = createCard(data, userInfo._profileId)
    cardList.addItem(card)
  }
}, '.elements__grid')


const popupWithImage = new PopupWithImage('.popup_type_zoom-image')


const popupCardEdit = new PopupWithForm(
  '.popup_type_edit-user',
  {handleSubmitForm: (inputValue) => {
    popupCardEdit.handleButtonLoading(true, 'Сохранение...')

    api.patchProfile(inputValue)
      .then((data) => {
        userInfo.setUserInfo(data)
        popupCardEdit.close()
    })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupCardEdit.handleButtonLoading(false)
     })
    }}
)


const popupCardAdd = new PopupWithForm(
  '.popup_type_add-card',
  {handleSubmitForm: (inputValue) => {
    popupCardAdd.handleButtonLoading(true, 'Сохранение...')

    api.postInitialCards({
      name: inputValue.name,
      link: inputValue.link
    })
      .then((data) => {
        cardList.addItem(createCard(data))
        popupCardAdd.close()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupCardAdd.handleButtonLoading(false)
      })
  }}
)


const popupAvatarChange = new PopupWithForm(
  '.popup-type-change-avatar',
  {handleSubmitForm: (inputValue) => {
    popupAvatarChange.handleButtonLoading(true, 'Сохранение...')

    api.setUserAvatar(inputValue)
      .then((data) => {
        userInfo.setUserInfo(data)
        popupAvatarChange.close()
        return data
      })
      .then((result) => {
        console.log(result)})
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        popupAvatarChange.handleButtonLoading(false)
      })

  }}
)

//валидация для формы редактирования профиля
const formValidatorForEditForm = new FormValidator(formValidationConfig, formEdit)
formValidatorForEditForm.enableValidation()

//валидация для формы добавления карточки
const formValidatorForAddForm = new FormValidator(formValidationConfig, formAdd)
formValidatorForAddForm.enableValidation()

//валидация для формы изменения аватара пользователя
const formValidatorForChangeAvatarForm = new FormValidator(formValidationConfig, formChangeAvatar)
formValidatorForChangeAvatarForm.enableValidation()

//назначаем обработчиков на кнопку добавления карточек
buttonAdd.addEventListener('click', () => {
  formAdd.reset()
  popupCardAdd.open()
  formValidatorForAddForm.resetValidation()
})

//назначаем обработчиков на кнопку редактирования профиля
buttonEdit.addEventListener('click', () => {
  formEdit.reset()
  popupCardEdit.addCurrentUserData(userInfo.getUserInfo())
  popupCardEdit.open()
  formValidatorForEditForm.resetValidation()
})

//назначаем обработчиков на кнопку изменения аватара пользователя
buttonChangeAvatar.addEventListener('click', () => {
  formChangeAvatar.reset()
  popupAvatarChange.open()
  formValidatorForChangeAvatarForm.resetValidation()
})

popupCardEdit.setEventListeners()
popupCardAdd.setEventListeners()
popupWithImage.setEventListeners()
popupAvatarChange.setEventListeners()
popupWithConfirm.setEventListeners()