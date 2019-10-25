import axios from 'axios';
import moment from 'moment';
import {
  API_URL,
  CINEMA_API_KEY,
  QUERY_SIZE,
  QUERY_DETALISATION,
} from '../constants';

class Api {
  static async createRequest(url) {
    const response = await axios({
      method: 'get',
      url,
      headers: { 'Accept-Language': 'ru-ru' },
    });

    return response.data;
  }

  static createDate() {
    return moment().format('YYYY-MM-DD');
  }

  static async getCity() {
    const response = await this
      .createRequest(`${API_URL}/cities?${CINEMA_API_KEY}&${QUERY_SIZE}`);

    return response.content;
  }

  static async getCinemas(cityId) {
    const response = await this
      .createRequest(`${API_URL}/city/${cityId}/cinemas?${CINEMA_API_KEY}&${QUERY_SIZE}`);

    return response.content;
  }

  static async getCinemaFilms(cinemaId) {
    const response = await this
      .createRequest(`${API_URL}/cinema/${cinemaId}/shows?${CINEMA_API_KEY}&${QUERY_SIZE}&date=${this.createDate()}&${QUERY_DETALISATION}`);

    return response;
  }

  static async getFilmSession(cinemaId, filmId) {
    const response = await this
      .createRequest(`${API_URL}/cinema/${cinemaId}/film/${filmId}/shows?${CINEMA_API_KEY}&${QUERY_SIZE}&date=${this.createDate()}&${QUERY_DETALISATION}`);

    return response.content;
  }
}

export default Api;
