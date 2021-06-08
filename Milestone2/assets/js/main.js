const app = new Vue({
    el: "#app",
    data: {
        url: "",
        input: "",
        movies: [],
        urlSerieTV: "",
        serieTVs: []
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

                for (let i = 0; i < this.movies.length; i++){
                    if (this.movies[i].original_language == 'en') {
                        this.movies[i].original_language = 'us';
                    } else if (this.movies[i].original_language == 'ja') {
                        this.movies[i].original_language = 'jp';
                    } else if (this.movies[i].original_language == 'hi') {
                        this.movies[i].original_language = 'in';
                    }
                }
            })
            .catch(e => {
                console.log(e);    
            });
            console.log(this.url);


            this.urlSerieTV = "https://api.themoviedb.org/3/search/tv?api_key=601ef4a8959c32c43648a3337f0ccbfd&query=";
            this.urlSerieTV = this.urlSerieTV + this.input;
            axios
            .get(this.urlSerieTV)
            .then(resp => {
                console.log(resp);
                this.serieTVs = resp.data.results;

                for (let i = 0; i < this.serieTVs.length; i++){
                    if (this.serieTVs[i].original_language == 'en') {
                        this.serieTVs[i].original_language = 'us';
                    } else if (this.serieTVs[i].original_language == 'ja') {
                        this.serieTVs[i].original_language = 'jp';
                    } else if (this.serieTVs[i].original_language == 'hi') {
                        this.serieTVs[i].original_language = 'in';
                    }
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