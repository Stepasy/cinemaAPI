import Api from '../Api/Api';
import { SELECT_CINEMA_MESSAGE } from '../constants';
import createSelectButtons from './createSelectButtons';

const getCityCinemas = async (cityId, bot, msg) => {
  const response = await Api.getCinemas(cityId);
  bot.sendMessage(
    msg.message
      ? msg.message.chat.id
      : msg.chat.id,
    SELECT_CINEMA_MESSAGE,
    createSelectButtons(response, 'cinemaId', 'name', cityId),
  );
};

export default getCityCinemas;
