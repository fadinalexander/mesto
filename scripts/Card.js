import {} from './constants.js'

export default Card

class Card {
    constructor(data, templateSelector) {
        this._link = data.link
        this._name = data.name
        this._templateSelector = templateSelector
    }

    _getTemplate() {

    }

    _setEventListeners() {

    }

    generateCard() {

    }
}

const card = new Card()




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