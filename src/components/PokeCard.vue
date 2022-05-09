<!-- creates individual card for grid view -->
<template>
    <img @click="modal(card)" :src="card.images.small" :alt="card.name" class="w-full max-w-xxs">
    <div class="px-6 py-2 font-bold text-xl mb-2">{{ card.name }}</div>
    <modal-carta
            :show="modalOpen"
            @close="modalOpen = false"
            :card= "card"
            :types= "types"
            :subtypes= "subtypes"
            :supertypes= "supertypes"
            :rarities= "rarities"
          />
</template>


<script>

import ModalCarta from '@/components/ModalCarta.vue';
import {pokeApi} from '@/services/api.js';

    export default {
        data() {
            return {
                card: {},
            }
        },
        components: ModalCarta,
        props: ['card','modalChange'],
        methods:{
            async modal(card){
                this.modalChange();
                await this.getCard(card.id);
            },
            async getCard(id){
                let card = await pokeApi.cardDetail(id);
                this.card = card.data;
            },
        }
    }
</script>

<style scoped>

</style>