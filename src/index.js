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
    localStorage.setItem('theme', Theme.DARK);
    bodyRef.classList.add(Theme.DARK);
    bodyRef.classList.remove(Theme.LIGHT);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRef.classList.add(Theme.LIGHT);
    bodyRef.classList.remove(Theme.DARK);
  }
}

function currentStatus() {
  if (currentTheme) {
    bodyRef.classList.add(currentTheme);
    if (currentTheme === Theme.DARK) {
      themeToggleRef.checked = true;
    }
  }
}
