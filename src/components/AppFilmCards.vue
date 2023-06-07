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
        <AppFilmCard v-for="data in store.listMovies" :details="data" />
    </div>
</template>

<style lang="scss" scoped></style>