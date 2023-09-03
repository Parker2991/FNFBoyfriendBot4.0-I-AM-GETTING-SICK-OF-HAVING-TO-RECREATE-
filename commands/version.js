const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'version',

  execute (context) {    
    context.source.sendFeedback('v4.0.6', false)
    context.source.sendFeedback('Foundation:Ultimate v1.0.1 Build:31')
      context.source.sendFeedback('BotEngine:Node-Minecraft-Protocol', false)
       context.source.sendFeedback('FridayNightFunkinBoyfriendBotX nmp rewrite of the FNFBoyfriendBot along with being a continuation of the bot', false)
context.source.sendFeedback('FridayNightFunkinBoyfriendBot Build:91')
  }
}
