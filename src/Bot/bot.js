import { channel } from "diagnostics_channel";
import { Telegraf } from "telegraf";

const linkBot = process.env.BOT_TOKEN;
const link = process.env.LINK;

const bot = new Telegraf(linkBot)

bot.start((ctx) => ctx.reply('Welcome in my bot'), 
    {reply_markup:{
        inline_keyboard:
        [[{text: "Follow me", channel:{url:link}}]]
    }}

)

bot.launch()