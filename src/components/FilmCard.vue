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
        <div v-if="details.id" class=" date_hover">
            <h5>Titolo:{{ details.title }} {{ details.original_name }}</h5>
            <h5>Titolo Originale: {{ details.original_title }} {{ details.name }}</h5>
            <span :class="getLanguage(details.original_language)" class="flag"></span>
            <div class="d-flex flex-row ">
                <div v-for="star in 5" :key="star">
                    <i v-if="star <= matchFloor(details.vote_average)" class="fa-solid fa-star"></i>
                    <i v-else class="fa-regular fa-star"></i>
                </div>
            </div>
        </div>
        <div v-else-if="details.id" class=" _hover">
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;


.date_hover {
    text-align: center;
    width: 94%;
    height: 100%;
    display: none;
    position: absolute;
    top: 0;
    left: 12;
    background-color: black;
    color: white;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
}

.img_cover {
    position: relative;

}

.img_cover:hover .date_hover {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 1;
}
</style>