const form = document.querySelector("form.login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all fields!");
  }
  // console.log(`Login: ${email.value}, Password: ${password.value}`);
  const user = {};
  user.email = email.value;
  user.value = password.value;
  console.log(user);

  const newBank = user;

  event.currentTarget.reset();
}
