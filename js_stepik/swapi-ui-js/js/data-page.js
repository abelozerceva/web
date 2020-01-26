import {theme} from './theme.js'

theme.update();

window.addEventListener('storage',(event) => {
    theme.update();
 });

 $(() => {
    var includes = $('[data-include]');
    //document.querySelector("[data-include]").innerText;
    jQuery.each(includes, function(){
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});