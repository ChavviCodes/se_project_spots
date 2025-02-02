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

const profileModalName = editModal.querySelector(`#profile-name-input`);
const profileModalDescription = editModal.querySelector(`#profile-description-input`);
const profileName = document.querySelector(`.profile__name`);
const profileDescription = document.querySelector(`.profile__description`);

const modalSubmitBtn = editModal.querySelector(`.modal__submit-btn`);

function openModal() {
  editModal.classList.add(`modal__opened`);
profileModalName.value = profileName.textContent;
profileModalDescription.value = profileDescription.textContent;
}

function closeModal() {
  editModal.classList.remove(`modal__opened`);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileModalName.value = profileName.textContent;
  editModal.classList.remove(`modal__opened`);
  // Working on submit btn... Trying to make the values of the modal'
  // appear in the profile. WIP
}

profileEditBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

modalSubmitBtn.addEventListener("submit", handleProfileFormSubmit);
