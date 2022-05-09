<template>
    <div v-show="true" class="animated fadeIn fixed z-50 pin overflow-auto bg-smoke flex">
      <div class="animated fadeInUp flex fixed items-center shadow-inner max-w-xl md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
            <img :src="card.images" :alt="card.name" :title="card.name" class="w-1/3">
        <div class="w-2/3">
            <div class="flex justify-between items-center mx-6 md:mt-8">
                <h2 class="text-4xl text-center font-hairline">{{ card.name }}</h2>
                <div class="flex items-center">
                    <h2 class="text-2xl text-center font-hairline" v-if="card.hp && card.hp != 'None'">{{ card.hp }} HP</h2>
                    <p class="text leading-normal mb-4" v-if="card.types">
                        {{ card.types.value }}
                    </p>               
                </div>
            </div>
            <p class="text-grey-dark text-left mb-4 mx-6" v-if="card.evolvesFrom">{{ card.subtype }}, Evolves from {{ card.evolvesFrom }}</p>
            <div class="flex py-4 mx-6 border-b border-grey-light items-center" v-if="card.ability || card.text">
                <div class="text-left">
                    <p class="text leading-normal mb-4" v-if="card.text">
                        {{ card.text[0] }}
                    </p>
                    <p class="text-xl" v-if="card.ability">
                        {{ card.ability.name }}
                    </p>
                    <p class="text leading-normal" v-if="card.ability">
                        {{ card.ability.text }}
                    </p>
                </div>
            </div>
            <div class="flex py-4 mx-6 border-b border-grey-light items-center" v-for="attack in card.attacks" :key="attack.id">
                <div class="flex-1 text-left">
                    <p class="text-xl">
                        {{ attack.name }}
                    </p>
                    <p class="text leading-normal">
                        {{ attack.text }}
                    </p>
                </div>
                <div class="text-xl font-bold leading-normal px-3 w-24">
                    {{ attack.damage }}
                </div>
            </div>
            <div class="flex justify-around py-6 mx-6 border-b border-grey-light">
                <div class="flex flex-col justify-center items-center" v-if="card.weaknesses">
                    <p class="leading-normal uppercase text-xs tracking-wide">Weaknesses</p>
                    <div v-for="weakness in card.weaknesses" class="flex items-center" :key="weakness.id">
                        {{ weakness.value }}
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center" v-if="card.resistances">
                    <p class="leading-normal uppercase text-xs tracking-wide">Resistances</p>
                    <div class="flex items-center">
                        <div v-for="resistance in card.resistances" :key="resistance.id" >
                            <p class="mx-1" :key="resistance.id">{{ resistance.value }}</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center" v-if="card.rarity">
                    <p class="leading-normal uppercase text-xs tracking-wide">Rarity</p>
                    <p class="font-bold">{{ card.rarity }}</p>
                </div>
            </div>
            <div class="flex justify-around py-6 mx-6">
                <div class="flex flex-col justify-center items-center" v-if="card.artist">
                    <p class="leading-normal uppercase text-xs tracking-wide">Artist</p>
                    <p class="font-bold">{{ card.artist }}</p>
                </div>
                <div class="flex flex-col justify-center items-center" v-if="card.series">
                    <p class="leading-normal uppercase text-xs tracking-wide">Series</p>
                    <p class="font-bold">{{ card.series }}</p>
                </div>
                <div class="flex flex-col justify-center items-center" v-if="card.set">
                    <p class="leading-normal uppercase text-xs tracking-wide">Set</p>
                    <p class="font-bold">{{ card.set }}</p>
                </div>
            </div>
        </div>
        <span @close="show" class="absolute pin-t pin-r pt-4 px-4">
            <svg class="h-12 w-12 text-grey hover:text-grey-darkest" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        </span>
      </div>
    </div>
</template>

<script>

import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>

<style scoped>

</style>