import TeleBot from "telebot"
import {md} from "telegram-md"
import "telebot/plugins/shortReply.js"
import "telebot/plugins/regExpMessage.js"
import {NewMethodsMixin, parseCommands} from "telebot-utils"

const TeleBotWithNewMethods = NewMethodsMixin(TeleBot)

const bot = new TeleBotWithNewMethods(process.env.TELEGRAM_BOT_TOKEN)

const options = {parseMode: "MarkdownV2", asReply: true}

bot.mod("message", parseCommands)

bot.on("*", msg => msg.reply.text(md.build(md.codeBlock(JSON.stringify(msg, null, 2), "json")), options))

bot.on("text", async ({isCommand, command, entities = [], reply = {}} = {}) => {
    if (!isCommand) return
    switch (command) {
        case "emoji":
            const custom_emoji_ids = entities.map(({custom_emoji_id} = {}) => custom_emoji_id).filter(Boolean)
            const result = await bot.getCustomEmojiStickers({custom_emoji_ids})
            return reply.text(md.build(md.codeBlock(JSON.stringify(result, null, 2), "json")), options)
    }
})

export default bot
