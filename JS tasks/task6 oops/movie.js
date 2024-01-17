class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title
        this.studio = studio
        this.rating = rating

    }
    static getPG(movieArr) {
        let arr = [];
        for (let i = 0; i < movieArr.length; i++) {
            if (movieArr[i].rating === "PG") {
                arr.push({
                    title: movieArr[i].title,
                    studio: movieArr[i].studio,
                    rating: movieArr[i].rating
                });
            }
        }
        return arr;

    }
}




const movie1 = new Movie("Casino Royale", "Eon Productions", "PG­13")
console.log(`Title: ${movie1.title}, Studio: ${movie1.studio}, Rating: ${movie1.rating}`)

const moviesArr = [
    new Movie("Avengers", "Marvel Studio", "PG"),
    new Movie("SpiderMan", "Marvel Studio", "PG13"),
    new Movie("Beauty and the Beast", "Disney Studio", "PG"),
    new Movie("The Lion King", "Disney Studio", "PG13")
];

const moviesPG = Movie.getPG(moviesArr)

for (let i = 0; i < moviesPG.length; i++) {
    console.log(`Title: ${moviesPG[i].title}, Studio: ${moviesPG[i].studio}, Rating: ${moviesPG[i].rating}`)
}