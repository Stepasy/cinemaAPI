import axios from 'axios';
import {
  API_URL,
  CINEMA_API_KEY,
} from '../constants';

class Api {
  static async getCity() {
    const response = await axios({
      method: 'get',
      url: `${API_URL}/cities?${CINEMA_API_KEY}`,
      headers: { 'Accept-Language': 'ru-ru' },
    });

    return response.data.content;
  }

  static async getCinemas(cityId) {
    const response = await axios({
      method: 'get',
      url: `${API_URL}/city/${cityId}/cinemas?${CINEMA_API_KEY}`,
      headers: { 'Accept-Language': 'ru-ru' },
    });

    return response.data.content;
  }
}

export default Api;
