import axios from 'axios';
import moment from 'moment';
import {
  API_URL,
  CINEMA_API_KEY,
} from '../constants';

class Api {
  static async getCity() {
    const response = await axios({
      method: 'get',
      url: `${API_URL}/cities?${CINEMA_API_KEY}&size=1000000`,
      headers: { 'Accept-Language': 'ru-ru' },
    });

    return response.data.content;
  }

  static async getCinemas(cityId) {
    const response = await axios({
      method: 'get',
      url: `${API_URL}/city/${cityId}/cinemas?${CINEMA_API_KEY}&size=1000000`,
      headers: { 'Accept-Language': 'ru-ru' },
    });

    return response.data.content;
  }

  static async getCinemaFilms(cinemaId) {
    const date = moment().format('YYYY-MM-DD');
    console.log(`${API_URL}/cinema/${cinemaId}/shows?${CINEMA_API_KEY}&size=1000000&date=${date}&detalization=FULL`);
    const response = await axios({
      method: 'get',
      url: `${API_URL}/cinema/${cinemaId}/shows?${CINEMA_API_KEY}&size=1000000&date=${date}&detalization=FULL`,
      headers: { 'Accept-Language': 'ru-ru' },
    });

    return response.data;
  }

  static async getFilmSession(cinemaId, filmId) {
    const date = moment().format('YYYY-MM-DD');
    const response = await axios({
      method: 'get',
      url: `${API_URL}/cinema/${cinemaId}/film/${filmId}/shows?${CINEMA_API_KEY}&size=1000000&date=${date}&detalization=FULL`,
      headers: { 'Accept-Language': 'ru-ru' },
    });
    return response.data.content;
  }
}

export default Api;
