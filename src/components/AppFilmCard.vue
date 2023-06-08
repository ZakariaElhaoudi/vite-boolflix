<script>
import { store } from '../store';
export default {
    name: "AppFilmCard",
    props: {
        details: Object
    },
    methods: {
        getLanguage(language) {
            return `fi fi-${language.toLowerCase()}`;
        }
    }
}
</script>

<template>
    <!-- Titolo Titolo Originale Lingua Voto -->

    <div class="col-6 col-md-4 col-lg-3 card my-2 mx-3">
        <h4>Titolo: {{ details.title }}</h4>
        <h4>Titolo Originale: {{ details.original_title }}</h4>
        <!-- <h4>Lingua: {{ details.original_language }}</h4> -->
        <span :class="getLanguage(details.original_language)" class="flag"></span>
        <h4>Voto: {{ details.vote_average }}</h4>
    </div>
    <div class="col-6 col-md-4 col-lg-3 card my-2 mx-3">
        <h4>Titolo: {{ details.original_name }}</h4>
        <h4>Titolo Originale: {{ details.name }}</h4>
        <span :class="getLanguage(details.original_language)" class="flag"></span>
        <h4>Voto: {{ details.vote_average }}</h4>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    text-align: center;
}
</style>