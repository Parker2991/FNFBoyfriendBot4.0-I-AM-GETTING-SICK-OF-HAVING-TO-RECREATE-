module.exports = {
  name: 'server',

  execute (context) {
    const bot = context.bot
    const message = context.arguments.join(' ')

   
     context.source.sendFeedback(bot.options.host, ':' , bot.options.port, false)
  }
}
