/*
By GabrielVz (@glytglobal)
*/

import fetch from 'node-fetch'

let handler = async (m, { text }) => {
  if (!text) throw '*「 ✦ 」INGRESA EL TITULO O NOMBRE DEL SCRAPER DE NMPJS A BUSCAR\n\n*• EJEMPLO:*\n> */npmjs yt-search*'
  let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
  let { objects } = await res.json()
  if (!objects.length) throw `「 ✦ 」 LA BUSQUEDA "${text}" NO FUE ENCONTRADA`
  let txt = objects.map(({ package: pkg }) => {
    return `✰ 𝖲𝖢𝖱𝖠𝖯𝖤𝖱 - 𝖬𝖪 ✰
    ✰ 𝐍𝐨𝐦𝐛𝐫𝐞: ${pkg.name}
    ✰ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: V${pkg.version}\n
    ✰ 𝐄𝐧𝐥𝐚𝐜𝐞: ${pkg.links.npm}\n
    ✰ 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧: ${pkg.description}`
  }).join`\n\n`
  m.reply(txt)
}
handler.help = ['npmjs']
handler.tags = ['search']
handler.command = ['npmjs']

export default handler