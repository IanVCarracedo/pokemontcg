<template>
    <div class="flex fixed items-center shadow-inner max-w-xl md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex"
    role="dialog"
    aria-labelledby="modalTitle"
    aria-describedby="modalDescription">
        <img v-if="card.images" :src="card.images.small" :alt="card.name" :title="card.name" class="w-1/3 mt-4">
    <div class="w-2/3">
        <div class="flex justify-between mx-6 md:mt-8">
            <h2 class="text-4xl text-center font-hairline mt-4">{{ card.name }}</h2>            
            <div class="flex">
                <h2 class="text-2xl text-center font-hairline" v-if="card.hp && card.hp != 'None'">{{ card.hp }} HP</h2>
                <p class="text leading-normal mb-4" v-if="card.types">
                    {{ card.types.value }}
                </p>               
            </div>
            <div class="fav-icon" v-if="card.name">
                <a v-if="acquired" @click="deleteAcquired">
                    <font-awesome-icon color="red" size="2x" :icon="['fa', 'heart']"/>
                </a>
                <a v-else @click="addToAcquired">
                    <i color="red" class="fa-regular fa-heart fa-2x"></i>
                </a>
            </div>
        </div>
        <p class="text-grey-dark text-left mb-4 mx-6" v-if="card.evolvesFrom">Evolves from {{ card.evolvesFrom }}</p>
        <div class="flex py-4 mx-6 items-center" v-if="card.ability || card.text">
            <div class="text-left">
                <p class="text leading-normal mb-4" v-if="card.text">
                    {{ card.text[0] }}
                </p>
                <p class="text-xl fw-bold" v-if="card.ability">
                    {{ card.ability.name }}
                </p>
                <p class="text leading-normal" v-if="card.ability">
                    {{ card.ability.text }}
                </p>
            </div>
        </div>
        <div class="flex py-2 mx-6 items-center" v-for="attack in card.attacks" :key="attack.id">
            <div class="flex-1 text-left">
                <p class="text-xl fw-bold">
                    {{ attack.name }}
                </p>
                <p class="text leading-normal">
                    {{ attack.text }}
                </p>
            </div>
            <div v-if="attack.damage" class="text-xl leading-normal px-3 w-24">
                Damage: {{ attack.damage }}
            </div>
        </div>
        <div class="flex justify-around mx-6 border-b border-grey-light">
            
            <div class="flex py-2 flex-col justify-center items-center" v-if="card.resistances">
                <p class="leading-normal uppercase fw-bold text-xs tracking-wide">Resistances</p>
                <div class="flex items-center">
                    <div v-for="resistance in card.resistances" :key="resistance.id" >
                        <p class="mx-1" :key="resistance.id">{{ resistance.value }}</p>
                    </div>
                </div>
            </div>
            <div class="flex py-2 flex-col justify-center items-center" v-if="card.rarity">
                <p class="leading-normal fw-bold uppercase text-xs tracking-wide">Rarity</p>
                <p class="font-bold">{{ card.rarity }}</p>
            </div>
        </div>
        <div class="flex justify-around mx-6">
            <div class="flex py-2 flex-col justify-center items-center" v-if="card.artist">
                <p class="leading-normal fw-bold uppercase text-xs tracking-wide">Artist</p>
                <p class="font-bold">{{ card.artist }}</p>
            </div>
            <div class="flex py-2 flex-col justify-center items-center" v-if="card.series">
                <p class="leading-normal uppercase text-xs tracking-wide">Series</p>
                <p class="font-bold">{{ card.series }}</p>
            </div>
            <div class="flex py-2 flex-col justify-center items-center" v-if="card.set">
                <p class="leading-normal fw-bold uppercase text-xs tracking-wide">Set</p>
                <p class="font-bold">{{ card.set.name }}</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import {pokeApi} from '@/services/api.js';

export default {
    data() {
        return{
            card: {},
            acquired: false,
        }
    },
    async mounted() {
        let id = this.$route.params.id;

        let card = await pokeApi.cardDetail(id);
        this.card = card.data.data;

        let cardsAcquired = this.$store.getters.cardsAcquired;
        for(let cardAcquired of cardsAcquired) {
        if(cardAcquired.id == id) {
            this.acquired = true;
            break;
      }
    }
    },
    methods: {
        addToAcquired(){
            this.$store.dispatch('addToAcquired', {id: this.card.id, name: this.card.name, images: this.card.images})
            .then(() => {
            this.acquired = true;
        })
        },
        deleteAcquired(){
            this.$store.dispatch('deleteAcquired', this.card.id).then(() => {
            this.acquired = false;
        })
        },
        
    }
}
</script>

<style scoped>

</style>