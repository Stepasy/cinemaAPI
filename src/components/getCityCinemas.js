import Api from '../Api/Api';
import { SELECT_CINEMA_MESSAGE } from '../constants';

const getCityCinemas = async (cityId, bot, msg) => {
  const response = await Api.getCinemas(cityId);
  const buttons = [];
  response.forEach((value) => {
    buttons.push(
      [{
        text: value.name,
        callback_data: `cinemaId_${value.id}`,
      }],
    );
  });
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: buttons,
    }),
  };
  bot.sendMessage(msg.message.chat.id, SELECT_CINEMA_MESSAGE, options);
};

export default getCityCinemas;
