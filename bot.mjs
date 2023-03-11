import TeleBot from "telebot"
import {md} from "telegram-md"

const bot = new TeleBot(process.env.TELEGRAM_BOT_TOKEN)

const options = {parseMode: "MarkdownV2", asReply: true}

bot.on('*', msg => msg.reply.text(md.build(md.codeBlock(msg, "json")), options))

export default bot
