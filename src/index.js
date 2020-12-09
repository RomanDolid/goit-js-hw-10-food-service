import './styles.css';
import menu from './js/menu.json';
import itemsTemlate from './templates/menu-items.hbs';

const galleryRef = document.querySelector('.js-menu');
const themeToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const bodyClassGhange = bodyRef.classList;

const markup = itemsTemlate(menu);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const currentTheme = localStorage.getItem('theme');
currentStatus(currentTheme);

galleryRef.insertAdjacentHTML('beforeend', markup);
themeToggleRef.addEventListener('change', changeClassTheme);

function changeClassTheme() {
  themeToggleRef.checked
    ? themeSetStorage(Theme.DARK)
    : themeSetStorage(Theme.LIGHT);
}

function themeSetStorage(optionTheme) {
  localStorage.setItem('theme', optionTheme);
  bodyClassGhange.add(optionTheme);
  if (optionTheme === Theme.DARK) {
    bodyClassGhange.remove(Theme.LIGHT);
  } else {
    bodyClassGhange.remove(Theme.DARK);
  }
}

function currentStatus(thema) {
  if (thema) {
    bodyClassGhange.add(thema);
    if (thema === Theme.DARK) {
      themeToggleRef.checked = true;
    }
  }
}
