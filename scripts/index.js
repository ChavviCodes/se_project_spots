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

const editFormElement = editModal.querySelector(`.modal__form`);

const cardTemplate = document.querySelector(`#card-template`);
const cardsList = document.querySelector(`.cards__list`);

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(`.card`)
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(`.card__title`);
  const cardImgEl = cardElement.querySelector(`.card__image`);
  cardImgEl.src = data.link;
  cardImgEl.alt = data.name;
  cardNameEl.textContent = data.name;

  return cardElement;
}

function openModal() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editModal.classList.add(`modal_opened`);
}

function closeModal() {
  editModal.classList.remove(`modal_opened`);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

profileEditBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

editFormElement.addEventListener(`submit`, handleEditFormSubmit);

for (let i = 0; i < initialCards.length; i++) {
  const cardElement = getCardElement(initialCards[i]);
  cardsList.prepend(cardElement);
}
