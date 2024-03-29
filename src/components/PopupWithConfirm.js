import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
    constructor (popupSelector, { handleSubmitForm }) {
        super(popupSelector)

        this._handleSubmitForm = handleSubmitForm
        this._formElement = this._popup.querySelector('.form')

        this._buttonSubmit = this._popup.querySelector('.popup__btn-confirm')
        this._buttonSubmitText = this._buttonSubmit.textContent
    }


    open(cardElement) {
        this._cardElement = cardElement
        super.open()
    }


    setEventListeners() {
        super.setEventListeners()

        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault()
            this._handleSubmitForm(this._cardElement)
        })
    }


    handleButtonLoading(isLoading, textOnLoad) {
        if (isLoading) {
            this._buttonSubmit.textContent = textOnLoad
        } else {
            this._buttonSubmit.textContent = this._buttonSubmitText
        }
    }
}