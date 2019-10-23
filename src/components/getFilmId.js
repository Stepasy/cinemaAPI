import Api from '../Api/Api';
import { FILM_ERROR_MESSAGE } from '../constants';

const getFilmId = async (bot, msg, match, cinemaId) => {
  const film = match[1];
  let filmId = 0;

  const response = await Api.getCinemaFilms(cinemaId);
  response.films.forEach((value) => {
    if (value.title === film) {
      filmId = value.id;
    }
  });

  if (!filmId) {
    bot.sendMessage(msg.chat.id, FILM_ERROR_MESSAGE);
    return 0;
  } return filmId;
};

export default getFilmId;
