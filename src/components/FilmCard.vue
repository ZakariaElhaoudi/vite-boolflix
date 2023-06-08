<script>
import { store } from '../store';
export default {
    name: "FilmCard",
    props: {
        details: Object
    },
    methods: {
        getLanguage(language) {

            if (language === 'en') {
                return 'fi fi-gb'
            } else {
                return `fi fi-${language.toLowerCase()}`;
            }
        },
        matchFloor(vote) {
            return Math.floor(vote / 2);
        },
    }
}
</script>

<template>
    <!-- Titolo Titolo Originale Lingua Voto -->
    <div class="col-6 col-md-4 col-lg-3 card my-2 mx-3">
        <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.title" :key="details.id">
    </div>

    <div v-if="details.id"
        class="col-6 col-md-4 col-lg-3 card my-2 mx-3 d-flex flex-column justify-content-center align-items-center">
        <!-- <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.title"> -->
        <h4>Titolo:{{ details.original_name }}</h4>
        <h4>Titolo Originale: {{ details.original_title }}</h4>
        <!-- <h4>Lingua: {{ details.original_language }}</h4> -->
        <span :class="getLanguage(details.original_language)" class="flag">{{ details.original_language }}</span>
        <!-- <h4>Voto: {{ matchFloor(details.vote_average) }}</h4> -->
        <div v-for="star in 5" :key="star">
            <font-awesome-icon v-if="star = matchFloor(details.vote_average)" class="fas fa-star" />
            <font-awesome-icon v-else icon="far fa-star" />
            <font-awesome-icon icon="fas fa-star" />
        </div>
        <font-awesome-icon icon="fa-solid fa-star" />
    </div>
    <div v-else-if="details.id"
        class="col-6 col-md-4 col-lg-3 card my-2 mx-3 d-flex flex-column justify-content-center align-items-center">
        <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.name">
        <h4>Titolo: {{ details.original_name }}</h4>
        <h4>Titolo Originale: {{ details.name }}</h4>
        <span :class="getLanguage(details.original_language)" class="flag"></span>
        <h4>Voto: {{ matchFloor(details.vote_average) }}</h4>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss'
</style>