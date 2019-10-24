import Api from '../Api/Api';

const getFilmSessions = async (cinemaId, filmId, bot, msg) => {
  const response = await Api.getFilmSession(cinemaId, filmId);
  response.forEach((value) => {
    value.times.forEach((time) => {
      bot.sendMessage(
        msg.message.chat.id,
        `
          Дата начала => ${value.begin}
          Дата конца => ${value.end}
          Время => ${time.time}
          Цены => ${time.prices ? time.prices : 'Не доступно'}
          Ссылка для заказа => ${time.ext_link ? time.ext_link : 'Не доступно'}
        `,
      );
    });
  });
};

export default getFilmSessions;
