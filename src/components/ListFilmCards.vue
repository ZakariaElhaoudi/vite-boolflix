<script>
import FilmCard from './FilmCard.vue';
import { store } from '../store';
export default {
    name: "ListFilmCards",
    components: {
        FilmCard
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
        <FilmCard v-for="film in store.listMovies" :key="film.id" :details="film" />
    </div>
    <div class="row text-center mx-4">
        <h2>Serie Tv</h2>
        <FilmCard v-for="serieTv in store.listTvSeries" :key="serieTv.id" :details="serieTv" />
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: white;
    font-size: 600;
    font-weight: 600;
}
</style>