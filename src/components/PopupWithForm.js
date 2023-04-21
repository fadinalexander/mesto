//наследуемый класс. Перезаписываемые методы close и setEventListeners.
import Popup from './Popup.js'

export default class PopupWithForm extends Popup {

    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector)

        this._form = this._popup.querySelector('.form')
        this._handleSubmitForm = handleSubmitForm
        this._inputList = this._form.querySelectorAll('.popup__form')
    }

    _getInputValues() {
        this._valuesForInputs = {}

        this._inputList.forEach(input => {
            this._valuesForInputs[input.getAttribute('name')] = input.value
        })

        return this._valuesForInputs
    }

    setEventListeners() {
        super.setEventListeners()

        this._form.addEventListener('submit', evt => {
            evt.preventDefault()
            this._handleSubmitForm(this._getInputValues())
            this.close()
        })
    }

    addCurrentUserData(userData) {
        this._inputList.forEach(input => {
            if (userData[input.name] !== undefined) {
                input.value = userData[input.name]
            } else {
                input.value = ''
            }
        })
    }

    close() {
        super.close()
        this._form.reset()
    }
}