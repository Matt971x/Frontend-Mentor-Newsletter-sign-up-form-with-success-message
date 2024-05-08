const submitButton = document.querySelector("#btn-submit");
const wrapperSuccess = document.querySelector(".wrapper-signUp-success");
const wrapperSignUp = document.querySelector(".wrapper-signUp");
const dissmissBtn = document.querySelector(".dissmiss-message");
const span_email_user = document.querySelector(".email_user");

const emailChecker = (value) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return false;
  } else {
    return true;
  }
};
const showEmailError = () => {
  error.style.opacity = 1;
  email.style.border = "1px solid  hsla(4, 100%, 67%)";
  email.style.background = "hsla(4, 100%, 67%, 0.379)";
};
const hideEmailError = () => {
  error.style.opacity = 0;
  email.style.border = "";
  email.style.background = "";
};

const showConfirmPage = () => {
  wrapperSignUp.style.display = "none";
  wrapperSuccess.style.display = "flex";
  span_email_user.textContent = email_user;
};

const hideConfirmPage = () => {
  wrapperSuccess.style.display = "none";
  wrapperSignUp.style.display = "flex";
};

let email_user = "";

email.addEventListener("input", (e) => {
  email_user = e.target.value;
  if (!emailChecker(email_user)) {
    showEmailError();
  } else {
    hideEmailError();
  }
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!emailChecker(email_user)) {
    showEmailError();
  } else {
    showConfirmPage();
  }
});

dissmissBtn.addEventListener("click", () => {
  hideConfirmPage();
});
