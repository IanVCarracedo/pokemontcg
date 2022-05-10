<!-- creates individual card for grid view -->
<template>
    <img @click="goSpecs(card.id)" :src="card.images.small" :alt="card.name" class="w-full max-w-xxs">
    <div class="px-6 py-2 font-bold text-xl mb-2">{{ card.name }}</div>
</template>


<script>

    export default {
        data() {
            return {
                card: {},
            }
        },
        props: ['card','modalChange'],
        methods:{
            async modal(card){
                this.modalChange();
                await this.getCard(card.id);
            },
            goDetail(id){
                this.$router.push(`/card/${id}`);
            }
        }
    }
</script>

<style scoped>

</style>