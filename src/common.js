// Пример обработки валидной формы.
const requestForms = document.querySelectorAll('.request__form');
requestForms.forEach((form) => {
  form.addEventListener('bouncerFormValid', window.Corners5ProjectLayout.debounce(() => {
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.setAttribute('disabled', '');

    const fd = new FormData(form);

    return $.ajax({
      type: 'POST',
      data: fd,
      url: 'https://run.mocky.io/v3/59531f4b-6f78-43cb-9acc-766963fe2512',
      contentType: false,
      processData: false,
      cache: false,
      async: false,
      dataType: 'json',
      success(data) {
        window.Corners5ProjectLayout.summonAlert('#alert--request');
        form.reset();
        submitButton.removeAttribute('disabled');
      },
      error(data) {
        window.Corners5ProjectLayout.summonAlert('#alert--error');
        submitButton.removeAttribute('disabled');
      },
      complete(data) {

      },
    });
  }));
});