var Botkit = require('botkit')
var Witbot = require('witbot')

var slackToken = "xoxb-36765713364-IEIxmspAGV52mX5uxP4HeR4s"
var witToken = "N7TEI4LXZSTXLBKXHCW4ZBUSCPFMLSH4"
var openWeatherApiKey = "OPENWEATHER_KEY"

var controller = Botkit.slackbot({
  debug: false
})

controller.spawn({
  token: slackToken
}).startRTM(function (err, bot, payload) {
  if (err) {
    throw new Error('Error connecting to slack: ', err)
  }
  console.log('Connected to slack')
})

var witbot = Witbot(witToken)

controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  witbot.process(message.text, bot, message)
})


witbot.hears('hola', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'Hello to you as well!')
  console.log("----HOLA------")
  console.log(outcome)
  console.log(bot)
  console.log(message)
  console.log("----------")
})

//var weather = require('./weather')(openWeatherApiKey)

/*
witbot.hears('default_intent', 0.5, function (bot, message, outcome) {
  console.log(outcome)
  console.log(bot)
  console.log(message)
  bot.reply(message, 'Hello')
  /*

  if (!outcome.entities.location || outcome.entities.location.length === 0) {
    bot.reply(message, 'I\'d love to give you the weather but for where?')
    return
  }


  var location = outcome.entities.lugar[0].value


  weather.get(location, function (error, msg) {
    if (error) {
      console.error(error)
      bot.reply(message, 'uh oh, there was a problem getting the weather')
      return
    }
    bot.reply(message, msg)
  })
*/
})
*/
