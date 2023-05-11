(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){var n=e.url,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=n,this._headers=r}var n,r;return n=t,(r=[{key:"_checkResult",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"getProfile",value:function(){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"patchProfile",value:function(t){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResult(t)}))}},{key:"setUserAvatar",value:function(t){var e=this,n=t.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:n})}).then((function(t){return e._checkResult(t)}))}},{key:"getInitialCards",value:function(){var t=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(e){return t._checkResult(e)}))}},{key:"postInitialCards",value:function(t){var e=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){return e._checkResult(t)}))}},{key:"deleteCard",value:function(t){var e=this;return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){return e._checkResult(t)}))}},{key:"likeCard",value:function(t,e){var n=this;return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:e?"DELETE":"PUT",headers:this._headers}).then((function(t){return n._checkResult(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}(),r={formSelector:".form",inputSelector:".popup__form",submitButtonSelector:".popup__btn-save",activeErrorClass:"popup__form_type_error",buttonDisabledClass:"popup__btn-save_disabled"},o="element__like-button_active";function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function a(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===i(e)?e:String(e)}document.querySelector(".popup__zoomCont-image"),document.querySelector(".popup__zoomCont-header"),document.querySelector(".popup_type_zoom-image");var l=function(){function t(e,n,r){var i=this,u=e.handleCardClick,c=e.handleConfirmDelete,l=e.handleCardLike,s=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"like",(function(t){var e=t.likes;i._buttonLike.classList.toggle(o),i._counter.textContent=e.length})),a(this,"_toggleLikeCounter",(function(){i._buttonLike.classList.toggle(o),i._counter.textContent=i.likes.length})),this._link=n.link,this._name=n.name,this._cardTemplateSelector=r,this._handleCardClick=u,this._handleCardLike=l,this._handleConfirmDelete=c,this._userId=s,this.likes=n.likes,this.cardId=n._id,this._ownerId=n.owner._id}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"remove",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(t,e){return t.some((function(t){return t._id===e}))}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",this._handleCardLike),this._buttonDelete.addEventListener("click",(function(){t._handleConfirmDelete(t._element)})),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__img"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName=this._element.querySelector(".element__description").textContent=this._name,this._buttonLike=this._element.querySelector(".element__like-button"),this._buttonDelete=this._element.querySelector(".element__delete-button"),this._counter=this._element.querySelector(".element__like-counter"),this.likes?(this._counter.textContent=this.likes.length,this.isLiked(this.likes,this._userId)&&this._buttonLike.classList.add(o)):this._counter.textContent=0,this._ownerId!==this._userId&&this._buttonDelete.remove(),this._setEventListeners(),this._element}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._config=e,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var e,n;return e=t,(n=[{key:"resetValidation",value:function(){var t=this;this._inputList.forEach((function(e){var n=document.querySelector("#".concat(e.id,"-error"));t._hideInputError(n,e)}))}},{key:"_showInputError",value:function(t,e){t.textContent=e.validationMessage,e.classList.add(this._config.activeErrorClass)}},{key:"_hideInputError",value:function(t,e){t.textContent="",e.classList.remove(this._config.activeErrorClass)}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._config.buttonDisabledClass),this._submitButton.disabled=!1}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._config.buttonDisabledClass),this._submitButton.disabled=!0}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._submitButton.disabled=!0,this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_checkInputValidity",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._inputList.forEach((function(e){e.addEventListener("input",(function(n){t._checkInputValidity(e),t._toggleButtonState()}))})),this._form.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}))})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("click",(function(e){(e.target.classList.contains("popup__btn-close")||e.target===t._popup)&&t.close()}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},v.apply(this,arguments)}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===d(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".form"),n._handleSubmitForm=r,n._inputList=n._form.querySelectorAll(".popup__form"),n._submitButton=n._popup.querySelector(".popup__btn-save"),n._submitButtonText=n._submitButton.textContent,n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._valuesForInputs={},this._inputList.forEach((function(e){t._valuesForInputs[e.name]=e.value})),this._valuesForInputs}},{key:"setEventListeners",value:function(){var t=this;v(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){var e=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleSubmitForm(t._getInputValues()).then((function(){return t.close()})).finally((function(){t._submitButton.textContent=e}))}))}},{key:"addCurrentUserData",value:function(t){this._inputList.forEach((function(e){void 0!==t[e.name]?e.value=t[e.name]:e.value=""}))}},{key:"close",value:function(){v(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"handleButtonLoading",value:function(t,e){this._submitButton.textContent=t?e:this._submitButtonText}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__zoomCont-image"),e._popupHeader=e._popup.querySelector(".popup__zoomCont-header"),e}return e=u,(n=[{key:"open",value:function(t){var e=t.link,n=t.name;this._popupImage.src=e,this._popupHeader.textContent=n,this._popupImage.alt=n,E(O(u.prototype),"open",this).call(this)}}])&&w(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function P(t){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},P(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==P(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===P(o)?o:String(o)),r)}var o}var I=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e._renderer(t)}))}},{key:"prependItem",value:function(t){this._container.prepend(t)}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var B=function(){function t(e){var n=e.userNameSelector,r=e.userAboutSelector,o=e.userAvatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r),this._userAvatarSelector=document.querySelector(o)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userAboutElement.textContent,avatar:this._userAvatarSelector.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,r=t.avatar,o=t._id;this._userNameElement.textContent=e,this._userAboutElement.textContent=n,this._userAvatarSelector.src=r,this.profileId=o}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==x(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===x(o)?o:String(o)),r)}var o}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=F(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function D(t,e){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},D(t,e)}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&D(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=F(r);if(o){var n=F(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleSubmitForm=r,n._formElement=n._popup.querySelector(".form"),n._buttonSubmit=n._popup.querySelector(".popup__btn-confirm"),n._buttonSubmitText=n._buttonSubmit.textContent,n}return e=u,(n=[{key:"open",value:function(t){this._cardElement=t,A(F(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;A(F(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._cardElement)}))}},{key:"handleButtonLoading",value:function(t,e){this._buttonSubmit.textContent=t?e:this._buttonSubmitText}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(m);function V(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var N=document.forms.form_edit,z=document.forms.form_add,H=document.forms.form_change_avatar,J=document.querySelector(".profile__edit-button"),G=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__avatar-overlay"),$=new n({url:"https://mesto.nomoreparties.co/v1/cohort-65",headers:{authorization:"591d0fb3-f7a0-4cd1-92a9-2bb64c4f4272","Content-Type":"application/json"}});Promise.all([$.getProfile(),$.getInitialCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return V(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setUserInfo(o),Z.renderItems(i)})).catch((function(t){console.log(t)}));var K=new B({userNameSelector:".profile__name",userAboutSelector:".profile__description",userAvatarSelector:".profile__avatar"}),Q=new g(".popup-type-change-avatar",{handleSubmitForm:function(t){return $.setUserAvatar(t).then((function(t){return K.setUserInfo(t),t})).catch((function(t){console.log(t)}))}}),W=new g(".popup_type_edit-user",{handleSubmitForm:function(t){return $.patchProfile(t).then((function(t){K.setUserInfo(t)})).catch((function(t){console.log(t)}))}}),X=new g(".popup_type_add-card",{handleSubmitForm:function(t){return $.postInitialCards({name:t.name,link:t.link}).then((function(t){Z.prependItem(Y(t,K.profileId))})).catch((function(t){console.log(t)}))}}),Y=function(t,e){var n=new l({handleCardClick:function(){et.open({link:t.link,name:t.name})},handleConfirmDelete:function(){tt.open(n)},handleCardLike:function(){$.likeCard(n.cardId,n.isLiked(n.likes)).then((function(t){n.like(t)})).catch((function(t){console.log(t)}))},userId:e},t,"#template");return n.generateCard()},Z=new I({renderer:function(t){var e=Y(t,K.profileId);Z.prependItem(e)}},".elements__grid"),tt=new U(".popup-type-confirm-remove",{handleSubmitForm:function(t){tt.handleButtonLoading(!0,"Удаление..."),$.deleteCard(t.cardId).then((function(){t.remove()})).then((function(){return tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.handleButtonLoading(!1)}))}}),et=new C(".popup_type_zoom-image"),nt=new p(r,H);nt.enableValidation();var rt=new p(r,N);rt.enableValidation();var ot=new p(r,z);ot.enableValidation(),M.addEventListener("click",(function(){Q.open(),nt.resetValidation()})),J.addEventListener("click",(function(){W.addCurrentUserData(K.getUserInfo()),W.open(),rt.resetValidation()})),G.addEventListener("click",(function(){X.open(),ot.resetValidation()})),Q.setEventListeners(),W.setEventListeners(),X.setEventListeners(),et.setEventListeners(),tt.setEventListeners()})();
//# sourceMappingURL=main.js.map