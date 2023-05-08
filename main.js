(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var n,r;return n=e,(r=[{key:"_checkResult",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){}},{key:"postInitialCards",value:function(){}},{key:"getProfile",value:function(){}},{key:"patchProfile",value:function(){}},{key:"setUserAvatar",value:function(){}},{key:"deleteCard",value:function(){}},{key:"likeCard",value:function(){}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}(),r={formSelector:".form",inputSelector:".popup__form",submitButtonSelector:".popup__btn-save",activeErrorClass:"popup__form_type_error",buttonDisabledClass:"popup__btn-save_disabled"},o="element__like-button_active";function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function a(e,t,n){return(t=l(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===i(t)?t:String(t)}document.querySelector(".popup__zoomCont-image"),document.querySelector(".popup__zoomCont-header"),document.querySelector(".popup_type_zoom-image");var c=function(){function e(t,n,r){var i=this,u=t.handleCardClick,l=t.handleConfirmDelete,c=t.handleCardLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),a(this,"_toggleLikeCounter",(function(){i._buttonLike.classList.toggle(o),i._counter.textContent=i.likes.length})),a(this,"_deleteCard",(function(){i._element.remove(),i._element=null})),this._link=n.link,this._name=n.name,this._cardTemplateSelector=r,this._handleCardClick=u,this._handleCardLike=c,this._handleConfirmDelete=l,this.likes=n.likes}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(e,t){return e.some((function(e){return e._id===t}))}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",this._handleCardLike),this._buttonDelete.addEventListener("click",(function(){e._handleConfirmDelete(e._element)})),this._cardImage.addEventListener("click",this._handleCardClick)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__img"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardName=this._element.querySelector(".element__description").textContent=this._name,this._buttonLike=this._element.querySelector(".element__like-button"),this._buttonDelete=this._element.querySelector(".element__delete-button"),this._counter=this._element.querySelector(".element__like-counter"),this.likes?(this._counter.textContent=this.likes.length,this.isLiked(this.likes,this._userID)&&this._buttonLike.classList.add(o)):this._counter.textContent=0,this._ownerID!==this._userID&&this._buttonDelete.remove(),this._setEventListeners(),this._element}},{key:"remove",value:function(){this._element.remove()}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===s(o)?o:String(o)),r)}var o}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._config.inputSelector)),this._submitButton=this._form.querySelector(this._config.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){var n=document.querySelector("#".concat(t.id,"-error"));e._hideInputError(n,t)}))}},{key:"_showInputError",value:function(e,t){e.textContent=t.validationMessage,t.classList.add(this._config.activeErrorClass)}},{key:"_hideInputError",value:function(e,t){e.textContent="",t.classList.remove(this._config.activeErrorClass)}},{key:"_enableButton",value:function(){this._submitButton.classList.remove(this._config.buttonDisabledClass),this._submitButton.disabled=!1}},{key:"_disableButton",value:function(){this._submitButton.classList.add(this._config.buttonDisabledClass),this._submitButton.disabled=!0}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._submitButton.disabled=!0,this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_checkInputValidity",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.validity.valid?this._hideInputError(t,e):this._showInputError(t,e)}},{key:"_setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._inputList.forEach((function(t){t.addEventListener("input",(function(n){e._checkInputValidity(t),e._toggleButtonState()}))})),this._form.addEventListener("reset",(function(){setTimeout((function(){e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===y(o)?o:String(o)),r)}var o}var d=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup__btn-close")||t.target===e._popup)&&e.close()}))}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==b(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===b(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(".form"),n._handleSubmitForm=r,n._inputList=n._form.querySelectorAll(".popup__form"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._valuesForInputs={},this._inputList.forEach((function(t){e._valuesForInputs[t.name]=t.value})),this._valuesForInputs}},{key:"setEventListeners",value:function(){var e=this;h(S(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"addCurrentUserData",value:function(e){this._inputList.forEach((function(t){void 0!==e[t.name]?t.value=e[t.name]:t.value=""}))}},{key:"close",value:function(){h(S(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setSubmitButtonCaption",value:function(e){}},{key:"setButtonState",value:function(e){}},{key:"setAvatarLink",value:function(e){document.querySelector(".profile__avatar").src=e.avatar}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==k(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__zoomCont-image"),t._popupHeader=t._popup.querySelector(".popup__zoomCont-header"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popupImage.src=t,this._popupHeader.textContent=n,this._popupImage.alt=n,E(O(u.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}var I=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==T(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===T(o)?o:String(o)),r)}var o}var R=function(){function e(t){var n=t.userNameSelector,r=t.userAboutSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userNameElement=document.querySelector(n),this._userAboutElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userNameElement.textContent,about:this._userAboutElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._userNameElement.textContent=t,this._userAboutElement.textContent=n}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==D(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==D(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===D(o)?o:String(o)),r)}var o}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=V(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(o){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===D(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var n,r=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleSubmitForm=r,n._formElement=n._popup.querySelector(".form"),n._cardElement=null,n}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;B(V(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._cardElement)}))}},{key:"open",value:function(e){this._cardElement=e,B(V(u.prototype),"open",this).call(this)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d),U=document.forms.form_edit,z=document.forms.form_add,N=document.forms.form_change_avatar,H=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__add-button"),G=(document.querySelector(".element__delete-button"),document.querySelector(".profile__avatar-overlay")),J=new n({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-65/",headers:{autorization:"591d0fb3-f7a0-4cd1-92a9-2bb64c4f4272","Content-Type":"aplication/json"}}),K=new R({userNameSelector:".profile__name",userAboutSelector:".profile__description"}),Q=new A(".popup-type-confirm-remove",{handleSubmitForm:function(e){console.log(e),e.remove(),Q.close()}}),W=function(e){var t=new c({handleCardClick:function(){Y.open({link:e.link,name:e.name})},handleConfirmDelete:function(){Q.open(t)},handleCardLike:function(){J.likeCard(t.cardID,t.isLiked(t.likes)).then((function(e){return t.like(e)}))}},e,"#template");return t.generateCard()},X=new I({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){X.addItem(W(e))}},".elements__grid"),Y=new P(".popup_type_zoom-image"),Z=new g(".popup_type_edit-user",{handleSubmitForm:function(e){K.setUserInfo(e),Z.close()}}),$=new g(".popup_type_add-card",{handleSubmitForm:function(e){X.addItem(W({name:e.name,link:e.link})),$.close()}}),ee=new g(".popup-type-change-avatar",{handleSubmitForm:function(e){ee.setAvatarLink(e),ee.close()}}),te=new p(r,U);te.enableValidation();var ne=new p(r,z);ne.enableValidation();var re=new p(r,N);re.enableValidation(),M.addEventListener("click",(function(){z.reset(),$.open(),ne.resetValidation()})),H.addEventListener("click",(function(){U.reset(),Z.addCurrentUserData(K.getUserInfo()),Z.open(),te.resetValidation()})),G.addEventListener("click",(function(){N.reset(),ee.open(),re.resetValidation()})),Z.setEventListeners(),$.setEventListeners(),Y.setEventListeners(),ee.setEventListeners(),Q.setEventListeners(),X.renderItems()})();
//# sourceMappingURL=main.js.map