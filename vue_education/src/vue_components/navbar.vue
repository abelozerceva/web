<template lang="pug">
    .menu
        nav(v-bind:class= 'active' @click.prevent)
            - let buttons = [{ href: '#', class: 'home', text: 'Главная' }, { href: '#', class: 'projects', text: 'Проекты' }]
            - buttons.push({ href: '#', class: 'services', text: 'Услуги' }, { href: '#', class: 'contacts', text: 'Контакты' })
            - for (let button of buttons)
                a(href=`${button.href}` class=`${button.class}` @click=`makeActive('${button.class}')`)=`${button.text}`
        p Выбран класс 
            b {{active}}
</template>

<script>
export default {
    data: function() {
        return {
            active: 'home',
            lastActive: 'projects',
        }
    },
    methods: {
        makeActive: function(class_) {
            this.lastActive = this.active;
            this.active = class_;
            //may be inline style is not good idea, but  why not
            if (this.lastActive !== this.active) {
                $('a.' + this.active)[0].style.backgroundColor = '#e35885';
                $('a.' + this.lastActive)[0].style.backgroundColor = '#5597b4';
            }
        }
    },
    mounted() {
        $('a.' + this.active)[0].style.backgroundColor = '#e35885';
    },
}
</script>

<style lang="scss">
.menu {
    text-align: center;
    margin: 18px 0;

    nav {
        margin-bottom: 40px;

        a {
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            padding: 18px 30px;
            background-color: #5597b4;
        }
    }
    p {
        font-size: 22px;
        font-weight: bold;
        color: #7d9098;

        b{
            color: white;
            padding: 5px 10px;
            background-color: #c4d7e0;
            border-radius: 2px;
            text-transform: uppercase;
            font-size: 18px;
        }
    }
}
</style>