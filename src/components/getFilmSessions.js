import Api from '../Api/Api';

const getFilmSessions = async (cinemaId, filmId, bot, msg) => {
  const response = await Api.getFilmSession(cinemaId, filmId);
  response.forEach((value) => {
    value.times.forEach((time) => {
      bot.sendMessage(
        msg.chat.id,
        `
          begin => ${value.begin}
          end => ${value.end}
          time => ${time.time}
          prices => ${time.prices ? time.prices : 'Not available'}
          link => ${time.ext_link ? time.ext_link : 'Not available'}
        `,
      );
    });
  });
};

export default getFilmSessions;
