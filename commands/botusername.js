module.exports = {
  name: 'botusername',

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')


    context.source.sendFeedback(`${bot.username}`)  
  }
}
