import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 100 
global.db.data.users[m.sender].exp += 100
  
conn.sendFile(m.chat, vn, 'pikachu.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /PIKA|pica|Pica|Pikachu|pikachu|PIKACHU|picachu|Picachu/ 
handler.command = new RegExp
export default handler
