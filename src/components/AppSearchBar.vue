<script >
import { store } from '../store';
export default {
    name: "AppSearchBar",
    data() {
        return {
            store,
        }
    },
    methods: {
        getCards() {
            axios.get(store.apiURL)
                .then(card => {
                    store.listCards = card.data.data;
                    console.log(store.listCards);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="cerca film" v-model="store.searchQuery">
                <button @click="searchMovies">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>