const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
];

console.log(initialCards);

const editModal = document.querySelector(`#edit-modal`);
const profileEditBtn = document.querySelector(`.profile__edit-button`);
const closeBtn = editModal.querySelector(`.modal__close-btn`);

const profileName = document.querySelector(`.profile__name`);
const editModalNameInput = editModal.querySelector(`#profile-name-input`);
const profileDescription = document.querySelector(`.profile__description`);
const editModalDescriptionInput = editModal.querySelector(
  `#profile-description-input`
);

const postModal = document.querySelector(`#add-card-modal`);
const postBtn = document.querySelector(`.profile__add-button`);
const postModalCloseBtn = postModal.querySelector(`.modal__close-btn`);

const postModalNameInput = postModal.querySelector(`#add-card-name-input`);
const postModalLinkInput = postModal.querySelector(`#add-card-link-input`);

const editFormElement = editModal.querySelector(`.modal__form`);
const cardFormElement = postModal.querySelector(`.modal__form`);

const cardTemplate = document.querySelector(`#card-template`);
const cardsList = document.querySelector(`.cards__list`);

const previewModal = document.querySelector(`#preview-modal`);
const previewModalImageEl = previewModal.querySelector(`.modal__image`);
const previewModalCaptionEl = previewModal.querySelector(`.modal__caption`);

const previewModalCloseBtn = previewModal.querySelector(
  `.modal__close-btn_type_preview`
);

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(`.card`)
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(`.card__title`);
  const cardImgEl = cardElement.querySelector(`.card__image`);
  const cardLikeBtn = cardElement.querySelector(`.card__like-button`);
  const cardDeleteBtn = cardElement.querySelector(`.card__delete-button`);

  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  cardNameEl.textContent = data.name;

  cardLikeBtn.addEventListener(`click`, () => {
    cardLikeBtn.classList.toggle(`card__like-button_liked`);
  });

  cardImgEl.addEventListener(`click`, () => {
    openModal(previewModal);
    previewModalImageEl.src = data.link;
    previewModalCaptionEl.textContent = data.name;
    previewModalImageEl.alt = data.name;
  });

  cardDeleteBtn.addEventListener(`click`, () => {
    cardElement.remove();
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add(`modal_opened`);
}

function closeModal(modal) {
  modal.classList.remove(`modal_opened`);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal(editModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    name: postModalNameInput.value,
    link: postModalLinkInput.value,
    alt: postModalNameInput.value,
  };
  const cardElement = getCardElement(inputValues);
  cardsList.prepend(cardElement);
  closeModal(postModal);
}

postBtn.addEventListener("click", () => {
  openModal(postModal);
});

postModalCloseBtn.addEventListener("click", () => {
  closeModal(postModal);
});

profileEditBtn.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});

closeBtn.addEventListener("click", () => {
  closeModal(editModal);
});

previewModalCloseBtn.addEventListener(`click`, () => {
  closeModal(previewModal);
});

editFormElement.addEventListener(`submit`, handleEditFormSubmit);
cardFormElement.addEventListener(`submit`, handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.prepend(cardElement);
});
