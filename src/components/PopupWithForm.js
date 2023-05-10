//наследуемый класс. Перезаписываемые методы close и setEventListeners.
import Popup from './Popup.js'

export default class PopupWithForm extends Popup {

    constructor(popupSelector, {handleSubmitForm}) {
        super(popupSelector)

        this._form = this._popup.querySelector('.form')
        this._handleSubmitForm = handleSubmitForm
        this._inputList = this._form.querySelectorAll('.popup__form')

        this._buttonSubmit = this._popup.querySelector('.popup__btn-save')
        this._buttonSubmitText = this._buttonSubmit.textContent
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

        this._form.addEventListener('submit', evt => {
            evt.preventDefault()
            this._handleSubmitForm(this._getInputValues())
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


    handleButtonLoading(isLoading, textOnLoad) {
        console.log(this._buttonSubmit)
        if (isLoading) {
            this._buttonSubmit.textContent = textOnLoad
        } else {
            this._buttonSubmit.textContent = this._buttonSubmitText
        }
    }
}