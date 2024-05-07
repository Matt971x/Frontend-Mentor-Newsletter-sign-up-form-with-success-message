const submitButton = document.querySelector("#btn-submit");
const wrapperSuccess = document.querySelector(".wrapper-signUp-success");
const wrapperSignUp = document.querySelector(".wrapper-signUp");
const dissmissBtn = document.querySelector(".dissmiss-message");
const mailSpan = document.querySelector(".emailAddress");

const emailChecker = (value) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return false;
  } else {
    return true;
  }
};

let isValid;
let emailAddress = "";

email.addEventListener("input", (e) => {
  if (!emailChecker(e.target.value)) {
    error.style.opacity = 1;
    email.style.border = "1px solid  hsla(4, 100%, 67%)";
    email.style.background = "hsla(4, 100%, 67%, 0.379)";
    isValid = false;
  } else {
    error.style.opacity = 0;
    email.style.border = "1px solid  lightgray";
    email.style.background = "white";
    isValid = true;
    emailAddress = e.target.value;
  }
});

submitButton.addEventListener("click", (e) => {
  if (!isValid) {
    error.style.opacity = 1;
  } else {
    wrapperSignUp.style.display = "none";
    wrapperSuccess.style.display = "block";
    mailSpan.textContent = emailAddress;
  }
});

dissmissBtn.addEventListener("click", () => {
  wrapperSuccess.style.display = "none";
  wrapperSignUp.style.display = "flex";
});
