import TelegramBot from 'node-telegram-bot-api';
import { BOT_API_KEY } from './constants';

import messageStartController from './controllers/messageStartController';
import messageCityController from './controllers/messageCityController';
import selectController from './controllers/selectController';

const bot = new TelegramBot(BOT_API_KEY, { polling: true });

messageStartController(bot);

messageCityController(bot);

selectController(bot);
