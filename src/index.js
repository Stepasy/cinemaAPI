import TelegramBot from 'node-telegram-bot-api';
import {
  BOT_API_KEY,
  HELLO_MESSAGE,
} from './constants';
import getUserCity from './components/getUserCity';
import getCityCinemas from './components/getCityCinemas';
import getCinemaId from './components/getCinemaId';
import getCinemaShows from './components/getCinemaShows';
import getFilmSessions from './components/getFilmSessions';
import getFilmId from './components/getFilmId';

const bot = new TelegramBot(BOT_API_KEY, { polling: true });

let cityId = 0;
let cinemaId = 0;
let filmId = 0;

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, HELLO_MESSAGE);
});

bot.onText(/\/city (.+)/, async (msg, match) => {
  cityId = await getUserCity(bot, msg, match);
  getCityCinemas(cityId, bot, msg);
});

bot.onText(/\/cinema (.+)/, async (msg, match) => {
  cinemaId = await getCinemaId(bot, msg, match, cityId);
  getCinemaShows(cinemaId, bot, msg);
});

bot.onText(/\/film (.+)/, async (msg, match) => {
  filmId = await getFilmId(bot, msg, match, cinemaId);
  cinemaId = await getFilmSessions(cinemaId, filmId, bot, msg);
});
