const initialCards = [
  {
    name: 'Челябинск',
    link: '../../../images/Chelyabinsk.jpeg'
  },
  {
    name: 'Кижи',
    link: '../../images/Kidji.jpeg'
  },
  {
    name: 'Москва',
    link: '../images/Moscow.jpeg'
  },
  {
    name: 'Мурманск',
    link: './images/Murmansk.jpeg'
  },
  {
    name: 'Норильск',
    link: '/images/Norilsk.jpeg'
  },
  {
    name: 'Улан Уде',
    link: 'images/Ulan-ude.jpeg'
  }
];

const popup = document.querySelector('.popup');
  const popupBtnEditUser = document.querySelector('.popup_type_edit-user')
  const popupBtnAddCard = document.querySelector('.popup_type_add-card')
  const popupBtnClose = document.querySelectorAll('.popup__btn-close')


const formEditUser = document.querySelector('.popup_form_edit')
const formAddCard = document.querySelector('.popup_form_add')
const formZoomImage = document.querySelector('.popup_form_zoom')

const editButton = document.querySelector('.profile__edit-button');
const editButtonClose = document.querySelector('.popup_type_edit-user .popup__container .popup__btn-close')

const addCardButton = document.querySelector('.profile__add-button')
const addCardButtonClose = document.querySelector('.popup_type_add-card .popup__container .popup__btn-close');


const formElement = document.querySelector('.popup__form');
  const nameInput = popup.querySelector('.popup__form_type_name');
  const aboutInput = popup.querySelector('.popup__form_type_about');
  const placeInput = document.querySelector('.popup__form_type_place')
  const placeLinkInput = document.querySelector('.popup__form_type_place-link')

  const profileName = document.querySelector('.profile__name');
  const profileDescription = document.querySelector('.profile__description');

const popupEditCardHeader = popup.querySelector('.popup__header')
const createButton = document.querySelector('.popup__btn-save')

  const template = document.querySelector('.template')
  const itemListWrapper = document.querySelector('.elements__grid')

  const zoomImg = document.querySelector('.popup__zoomCont-image')
  const zoomHeader = document.querySelector('.popup__zoomCont-header')
  const popupZoomImage = document.querySelector('.popup_type_zoom-image')

  const deleteButton = document.querySelector('.element__delete-button')

//Метод 1:
//get cards from array_initialCards
initialCards.forEach(({name, link}) => {
  const newItem = template.content.cloneNode(true)
  newItem.querySelector('.element__description').textContent = name
  newItem.querySelector('.element__img').src = link
  newItem.querySelector('.element__img').setAttribute('alt', name)
  itemListWrapper.append(newItem)
})

//Метод 2:
//get cards from array_initialCards
// const getItem = (header, image) => {
//   const newItem = template.content.cloneNode(true)
//   newItem.querySelector('.element__description').textContent = header
//   newItem.querySelector('.element__img').src = image
//   return newItem
// }

// const renderItem = (wrapper, title, image) => {
//   wrapper.append(getItem(title, image))
// }

// initialCards.forEach(({name, link}) => {
//   renderItem(itemListWrapper, name, link)
// })

const handleDeleteBottom = (evt) => {
  evt.target.closest('.element').remove()
}

const openPopup = (popupType) => {
  popupType.classList.add('popup_opened')
  if (popupBtnEditUser.classList.contains('popup_opened')) {
    nameInput.value = profileName.textContent
    aboutInput.value = profileDescription.textContent
  }
}
const closePopup = (popupType) => {
  popupType.classList.remove('popup_opened')
}
popupBtnClose.forEach((item) => {
  const modal = item.closest('.popup')
  item.addEventListener('click', () => closePopup(modal))
})
editButton.addEventListener('click', () => {
  openPopup(popupBtnEditUser)
})
addCardButton.addEventListener('click', () => {
  openPopup(popupBtnAddCard)
})

const handleFormEditSubmit = (evt) => {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = aboutInput.value

  closePopup(popupBtnEditUser)
}
popupBtnEditUser.addEventListener('submit', handleFormEditSubmit);

const handleFormAddCardSubmit = (evt) => {
  evt.preventDefault()
  const imageTitle = placeInput.value
  const imageLink = placeLinkInput.value
  const newItem = template.content.cloneNode(true)
  newItem.querySelector('.element__description').textContent = imageTitle
  newItem.querySelector('.element__img').src = imageLink
  newItem.querySelector('.element__img').alt = imageTitle
  itemListWrapper.prepend(newItem)
  placeInput.value = ''
  placeLinkInput.value = ''

  const openImage = document.querySelectorAll(".element__img");
openImage.forEach((item) => {
    item.addEventListener("click", openPopupZoomImage)
})
  
  closePopup(popupBtnAddCard)
}
popupBtnAddCard.addEventListener('submit', handleFormAddCardSubmit);

const openPopupZoomImage = (evt) => {
  const imgSrc = evt.target.getAttribute('src')
  const imgAlt = evt.target.getAttribute('alt')

  zoomImg.setAttribute('src', imgSrc)
  zoomImg.setAttribute('alt', imgAlt)
  zoomHeader.textContent = imgAlt

  openPopup(popupZoomImage)
}

const openImage = document.querySelectorAll(".element__img");
openImage.forEach((item) => {
    item.addEventListener("click", openPopupZoomImage)
})


// deleteButton.addEventListener('click', handleDeleteBottom)


// const openImage = document.querySelectorAll(".element__img");
// let imgSrc;
// openImage.forEach((item) => {
//     item.addEventListener("click", (evt) => {
//         const imgSrc = evt.target.src
//         const imgAlt = evt.target.alt
//         openImage.src = imgSrc
//         popupZoomImage.classList.add('popup_opened')
//         popupZoomImage.append(openImage)
//     });
// });



// let imgModal = (src) => {
//   const modal = .createElement("div");
//   modal.setAttribute("class", "modal");
//   //add the modal to the main section or the parent element
//   document.querySelector(".main").append(modal);
//   //adding image to modal
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", src);
//   modal.append(newImage)
// };








// // функция открытия попапа (делает измениния в попапе для addCards)
// function handleToggleBottomClick (event) {
//     popup.classList.toggle('popup_opened');
//     if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__edit-button')) {
//         nameInput.value = profileName.textContent;
//         aboutInput.value = profileDescription.textContent;
//         popupEditCardHeader.textContent = 'Редактировать профиль'
//         createButton.textContent = 'Сохранить'
//     } else if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__add-button')){
//       nameInput.placeholder = 'Название'
//       aboutInput.placeholder = 'Ссылка на картинку'
//       popupEditCardHeader.textContent = 'Новое место'
//       createButton.textContent = 'Создать'
//       nameInput.value = ''
//       aboutInput.value = ''
//     }
// }
// // функция работы попапа по submit
// function handleFormSubmit (event) {
//   event.preventDefault()
//   if (popupEditCardHeader.textContent === 'Новое место') {
//     const imageTitle = nameInput.value
//     const imageLink = aboutInput.value
//     const newItem = template.content.cloneNode(true)
//     newItem.querySelector('.element__description').textContent = imageTitle
//     newItem.querySelector('.element__img').src = imageLink
//     itemListWrapper.prepend(newItem)
//   } else {
//     profileName.textContent = nameInput.value
//     profileDescription.textContent = aboutInput.value
//      }
//   handleToggleBottomClick ()
// }

// editButton.addEventListener('click', handleToggleBottomClick);
// closeButton.addEventListener('click', handleToggleBottomClick);
// addCardButton.addEventListener('click', handleToggleBottomClick);
// formElement.addEventListener('submit', handleFormSubmit);


// addCardButton.addEventListener('submit', (event) => {
//  event.preventDefault()
//  if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__add-button')) {
// const imageTitle = nameInput.value
// const imageLink = aboutInput.value
// const newItem = template.content.cloneNode(true)
// newItem.querySelector('.element__description').textContent = imageTitle
// newItem.querySelector('.element__img').src = imageLink
// itemListWrapper.prepend(newItem)
//  }
// //handleToggleBottomClick ();
// });

//____________________________________________________

//Close Popup
//____________________________________________________


//____________________________________________________

//handleAddButtonClick
//____________________________________________________


//____________________________________________________

//handleAddButtonSubmit
//____________________________________________________


//____________________________________________________

//handleCloseButton
//____________________________________________________


//____________________________________________________



// const images = document.querySelectorAll(".element__img");
// let imgSrc;
// images.forEach((item) => {
//     item.addEventListener("click", (evt) => {
//         imgSrc = evt.target.src;
//         images.src = imgSrc
//         popupZoomImage.classList.add('popup_opened')
//         popupZoomImage.append(images)
//     });
// });

// let imgModal = (src) => {
//   const modal = .createElement("div");
//   modal.setAttribute("class", "modal");
//   //add the modal to the main section or the parent element
//   document.querySelector(".main").append(modal);
//   //adding image to modal
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", src);
//   modal.append(newImage)
// };



// images.addEventListener('click', openImage)







// editButtonClose.addEventListener('click', () => {
//   isOpenPopup(popupEditUser)
// })
// addCardButtonClose.addEventListener('click', () => {
//   isOpenPopup(popupAddCard)
// })





// // функция открытия попапа (делает измениния в попапе для addCards)
// function handleToggleBottomClick (event) {
//     popup.classList.toggle('popup_opened');
//     if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__edit-button')) {
//         nameInput.value = profileName.textContent;
//         aboutInput.value = profileDescription.textContent;
//         popupEditCardHeader.textContent = 'Редактировать профиль'
//         createButton.textContent = 'Сохранить'
//     } else if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__add-button')){
//       nameInput.placeholder = 'Название'
//       aboutInput.placeholder = 'Ссылка на картинку'
//       popupEditCardHeader.textContent = 'Новое место'
//       createButton.textContent = 'Создать'
//       nameInput.value = ''
//       aboutInput.value = ''
//     }
// }
// // функция работы попапа по submit
// function handleFormSubmit (event) {
//   event.preventDefault()
//   if (popupEditCardHeader.textContent === 'Новое место') {
//     const imageTitle = nameInput.value
//     const imageLink = aboutInput.value
//     const newItem = template.content.cloneNode(true)
//     newItem.querySelector('.element__description').textContent = imageTitle
//     newItem.querySelector('.element__img').src = imageLink
//     itemListWrapper.prepend(newItem)
//   } else {
//     profileName.textContent = nameInput.value
//     profileDescription.textContent = aboutInput.value
//      }
//   handleToggleBottomClick ()
// }

// editButton.addEventListener('click', handleToggleBottomClick);
// closeButton.addEventListener('click', handleToggleBottomClick);
// addCardButton.addEventListener('click', handleToggleBottomClick);
// formElement.addEventListener('submit', handleFormSubmit);


// addCardButton.addEventListener('submit', (event) => {
//  event.preventDefault()
//  if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__add-button')) {
// const imageTitle = nameInput.value
// const imageLink = aboutInput.value
// const newItem = template.content.cloneNode(true)
// newItem.querySelector('.element__description').textContent = imageTitle
// newItem.querySelector('.element__img').src = imageLink
// itemListWrapper.prepend(newItem)
//  }
// //handleToggleBottomClick ();
// });




  // Открытие popup
 

//   const handleAddCardButton = (event) => {
//   popup.classList.toggle('popup_opened')
//   if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__add-button')) {
//       nameInput.placeholder = 'Название'
//       aboutInput.placeholder = 'Ссылка на картинку'
//       popupEditCardHeader.textContent = 'Новое место'
//       createButton.textContent = 'Создать'
//   } 
// //   else if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__edit-button')) {
// //     nameInput.value = profileName.textContent;
// //     aboutInput.value = profileDescription.textContent;
// // }
// }





// // const handleAddCardButton = (event) => {
// //   popup.classList.toggle('popup_opened')
// //   if (popup.classList.contains('popup_opened') && event.target.classList.contains('profile__add-button')) {
// //       nameInput.placeholder = 'Название'
// //       aboutInput.placeholder = 'Ссылка на картинку'
// //       popupEditCardHeader.textContent = 'Новое место'
// //       createButton.textContent = 'Создать'
// //   }
// // }
// addCardButton.addEventListener('click', handleAddCardButton)

// // addCardButton.addEventListener('click', function () {
// //   popup.classList.toggle('popup_opened')
// //   if (popup.classList.contains('popup_opened')) {
// //       nameInput.placeholder = 'Название'
// //       aboutInput.placeholder = 'Ссылка на картинку'
// //       popupEditCardHeader.textContent = 'Новое место'
// //       createButton.textContent = 'Создать'
// //   }
// // });

// formElement.addEventListener('submit', event => {
//  event.preventDefault()
//  if (event.target && event.target.classList.contains('profile__add-button')) {
// const imageTitle = nameInput.value
// const imageLink = aboutInput.value
// const newItem = template.content.cloneNode(true)
// newItem.querySelector('.element__description').textContent = imageTitle
// newItem.querySelector('.element__img').src = imageLink
// itemListWrapper.prepend(newItem)
//  }
// //  else {
// //   profileName.textContent = nameInput.value;
// //   profileDescription.textContent = aboutInput.value;
// // }
// handleToggleBottomClick ();

// });










// function keepScore(our, their) {
//   if (our > their) {
//     console.log(`Our is win with score ${our}:${their}`)
//   } else {
//     console.log(`Our is loose with score ${our}:${their}`)
//   }
// }
// const our = 10
// const their = 5
// keepScore(our, their)

// function greeting (name) {
//   let greetingName = `Hello, ${name}`
//   console.log('WWW ', greetingName)
//  return greetingName
// }

// greeting('Alexander')
// qqq = console.log(greeting('Alex'))


// let employee = {
//   firstName: 'Василий',
//   lastName: 'Теркин',
//   age: 28
// };

// console.log(employee)

// function getFullName(param) {
//   return param.firstName + ' ' + param.lastName + ' - мудак намбер ван';
// }
// getFullName(employee);                        //Вызвали функцию с переменной назавания объекта
// employee.qqqName = getFullName(employee);    // объект.ключ присваем новое свойство
// console.log(employee)



// const namesList = {
//   firstName: 'Alexander',
//   lastName: 'Fadin',
//   age: 30
// } 
// console.log(namesList)

// function foolName (arg) {
//   return arg.firstName + ' ' + arg.lastName
// }
// foolName(namesList)
// namesList.foolName = foolName(namesList)
// // console.log(namesList)

// // console.log(Number.isFinite(12))

// const footer = document.querySelector('.footer')
// let a = footer.innerHTML
// console.log(a)
// a = '<p>Fuck</p>'
// console.log(a)

// //document.body.innerHTML = ''
// //footer.innerHTML = ''

// footer.textContent = 'Да ебись оно конем'


// let elephant = document.querySelector('.elephant')

// let zoo = document.querySelector('.zoo')
// zoo.innerHTML += '<div class="tiger"></div>'
// console.log(zoo)


// const tasks = [
//   'Учиться',
//   'Немного секаса',
//   'Помыть писю',
//   'Покушать'
// ]
// console.log(tasks)

// //сделаем массив элементов
// const tasksEl = []
// for (let i = 0; i < tasks.length; i++) {
//   const tasksIt = document.createElement('li')
//   tasksIt.textContent = tasks[i]
//   tasksEl[i] = tasksIt
// }
// console.log(tasksEl[1])

// tasks.forEach((item) => {
//   console.log(item + '!!!')
// })



// const tweets = [
//   {
//   user: '@elonmusk',
//   date: '16 марта 2019 года',
//   text: "I'm from South Africa."
// },
//   {
//   user: '@realDonaldTrump',
//    date: '24 марта 2019 года',
//   text: 'Good Morning, Have A Great Day!'
// },
//   {
//   user: '@BillGates',
//   date: '24 марта 2019 года',
//   text: 'I never ate apple in my life'
// }
// ];

// const tweetsTextOnly = tweets.map(function (el) {
//   return el.text;
// });

// tweetsTextOnly.forEach(function (el) {
//   console.log(el);
// });

// /*
// I'm from South Africa.
// Good Morning, Have A Great Day!
// I never ate apple in my life
// */




//
//
//логика открытия и закрытия ПОПАПОВ
//
//
// function openPopup(popupElement) {
//   // ...
// }

// // эту функцию можно переиспользовать для разных попапов

// editPopupButton.addEventListener('click', function () {
//   openPopup(editPopup); // открываем попап редактирования
// });

// newItemPopupButton.addEventListener('click', function () {
//   openPopup(newItemPopup); // открываем попап добавления
// }); 



// const nums = [4, 8, 15, 16, 23, 42];
// Math.max(...nums)

