import commands from "../commands.json" assert {type: "json"}
import {setWebhook} from "telebot-vercel"
import bot from "../bot.mjs"

await bot.setMyCommands(commands).catch(console.error)

export default setWebhook({bot, path: 'api/telegram.mjs'})
