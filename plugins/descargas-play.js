import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `🚩 *Ingrese el nombre de un video de YouTube*\n\nEjemplo, ${usedPrefix + command} Distancia - Kimberly Contreraxx`,  m, rcanal)

let user = global.db.data.users[m.sender]
try {
let res = await Scraper.ytsearch(text)
let { title, size, quality, thumbnail, dl_url } = await Scraper.ytmp4(res[0].url)
if (size.includes('GB') || size.replace(' MB', '') > 300) { return await m.reply('El archivo pesa mas de 300 MB, se canceló la Descarga.')}
let txt = `╭─⬣「 *YouTube Play* 」⬣\n`
    txt += `│ 🚩 *Titulo:* ${title}\n`
    txt += `│ 📅 *Publicado:* ${res[0].published}\n`
    txt += `│ 🕜 *Duración:* ${res[0].duration}\n`
    txt += `│ 👤 *Autor:* ${res[0].author}\n`
    txt += `│ 📎 *Url:* ${res[0].url}\n`
    txt += `│ 🪴 *Calidad:* ${quality}\n`
    txt += `│ ⚖ *Peso:* ${size}\n`
    txt += `╰─⬣`
await conn.sendFile(m.chat, thumbnail, 'thumbnail.jpg', txt, m)
await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `error.mp4`, caption: `*🍭 Titulo ∙* ${title}\n*🪴 Calidad ∙* ${quality}`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: fkontak })  
} catch {
}}
handler.help = ["play2 <búsqueda>"]
handler.tags = ["downloader"]
handler.command = ["play2"]
handler.register = true
//handler.limit = 1
export default handler