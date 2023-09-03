const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'cai',

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')
 const CharacterAI = require('node_characterai')
   const characterAI = new CharacterAI();
   context.source.sendFeedback('Work in progress it was only a idea Credits to iucc and his bot useless bot for the original idea ')
   }
}
/*const CharacterAI = require('node_characterai');
const characterAI = new CharacterAI();

(async() => {
    await characterAI.authenticateAsGuest();

    const characterId = "8_1NyR8w1dOXmI1uWaieQcd147hecbdIK7CeEAIrdJw" // Discord moderator

    const chat = await characterAI.createOrContinueChat(characterId);
    const response = await chat.sendAndAwaitResponse('Hello discord mod!', true)

    console.log(response.text);
    // use response.text to use it in a string.
})();*/