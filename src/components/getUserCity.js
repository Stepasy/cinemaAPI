import Api from '../Api/Api';
import {
  HELLO_MESSAGE,
} from '../constants';

const getUserCity = async (bot, msg) => {
  const response = await Api.getCity();
  const buttons = [];
  response.forEach((value) => {
    buttons.push(
      [{
        text: value.name,
        callback_data: `cityId_${value.id}`,
      }],
    );
  });
  const options = {
    reply_markup: JSON.stringify({
      inline_keyboard: buttons,
    }),
  };
  bot.sendMessage(msg.chat.id, HELLO_MESSAGE, options);
};

export default getUserCity;
