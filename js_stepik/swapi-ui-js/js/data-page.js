// Общая тема 
import {theme} from './theme.js'
// обновление оформления страницы
theme.update();

window.addEventListener('storage',(event) => {
    theme.update();
 });

 $(() => {
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
        var file = 'components/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});
// переменная для хранения персонажей
let peoples = [];
// следующая страница персонажей
let nextPeoplesPage = '';
// предыдущая страница персонажей
let prevPeoplesPage = '';
// 
let cupPeoples = [];
// создание карточки для персонажа
function Personage(pers) {
    return `<div class="personage-item_container" id="pers_${pers.i}" style="flex: 1;transform: translateY(70%)">
         <h5 style="margin: 0 auto">${pers.name}</h5>
         <p>Родился ${pers.birth_year}</p>
     </div>`;
 };
//  отрисовка карточки, анимация ее показа
 function drawPersonages(startIndex=0,endIndex=3){
    cupPeoples = peoples.slice(startIndex,endIndex);
 
    let HTMLPeoples = cupPeoples.map(el=>Personage(el));
 
    $('.personages_container')[0].innerHTML = HTMLPeoples.join('');
 
    $('.personage-item_container').on('click',function () {
       if (this.style.transform === "translate(0%, 10%) matrix(1, 0, 0, 1, 0, 0)") {
          TweenMax.to(this,0.6,{y:'70%',ease:Power4.easeOut})
       } else {
          TweenMax.to(this,0.6,{y:'10%',ease:Back.easeOut})
       }
    });
 };
//  обработка API для заполнения карточек персонажей
 window.onload = async function () {
    let res = await fetch('https://swapi.co/api/people/').then(res => res.json());
 
    peoples = res.results.map( (el,i) => {
       el.i = i;
       return el;
    });
 
    nextPeoplesPage = res.next;
    prevPeoplesPage = res.previous;
 
    drawPersonages();
 };
// загрузка следующей/предыдущей страницы с описанием персонажей с сервера
 let load = async function loadNewPeoplesPage(url){
   let {next,previous,results} = await fetch(url).then(res => res.json());

   nextPeoplesPage = next;
   prevPeoplesPage = previous;

   peoples = results.map( (el,i) => {
      el.i = i;
      return el;
   });

   drawPersonages();
};
// стрелка вперед для персонажей
document.getElementById('next').addEventListener('click',() => {
   let lastInCurrentCup = cupPeoples[cupPeoples.length-1].i;

   if (lastInCurrentCup !== peoples.length-1){
      drawPersonages(lastInCurrentCup+1,lastInCurrentCup+4);
   }
   else {
      if (nextPeoplesPage!==null){
         load(nextPeoplesPage);
      }
   }
});
// стрелка назад для персонажей
document.getElementById('prev').addEventListener('click',() => {
   let firstInCurrentCup = cupPeoples[0].i;
   console.log(firstInCurrentCup)
   if (firstInCurrentCup !== 0){
      drawPersonages(firstInCurrentCup-3,firstInCurrentCup);
   }
   else {
      if (prevPeoplesPage!==null){
         load(prevPeoplesPage);
      }
   }
});