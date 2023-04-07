import { cardTemplateConfig, zoomImg, zoomHeader, imageBtn } from './constants.js'

class Card {
    constructor(data, cardTemplateSelector, openModal) {
        this._link = data.link
        this._name = data.name
        this._cardTemplateSelector = cardTemplateSelector
        this._openModal = openModal
        this._element = undefined
        this._cardImage = undefined
        this._cardName = undefined
        this._likeButton = undefined
        this._deleteButton = undefined
    }
    //получаем каркас карточки (template) из HTML и клонируем его
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector(cardTemplateConfig.cardSelector)
            .cloneNode(true)

        return cardElement
    }

    //метод добавления карточки like
    _handleCardLike() {
        this._likeButton.classList.toggle(cardTemplateConfig.likeActiveClass)
    }

    //метод удаления карточки
    _handleCardDelete() {
        this._element.remove()
    }

    //метод для открытия модалки с фото и описанием карточки по клику
    _handleCardImageClick() {
        zoomImg.setAttribute('src', this._link)
        zoomImg.setAttribute('alt', this._name)
        zoomHeader.textContent = this._name

        this._openModal(imageBtn)
    }

    //устанавливаем слушателей событий
    _setEventListeners() {
        //повесим слушатель на кнопку likeButton
        this._likeButton.addEventListener('click', () => {
            this._handleCardLike()
        })

        //повесим слушатель на кнопку deleteButton
        this._deleteButton.addEventListener('click', () => {
            this._handleCardDelete()
        })

        //повесим слушатель на кнопку cardImagePopup
        this._cardImage.addEventListener('click', () => {
            this._handleCardImageClick()
        })
    }

    //генерируем карточку
    generateCard() {
        //вернем каркас карточки в переменную this._element
        this._element = this._getTemplate()

        //в каркасе карточки найдем блок, который отвечает за картинку. Запишем в атрибуты 'src' и 'alt' данные
        this._cardImage = this._element.querySelector(cardTemplateConfig.cardImageSelector)
        this._cardImage.src = this._link
        this._cardImage.alt = this._name

        //в каркасе карточки найдем блок, который отвечает за название картинки. Запишем в атрибут 'src' данные
        this._cardName = this._element
            .querySelector(cardTemplateConfig.cardNameSelector)
            .textContent = this._name

        //сохраним в переменную кнопку для likeCard
        this._likeButton = this._element.querySelector(cardTemplateConfig.likeButtonSelector)

        //сохраним в переменную кнопку для deleteCard
        this._deleteButton = this._element.querySelector(cardTemplateConfig.deleteButtonSelector)

        //вызовем метод, в котором содержатся все слушателя для карточки
        this._setEventListeners()

        //вернем карточку
        return this._element
    }
}

  export default Card