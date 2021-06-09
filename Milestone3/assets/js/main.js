const app = new Vue({
    el: "#app",
    data: {
        url: "",
        input: "",
        movies: [],
        urlSerieTV: "",
        serieTVs: [],
        cercato: false
    },
    methods: {
        cerca() {
            this.cercato = true;

            /* axios x movies */
            this.url = "https://api.themoviedb.org/3/search/movie?api_key=601ef4a8959c32c43648a3337f0ccbfd&query=";
            this.url = this.url + this.input;
            axios
            .get(this.url)
            .then(resp => {
                console.log(resp);
                this.movies = resp.data.results;

                for (let i = 0; i < this.movies.length; i++) {
                    this.movies[i].vote_average = Math.round((this.movies[i].vote_average * 5) / 10);
                    
                }
            })
            .catch(e => {
                console.log(e);    
            });
            console.log(this.url);

            /* axios x serie tv */
            this.urlSerieTV = "https://api.themoviedb.org/3/search/tv?api_key=601ef4a8959c32c43648a3337f0ccbfd&query=";
            this.urlSerieTV = this.urlSerieTV + this.input;
            axios
            .get(this.urlSerieTV)
            .then(resp => {
                console.log(resp);
                this.serieTVs = resp.data.results;

                for (let i = 0; i < this.serieTVs.length; i++) {
                    this.serieTVs[i].vote_average = Math.round((this.serieTVs[i].vote_average * 5) / 10);
                    
                }
            })
            .catch(e => {
                console.log(e);    
            });
        }
    },
    mounted() {
        
    }
});