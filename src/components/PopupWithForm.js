//наследуемый класс. Перезаписываемые методы close и setEventListeners.
import Popup from './Popup.js'

export default class PopupWithForm extends Popup {

    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector)

        this._form = this._popup.querySelector('.form')
        this._handleSubmitForm = handleSubmitForm
        this._inputList = this._form.querySelectorAll('.popup__form')

        this._submitButton = this._popup.querySelector('.popup__btn-save')
        this._submitButtonText = this._submitButton.textContent
    }

    _getInputValues() {
        this._valuesForInputs = {}

        this._inputList.forEach(input => {
            this._valuesForInputs[input.name] = input.value
        })
        return this._valuesForInputs
    }
 
    setEventListeners() {
        super.setEventListeners()

        this._form.addEventListener('submit', () => {
            const initialText = this._submitButton.textContent
            this._submitButton.textContent = 'Сохранение...'
            this._handleSubmitForm(this._getInputValues())
                .then(() => this.close())
                .finally(() => {
                    this._submitButton.textContent = initialText
                })
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
    // //можно записать так addCurrentUserData в компактном виде
    // addCurrentUserData(userData) {
    //     this._inputList.forEach(input => { 
    //         input.value = userData[input.name] || ''
    //      })
    // }

    close() {
        super.close()
        this._form.reset()
    }

    handleButtonLoading(isLoading, textOnLoad) {
        if (isLoading) {
            this._submitButton.textContent = textOnLoad
        } else {
            this._submitButton.textContent = this._submitButtonText
        }
    }
}