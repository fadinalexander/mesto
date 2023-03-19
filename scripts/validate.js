const formValidationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__form',
    submitButtonSelector: '.popup__btn-save',
    activeErrorClass: 'popup__form_type_error',
    buttonDisabledClass: 'popup__btn-save_disabled',        
}

const resetValidation = (form, config) => {
    const inputList = form.querySelectorAll(config.inputSelector)

    inputList.forEach((input) => {
        input.classList.remove(config.activeErrorClass)
        const errorElement = document.querySelector(`#${input.id}-error`)
        errorElement.textContent = ''
    });
}

const showInputError = (errorTextElement, input, config) => {
    errorTextElement.textContent = input.validationMessage
    input.classList.add(config.activeErrorClass)
}

const hideInputError = (errorTextElement, input, config) => {
    errorTextElement.textContent = ''
    input.classList.remove(config.activeErrorClass)
}

const enableButton = (submitButton, config) => {
    submitButton.classList.remove(config.buttonDisabledClass)
    submitButton.disabled = false
}

const disableButton = (submitButton, config) => {
    submitButton.classList.add(config.buttonDisabledClass)
    submitButton.disabled = true
}

const hasInvalidInput = (inputList) => {   
    return Array.from(inputList).some(input => !input.validity.valid)  
}

const toggleButtonState = (submitButton, config, inputList) => {
    //console.log(submitButton)
    submitButton.disabled = true
    if (!hasInvalidInput(inputList)) {
        enableButton(submitButton, config)
    } else {
        disableButton(submitButton, config)
    }
}

const checkInputValidity = (form, input, config) => {
    const errorTextElement = form.querySelector(`#${input.id}-error`)
    //console.log(errorTextElement)
    if (input.validity.valid) {
        hideInputError(errorTextElement, input, config)
        //console.log(input)
    } else {
        showInputError(errorTextElement, input, config)
    }
}

const setEventListeners = (form, inputList, config, submitButton) => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
    })
    inputList.forEach((input) => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config)
            //console.log(evt.target.value)
            toggleButtonState(submitButton, config, inputList)
        })
    })
    form.addEventListener('reset', () => {
        setTimeout(() => {
            toggleButtonState(submitButton, config, inputList)
        })
    })
}

const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector)
    forms.forEach(form => {
        const inputList = form.querySelectorAll(config.inputSelector)  
        const submitButton = form.querySelector(config.submitButtonSelector)

        setEventListeners(form, inputList, config, submitButton)
    })
}

enableValidation(formValidationConfig)