<template>
  <div class="about">
    <h1 class="mt-4">Aquesta app utilitza:</h1>
    <ul>
      <ul>
          <img class="logo" src="@/assets/logoVue.png" alt="Vue 3 Logo">
         <a href="https://cli.vuejs.org/">Vue CLI 3</a> 
      </ul>
      <ul> 
        <img class="logo" src="@/assets/logoBootstrap.png" alt="Bootstrap Logo">
        <a href="https://getbootstrap.com/">Bootstrap</a> 
      </ul>
      <ul>
        <img class="logo" src="@/assets/logoTCGApi.png" alt="Pokemon TCG API Logo">
        <a href="https://pokemontcg.io">Pokemon TCG API</a> 
      </ul>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  @mixin imatges {
    margin-bottom: 20px;
    max-width: 100px;
    max-height: 100px;
    margin-right: 10px;
  }

  .logo {
    @include imatges();
  }

</style>>
