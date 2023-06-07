<script>
import AppFilmCard from './AppFilmCard.vue';
import { store } from '../store';
export default {
    name: "AppFilmCards",
    components: {
        AppFilmCard
    },
    data() {
        return {
            store,
        }
    },

}
</script>

<template>
    <div class="row text-center mx-4">
        <h2>Film</h2>
        <AppFilmCard v-for="film in store.listMovies" :key="film.id" :details="film" />
    </div>
    <div class="row text-center mx-4">
        <h2>Serie Tv</h2>
        <AppFilmCard v-for="serieTv in store.listTvSeries" :key="serieTv.id" :details="serieTv" />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: white;
}
</style>