<script >
import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppSearchBar",
    data() {
        return {
            store,
            searchQuery: "",
        }
    },
    methods: {
        getSearchMovies() {

            let myUrl = store.apiURL

            if (searchQuery !== "") {
                myUrl += `=${this.searchQuery}`
            }
            axios.get(myUrl)
                .then(response => {
                    this.store.listMovies = response.data.results;
                    console.log(this.store.listMovies);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getSearchMovies();;
    }

}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <input class="form" type="text" placeholder="cerca film" v-model.trim="searchQuery">
                <button class="btn " @click="getSearchMovies">Cerca</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>