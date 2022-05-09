<template>
  <nav class="navbar navbar-expand-lg navbar-dark dark static-top">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="@/assets/logoTCG.png" alt="Pokemon TCG Logo" height="75">
      </a>
      <button class="navbar-toggler" @click="collapse()" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <span v-if="collapsed" id="text"> | </span>
          <ul class="nav-item">
            <router-link class="nav-link underline" to="/about">Sobre aquesta web</router-link>
          </ul>
          <span v-if="collapsed" id="text"> | </span>
          <ul class="nav-item">
            <router-link class="nav-link underline" to="/">Buscar</router-link>
          </ul>
          <span v-if="collapsed" id="text"> | </span>
          <ul class="nav-item">
            <router-link class="nav-link underline" to="/favourites">Aconseguides</router-link>
          </ul>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    collapse() {
      this.count++;
      if(this.count%2==0) {
        this.collapsed = false;
      } else {
        this.collapsed = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

#text {
  padding: 8px;
}

.dark {
  background-color: black;
  position: relative;
  z-index: 1;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50 !important;
}

.underline {
  text-decoration: none;
}

.router-link-exact-active {
  color: white !important;
}

</style>