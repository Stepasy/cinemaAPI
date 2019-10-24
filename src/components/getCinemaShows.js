import Api from '../Api/Api';
import {
  SELECT_FILM_MESSAGE,
  SESSION_ERROR,
} from '../constants';

const getCinemaShows = async (cinemaId, bot, msg) => {
  const response = await Api.getCinemaFilms(cinemaId);
  if (response.films.length > 0) {
    const buttons = [];
    response.films.forEach((value) => {
      buttons.push(
        [{
          text: value.title,
          callback_data: `filmId_${value.id}_${cinemaId}`,
        }],
      );
    });
    const options = {
      reply_markup: JSON.stringify({
        inline_keyboard: buttons,
      }),
    };
    bot.sendMessage(msg.message.chat.id, SELECT_FILM_MESSAGE, options);
  } else {
    bot.sendMessage(msg.message.chat.id, SESSION_ERROR);
  }
};

export default getCinemaShows;
