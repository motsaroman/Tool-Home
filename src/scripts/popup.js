import { body } from "./showForm";
import { stopPropagation } from "./showForm";
const popupWrap = document.querySelector(".popup__wrap");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close_img");

popup.addEventListener("click", stopPropagation);

const closePopup = () => {
  popupClose.addEventListener("click", (e) => {
    if (e.target) {
      popupWrap.classList.remove("active");
      body.classList.remove("active");
    }
  });
};
const closePopupWrap = () => {
  popupWrap.addEventListener("click", (e) => {
    if (e.target) {
      popupWrap.classList.remove("active");
      body.classList.remove("active");
    }
  });
};

export const showPopup = () => {
  setTimeout(() => {
    popupWrap.classList.add("active");
    popup.classList.add("active");
    body.classList.add("active");
  }, 500);
  closePopup();
  closePopupWrap();
};
