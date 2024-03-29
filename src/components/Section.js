//класс отвечает за отрисовку элементов на странице
export default class Section {
    constructor({renderer}, containerSelector) {
       // this._items = items
        this._renderer = renderer
        this._container = document.querySelector(containerSelector)
    }

    //метод отрисовывает элементы, исспользуя колбек функцию renderer
    //метод reverse() развернет массив карточек перед тем, как вставлять новые карточки
    renderItems(items) {
        items.reverse().forEach(item => {
            this._renderer(item)
        })
    }

    //метод принимает DOM-элементы и добавляет его в контейнер
    prependItem(element) {
        this._container.prepend(element)
    }
}