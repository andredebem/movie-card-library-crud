import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.renderMovies = this.renderMovies.bind(this);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    const { getMovies } = movieAPI;
    getMovies().then((movies) => {
      this.setState({
        movies,
      });
    });
  }

  renderMovies() {
    const { movies } = this.state;
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        { movies.length === 0 ? <Loading /> : this.renderMovies() }
      </div>
    );
  }
}

export default MovieList;
