import {
  validateForm, maskNumber, maskPhone,
  initPasswordEye, initAgreeCheckbox, initFileLoadInput,
  initSelectValidation, initChoicesValidation,
} from '../validator/validator';
import { summonPopUp, removePopUp } from '../popUp/popUp';
import findVideos from '../video/video';
import { summonAlert, removeAlert } from '../alert/alert';
import {
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  activateRequestButtons,
  updateButtonState,
} from '../../utils/utils';

window.Corners5ProjectLayout = {
  validation: {
    validateForm,
    maskNumber,
    maskPhone,
    initPasswordEye,
    initAgreeCheckbox,
    initFileLoadInput,
    initSelectValidation,
    initChoicesValidation,
  },
  summonPopUp,
  removePopUp,
  findVideos,
  summonAlert,
  removeAlert,
  getPaddingOnBody,
  getPaddingFromBody,
  getScrollbarWidth,
  createFormData,
  setTextareaAutoHeight,
  setStatus,
  startTimer,
  debounce,
  activateRequestButtons,
  updateButtonState,
};
