const submitButton = document.querySelector("#btn-submit");
const wrapperSuccess = document.querySelector(".wrapper-signUp-success");
const wrapperSignUp = document.querySelector(".wrapper-signUp");
const dissmissBtn = document.querySelector(".dissmiss-message");

const emailChecker = (value) => {
  if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return false;
  } else {
    return true;
  }
};
let emailAddress = "";

email.addEventListener("input", (e) => {
  emailAddress = e.target.value;
});

submitButton.addEventListener("click", () => {
  if (!emailChecker(emailAddress)) {
    error.style.opacity = 1;
    email.style.border = "1px solid  hsla(4, 100%, 67%)";
    email.style.background = "hsla(4, 100%, 67%, 0.379)";
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
