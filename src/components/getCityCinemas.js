import Api from '../Api/Api';
import { SELECT_CINEMA_MESSAGE } from '../constants';

const getCityCinemas = async (cityId, bot, msg) => {
  const response = await Api.getCinemas(cityId);
  response.forEach((value) => {
    bot.sendMessage(msg.chat.id, value.name);
  });
  setTimeout(() => {
    bot.sendMessage(msg.chat.id, SELECT_CINEMA_MESSAGE);
  }, 500);
};

export default getCityCinemas;
