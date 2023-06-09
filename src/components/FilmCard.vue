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
            return Math.round(vote / 2);
        },
    }

}
</script>

<template>
    <!-- Titolo Titolo Originale Lingua Voto -->
    <div class="col-6 col-md-4 col-lg-3 img img_cover">
        <div class="image-container ">
            <img class="img-fluid full-height" :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`"
                :alt="details.title" :key="details.id">
        </div>
        <div v-if="details.id" class="col-6 col-md-4 col-lg-3 card date_hover">
            <!-- <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.title"> -->
            <h4>Titolo:{{ details.title }} {{ details.original_name }}</h4>
            <h4>Titolo Originale: {{ details.original_title }} {{ details.name }}</h4>
            <span :class="getLanguage(details.original_language)" class="flag"></span>
            <div class="d-flex flex-row ">
                <div v-for="star in 5" :key="star">
                    <i v-if="star <= matchFloor(details.vote_average)" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </div>
            </div>
        </div>
        <div v-else-if="details.id" class="col-6 col-md-4 col-lg-3 card _hover">
            <!-- <img :src="`https://image.tmdb.org/t/p/w342${details.backdrop_path}`" :alt="details.name"> -->
            <!-- <h4>Titolo: {{ details.original_name }}</h4>
                                                                                                                                                                                                    <h4>Titolo Originale: {{ details.name }}</h4> -->
            <!-- <span :class="getLanguage(details.original_language)" class="flag"></span> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;


.date_hover {
    text-align: center;
    width: 342px;
    height: 196px;
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0, 0, );
    transition: 0.3s ease-in-out;
}

.img_cover {
    position: relative;

}

.img_cover:hover .date_hover {
    display: flex;

}
</style>