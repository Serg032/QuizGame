import compareCreatedUsers from "./compare-created-users.js";
import signUpValidation from "./sign-up-validation.js";

const form = document.getElementById("signUpForm") as HTMLFormElement;
const localStorageItem = "userCredentials";

const signUp = () => {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;

  let name = nameInput.value;
  let password = passwordInput.value;

  const validation = signUpValidation(name, password);

  if (!validation) {
    return;
  }

  if (signUpValidation(name, password))
    localStorage.setItem(localStorageItem, JSON.stringify({ name, password }));

  nameInput.value = "";
  passwordInput.value = "";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  compareCreatedUsers(localStorageItem);
  signUp();
});
