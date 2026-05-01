require("dotenv").config();

global.owner = ["6282241558090"]; // wajib di isi tidak boleh kosong
global.mods = ["6282241558090"]; // wajib di isi tidak boleh kosong
global.prems = ["6282241558090"]; // wajib di isi tidak boleh kosong
global.nameowner = "Human.ygy"; // wajib di isi tidak boleh kosong
global.numberowner = "6282241558090"; // wajib di isi tidak boleh kosong
global.mail = "support@tioprm.eu.org"; // wajib di isi tidak boleh kosong
global.gc = "https://chat.whatsapp.com/JS6l9Ru0Lls2rSmSGxBQ4E?mode=gi_t"; // wajib di isi tidak boleh kosong
global.instagram = "https://instagram.com/nurhmn_021"; // wajib di isi tidak boleh kosong
global.wm = "©𝐖𝐎𝐍𝐆-𝐁𝟎𝐓"; // isi nama bot atau nama kalian
global.wait = "_*Tunggu sebentar sayang... (⁠≧⁠▽⁠≦⁠)*_"; // ini pesan simulasi loading
global.eror = "_*Yah Server Error*_"; // ini pesan saat terjadi kesalahan
global.stiker_wait = "*⫹⫺ Stiker sedang dibuat...*"; // ini pesan simulasi saat loading pembuatan sticker
global.packname = "Made With"; // watermark stikcker packname
global.author = "©𝐖𝐎𝐍𝐆-𝐁𝟎𝐓"; // watermark stikcker author
global.maxwarn = "3"; // Peringatan maksimum Warn

global.autobio = false; // Set true/false untuk mengaktifkan atau mematikan autobio (default: false)
global.antiporn = false; // Set true/false untuk Auto delete pesan porno (bot harus admin) (default: false)
global.spam = false; // Set true/false untuk anti spam (default: false)
global.gcspam = false; // Set true/false untuk menutup grup ketika spam (default: false)

// APIKEY INI WAJIB DI ISI! //
global.btc = "9328d53a";
// global.btc = process.env.API_KEY_BTC;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// AKSESKEY INI DI ISI JIKA DIPERLUKAN (e.g suno ai (ai music ) & fitur prem lainnya//
global.aksesKey = "YOUR_AKSESKEY_HERE";
// global.aksesKey = process.env.API_KEY_BTC_AKSESKEY;
// aktifkan akses .env di atas jika kamu ingin menaruh key api di .env
// Daftar terlebih dahulu https://api.botcahx.eu.org

// Tidak boleh diganti atau di ubah
global.APIs = {
  btc: "https://api.botcahx.eu.org",
};

//Tidak boleh diganti atau di ubah
global.APIKeys = {
  "https://api.botcahx.eu.org": global.btc,
};

let fs = require("fs");
let chalk = require("chalk");
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  delete require.cache[file];
  require(file);
});

