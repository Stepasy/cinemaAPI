import CinemaShows from '../components/CinemaShows';
import FilmSessions from '../components/FilmSessions';
import CityCinemas from '../components/CityCinemas';

const selectController = (bot) => {
  bot.on('callback_query', async (msg) => {
    const answer = msg.data.split('_');
    const id = answer[1];
    const button = answer[0];
    const cinemaId = answer[2] ? answer[2] : 0;

    if (button === 'cityId') {
      await CityCinemas.get(id, bot, msg);
    }

    if (button === 'cinemaId') {
      await CinemaShows.get(id, bot, msg);
    }

    if (button === 'filmId') {
      await FilmSessions.get(cinemaId, id, bot, msg);
    }
  });
};

export default selectController;
