
export const getMovies = (page) => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4bd79d5e6ae0aa054269482c1b7710ec&sort_by=popularity.desc&page=${page}`)
        .then(value => value.json())
}

export const getMovieByTitle = (title) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=4bd79d5e6ae0aa054269482c1b7710ec&query=${title}&page=1`)
        .then(value => value.json())
}