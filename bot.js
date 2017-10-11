const TelegramBot = require('node-telegram-bot-api');
var validator = require("validator");
const options = require("./answer_options");
console.log(options);

const token = '362163112:AAGgo2QOqwGXHmr7a-8eOnv4ot0GJcJtO8k';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


console.log(options[Math.floor(Math.random()*options.length)])

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    if (msg.text && validator.contains(msg.text.toLowerCase(), "любит") && validator.contains(msg.text.toLowerCase(), "любит")) {
      bot.sendVoice(chatId, './answer_options/love.ogg');
    } else {
      bot.sendVoice(chatId, options[Math.floor(Math.random()*options.length)])
    }
    
});