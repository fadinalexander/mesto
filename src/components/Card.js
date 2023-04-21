//добавили функцию-колбек handleCardClick, которая открывает попап с увеличенной картинкой при клике на карточку
import { cardTemplateConfig } from '../utils/constants.js'

export default class Card {
    constructor({ data, handleCardClick }, cardTemplateSelector) {
        this._link = data.link
        this._name = data.name
        this._cardTemplateSelector = cardTemplateSelector
        this._handleCardClick = handleCardClick
    }
 
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardTemplateSelector)
            .content.querySelector(cardTemplateConfig.cardSelector)
            .cloneNode(true)

        return cardElement
    }

    _setEventListeners() {
        this._element.querySelector(cardTemplateConfig.likeButtonSelector).addEventListener('click', this._toggleLike)

        this._element.querySelector(cardTemplateConfig.deleteButtonSelector).addEventListener('click', this._deleteCard)

        this._cardImage.addEventListener('click', this._handleCardClick)
    }

    generateCard() {
        this._element = this._getTemplate()

        this._cardImage = this._element.querySelector(cardTemplateConfig.cardImageSelector)

        this._cardImage.src = this._link
        this._cardImage.alt = this._name
        this._cardName = this._element
            .querySelector(cardTemplateConfig.cardNameSelector)
            .textContent = this._name
            
        this._setEventListeners()

        return this._element
    }

    _toggleLike(evt) {
        evt.target.classList.toggle(cardTemplateConfig.likeActiveClass)
    }

    _deleteCard = () => {
        this._element.remove()
    }
}