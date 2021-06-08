const app = new Vue({
    el: "#app",
    data: {
        url: "",
        input: "",
        movies: []
    },
    methods: {
        cerca() {
            this.url = "https://api.themoviedb.org/3/search/movie?api_key=601ef4a8959c32c43648a3337f0ccbfd&query=";
            this.url = this.url + this.input;
            axios
            .get(this.url)
            .then(resp => {
                console.log(resp);
                this.movies = resp.data.results;
            })
            .catch(e => {
                console.log(e);    
            })
            console.log(this.url);
        }
    },
    mounted() {
        
    }
});