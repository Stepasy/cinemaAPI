import Api from '../Api/Api';
import { SELECT_CINEMA_MESSAGE } from '../constants';
import SelectButtons from './SelectButtons';
import Message from './Message';

class CityCinemas {
  static async get(cityId, bot, msg) {
    const response = await Api.getCinemas(cityId);
    await Message.send(
      bot,
      msg.message
        ? msg.message.chat.id
        : msg.chat.id,
      SELECT_CINEMA_MESSAGE,
      SelectButtons.create(response, 'cinemaId', 'name', cityId),
    );
  }
}

export default CityCinemas;
