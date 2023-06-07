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

            let myUrlMovies = store.apiMoviesURL
            let myUrlTvSeries = store.apiTvSeriesURL

            if (this.searchQuery !== "") {
                myUrlMovies += `=${this.searchQuery}`
                myUrlTvSeries += `=${this.searchQuery}`
                this.searchQuery = '';
            }
            axios
                .all([axios.get(myUrlMovies), axios.get(myUrlTvSeries)])
                .then(axios.spread((moviesResponse, tvSeriesResponse) => {
                    this.store.listMovies = moviesResponse.data.results;
                    console.log(this.store.listMovies);
                    this.store.listTvSeries = tvSeriesResponse.data.results;
                    console.log(this.store.listTvSeries);
                }))
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