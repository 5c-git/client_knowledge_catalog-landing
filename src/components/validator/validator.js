import './validator.scss';
import Inputmask from 'inputmask';
import Bouncer from 'formbouncerjs';
import Choices from 'choices.js';

// ===== УТИЛИТЫ =====
const getDescription = (field, deep = false) => {
  if (deep) {
    return field.parentElement?.parentElement?.parentElement?.querySelector('.validator__description') || null;
  }
  return field.parentElement?.querySelector('.validator__description') || null;
};

const setState = (field, isValid, description = null) => {
  field.classList.toggle('validator__input--valid', isValid);
  field.classList.toggle('validator__input--error', !isValid);

  if (description) {
    description.classList.toggle('validator__description--valid', isValid);
    description.classList.toggle('validator__description--error', !isValid);
  }

  field.setAttribute('aria-invalid', String(!isValid));
  return !isValid; // Bouncer ждёт true если ошибка
};

// ===== ПАТТЕРНЫ =====
const patterns = {
  text: /^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/,
  textarea: /^([\wА-Яа-яЁё\s-!$%^&*()_+|~=`{}\[\]:;<>?",.@#№'"«»\\/]+)*$/,
  email: /^[a-zA-ZА-Яа-я0-9._-]+@[a-zA-ZА-Яа-я-]+\.[a-zA-ZА-Яа-я]{2,}$/,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,64}$/,
};

// ===== КАСТОМНЫЕ ВАЛИДАТОРЫ =====
const validators = {
  required(field) {
    if (!field.classList.contains('validator__required')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    return setState(field, field.value.trim() !== '', description);
  },

  text(field) {
    if (!field.classList.contains('validator__text')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    const isValid = patterns.text.test(field.value) &&
      field.value.length >= 2 &&
      field.value.length <= 225;

    return setState(field, isValid, description);
  },

  textarea(field) {
    if (!field.classList.contains('validator__textarea')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    const isValid = patterns.textarea.test(field.value) &&
      field.value.length >= 4 &&
      field.value.length <= 225;

    return setState(field, isValid, description);
  },

  number(field) {
    if (!field.classList.contains('validator__number')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    const isValid = field.value.length >= 1 && field.value.length <= 225;

    return setState(field, isValid, description);
  },

  minmax(field) {
    if (!field.classList.contains('validator__minmax')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    const min = parseInt(field.getAttribute('minlength'), 10) || 0;
    const max = parseInt(field.getAttribute('maxlength'), 10) || Infinity;

    const isValid = field.value.length >= min && field.value.length <= max;
    return setState(field, isValid, description);
  },

  email(field) {
    if (!field.classList.contains('validator__mail')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    return setState(field, patterns.email.test(field.value), description);
  },

  ruPhone(field) {
    if (!field.classList.contains('validator__phone')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    return setState(field, field.value.length === 10, description);
  },

  intPhone(field) {
    if (!field.classList.contains('validator__country-phone')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    const maskLength = field.getAttribute('data-mask')?.length || 0;
    return setState(field, field.value.length === maskLength, description);
  },

  password(field) {
    if (!field.classList.contains('validator__password')) return false;
    if (field.disabled) return false;

    const description = getDescription(field);
    return setState(field, patterns.password.test(field.value), description);
  },

  passwordMatch(field) {
    const selector = field.getAttribute('data-bouncer-match');
    if (!selector) return false;
    if (field.disabled) return false;

    const otherField = field.form.querySelector(selector);
    if (!otherField) return false;

    return setState(field, otherField.value === field.value, getDescription(field));
  },

  select(field) {
    if (!field.classList.contains('validator__select')) return false;
    if (field.disabled) return false;

    const isValid = field.options[field.selectedIndex]?.value !== '';
    return setState(field.parentElement, isValid);
  },

  choices(field) {
    if (!field.classList.contains('validator__choices')) return false;
    if (field.disabled) return false;

    const wrapper = field.parentElement;
    const description = getDescription(field);

    // Сброс ошибок при изменении
    field.addEventListener('change', () => {
      wrapper.classList.remove('validator__input--error');
      if (description) description.classList.remove('validator__description--error');
    });

    const isValid = field.hasAttribute('multiple')
      ? field.selectedIndex !== -1
      : field.options[field.selectedIndex].value !== '';

    wrapper.classList.toggle('validator__input--valid', isValid);
    wrapper.classList.toggle('validator__input--error', !isValid);

    if (description) {
      description.classList.toggle('validator__description--valid', isValid);
      description.classList.toggle('validator__description--error', !isValid);
    }

    return !isValid;
  },

  checkbox(field) {
    if (!field.classList.contains('validator__checkbox')) return false;
    if (field.disabled) return false;

    const { name } = field.dataset;
    const list = document.querySelectorAll(`.validator__checkbox[data-name="${name}"]`);

    const isValid = Array.from(list).some((el) => el.checked);

    list.forEach((el) => {
      el.classList.toggle('validator__input--valid', isValid);
      el.classList.toggle('validator__input--error', !isValid);
    });

    return !isValid;
  },
};


const validateForm = (formSelector) => {
  const formEl = document.querySelector(formSelector);

  let validator = new Bouncer(formSelector, {
    fieldClass: 'validator__input--error',
    errorClass: 'validator__error',
    disableSubmit: true,
    emitEvents: true,
    patterns: {
      email: /^[a-zA-ZА-Яа-я0-9._-]+@[a-zA-ZА-Яа-я-]+\.[a-zA-ZА-Яа-я]{2,}$/,
    },
    customValidations: validators, // подключаем объект кастомных валидаторов
    messages: {
      missingValue: {
        default: 'Поле обязательно для заполнения!',
        file: 'Необходимо загрузить хотя бы один файл!',
        tel: 'Проверка на телефон!',
      },
      patternMismatch: {
        default: 'Значение поля не удовлетворяет требованиям!',
      },
      wrongLength: {
        over: 'wrongLength over',
        under: 'wrongLength under',
      },
      outOfRange: {
        over: 'outOfRange over',
        under: 'outOfRange under',
      },
      text: 'Неправильно!',
      textarea: 'Неправильно!',
      number: 'Допускаются только цифры!',
      ruPhone: 'Введите телефон!',
      intPhone: 'Выбери и введи международный телефон!',
      password: 'Пароль должен быть длиной не менее 8 символов, содержать хотя бы одну цифру, строчную и заглавную латинскую букву, а также спецсимвол.',
      passwordMatch: 'Пароли не совпадают.',
      required: 'Необходимо заполнить поле!',
    },
  });

  // Игнорируем disabled fieldset
  const oldValidate = validator.validate;
  validator.validate = (field, options) => {
    if (field.closest('fieldset')?.disabled) return false;
    return oldValidate(field, options);
  };

  // Сбрасываем состояние при reset формы
  formEl.addEventListener('reset', () => {
    validator.destroy();
    validator = validateForm(formSelector);

    formEl.querySelectorAll('.validator__description').forEach(desc => {
      desc.classList.remove('validator__description--error', 'validator__description--valid');
    });
    formEl.querySelectorAll('.validator__input--valid, .validator__input--error').forEach(input => {
      input.classList.remove('validator__input--valid', 'validator__input--error');
    });
    formEl.querySelectorAll('textarea').forEach(textarea => {
      textarea.style.overflowY = 'hidden';
    });
  });

  return validator;
};


const maskNumber = (formSelector, maxNumber) => {
  const numberMask = new Inputmask(`9{0,${maxNumber}}`, {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: '',
  });

  const inputs = document.querySelectorAll(`${formSelector} .validator__number`);
  inputs.forEach((field) => numberMask.mask(field));
};

const maskPhone = (formSelector, phoneClass) => {
  const phoneMask = new Inputmask('+7 [(999) 999-99-99]', {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: '',
  });

  const phonesContainers = document.querySelectorAll(`${formSelector}`);
  if (phonesContainers.length > 0) {
    phonesContainers.forEach((phonesContainer) => {
      const inputs = phonesContainer.querySelectorAll('.validator__phone');

      inputs.forEach((phone) => {
        phoneMask.mask(phone);
      });
    });
  }
};


const initPasswordEye = (formSelector) => {
  document.querySelectorAll(formSelector).forEach((container) => {
    container.querySelectorAll('.validator__eye').forEach((eye) => {
      const input = eye.closest('label, .validator__password-wrapper')?.querySelector('input[type="password"]')
        || eye.parentElement.querySelector('input[type="password"]');
      if (!input) return;

      eye.addEventListener('click', () => {
        eye.classList.toggle('validator__eye--open');
        input.type = input.type === 'password' ? 'text' : 'password';
      });
    });
  });
};


const initFileLoadInput = (form, template) => {
  const FILE_TYPES = ['jpg', 'jpeg', 'gif', 'png'];
  const filesForm = document.querySelector(`${form}`);
  const filesContainer = filesForm.querySelector('.validator__file-container');
  const loadInput = filesContainer.querySelector('.validator__file-input');
  const sizeWarning = filesContainer.querySelector('.validator__size-warning');
  const loadedFilesContainer = filesForm.querySelector('.validator__loaded-files');
  const cleaner = filesForm.querySelector('.validator__cleaner');
  const submitButton = filesForm.querySelector('button[type="submit"]');
  cleaner.style.display = 'none';

  filesForm.addEventListener('reset', () => {
    filesContainer.innerHTML = '';
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = '';
    initFileLoadInput(`${form}`, template);
  }, { once: true });

  cleaner.addEventListener('click', () => {
    filesContainer.innerHTML = '';
    filesContainer.innerHTML = template;
    loadedFilesContainer.innerHTML = '';
    initFileLoadInput(`${form}`, template);
    submitButton.classList.remove('validator__submit--disabled');
    submitButton.disabled = false;
  });

  loadInput.addEventListener('change', () => {
    const files = Object.values(loadInput.files);

    loadedFilesContainer.innerHTML = '';

    let totalSize = 0;

    files.forEach((file) => {
      totalSize += file.size;
    });

    if (totalSize > 0) {
      cleaner.style.display = 'grid';
    } else {
      cleaner.style.display = 'none';
    }

    for (let i = 0; i < files.length; i += 1) {
      const fileName = files[i].name.toLowerCase();
      if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
        submitButton.classList.add('validator__submit--disabled');
        submitButton.disabled = true;

        sizeWarning.classList.add('validator__size-warning--exeeded');
        sizeWarning.textContent = 'Недопустимый тип файлов!';

        return;
      }
    }

    if (totalSize < 10485760 && files.length <= 3) {
      sizeWarning.classList.remove('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Допускается не более 3-х файлов в формате .jpeg, .gif, .png. Размер не более 10 MB.';

      files.forEach((file) => {
        let str = file.size;
        str = str.toString();
        str = Math.ceil(str / 1024);
        const fileTemplate = `
          <div class="validator__file">
            <p class="validator__file-name">${file.name}</p>
            <p class='validator__size'>${str}&nbsp;КБ</p>
          </div>
          `;

        loadedFilesContainer.insertAdjacentHTML('beforeend', fileTemplate);
      });

      submitButton.classList.remove('validator__submit--disabled');
      submitButton.disabled = false;
    } else if (totalSize > 10241440) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;

      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Размер файлов не должен превышать 10 МБ!';
    } else if (files.length > 3) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;

      sizeWarning.classList.add('validator__size-warning--exeeded');
      sizeWarning.textContent = 'Превышен лимит количества файлов!';
    }
  });
};


const initSelectValidation = (formSelector) => {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer) return;

  formContainer.querySelectorAll('.validator__select').forEach((select) => {
    const parent = select.parentElement;
    if (!parent) return;

    select.addEventListener('change', () => {
      parent.classList.remove('validator__input--error');
    });
  });
};


const initChoicesValidation = (formSelector) => {
  const formContainer = document.querySelector(formSelector);
  if (!formContainer) return;

  formContainer.querySelectorAll('.validator__choices').forEach((select) => {
    const field = select.closest('.validator__field') || select.parentElement?.parentElement?.parentElement;
    if (!field) return;

    const description = field.querySelector('.validator__description');
    const customSelect = field.querySelector('.choices__inner');
    if (!customSelect) return;

    select.addEventListener('change', () => {
      customSelect.classList.remove('validator__input--error');
      description?.classList.remove('validator__description--error');
    });
  });
};


const focusFirstInput = (form) => {
  const formContainer = document.querySelector(`${form}`);
  const input = formContainer.querySelector('input');
  input.focus();
};

const initAgreeCheckbox = (form) => {
  const checkboxContainer = document.querySelector(`${form}`);
  const checkboxLabel = checkboxContainer.querySelector('.validator__legal');
  const checkbox = checkboxContainer.querySelector('.validator__agree');
  const submitButton = checkboxContainer.querySelector('button[type="submit"]');

  checkboxLabel.addEventListener('click', () => {
    const isExeeded = checkboxContainer.querySelector('.validator__size-warning--exeeded');

    if (isExeeded) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;

      if (checkbox.checked === true) {
        checkbox.checked = false;
      } else {
        checkbox.checked = true;
      }
    } else if (checkbox.checked === true) {
      submitButton.classList.add('validator__submit--disabled');
      submitButton.disabled = true;
      checkbox.setAttribute('checked', false);
    } else {
      submitButton.classList.remove('validator__submit--disabled');
      submitButton.disabled = false;
      checkbox.setAttribute('checked', true);
    }
  });
};

export {
  validateForm,
  maskNumber,
  maskPhone,
  initPasswordEye,
  initFileLoadInput,
  initSelectValidation,
  initChoicesValidation,
  focusFirstInput,
  initAgreeCheckbox,
};
