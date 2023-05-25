import Notiflix from 'notiflix';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '604d147cd55c0bcd03b68a72549a64de';

export default class ApiService {
  constructor() {
    this.searchQuery = 'avatar'; //Що шукаємо
    this.page = 1; //Пагінація
    this.getMovieId = ''; //Пошук по id
  }

  async fetchMovies() {
    try {
      const response = await fetch(
        `${BASE_URL}3/search/movie?api_key=${API_KEY}&query=${this.searchQuery}&page=${this.page}&language=en-US&include_adult=false`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(
            Notiflix.Notify.failure('Search result not successful. Try again')
          );
        }
        return;
      }

      const { results } = await response.json();

      if (results.length === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name.'
        );
        return;
      }

      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchTrending() {
    try {
      const response = await fetch(
        `${BASE_URL}3/trending/movie/week?api_key=${API_KEY}&page=${this.page}&language=en-US`
      );

      if (!response.ok) {
        throw new Error(
          Notiflix.Notify.failure('Failed to fetch trending movies')
        );
      }

      const { results } = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchDetails() {
    try {
      const response = await fetch(
        `${BASE_URL}3/movie/${this.getMovieId}?api_key=${API_KEY}&language=en-US`
      );

      if (!response.ok) {
        throw new Error(
          Notiflix.Notify.failure('Failed to fetch movie details')
        );
      }

      const results = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchCast() {
    try {
      const response = await fetch(
        `${BASE_URL}3/movie/${this.getMovieId}/credits?api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          Notiflix.Notify.failure('Failed to fetch movie details')
        );
      }

      const { cast } = await response.json();
      return cast;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchReviews() {
    try {
      const response = await fetch(
        `${BASE_URL}3/movie/${this.getMovieId}/reviews?api_key=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error(
          Notiflix.Notify.failure('Failed to fetch movie details')
        );
      }

      const { results } = await response.json();
      return results;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page = this.page + 1;
  }
  decrementPage() {
    this.page = this.page - 1;
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  get movieId() {
    return this.getMovieId;
  }
  set movieId(newID) {
    this.getMovieId = newID;
  }
  get moviePage() {
    return this.page;
  }

  set moviePage(newPage) {
    this.page = newPage;
  }
}

// const apiService = new ApiService();

// apiService.fetchMovies().then(console.log);
