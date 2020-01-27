// генерация html для одного таба
function Tab(tab, index) {
    return `<li class="tab-link_tab" id=${index}>
                <span></span>${tab.name}
            </li>`
}
// объединение табов в список
function TabsList(tabs) {
    return `<ul>
                ${tabs.map((el, i) => Tab(el, i)).join('')}
            </ul>`
}
// html для отображаемого контента для каждого таба
function TabContent(tab) {
    return `<div class="tabs_content_container" style="display:block">
                <a href=${tab.contentLink} target="_blank">${tab.contentLinkText}</a>
                <p>${tab.contentText}</p>
            </div>`
}
// содержание табов и контента к ним
let tabs = [
    {
        name: 'GitHub',
        contentLink: 'https://github.com/belozercevaa',
        contentLinkText: '@github/belozerceva',
        contentText: 'Здесь можете посмотреть мои проекты'
    },
    {
        name: 'Email',
        contentLink: 'mailto:belozerceva.a@yandex.ru',
        contentLinkText: 'belozerceva.a@yandex.ru',
        contentText: 'Написать мне'
    },
    {
        name: 'VK',
        contentLink: 'https://vk.com/anastasya29',
        contentLinkText: 'Белозерцева Анастасия',
        contentText: 'Связаться со мной через социальную сеть'
    }
];
// добавление списка табов внутрь класса tabs_container в index.html
$('.tabs_container')[0].innerHTML = TabsList(tabs);
// смена контента к табу при наведении на таб
$('.tab-link_tab').hover(function () {
    $(this)
        .addClass('active_tab-link')
        .siblings()
        .removeClass('active_tab-link')
    $('.tab-content_wrapper')[0].innerHTML = TabContent(tabs[+this.id]);
});

