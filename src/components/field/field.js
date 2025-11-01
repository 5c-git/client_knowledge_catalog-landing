import './field.scss';
import Choices from 'choices.js';

const initFieldSelect = (func) => {
  const selects = document.querySelectorAll('.field__input--select:not(.field__input--select--js)');
  if (selects.length > 0) {
    selects.forEach((select) => {
      select.classList.add('field__input--select--js');

      const choicesNolint = new Choices(select, {
        searchEnabled: 'search' in select.dataset,
        shouldSort: false,
        classNames: {
          containerOuter: 'choices field__choices',
          input: 'field__input',
        },
        itemSelectText: '',
      });

      // Убирает подсвеченный пункты при закрытии выпадающего списка.
      select.addEventListener('hideDropdown', () => {
        document
          .querySelector('.field__choices')
          .querySelectorAll('.is-highlighted')
          .forEach((el) => {
            el.classList.remove('is-highlighted');
          });
      });

      if (func) {
        select.addEventListener('addItem', (event) => {
          func(event);
        });
      }

      const form = select.closest('form');
      form.addEventListener('reset', () => {
        choicesNolint.setChoiceByValue('');
      });
    });
  }
};

initFieldSelect();
