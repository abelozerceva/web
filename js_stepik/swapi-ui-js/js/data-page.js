import {theme} from './theme.js'

theme.update();

window.addEventListener('storage',function (event) {
    theme.update();
 });