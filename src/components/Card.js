import { cardTemplateConfig } from '../utils/constants.js'

export default class Card {
    constructor({ handleCardClick, handleConfirmDelete, handleCardLike, userId }, data, cardTemplateSelector) {
        this._link = data.link
        this._name = data.name
        this._cardTemplateSelector = cardTemplateSelector

        this._handleCardClick = handleCardClick
        this._handleCardLike = handleCardLike
        this._handleConfirmDelete = handleConfirmDelete
        this._userId = userId

        this.likes = data.likes
        this.cardId = data._id
        this._ownerId = data.owner._id
    }
    
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardTemplateSelector).content
            .querySelector(cardTemplateConfig.cardSelector)
            .cloneNode(true)

        return cardElement
    }

    remove() {
        this._element.remove()
        this._element = null
    }


    isLiked(likes, userId) {
        return likes.some(like => like._id === userId)
    }


    like = ({likes}) => {
        this._buttonLike.classList.toggle(cardTemplateConfig.likeActiveClass)
        this._counter.textContent = likes.length
    }

  
    _toggleLikeCounter = () => {
        this._buttonLike.classList.toggle(cardTemplateConfig.likeActiveClass)

        this._counter.textContent = this.likes.length
    }


    _setEventListeners() {
        this._buttonLike.addEventListener('click', this._handleCardLike)

        this._buttonDelete.addEventListener('click', () => {
            this._handleConfirmDelete(this._element)
        })
       
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
        this._buttonLike = this._element
            .querySelector(cardTemplateConfig.likeButtonSelector)
        this._buttonDelete = this._element
            .querySelector(cardTemplateConfig.deleteButtonSelector)
        this._counter = this._element
            .querySelector(cardTemplateConfig.counterLikeSelector)

        if (this.likes) {
            this._counter.textContent = this.likes.length

            if (this.isLiked(this.likes, this._userId)) {
                this._buttonLike.classList.add(cardTemplateConfig.likeActiveClass)
            }
        } else {
            this._counter.textContent = 0
        }

        if (this._ownerId !== this._userId) {
            this._buttonDelete.remove()
        }
            
        this._setEventListeners()

        return this._element
    }
}