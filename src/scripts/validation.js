import { formShow } from "./showForm";
import { showPopup } from "./popup";
import { body } from "./showForm";
export const validate = () => {
  const form = document.getElementById("form");
  const errorMessages = document.querySelectorAll(".error-messages");
  const nameError = errorMessages[0];
  const emptyInput = (input, error, message) => {
    if (!input.value.trim()) {
      error.innerHTML = message;
      return false;
    } else {
      error.innerHTML = "";
      return true;
    }
  };
  const validateEmail = (email, error) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email, error);
  };
  function validateName(name, error) {
    const re = /^[a-zA-Zа-яА-Я]+$/;

    return re.test(name, error);
  }

  form.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      const nameInput = this.querySelector("#name");
      const emailInput = this.querySelector("#email");
      const messageInput = this.querySelector("#textarea");
      const isNameValid =
        emptyInput(nameInput, errorMessages[0], "Поле не заполнено") &&
        validateName(
          nameInput.value,
          (errorMessages[0].innerHTML += "Только буквы")
        );
      const isEmailValid =
        emptyInput(emailInput, errorMessages[1], "Поле не заполнено") &&
        validateEmail(
          emailInput.value,
          (errorMessages[1].innerHTML += "Неккоректный email")
        );
      const isMessageValid = emptyInput(
        messageInput,
        errorMessages[2],
        "Поле не заполнено"
      );

      if (!isNameValid) {
        return;
      } else {
        nameError.innerHTML = "";
      }

      if (!isEmailValid) {
        return;
      } else {
        errorMessages[1].innerHTML = "";
      }

      if (isNameValid && isEmailValid && isMessageValid) {
        const data = {
          name: nameInput.value,
          email: emailInput.value,
          message: messageInput.value,
        };

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };

        fetch("/", options)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              formShow.classList.remove("active");
              body.classList.remove("active");
              showPopup();
              throw new Error("Ошибка сети");
            }
          })
          .then((json) => {
            console.log(json);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }.bind(form)
  );
};
