const refs = {
  input: document.querySelector("#phone"),
  inputName: document.querySelector("#name"),
  error: document.querySelector(".alert-error"),
  info: document.querySelector(".alert-info"),
  modal: document.querySelector("[data-modal]"),
};

const phoneInput = window.intlTelInput(refs.input, {
  preventInvalidNumbers: true,
  separateDialCode: true,
  excludeCountries: ["ru", "by"],
  preferredCountries: ["ua", "pl", "gb", "us"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

refs.inputName.addEventListener("input", emptyInput);

function process(event) {
  event.preventDefault();

  const phoneNumber = phoneInput.getNumber();

  refs.error.style.display = "none";
  //   refs.info.style.display = "none";

  if (phoneInput.isValidNumber()) {
    refs.input.style.borderColor = "green";
    // refs.modal.classList.toggle("is-hidden");
    return true;
  } else {
    refs.error.style.display = "";
    refs.error.classList.add("visual");
    refs.error.innerHTML = `Invalid phone number.`;
    refs.input.style.borderColor = "red";
    return false;
  }
}

function emptyInput(event) {
  if (refs.inputName.value === "") {
    refs.info.style.display = "";
    refs.info.classList.add("visual");
    refs.info.innerHTML = `This line is empty.`;
    refs.inputName.style.borderColor = "red";
  } else {
    refs.info.innerHTML = "";
    refs.inputName.style.borderColor = "green";
  }
}
