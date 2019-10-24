import TelegramBot from 'node-telegram-bot-api';
import {
  BOT_API_KEY,
} from './constants';
import getUserCity from './components/getUserCity';
import selectController from './controllers/selectController';

const bot = new TelegramBot(BOT_API_KEY, { polling: true });

bot.onText(/\/start/, async (msg) => {
  await getUserCity(bot, msg);
});

selectController(bot);
