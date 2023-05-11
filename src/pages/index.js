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


// ==========/user_info/==========

const userInfo = new UserInfo ({
  userNameSelector: '.profile__name',
  userAboutSelector: '.profile__description',
  userAvatarSelector: '.profile__avatar'
})


// ==========/change_avatar/==========

const popupAvatarChange = new PopupWithForm(
  '.popup-type-change-avatar',
  {handleSubmitForm: (inputValue) => {

    return api.setUserAvatar(inputValue)
      .then((data) => {
        userInfo.setUserInfo(data)
        return data
      })
      .catch((err) => {
        console.log(err)
      })
  }}
)


// ==========/edit_profile/==========

const popupCardEdit = new PopupWithForm(
  '.popup_type_edit-user',
  {handleSubmitForm: (inputValue) => {

    return api.patchProfile(inputValue)
      .then((data) => {
        userInfo.setUserInfo(data)
    })
      .catch((err) => {
        console.log(err)
      })
    }}
)


// ==========/add_new-card/==========

const popupCardAdd = new PopupWithForm(
  '.popup_type_add-card',
  {handleSubmitForm: (inputValue) => {

    return api.postInitialCards({
      name: inputValue.name,
      link: inputValue.link
    })
      .then((data) => {
        cardList.prependItem(createCard(data, userInfo.profileId)) //забыл добавить id пользователя
      })
      .catch((err) => {
        console.log(err)
      })
  }}
)


// ==========/create_card/==========

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


// ==========/render_card/==========

const cardList = new Section ({
  renderer: (data) => {
    const card = createCard(data, userInfo.profileId)
    cardList.prependItem(card)
  }
}, '.elements__grid')


// ==========/delete_confirm/==========

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


// ==========/zoom_card/==========

const popupWithImage = new PopupWithImage('.popup_type_zoom-image')


// ==========/validation/==========

//change_avatar_form_validation
const formValidatorForChangeAvatarForm = new FormValidator(formValidationConfig, formChangeAvatar)
formValidatorForChangeAvatarForm.enableValidation()

//edit_profile_form_validation
const formValidatorForEditForm = new FormValidator(formValidationConfig, formEdit)
formValidatorForEditForm.enableValidation()

//add_new-card_form_validation
const formValidatorForAddForm = new FormValidator(formValidationConfig, formAdd)
formValidatorForAddForm.enableValidation()


// ==========/eventListeners/==========

//change_avatar_popup_button
buttonChangeAvatar.addEventListener('click', () => {
  popupAvatarChange.close()
  popupAvatarChange.open()
  formValidatorForChangeAvatarForm.resetValidation()
})

//edit_profile_popup_button
buttonEdit.addEventListener('click', () => {
  popupCardEdit.close()
  popupCardEdit.addCurrentUserData(userInfo.getUserInfo())
  popupCardEdit.open()
  formValidatorForEditForm.resetValidation()
})

//add_new-card_popup_button
buttonAdd.addEventListener('click', () => {
  popupCardAdd.close()
  popupCardAdd.open()
  formValidatorForAddForm.resetValidation()
})

popupAvatarChange.setEventListeners()
popupCardEdit.setEventListeners()
popupCardAdd.setEventListeners()
popupWithImage.setEventListeners()
popupWithConfirm.setEventListeners()