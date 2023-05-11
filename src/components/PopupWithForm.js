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
    //так тоже работает, только .then вызывается из index.js
    // setEventListeners() {
    //     super.setEventListeners()

    //     this._form.addEventListener('submit', evt => {
    //         evt.preventDefault()
    //         this._handleSubmitForm(this._getInputValues())
    //         // this.close()
    //     })
    // }
    //Если будет интересно, можно сделать так, чтобы внутрь обработчика сабмита уходила цепочка промиса (then, finally), чтобы можно было универсально закрывать попапы в then, и возвращать текст кнопки сабмита в finally:
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
    //Тогда не нужно будет дублировать код во всех обработчиках сабмита в index.js. Обратите внимание, что нужно будет прописать return перед вызовом метода api  в index.js, чтобы функция сабмита возвращала промис и цепочка внутри PopupWithForm работала

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