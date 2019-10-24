import TelegramBot from 'node-telegram-bot-api';
import { BOT_API_KEY } from './constants';
import initControllers from './controllers/initControllers';

const bot = new TelegramBot(BOT_API_KEY, { polling: true });

initControllers(bot);
