const form = document.querySelector("[data-form]");
const inputEmail = document.querySelector("#inputEmail");
const errorMessage = document.querySelector(".error__message");

function validate(input) {
  const validity = input.validity;
  const btnSubmit = document.querySelector("[data-btn-submit]");

  if (validity.valueMissing) {
    input.setCustomValidity(
      "Whoops! It looks like you forgot to add your email"
    );
    errorMessage.textContent =
      "Whoops! It looks like you forgot to add your email";
    input.style.border = "1px solid hsl(354, 100%, 66%)";
    btnSubmit.style.marginBottom = "1.1rem"
  } else if (validity.typeMismatch) {
    input.setCustomValidity("Please provide a valid email address");
    errorMessage.textContent = "Please provide a valid email address";
    input.style.border = "1px solid hsl(354, 100%, 66%)";
    btnSubmit.style.marginBottom = "1.1rem"
  } else if (validity.patternMismatch) {
    input.setCustomValidity("Please provide a valid email address");
    errorMessage.textContent = "Please provide a valid email address";
    input.style.border = "1px solid hsl(354, 100%, 66%)";
    btnSubmit.style.marginBottom = "1.1rem"
  } else {
    input.setCustomValidity("");
    errorMessage.textContent = "";
    inputEmail.value = "";
    input.style.border = "1px solid hsl(223, 100%, 88%)";
  }
}

inputEmail.addEventListener("invalid", (e) => {
  e.preventDefault();
  validate(inputEmail);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    validate(inputEmail);
  } else {
    e.preventDefault();
  }
});
