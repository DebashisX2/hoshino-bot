//HANYA BOT  YANG SUKA ERROR ERROR 🗿

const fs = require('fs')
const chalk = require('chalk')

global.nomerOwner =""
global.nomerOwner2 = ""
global.ownerName = "DEBASHIS"
global.namabot = "DEBASHIS"
global.botName = "DD_BOT"
global.autoJoin = true
global.sessionName = 'session' //hati hati nanti error
global.packName = "DEBASHIS"
global.authorName = "Created By DEBASHIS"
global.namastore = "DEBASHIS Store"
global.nodana = ""
global.nogopay = "-"
global.noovo = "-"
global.qris = "-"
global.TextT = `DEBASHIS` //
global.textT = `DEBASHIS` // 

global.sgc = 'https://chat.whatsapp.com/KmRqBewi4be7LGql2OF9vq'
global.syt = ''
global.sig = 'https://instagram.com/rzldsta_'
const mess = {
wait: '_Sedang Di Proses Mohon Di Tunggu..._',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
err: 'Terjadi Kesalahan Coba Lagi Nanti!',
limit: '[❕] Limit kamu sudah habis silahkan ketik .limit untuk mengecek limit',
claimOn: 'Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam ',
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},
block:{
Bowner: `Maaf kak command sedang dalam perbaikan coba lagi besok .`,
Bsystem: `Command tersebut telah di block oleh system karena terjadi error`
},
only: {
prem : 'Maaf Kak, Tapi Fitur Ini Hanya Bisa Di Gunakan Oleh User Premium',
group: 'Fitur ini dapat digunakan di dalam group!',
ownerB: 'Fitur khusus Owner Bot!',
owner: 'Maaf Kak Ini Fitur Khusus Owner Ku!!!',
admin: 'Fitur dapat digunakan oleh admin group!',
Badmin: 'Jadikan Rangel Sebagai Admin Terlebih Dahulu!!!'
}

}

global.mess = mess
//=================================================//
global.fotoRandom = [
    "https://telegra.ph/file/241d7180c0283ab401434.jpg",
    "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",
    "https://telegra.ph/file/392b8c8e8e881ae188754.jpg",
    "https://telegra.ph/file/26abe0a835fe5d4cc2e41.jpg",
    "https://telegra.ph/file/a2b84d6ab76d01cefa658.jpg",
   
    ]
// Apikey 
global.api = {
ehz: 'always ehz',
angel: 'zenzkey_af003aedbf', // Apikey Zahwazein
Lol: 'GataDios',
Botcahx: 'Admin',
Apiflash: '9b9e84dfc18746d4a19d3afe109e9ea4',
}
//Gausah Juga
global.gcounti = {
'prem' : 1000,
'user' : 20
} 
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})