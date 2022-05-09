<template>
  <div class="home container mx-auto">
      <p v-if="loading">Loading...</p>
      <div v-else>
        <div class="flex flex-wrap">
          <poke-card v-for="pokemon in cards.cards" :key="pokemon.id" >
            <img :src="pokemon.imageUrl" :alt="pokemon.name" class="w-full max-w-xxs">
            <div class="font-bold text-xl mb-2">{{ pokemon.name }}</div>
          </poke-card>
          <card-modal
              :show="modalOpen"
              @close="modalOpen = false"
              :card= "pokemonData"
            >
          </card-modal>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PokeCard from '@/components/PokeCard.vue';
import ModalCarta from '@/components/ModalCarta.vue';
import Navbar from '@/components/Navbar.vue';
import {pokeApi} from '@/services/api.js';

export default {
  name: 'home',
  components: {
    PokeCard,
    ModalCarta,
    Navbar,
  },
  data() {
    return {
      modalOpen: false,
      pokemonData: {},
    };
  },
  methods: {
    async searchCard(searchword){
    let cards = await pokeApi.searchCard(searchword);
    this.cards = cards.data;
    }
  },
};
</script>
