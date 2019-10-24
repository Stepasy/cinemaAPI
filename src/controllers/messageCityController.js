import getUserCity from '../components/getUserCity';

const messageCityController = (bot) => {
  bot.onText(/\/city/, async (msg) => {
    await getUserCity(bot, msg);
  });
};

export default messageCityController;
