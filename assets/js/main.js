const app = new Vue({
    el: "#app",
    data: {
        url: "https://api.themoviedb.org/3/search/movie?api_key=601ef4a8959c32c43648a3337f0ccbfd&query=",
        input: ""
    },
    methods: {
        cerca() {
            this.url = this.url + this.input;
            axios
            .get(this.url)
            .then(resp => {
                console.log(resp);    
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