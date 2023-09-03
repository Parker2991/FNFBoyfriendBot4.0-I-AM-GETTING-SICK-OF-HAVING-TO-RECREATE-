const CommandError = require('../CommandModules/command_error')

module.exports = {
  name: 'say',
//<< this one line of code broke it lmao
  execute (context) {

    const message = context.arguments.join(' ')

   const prefix = {
 translate: '%s%s%s%s › ',
      bold: false,
      color: 'dark_gray',
      with: [
        { color: 'dark_purple', text: 'FNF', bold:true },
          { color: 'aqua', text: 'Boyfriend', bold:true },
          { color: 'dark_red', text: 'Bot', bold:true},
          { color: 'black', text: 'X', bold:true },
              ]
    }

    context.bot.tellraw(['', prefix, message])
  }
}
//[%s] %s › %s
//was it showing like that before?
// just do text bc too sus rn ig
// You should remove the with thing and the translate and replace 