import Api from '../Api/Api';
import {
  SELECT_FILM_MESSAGE,
  SESSION_ERROR,
} from '../constants';
import createSelectButtons from './createSelectButtons';

const getCinemaShows = async (cinemaId, bot, msg) => {
  const response = await Api.getCinemaFilms(cinemaId);
  if (response.films.length > 0) {
    bot.sendMessage(
      msg.message.chat.id,
      SELECT_FILM_MESSAGE,
      createSelectButtons(response.films, 'filmId', 'title', cinemaId),
    );
  } else {
    bot.sendMessage(msg.message.chat.id, SESSION_ERROR);
  }
};

export default getCinemaShows;
