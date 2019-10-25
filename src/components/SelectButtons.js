class SelectButtons {
  static create(buttonsArray, buttonName, fieldName, extId) {
    const buttons = [];
    buttonsArray.forEach((value) => {
      buttons.push(
        [{
          text: fieldName === 'title' ? value.title : value.name,
          callback_data: `${buttonName}_${value.id}${extId ? `_${extId}` : ''}`,
        }],
      );
    });
    const options = {
      reply_markup: JSON.stringify({
        inline_keyboard: buttons,
      }),
    };
    return options;
  }
}

export default SelectButtons;
