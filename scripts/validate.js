const formValidationConfig = {
    formSelector: '.form',
    inputSelector: '.popup__form',
    errorClass: 'popup__form_type_error',
    buttonSelector: '.popup__btn-save',
    buttonDisabledClass: 'popup__btn-save_disabled'
}


function resetValidation(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const buttonSubmit = form.querySelector(config.buttonSelector);
  
    inputList.forEach((input) => {
      input.removeEventListener('input', () => handdleFormInput(evt, config));
      input.classList.remove(config.errorClass);
      const errorElement = document.querySelector(`#${input.id}-error`);
      errorElement.textContent = '';
    });
  
    buttonSubmit.disabled = true;
    buttonSubmit.classList.add(config.buttonDisabledClass);
  
    enableValidation(config);
  }



//функция отмены submit для формы
function disableSubmit(evt) {
    evt.preventDefault()
}

//функция включения валидации
function enableValidation(config) {
    
    //находим форму
    const formList = document.querySelectorAll(config.formSelector)
    formList.forEach((form) => {

        //отменим стандартную отправку формы
        form.addEventListener('submit', disableSubmit)
    
        //добавляем слушатель на каждый раз, когда мы что то вводим
        form.addEventListener('input', () => toggleButtom(form, config))
    
        //вызываем функцию
        addInputListeners(form, config)
    
        //вызываем функцию
        toggleButtom(form, config)
    })
}

//функция которая добавляет класс на невалидный инпут чтобы он подсвечивался красным
function handdleFormInput(evt, config) {
    //находим инпут, на котором у нас сработало событие
    const input = evt.target
    //найдем инпут id
    const inputId = input.id
    //найдем span
    const errorElement = document.querySelector(`#${inputId}-error`)

    if (input.validity.valid) {
        input.classList.remove(config.errorClass)
        errorElement.textContent = ''
    } else {
        input.classList.add(config.errorClass)
        errorElement.textContent = input.validationMessage
        //в input.validationMessage хранится стандартный текст сообщения
    }
}

//функция toogle bottom valid
function toggleButtom(form, config) {

    //найдем кнопку
    //в нашем случае кнопка вложена в форму, поэтому в функцию передаем еще и form
    const buttonSubmit = form.querySelector(config.buttonSelector)
    
    //воспользуемся методом, который проверяет ФОРМУ на валидность checkValidity
    const isFormValid = form.checkValidity()
    
    buttonSubmit.disabled = !isFormValid
    
    buttonSubmit.classList.toggle(config.buttonDisabledClass, !isFormValid)
    //у тогл есть второй параметр, который буде в зависимости от того true or false он, переключать этот элемент
}

//функция которая навешивает слушателей на input
function addInputListeners(form, config) {

    const inputList = form.querySelectorAll(config.inputSelector)
    inputList.forEach(function (item) {
        item.addEventListener('input', (evt) => handdleFormInput(evt, config))
    })
}
  
enableValidation(formValidationConfig)