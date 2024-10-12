
import axios from 'axios'

let handler = async (m, { conn, text }) => {
    if (m.body.startsWith('!ip ')) {
        const ip = m.body.split(' ')[1];

        try {
            const response = await axios.get(`http://ip-api.com/json/${ip}`);
            const data = response.data;

            if (data.status === 'fail') {
                m.reply(`No se encontró información para la IP: ${ip}`);

               const info = `
                *Información para la IP:* ${ip}
                - 🌍 País: ${data.country}
                - 🏙️ Región: ${data.regionName}
                - 🌆 Ciudad: ${data.city}
                - 🕹️ Proveedor de Internet: ${data.isp}
                - 🌐 Organización: ${data.org}
                - 📡 ASN: ${data.as}
                - 📍 Latitud: ${data.lat}
                - 📍 Longitud: ${data.lon}
                - ⏲️ Zona Horaria: ${data.timezone}
                - 📅 Código Postal: ${data.zip}
                - 💻 Dirección IP: ${data.query}
                `;
                m.reply(info);
            
        } catch (error) {
            m.reply('Hubo un error al buscar la IP. Inténtalo de nuevo más tarde.');
        }}
    
handler.help = ['ip <alamat ip>']
handler.tags = ['owner']
handler.command = ['ip']
handler.rowner = true
export default handler