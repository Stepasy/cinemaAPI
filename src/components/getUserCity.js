import Api from '../Api/Api';
import {
  HELLO_MESSAGE,
} from '../constants';
import createSelectButtons from './createSelectButtons';

const getUserCity = async (bot, msg) => {
  const response = await Api.getCity();

  bot.sendMessage(
    msg.chat.id,
    HELLO_MESSAGE,
    createSelectButtons(response, 'name', 'cityId'),
  );
};

export default getUserCity;
