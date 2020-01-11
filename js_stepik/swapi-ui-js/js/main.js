$(function(){
    var includes = $('[data-include]');
    //document.querySelector("[data-include]").innerText;
    jQuery.each(includes, function(){
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});
// Здесь хранятся основные настройки темы оформления
let theme = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdd4',
    update: function() {
        document.getElementById('edit').style.backgroundColor = this.secondaryColor;
        $('.content-wrapper')[0].classList.value = `content-wrapper ${this.themeType}`;
        document.getElementById('nav').classList.value = `nav-wrapper navbar-fixed ${this.themeType}`;
        $('.menu-btn')[0].childNodes.forEach(el => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = this.secondaryColor;
            }
        });
        $('.progress-line').each(el => $('.progress-line')[el].style.backgroundColor = this.secondaryColor);
        localStorage.setItem('secondaryColor', this.secondaryColor);
        localStorage.setItem('themeType', this.themeType);
    }
};
// Нужно, чтобы при перезагрузке страницы оформление сохранялось
document.addEventListener('DOMContentLoaded', function () {
    let sColor = localStorage.getItem('secondaryColor');
    let sTheme = localStorage.getItem('themeType');
    if (sColor !== null && sTheme !== null) {
        theme.themeType = sTheme;
        theme.secondaryColor = sColor;
    }
    theme.update();
});
// Открытие меню
$('.menu-btn').on('click',function () {
    $('.menu-wrapper').slideToggle('slow');
 });
// окно настройки оформления
let editPopup = document.querySelector('.edit-popup');
// флаг для открытия/закрытия настройки оформления
let editPopupSwitcher = false;
// обработка нажатия кнопки вызова настройки оформления
$('#edit').on('click', function (){
    this.classList.remove('pulse');
    editPopupSwitcher = !editPopupSwitcher;
    if (editPopupSwitcher) {
        TweenMax.to(editPopup, 1, {x:'2%', display:'block', width:'60%', height:'65hv', ease: Back.easeOut});
    }
    else {
        TweenMax.to(editPopup, 1, {x:'-200%', display:'block', width:'60%', height:'0hv', ease: Power3.easeOut});
    }
});
// закрытие настройки оформления при нажатии по области вне окна настройки
$('.content-wrapper').on('click', function() {
    if (editPopupSwitcher) {
        TweenMax.to(editPopup, 1, {x:'-200%', display:'block', width:'60%', height:'0hv', ease: Power3.easeOut});
        editPopupSwitcher = false;
    }
});
// окно предпросмотра оформения
let preview = $('.preview-wrapper');
// выбор цвета фона
let themeSelect = $('.theme-select');
// сбор компонентов для изменения вторичного цвета(кнопка, линии загрузки)
let previewChild = function() {
    let nodes = [];
    let progressLine = $('.progress-line');
    let button = $('.preview-wrapper>a');
    nodes.push(progressLine[progressLine.length - 1]);
    nodes.push(button[0]);
    return nodes;
};
// доп переменная для хранения предварительных настроек
let themePreview = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdd4'
};
// обработка кнопок смены фона
$('.theme-select').on('click', function(){
    for (let theme of themeSelect) {
        theme.classList.remove('selected-theme');
    }
    this.classList.add('selected-theme');
    if (this.id === 'indigo') {
        preview[0].classList.value = 'preview-wrapper indigo-theme';
        themePreview.themeType = 'indigo-theme';
    }
    else {
        preview[0].classList.value = 'preview-wrapper black-theme';
        themePreview.themeType = 'black-theme';
    }
});
// обработка кнопок смены вторичного цвета
$('.radio-item>label>span').on('click', function() {
    // console.log(previewChild);
    previewChild().forEach(el => el.style.backgroundColor = this.style.color);
    themePreview.secondaryColor = this.style.color;
});
// кнопка сохранения настроек оформления
$('#save-theme-btn').on('click', function () {
    theme.themeType = themePreview.themeType;
    theme.secondaryColor = themePreview.secondaryColor;
    theme.update();
});