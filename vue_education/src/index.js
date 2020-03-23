'use strict'

import './style.scss';

import Vue from 'vue';
import Vuelidate from 'vuelidate';
// import hello from './vue_components/test.vue';
import NavBar from './vue_components/navbar.vue';
import Form from './vue_components/form.vue';

Vue.use(Vuelidate);

// let vm = new Vue({
//     el: '#app',
//     render: h => h(hello),
// });

var navbar = new Vue({
    el: '.menu',
    render: h => h(NavBar),
});

let formEl = new Vue({
    el: '.form',
    render: h => h(Form),
})
