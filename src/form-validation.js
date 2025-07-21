
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("paymentForm");
  const alertBox = document.getElementById("errorAlert");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    let errors = [];

    const fields = form.querySelectorAll("input, select, textarea");

    fields.forEach((field) => {
      field.classList.remove("is-invalid");

      if (!field.checkValidity()) {
        field.classList.add("is-invalid");
        isValid = false;

        const label = field.closest(".form-group, .col-md-3, .col-md-5, .col-md-6, .col-md-4")?.querySelector("label")?.innerText || "This field";

        if (field.validity.valueMissing) {
          errors.push(`${label} is required`);
        } else if (field.validity.patternMismatch || field.validity.typeMismatch) {
          errors.push(`${label} has invalid format`);
        }
      }
    });

    if (!isValid) {
      alertBox.innerHTML = errors.join("<br>");
      alertBox.classList.remove("d-none");
    } else {
      alertBox.classList.add("d-none");
      form.submit(); // Puedes reemplazar esto por una petición fetch si no quieres recargar
    }
  });
});
