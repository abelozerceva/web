// Здесь хранятся основные настройки темы оформления
export let theme = {
    themeType: 'indigo-theme',
    secondaryColor: '#4ebdd4',
    update: function() {
        let themeType = localStorage.getItem('themeType') || this.themeType;
        let secondaryColor = localStorage.getItem('secondaryColor') || this.secondaryColor;
        if (document.getElementById('edit')!==null){
            document.getElementById('edit').style.backgroundColor = secondaryColor;
        }        $('.content-wrapper')[0].classList.value = `content-wrapper ${themeType}`;
        document.getElementById('nav').classList.value = `nav-wrapper navbar-fixed ${themeType}`;
        $('.menu-btn')[0].childNodes.forEach(el => {
            if (el.nodeType !== 3) {
                el.style.backgroundColor = secondaryColor;
            }
        });
        // $('.progress-line').each(el => $('.progress-line')[el].style.backgroundColor = this.secondaryColor);
        localStorage.setItem('secondaryColor', secondaryColor);
        localStorage.setItem('themeType', themeType);
    }
};