import { HELLO_MESSAGE } from '../constants';
import CityCinemas from '../components/CityCinemas';

const messageStartController = (bot) => {
  bot.onText(/\/start/, async (msg) => {
    await bot.sendMessage(msg.chat.id, HELLO_MESSAGE);
    await CityCinemas.get(13, bot, msg);
  });
};

export default messageStartController;
