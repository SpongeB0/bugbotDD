//base by DGXeon (Xeon Bot Inc.)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "2349091878122","2348022159244"
global.ownername = "𝐃𝚵𝚳𝚭𝚭𝐘🥇❤️‍🩹"
global.ytname = "No YTChannel"
global.socialm = "GitHub: Feranmi245"
global.location = "nigeria, lagos, ABUJA"

global.ownernumber = '2349091878122'  //creator number
global.ownername = '𝐃𝚵𝚳𝚭𝚭𝐘🥇❤️‍🩹' //owner name
global.botname = '𝐃𝚵𝚳𝚭𝚭𝐘—𝚳𝐃🥇❤️‍🩹' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '𝐃𝚵𝚳𝚭𝚭𝐘🥇❤️‍🩹'

//console view/theme
global.themeemoji = ''
global.wm = "𝐃𝚵𝚳𝚭𝚭𝐘🥇❤️‍🩹"

//theme link
global.link = 'https://chat.whatsapp.com/FcQdLsLbwMX11qYhRG9PuC'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212 
global.autoswview = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v2'

//reply messages
global.mess = {
    done: 'succesfully done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
