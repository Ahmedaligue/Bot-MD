import axios from 'axios';
const handler = async (m, {command, conn, usedPrefix}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.reply(m.chat, '🚩 *¡Estos comandos están desactivados!*', m, fake);
conn.reply(m.chat, `🚩 *Enviando ${command}...*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
title: packname,
body: dev,
previewType: 0, thumbnail: icons,
sourceUrl: channel }}})
const res = (await axios.get(`https://raw.githubusercontent.com/SheZiR/YaemoriBot-MD/master/src/JSON/${command}.json`)).data;
const haha = await res[Math.floor(res.length * Math.random())];
const messages = [['Imagen 1', dev, await res[Math.floor(res.length * Math.random())],
[[]], [[]], [[]], [[]]], ['Imagen 2', dev, await res[Math.floor(res.length * Math.random())], [[]], [[]], [[]], [[]]], ['Imagen 3', dev, await res[Math.floor(res.length * Math.random())], [[]], [[]], [[]], [[]]], ['Imagen 4', dev, await res[Math.floor(res.length * Math.random())], [[]], [[]], [[]], [[]]]]
await conn.sendCarousel(m.chat, `🚩 Resultado de ${command}`, '🔎 Nsfw - Imagen', null, messages, m);
};
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglass', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos'];
handler.tags = ['nsfw'];
export default handler;