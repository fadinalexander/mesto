//класс наследуемый. Метод open перезаписывает родительский метод open чтобы добавить попапу с картинкой данные: картинка, описание
import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)

        this._popupImage = this._popup.querySelector('.popup__zoomCont-image')
        this._popupHeader = this._popup.querySelector('.popup__zoomCont-header')
    }

    open({ link, name }) {
        this._popupImage.src = link
        this._popupHeader.textContent = name
        this._popupImage.alt = name 

        super.open()
    }
}