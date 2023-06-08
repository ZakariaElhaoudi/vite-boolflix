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
                // } else if (!language ? `fi fi-${language}` : '${language}') {
                //     return `${language}`
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
    <div class="img">
        <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.title">
    </div>

    <div class="col-6 col-md-4 col-lg-3 card my-2 mx-3 d-flex flex-column justify-content-center align-items-center">
        <!-- <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.title"> -->
        <h4>Titolo: {{ details.title }} {{ details.original_name }}</h4>
        <h4>Titolo Originale: {{ details.original_title }} {{ details.name }}</h4>
        <!-- <h4>Lingua: {{ details.original_language }}</h4> -->
        <span :class="getLanguage(details.original_language)" class="flag">{{ details.original_language }}</span>
        <h4>Voto: {{ matchFloor(details.vote_average) }}</h4>
    </div>
    <!-- <div class="col-6 col-md-4 col-lg-3 card my-2 mx-3 d-flex flex-column justify-content-center align-items-center">
                        <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.title">
                        <h4>Titolo: {{ details.original_name }}</h4>
                        <h4>Titolo Originale: {{ details.name }}</h4>
                        <span :class="getLanguage(details.original_language)" class="flag"></span>
                        <h4>Voto: {{ matchFloor(details.vote_average) }}</h4>
                    </div> -->
</template>

<style lang="scss" scoped>
@use '../styles/general.scss'
</style>