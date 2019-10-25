import Api from '../Api/Api';
import {
  HELLO_MESSAGE,
} from '../constants';
import SelectButtons from './SelectButtons';

class UserCity {
  static async get(bot, msg) {
    const response = await Api.getCity();

    await bot.sendMessage(
      msg.chat.id,
      HELLO_MESSAGE,
      SelectButtons.create(response, 'cityId', 'name'),
    );
  }
}

export default UserCity;
