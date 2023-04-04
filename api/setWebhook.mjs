import commands from "../src/commands.mjs"
import {setWebhook} from "telebot-vercel"
import bot from "../src/bot.mjs"

await bot.setMyCommands(commands).catch(console.error)

export default setWebhook({bot, path: "api/telegram.mjs"})
