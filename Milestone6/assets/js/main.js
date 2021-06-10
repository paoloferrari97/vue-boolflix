const app = new Vue({
    el: "#app",
    data: {
        input: "",
        url: "",
        movies: [],
        urlSerieTV: "",
        serieTVs: [],
        cercato: false,
        categoriaSelezionata: "serietv",
        miaLista: [],
        miaListaFilm: [],
        generi: []
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
                    

                    axios
                    .get(`https://api.themoviedb.org/3/movie/${this.movies[i].id}/credits?api_key=601ef4a8959c32c43648a3337f0ccbfd`)
                    .then(resp => {
                        this.movies[i].actors = resp.data.cast[0].name;
                        this.movies[i].actors = this.movies[i].actors + ", " + resp.data.cast[1].name;
                        this.movies[i].actors = this.movies[i].actors + ", " + resp.data.cast[2].name;
                        this.movies[i].actors = this.movies[i].actors + ", " + resp.data.cast[3].name;
                        this.movies[i].actors = this.movies[i].actors + ", " + resp.data.cast[4].name;
                    })
                    .catch(e => {
                        console.log(e);
                    })
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
                    

                    axios
                    .get(`https://api.themoviedb.org/3/tv/${this.serieTVs[i].id}/credits?api_key=601ef4a8959c32c43648a3337f0ccbfd`)
                    .then(resp => {
                        console.log(resp.data.cast[0].name);
                        this.serieTVs[i].actors = resp.data.cast[0].name;
                        this.serieTVs[i].actors = this.serieTVs[i].actors + ", " + resp.data.cast[1].name;
                        this.serieTVs[i].actors = this.serieTVs[i].actors + ", " + resp.data.cast[2].name;
                        this.serieTVs[i].actors = this.serieTVs[i].actors + ", " + resp.data.cast[3].name;
                        this.serieTVs[i].actors = this.serieTVs[i].actors + ", " + resp.data.cast[4].name;
                    })
                    .catch(e => {
                        console.log(e);
                    })
                    //sbagliato resp.data.cast.name??
                }
            })
            .catch(e => {
                console.log(e);    
            });
        },
        hover(indice) {
            document.querySelector(`.loc${indice} > .scritte`).style.zIndex = "3";
            document.querySelector(`.loc${indice} > img`).style.zIndex = "1";
        },
        bhover(indice) {
            document.querySelector(`.loc${indice} > .scritte`).style.zIndex = "1";
            document.querySelector(`.loc${indice} > img`).style.zIndex = "3";
        },        
        hoverDue(indice) {
            document.querySelector(`.locan${indice} > .scritte`).style.zIndex = "3";
            document.querySelector(`.locan${indice} > img`).style.zIndex = "1";
        },
        bhoverDue(indice) {
            document.querySelector(`.locan${indice} > .scritte`).style.zIndex = "1";
            document.querySelector(`.locan${indice} > img`).style.zIndex = "3";
        },
        aggiungiLista(indice) {
            this.miaLista.push(this.serieTVs[indice]);
        },
        aggiungiListaMovie(indice) {
            this.miaListaFilm.push(this.movies[indice]);
        },
        rimuoviLista(indice) {
            this.miaLista.splice(indice, 1);
        },
        rimuoviListaMovie(indice) {
            this.miaListaFilm.splice(indice, 1);
        }
    },
    mounted() {
        axios
        .get("https://api.themoviedb.org/3/genre/movie/list?api_key=601ef4a8959c32c43648a3337f0ccbfd")
        .then(resp => {
            this.generi = resp.data.genres;
        })
        .catch(e => {
            console.log(e);    
        });
    }
});