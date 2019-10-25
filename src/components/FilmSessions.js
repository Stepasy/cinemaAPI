import moment from 'moment';
import Api from '../Api/Api';

class FilmSessions {
  static async get(cinemaId, filmId, bot, msg) {
    const response = await Api.getFilmSession(cinemaId, filmId);
    response.forEach((value) => {
      value.times.forEach((time) => {
        bot.sendMessage(
          msg.message.chat.id,
          `
Дата начала => ${value.begin}
Время => ${moment(time.time, 'HH-mm-ss').format('HH:mm')}
Цены => ${time.prices ? time.prices : 'Не доступно'}
Ссылка для заказа => ${time.ext_link ? time.ext_link : 'Не доступно'}
           `,
        );
      });
    });
  }
}

export default FilmSessions;
