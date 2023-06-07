<script >
import AppFilmCards from './AppFilmCards.vue';
import { store } from '../store';
export default {
    name: "AppMain",
    components: {
        AppFilmCards
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
        <AppFilmCards />
    </div>
</template>

<style lang="scss" scoped></style>