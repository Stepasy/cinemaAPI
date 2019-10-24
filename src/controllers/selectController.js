import getCinemaShows from '../components/getCinemaShows';
import getFilmSessions from '../components/getFilmSessions';
import getCityCinemas from '../components/getCityCinemas';

const selectController = (bot) => {
  bot.on('callback_query', async (msg) => {
    const answer = msg.data.split('_');
    const id = answer[1];
    const button = answer[0];
    const cinemaId = answer[2] ? answer[2] : 0;

    if (button === 'cityId') {
      await getCityCinemas(id, bot, msg);
    }

    if (button === 'cinemaId') {
      await getCinemaShows(id, bot, msg);
    }

    if (button === 'filmId') {
      await getFilmSessions(cinemaId, id, bot, msg);
    }
  });
};

export default selectController;
