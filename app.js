const http = require('http')
const Bot = require('messenger-bot')
const process = require('process')

let bot = new Bot({
  token: 'EAAPLtqBBcfUBAJ7poEZBQWLyIygCQrXhhxu3SlkO7idbcG25JSQ5BRZBuG2d1AMqSfVz0rwZCv0zuZC8UZCH5gTwBJKQW',
  verify: 'helloworld',
  app_secret: '18f24ba3ef'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(process.env.PORT)
console.log('¼­¹ö ¶ä')