<template>
  <div class="mt-4 mb-4">
      <input type="text" placeholder="Escriu el nom de la carta" aria-label="Search" name="Search" class="border my-8 py-2 px-4 mr-4" v-model="searchword" @keyup.enter="searchCard()">
      <button class="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" @click="searchCard(); getInfo()">Busca!</button>
  </div>
  <div class="home container mx-auto">
      <div v-if="control" class="flex flex-wrap">
        <div class="max-w-xxs mb-6 mx-4" >
          <div class="shadow-md rounded-lg text-none" v-for="card in cards.data" :key="card.id" >
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
import {pokeApi} from '@/services/api.js';

export default {
  name: 'home',
  components: {
    PokeCard,
    Navbar,
  },
  data() {
    return {
      pokemonData: {},
      cards: [],
      card: {},
      types: {},
      subtypes: {},
      supertypes: {},
      rarities: {},
      control: false
    };
  },
  methods: {
    async searchCard(){
        let cards = await pokeApi.searchCard(this.searchword);
        this.cards = cards.data;
        this.control = true;
        console.log(this.cards);
    },
    async getInfo(){
      let types = await pokeApi.types;
      let subtypes = await pokeApi.subtypes;
      let supertypes = await pokeApi.supertypes;
      let rarities = await pokeApi.rarities;
      this.types = types.data;
      this.subtypes = subtypes.data;
      this.supertypes = supertypes.data;
      this.rarities = rarities.data;
    },
  },
};
</script>
