const API_KEY="a70fe17fdd85027a80bdb7d55eb504c4"
const BASE_URL="https://api.themoviedb.org/3"

export async function getpopularmovies() {
     const response=await fetch(`${BASE_URL}/movie/550?api_key=${API_KEY}`);
     const data=await response.json()
     return data.results
     
}

export async function searchMovies(query) {
     const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
     const data=await response.json()
     return data.results
     
}
