import { reactive } from "vue"

export const store = reactive({
    apiMoviesURL: "https://api.themoviedb.org/3/search/movie?api_key=29ec77d1e7f0f61f026462bb20c483d3&query",
    apiTvSeriesURL: "https://api.themoviedb.org/3/search/tv?api_key=29ec77d1e7f0f61f026462bb20c483d3&language=it_IT&query",
    searchQuery: "",
    listMovies: [],
    listTvSeries: [],
})