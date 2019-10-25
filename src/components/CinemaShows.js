import Api from '../Api/Api';
import {
  SELECT_FILM_MESSAGE,
  SESSION_ERROR,
} from '../constants';
import SelectButtons from './SelectButtons';

class CinemaShows {
  static async get(cinemaId, bot, msg) {
    const response = await Api.getCinemaFilms(cinemaId);
    if (response.films.length > 0) {
      await bot.sendMessage(
        msg.message.chat.id,
        SELECT_FILM_MESSAGE,
        SelectButtons.create(response.films, 'filmId', 'title', cinemaId),
      );
    } else {
      await bot.sendMessage(msg.message.chat.id, SESSION_ERROR);
    }
  }
}

export default CinemaShows;
