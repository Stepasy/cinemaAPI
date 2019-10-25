import Api from '../Api/Api';
import {
  HELLO_MESSAGE,
} from '../constants';
import SelectButtons from './SelectButtons';
import Message from './Message';

class UserCity {
  static async get(bot, msg) {
    const response = await Api.getCity();
    await Message.send(
      bot,
      msg.chat.id,
      HELLO_MESSAGE,
      SelectButtons.create(response, 'cityId', 'name'),
    );
  }
}

export default UserCity;
