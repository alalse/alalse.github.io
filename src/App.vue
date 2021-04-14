<template>
    <div class="vh-100 col-12 m-0 p-0 w-100" id="app">
        <Nav/>
        <router-view class="mt-5"/>
    </div>
</template>

<script>
import Nav from './components/Nav'

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #AEB6BF;
    margin-top: 60px;
    overflow-y: scroll;
}
#app::-webkit-scrollbar {
    width: 0;
}
</style>