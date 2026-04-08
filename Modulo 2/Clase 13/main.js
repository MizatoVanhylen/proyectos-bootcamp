const form = document.getElementById("form");

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputAge = document.getElementById("age");

function validateInput(input, errorId) {
  // Limpiar clases y mensajes usando jQuery
  $(input).removeClass("border-danger border-success");
  $("#" + errorId).text("");

  if (input.value === "") {
    $(input).addClass("border-danger");
    $("#" + errorId).text("Este campo es obligatorio");
    return false;
  }

  if (input === inputAge) {
    const age = Number(input.value);

    if (age < 18) {
      $(input).addClass("border-danger");
      $("#" + errorId).text("Debes ser mayor de edad (18+)");
      return false;
    }
  }

  $(input).addClass("border-success");
  return true;
}

function validateForm(event) {
  event.preventDefault();

  const nameValid = validateInput(inputName, "errorName");
  const emailValid = validateInput(inputEmail, "errorEmail");
  const ageValid = validateInput(inputAge, "errorAge");

  if (nameValid && emailValid && ageValid) {
    alert("Formulario enviado con éxito");
    form.reset();

    $("input").removeClass("border-success");
  } else {
    alert("Debes completar correctamente todos los campos");
  }
}

form.addEventListener("submit", validateForm);


$("#name").blur(function () {
  validateInput(inputName, "errorName");
});

$("#email").blur(function () {
  validateInput(inputEmail, "errorEmail");
});

$("#age").blur(function () {
  validateInput(inputAge, "errorAge");
});
