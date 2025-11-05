import './mobile-nav.scss';
import {
  getPaddingOnBody,
  getPaddingFromBody,
} from '../../utils/utils';

const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobile-nav');
if (mobileNav) {
  const links = mobileNav.querySelectorAll('.mobile-nav__link');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      getPaddingFromBody();
      if (header) {
        header.classList.remove('header--dropdown');
      }
    });
  });
}