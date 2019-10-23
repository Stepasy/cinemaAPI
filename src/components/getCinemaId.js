import Api from '../Api/Api';
import { CINEMA_ERROR_MESSAGE } from '../constants';

const getCinemaId = async (bot, msg, match, cityId) => {
  const cinema = match[1];
  let cinemaId = 0;

  const response = await Api.getCinemas(cityId);
  response.forEach((value) => {
    if (value.name === cinema) {
      cinemaId = value.id;
    }
  });

  if (!cinemaId) {
    bot.sendMessage(msg.chat.id, CINEMA_ERROR_MESSAGE);
    return 0;
  } return cinemaId;
};

export default getCinemaId;
