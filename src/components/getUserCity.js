import Api from '../Api/Api';
import { CITY_ERROR_MESSAGE } from '../constants';

const getUserCity = async (bot, msg, match) => {
  const city = match[1];
  let cityId = 0;

  const response = await Api.getCity();
  response.forEach((value) => {
    if (value.name === city) {
      cityId = value.id;
    }
  });

  if (!cityId) {
    bot.sendMessage(msg.chat.id, CITY_ERROR_MESSAGE);
    return 0;
  } return cityId;
};

export default getUserCity;
