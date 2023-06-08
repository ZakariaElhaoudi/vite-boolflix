import { reactive } from "vue"

export const store = reactive({
    apiKey: "29ec77d1e7f0f61f026462bb20c483d3",
    apiMoviesURL: "https://api.themoviedb.org/3/search/movie?api_key={apiKey}&",
    apiTvSeriesURL: "https://api.themoviedb.org/3/search/tv?api_key={apiKey}&language=it_IT&",
    searchQuery: "",
    listMovies: [],
    listTvSeries: [],
})