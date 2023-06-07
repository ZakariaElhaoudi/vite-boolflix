<script>
import { store } from '../store';
export default {
    name: "AppFilmCard",
    props: {
        details: Object
    }
}
</script>

<template>
    <!-- Titolo Titolo Originale Lingua Voto -->

    <div class="col-6 col-md-4 col-lg-3 card my-2 mx-3">
        <h4>{{ details.title }}</h4>
        <h4>{{ details.original_title }}</h4>
        <h4>{{ details.original_language }}</h4>
        <h4>{{ details.vote_average }}</h4>
    </div>
</template>

<style lang="scss" scoped></style>