// Day 9

const { Telegraf } = require("telegraf");

const bot = new Telegraf("TOKEN");

bot.on("text", (ctx) => {
    const userFirstName = ctx.message.from.first_name;

    const userUsername = ctx.message.from.username;

    const chatId = ctx.message.chat.id;

    const receivedText = ctx.message.text;

    ctx.reply(`
🔍 Data collection from the ctx object completed successfully!

👤 Your Telegram first name: ${userFirstName}
🏷️ Your username: @${userUsername}
🆔 Chat ID: ${chatId}
✉️ Your message text: "${receivedText}"
    `);
});

bot.launch();

console.log("Bot launched successfully and is ready to inspect the ctx object!");
