//класс перезаписывает родительский метод open() и вставляет в попап картинку и её описание

class PopupWithImage extends Popup {
    constructor() {
        super(open)
    }
}