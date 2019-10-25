import messageStartController from './messageStartController';
import messageCityController from './messageCityController';
import selectController from './selectController';

const initControllers = (bot) => {
  messageStartController(bot);
  messageCityController(bot);
  selectController(bot);
};

export default initControllers;
