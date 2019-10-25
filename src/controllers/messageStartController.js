import { HELLO_MESSAGE } from '../constants';
import CityCinemas from '../components/CityCinemas';
import Message from '../components/Message';

const messageStartController = (bot) => {
  bot.onText(/\/start/, async (msg) => {
    await Message.send(
      bot,
      msg.chat.id,
      HELLO_MESSAGE,
    );
    await CityCinemas.get(13, bot, msg);
  });
};

export default messageStartController;
