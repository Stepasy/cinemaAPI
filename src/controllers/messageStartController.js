import { HELLO_MESSAGE } from '../constants';
import getCityCinemas from '../components/getCityCinemas';

const messageStartController = (bot) => {
  bot.onText(/\/start/, async (msg) => {
    bot.sendMessage(msg.chat.id, HELLO_MESSAGE);
    await getCityCinemas(13, bot, msg);
  });
};

export default messageStartController;
