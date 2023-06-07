import { reactive } from "vue"

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=29ec77d1e7f0f61f026462bb20c483d3&query",
    searchQuery: "",
    listMovies: [],
    listTvSeries: [],
})