//класс отвечает за отрисовку элементов на странице
export default class Section {
    constructor({renderer}, containerSelector) {
       // this._items = items
        this._renderer = renderer
        this._container = document.querySelector(containerSelector)
    }

    //метод отрисовывает элементы, исспользуя колбек функцию renderer
    renderItems(items) {
        items.forEach(item => {
            this._renderer(item)
        })
    }

    //метод принимает DOM-элементы и добавляет его в контейнер
    addItem(element) {
        this._container.appendChild(element)
    }
}