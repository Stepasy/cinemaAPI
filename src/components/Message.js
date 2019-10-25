class Message {
  static async send(bot, msg, text, buttons) {
    await bot.sendMessage(
      msg,
      text,
      buttons,
    );
  }
}

export default Message;
