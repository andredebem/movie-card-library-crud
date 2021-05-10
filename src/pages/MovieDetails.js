import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.renderCard = this.renderCard.bind(this);

    this.state = {
      details: {},
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { getMovie } = movieAPI;
    getMovie(id).then((details) => {
      this.setState({
        details,
        loading: false,
      });
    });
  }

  renderCard() {
    const { details } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = details;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <span>{ `Title: ${title}` }</span>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        { loading === true ? <Loading /> : this.renderCard() }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
