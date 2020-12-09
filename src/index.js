import './styles.css';
import menu from './js/menu.json';
import itemsTemlate from './templates/menu-items.hbs';

const galleryRef = document.querySelector('.js-menu');
const themeToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markup = itemsTemlate(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const currentTheme = localStorage.getItem('theme');
currentStatus();

galleryRef.insertAdjacentHTML('beforeend', markup);
themeToggleRef.addEventListener('change', changeClassTheme);

function changeClassTheme() {
  if (themeToggleRef.checked) {
    themeSetStorage(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    themeSetStorage(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}

function themeSetStorage(optionTheme) {
  localStorage.setItem('theme', optionTheme);
  bodyRef.classList.add(optionTheme);
}

function currentStatus() {
  if (currentTheme) {
    bodyRef.classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      themeToggleRef.checked = true;
    }
  }
}
