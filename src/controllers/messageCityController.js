import UserCity from '../components/UserCity';

const messageCityController = (bot) => {
  bot.onText(/\/city/, async (msg) => {
    await UserCity.get(bot, msg);
  });
};

export default messageCityController;
