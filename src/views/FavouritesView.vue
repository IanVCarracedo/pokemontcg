<template>
  <div class="home container mx-auto">
      <div v-if="control" class="flex mt-4 flex-wrap">
        <div class="max-w-xxs mb-6 mx-4" >
          <div class="shadow-md rounded-lg text-none" v-for="card in cards" :key="card.id" >
            <poke-card :card="card"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PokeCard from '@/components/PokeCard.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    PokeCard,
    Navbar,
  },
  data() {
    return {
      control: false,
      cards: []
    };
  },
  mounted() {
      this.cards = this.$store.getters.cardsAcquired;
      this.control= true;
      console.log(this.cards);
  },
};
</script>
