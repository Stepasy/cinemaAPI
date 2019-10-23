import Api from '../Api/Api';
import { SELECT_FILM_MESSAGE } from '../constants';

const getCinemaShows = async (cinemaId, bot, msg) => {
  const response = await Api.getCinemaFilms(cinemaId);
  response.films.forEach((value) => {
    bot.sendMessage(msg.chat.id, value.title);
  });
  setTimeout(() => {
    bot.sendMessage(msg.chat.id, SELECT_FILM_MESSAGE);
  }, 1000);
};

export default getCinemaShows;
