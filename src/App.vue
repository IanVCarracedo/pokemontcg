<template>
  <body>
    <navbar-component />
    <b-spinner class="d-block ml-auto mr-auto spinner" v-if="loading" label="Spinning"></b-spinner>
    <router-view />
    <footer-component />
  </body>
</template>

<script>

import FooterComponent from './components/';
import NavbarComponent from '';

import { mapState } from "vuex";
export default {
  components: {
    FooterComponent,
    NavbarComponent
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
