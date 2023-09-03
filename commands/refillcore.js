module.exports = {
  name: 'rc',

  execute (context) {
      const bot = context.bot
   
      bot.core.refill()
  }
}