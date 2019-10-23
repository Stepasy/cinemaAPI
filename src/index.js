import TelegramBot from 'node-telegram-bot-api';
import {
  BOT_API_KEY,
  HELLO_MESSAGE,
} from './constants';
import getUserCity from './components/getUserCity';
import getCityCinemas from './components/getCityCinemas';

const bot = new TelegramBot(BOT_API_KEY, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, HELLO_MESSAGE);
});

bot.onText(/\/city (.+)/, async (msg, match) => {
  const cityId = await getUserCity(bot, msg, match);
  getCityCinemas(cityId, bot, msg);
});
