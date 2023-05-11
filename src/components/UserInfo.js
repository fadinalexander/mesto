//класс для отображения информации о пользователе
export default class UserInfo {
    constructor({ userNameSelector, userAboutSelector, userAvatarSelector }) {
        this._userNameElement = document.querySelector(userNameSelector)
        this._userAboutElement = document.querySelector(userAboutSelector)
        this._userAvatarSelector = document.querySelector(userAvatarSelector)
    }

    getUserInfo() {
        return {
            name: this._userNameElement.textContent,
            about: this._userAboutElement.textContent,
            avatar: this._userAvatarSelector.src
        }
    }

    setUserInfo({ name, about, avatar, _id }) {
        this._userNameElement.textContent = name
        this._userAboutElement.textContent = about
        this._userAvatarSelector.src = avatar
        this.profileId = _id
    }
}