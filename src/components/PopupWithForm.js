//перезаписывает родительский метод setEventListeners() и close()

class PopupWithForm extends Popup {
    constructor() {
        super(close, setEventListeners)
    }

}