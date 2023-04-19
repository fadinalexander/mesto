class FormValidator {
    constructor(config, form) {
        this._config = config
        this._form = form

        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector))
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector)
    }

    //сбрасываем состояние формы в начальное состояние
    resetValidation() {
        this._inputList.forEach((input) => {
            const errorElement = document.querySelector(`#${input.id}-error`)
            this._hideInputError(errorElement, input)
            errorElement.textContent = ''
        });
    }

    //отображаем сообщения об ошибках вылидации + стилизация
    _showInputError(errorTextElement, input) {
        errorTextElement.textContent = input.validationMessage
        input.classList.add(this._config.activeErrorClass)
    }

    //убираем отображение об ошибках валидации + убираем стилизацию
    _hideInputError(errorTextElement, input) {
        errorTextElement.textContent = ''
        input.classList.remove(this._config.activeErrorClass)
    }

    //делаем кнопку submit активной + убираем стилилизацию
    _enableButton() {
        this._submitButton.classList.remove(this._config.buttonDisabledClass)
        this._submitButton.disabled = false
    }

    //делаем кнопку неактивной + добавляем стилизацию
    _disableButton() {
        this._submitButton.classList.add(this._config.buttonDisabledClass)
        this._submitButton.disabled = true
    }

    //проверяем наличие невалидных полей ввода(вернет true если хотябы один инпут не прошел валидацию)
    _hasInvalidInput() {   
        return this._inputList.some(input => !input.validity.valid)  
    }

    //проверяем состояние всех полей ввода в форме и в зависимости от этого меняет состояние submit
    _toggleButtonState() {
        //console.log(submitButton)
        this._submitButton.disabled = true
        if (!this._hasInvalidInput()) {
            this._enableButton()
        } else {
            this._disableButton()
        }
    }

    //проверяем валидность инпута и вызываем соответствующие функции
    _checkInputValidity(input) {
        const errorTextElement = this._form.querySelector(`#${input.id}-error`)
        //console.log(errorTextElement)
        if (input.validity.valid) {
            this._hideInputError(errorTextElement, input)
            //console.log(input)
        } else {
            this._showInputError(errorTextElement, input)
        }
    }

    //назначаем слушателей для формы, чтобы обновлять состояние формы и submit при каждом изменении
    _setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })

        this._inputList.forEach((input) => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input)
                //console.log(evt.target.value)
                this._toggleButtonState()
            })
        })

        this._form.addEventListener('reset', () => {
            setTimeout(() => {
                this._toggleButtonState()
            })
        })
    }
    //ищем все на странице, вызываем функцию setEventListeners для каждой формы, передаем форме список инпутов и кнопку submit 
    enableValidation() {
        this._setEventListeners()
    }
}

export default FormValidator

// //сбрасываем состояние формы в начальное состояние
// const resetValidation = (form, config) => {
//     const inputList = form.querySelectorAll(config.inputSelector)

//     inputList.forEach((input) => {
//         input.classList.remove(config.activeErrorClass)
//         const errorElement = document.querySelector(`#${input.id}-error`)
//         errorElement.textContent = ''
//     });
// }
// //отображаем сообщения об ошибках вылидации + стилизация
// const showInputError = (errorTextElement, input, config) => {
//     errorTextElement.textContent = input.validationMessage
//     input.classList.add(config.activeErrorClass)
// }
// //убираем отображение об ошибках валидации + убираем стилизацию
// const hideInputError = (errorTextElement, input, config) => {
//     errorTextElement.textContent = ''
//     input.classList.remove(config.activeErrorClass)
// }
// //делаем кнопку submit активной + убираем стилилизацию
// const enableButton = (submitButton, config) => {
//     submitButton.classList.remove(config.buttonDisabledClass)
//     submitButton.disabled = false
// }
// //делаем кнопку неактивной + добавляем стилизацию
// const disableButton = (submitButton, config) => {
//     submitButton.classList.add(config.buttonDisabledClass)
//     submitButton.disabled = true
// }
// //проверяем наличие невалидных полей ввода(вернет true если хотябы один инпут не прошел валидацию)
// const hasInvalidInput = (inputList) => {   
//     return Array.from(inputList).some(input => !input.validity.valid)  
// }
// //проверяем состояние всех полей ввода в форме и в зависимости от этого меняет состояние submit
// const toggleButtonState = (submitButton, config, inputList) => {
//     //console.log(submitButton)
//     submitButton.disabled = true
//     if (!hasInvalidInput(inputList)) {
//         enableButton(submitButton, config)
//     } else {
//         disableButton(submitButton, config)
//     }
// }
// //проверяем валидность инпута и вызываем соответствующие функции
// const checkInputValidity = (form, input, config) => {
//     const errorTextElement = form.querySelector(`#${input.id}-error`)
//     //console.log(errorTextElement)
//     if (input.validity.valid) {
//         hideInputError(errorTextElement, input, config)
//         //console.log(input)
//     } else {
//         showInputError(errorTextElement, input, config)
//     }
// }
// //назначаем слушателей для формы, чтобы обновлять состояние формы и submit при каждом изменении
// const setEventListeners = (form, inputList, config, submitButton) => {
//     form.addEventListener('submit', (evt) => {
//         evt.preventDefault()
//     })
//     inputList.forEach((input) => {
//         input.addEventListener('input', (evt) => {
//             checkInputValidity(form, input, config)
//             //console.log(evt.target.value)
//             toggleButtonState(submitButton, config, inputList)
//         })
//     })
//     form.addEventListener('reset', () => {
//         setTimeout(() => {
//             toggleButtonState(submitButton, config, inputList)
//         })
//     })
// }
// //ищем все на странице, вызываем функцию setEventListeners для каждой формы, передаем форме список инпутов и кнопку submit 
// const enableValidation = (config) => {
//     const forms = document.querySelectorAll(config.formSelector)
//     forms.forEach(form => {
//         const inputList = form.querySelectorAll(config.inputSelector)  
//         const submitButton = form.querySelector(config.submitButtonSelector)

//         setEventListeners(form, inputList, config, submitButton)
//     })
// }

// enableValidation(formValidationConfig)