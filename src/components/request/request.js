import './request.scss';
import Inputmask from 'inputmask';
import {
  validateForm,
  maskPhone,
} from '../validator/validator';
import {
  setTextareaAutoHeight,
} from '../../utils/utils';

const requestForm = document.querySelector('.request__form');
if (requestForm) {
  validateForm('.request__form');
  maskPhone('.request__form');
  setTextareaAutoHeight('.request__form textarea');
}

