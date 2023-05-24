const btnShowForm = document.querySelector(".footer__btn");
export const formShow = document.querySelector(".block__form");
const closeForm = document.querySelector(".form__close");
export const body = document.querySelector(".body");
export const form = document.querySelector("#form");

const toggleForm = () => {
  formShow.classList.toggle("active");
  body.classList.add("active");
};

export const stopPropagation = (e) => {
  e.stopPropagation();
};

form.addEventListener("click", stopPropagation);

export const showForm = () => {
  btnShowForm.addEventListener("click", toggleForm);
  formShow.addEventListener("click", (e) => {
    if (e.target) {
      formShow.classList.remove("active");
      body.classList.remove("active");
    }
  });
  closeForm.addEventListener("click", (e) => {
    if (e.target) {
      formShow.classList.remove("active");
      body.classList.remove("active");
    }
  });
};
