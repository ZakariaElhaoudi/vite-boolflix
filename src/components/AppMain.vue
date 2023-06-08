<script >
import ListFilmCards from './ListFilmCards.vue';
import { store } from '../store';
export default {
    name: "AppMain",
    components: {
        ListFilmCards
    },
    data() {
        return {
            store,

        }

    },
}
</script>

<template>
    <div class="container bg-dark">
        <ListFilmCards />
    </div>
</template>

<style lang="scss" scoped></style>