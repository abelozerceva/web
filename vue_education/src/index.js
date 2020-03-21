'use strict'

import './style.scss';

import Vue from 'vue';
// import hello from './vue_components/test.vue';
import NavBar from './vue_components/navbar.vue';

// let vm = new Vue({
//     el: '#app',
//     render: h => h(hello),
// });

var navbar = new Vue({
    el: '.menu',
    render: h => h(NavBar),
});
