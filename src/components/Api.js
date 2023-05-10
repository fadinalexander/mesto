export default class Api {
    constructor({ url, headers }) {
        this._url = url
        this._headers = headers
    }


    _checkResult(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }
   

    getProfile() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }


    patchProfile(value) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify(value)
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }


    setUserAvatar({avatar}) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: avatar
            })
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }

 
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }


    postInitialCards(data) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }


    deleteCard(cardId) {
        return fetch(`${this._url}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }


    likeCard(cardId, isLiked) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            method: isLiked ? 'DELETE' : 'PUT',
            headers: this._headers
        })
            .then((res) => {
                return this._checkResult(res)
            })
    }
}