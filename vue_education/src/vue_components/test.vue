<template lang='pug'>
    .test-block
        h2 {{message}} 
        input(v-model='message')

</template>

<script>
    // module.exports = {
    export default {
        name: 'test',
        data: function() {
            return {
                message: 'Hello Vue!'
            }
        },
    }
</script>

<style lang="scss">
    h2 {
        // display: block;
        // position: absolute;
        // width: 500px;
        // height: 100px;
        // top: 50%;
        // left: 50%;
        // margin: -50px 0 0 -250px;
        // font-size: 54px;
        // line-height: 64px;
        // font-family: 'Open Sans', sans-serif;
        // font-weight: 300;
        color: #525255;
        text-align: center;
    }
</style>