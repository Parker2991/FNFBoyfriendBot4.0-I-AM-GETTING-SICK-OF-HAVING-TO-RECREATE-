// TODO: Maybe add more authors
const bots = [
 {
    name: { text: 'v0.1 - v0.5-beta', color: 'gray', bold:true },
    authors: ['Prototypes'],
   
    foundation: '11/22/22 - 1/24/23',
    exclaimer:'ehh nothing much just the release of the betas',
  },
   {
    name: { text: 'v1.0-beta', color: 'gray', bold:true },
    authors: ['in console test'],
   
    foundation: '1/25/23',
    exclaimer:'original commands:!cloop bcraw,!cloop sudo,!troll,!say,!op (broke),!deop (broke), !gms (broke),!freeze,!icu <--- these commands no longer can be used in game but in console for beta 1.0 commands added: fake kick,ban,kick,crashserver,stop,gmc,greetin,test(broken idk),bypass,entity spam ,gms ,stop,tntspam ,prefix ,annoy (broke results in a complete server crash keeping ayunboom down for 3 to 5 hours),freeze,crashserver,troll ,trol(more destructive),icu ,say,sudo,cloop',
  },
  {
    name: { text: 'v1.0', color: 'aqua', bold:true },
    authors: ['FNFBoyfriendBot'],
   
    foundation: '1/26/23',
    exclaimer:'FNFBoyfriendBot. commands added: BOOM,deop,troll and trol(added extra code to both commands),kaboom,serverdeop, commands fixed:tp,gms,annoy(attemps to crash the server but not as bad as it was) commands untested:prefix command Broke:icu,freeze,tntspam,entityspam,tntspam? changed name to &b &lFNFBoyfriendBot may change later idk',
  },
  {
    name: { text: 'v1.0.1', color: 'gray', bold:true },
    authors: ['revision 1'],
   
    foundation: '1/26/23',
    exclaimer:'reworked the kaboom command and fixed the description commands but thats about it. also reworked the greeting command',
  },
  {
    name: { text: 'v1.1.0', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '1/26/23 2:00pm',
    exclaimer:'nothing much just added extra stuff to the troll, trol and that is about it',
  },
  {
    name: { text: 'v1.2.0', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '1/28/23 1:51',
    exclaimer:'for ppl me making me really mad -.- got released early',
  },
{
    name: { text: 'v2.0.0', color: 'gray', bold:true },
    authors: ['Major'],
   
    foundation: '2/07/23 8:01pm',
    exclaimer:'added DREAMSTANALERT,technoblade,GODSWORD,KFC,MYLEG,OHHAIL,altcrash,MyHead Reworked tntspam,entityspam,soundbreaker added Spim to the whitelist of the bot released too early than it was planned gonna be released due do the code almost leaked it had to be released early',
  },
  {
    name: { text: 'v2.1.0', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '2/11/23 5:30pm',
    exclaimer:'added: refillcore(had early prototypes of this was original), vanish,deop,cloopdeop,mute,cloopmute reworked: op (supposed to already op the bot but didnt work until this release) and reworked gmc (same problem with op) (had early prototypes of vanish,refillcore,gmc,and op but these were original gonna be automatic but after alot of attempts i said screw it and added 2 commands refillcore, and vanish reworked gmc and op and got them working finally) removed Spim because come to find out he couldnt be trusted',
  },
  {
    name: { text: 'v2.2.0', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '2/20/23',
    exclaimer:'added ckill(added back after trial and error),serversuicidal changed username of the bot from hex code to FNFBoyfriendBot because hex code for the username was confusing as it changes everytime',
  },
  {
    name: { text: 'v3.0.0-Beta', color: 'gray', bold:true },
    authors: ['blue-balled corruption'],
   
    foundation: '',
    exclaimer:'was canceled due to ayunboom being rewriten and renamed to creayun barely usable on there because commands blocks are disabled which i created a bot for that server that has no command blocks just finished the final build of the Creayun build of the bot due to chip announcing that he may make a kaboom clone yk what 1.5.2 and 1.8 support but anyway onto what is in the v3.0-beta well the beta for right now commands added:discord,version,online,list,iownyou,endmysuffering,wafflehouse,whopper,bcraw,destroycore Notes:the original say command was reworked into talking in chat without bcraw and command blocks which the bcraw chatting code is still in the bot but was reworked into the bcraw commmand. maybe some commands removed? i dont know yet edit there is 2 commands removed commands removed:tpe and serverdeop??? reworked commands :say command for right now relay chat mabe will be added as a seperate repl i dont know yet possible would need a whole code rewrite for relay chat',
  },
  {
    name: { text: 'v3.0', color: 'gray', bold:true },
    authors: ['Sky Remanifested'],
   
    foundation: '',
    exclaimer:'the full release of 3.0 the rewrite has been pushed back to 4.0 due to 3.0 already pass its release date and the code i had on hand was done but the rewrite wasnt done Added: SelfCare Made during development:Relay chat prototypes for several servers',
  },
  {
    name: { text: 'v3.0.5', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '',
    exclaimer:'bug fixes',
  },
  {
    name: { text: 'v3.0.9', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '',
    exclaimer:'commands added:Help(finally added after about a year),consolelog(added cuz yes),cloopconsolelog(added cuz yes)',
  },
  {
    name: { text: 'v3.3.0', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '',
    exclaimer:'switched it base to 4.0s base during 4.0s development',
  },
  {
    name: { text: 'v4.0.0-beta', color: 'gray', bold:true },
    authors: ['FNFBoyfriendBot Ultimate'],
   
    foundation: '',
    exclaimer:'all of the command removed and or rewriten from version 3.0.9  Commands added or rewriten:ban,buyrealminecraft,cloop,discord,echo,errortest,freeze,help,icu,info,kick,bots,skids,romncitrash,say,selfdestruct,serversuicidal,sudo,test,trol,troll (note that this is different and is not CommandModules)Modules Added:discord,chat,chat_command_handler,command_manager,position,registry,reconnect,command_core CustomChats added:kaboom(for normal chat) (note that this is different and is not Modules)CommandModules Added:command_error,Command_source a beta release for rn',
  },
  {
    name: { text: 'v4.0.0-Alpha ', color: 'gray', bold:true },
    authors: ['FNFBoyfriendBot Ultimate'],
   
    foundation: '',
    exclaimer:'Commands added: calculator,ckill,evaljs,urban,crash,cloopcrash,core,list,ping,netmsg,skin,tpr Commands Removed:Buyrealminecraft (note that this is different and is not CommandModules)Modules Added:op selfcare,gmc selfcare,vanish selfcare,cspy selfcare,console (note that this is different and is not Modules)CustomChats Added:u2O3a(for custom chat) added util with between(for urban) eval_colors(for evaljs)',
  },
  {
    name: { text: 'v4.0.0', color: 'gray', bold:true },
    authors: ['FNFBoyfriendBotX'],
   
    foundation: '8/11/23',
    exclaimer:'Bot is finished with the rewrite thank you ChipMC and chayapak for helping me rewrite the bot Heres the commands ban (mabe removing), blacklist (currently being worked on), botdevhistory, bots, calculator, changelog, ckill, cloop, cloopcrash(probably removing), core, crash, creators, discord, echo, errortest, evaljs, freeze, help, icu, list, meminfo, mineflayerbot, netmsg (Hello World!), ping (pong!), reconnect, say, selfdestruct, serversuicidal (probably removing because theres ckill), skin, sudo, test, tpr, trol (mabe renaming it to troll), troll (mabe removing it and replacing it with the trol command), urban (ong sus asf), validate, version',
  },
  {
    name: { text: 'v4.0.5', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '8/17/23',
    exclaimer:'bug fixes, did what i said i was gonna do in the last update',
  
  },
  {
    name: { text: 'v4.0.6', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '8/22/23',
    exclaimer:'added 1 console command along with updating console.js so that the bot sends a message to 1 server at a time and not a message to all the servers at a time',
  },
]
/*{
    name: { text: '', color: 'gray', bold:true },
    authors: [''],
   
    foundation: '',
    exclaimer:'',
  },*/
module.exports = {
  name: 'changelog',

  execute (context) {
    const query = context.arguments.join(' ').toLowerCase()

    if (query.length === 0) {
      const list = []

      for (const info of bots) {
        if (list.length !== 0) list.push({ text: ', ', color: 'gray' })
        list.push(info.name)
      }

      context.source.sendFeedback(['Changelogs (', bots.length, ') - ', ...list], false)
      return
    }

    for (const info of bots) {
      const plainName = String(context.bot.getMessageAsPrismarine(info.name)).toLowerCase()
      if (plainName.includes(query)) this.sendBotInfo(info, context.bot)
    }
  },

  sendBotInfo (info, bot) {
    const component = ['']
    component.push('', info.name)
    if (info.exclaimer) component.push('\n', ' ', info.exclaimer)
    if (info.authors && info.authors.length !== 0) {
      component.push('\n', 'Codename ')
      for (const author of info.authors) {
        component.push(author, { text: ', ', color: 'gray' })
      }
      component.pop()
    }
    if (info.foundation) component.push('\n', 'Date: ', info.foundation)
    if (info.prefixes && info.prefixes.length !== 0) {
      component.push('\n', '')
      for (const prefix of info.prefixes) {
        component.push(prefix, { text: ' ', color: 'gray' })
      }
      component.pop()
    }
    bot.tellraw([component])
  }
}//it doing it just for the ones i added lol
// prob a replit moment, it probably thinks there are regexes in the strings
