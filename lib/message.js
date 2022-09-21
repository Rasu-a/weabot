const fs = require('fs')

exports.menu = (username, limit, hit, role) => {
    return `
┌──⭓ *About Me*
│
│⭔ Name ? ${username}
│⭔ Limit ? ${limit}
│⭔ Limit Game ? ${hit}
│⭔ Role ? ${role}
│
└───────⭓

┌──⭓ *Animeweb Menu*
│
│⭔ animeplanet ? query
│⭔ anoboy ? query
│⭔ doujindesu ? url-query
│⭔ kiryuu ? query
│⭔ kissmanga ? query
│⭔ klikmanga ? query
│⭔ komikstation ? query
│⭔ mangatoon ? query
│⭔ mynime ? url-query
│⭔ otakudesu ? url-query
│⭔ sauce ? url-quoted
│⭔ mal ? query
│
└───────⭓

┌──⭓ *Convert Menu*
│
│⭔ emoji ? query
│⭔ emojimix ? query
│⭔ shorturl ? url
│⭔ stickerc ? url-quoted
│⭔ sticker ? url-quoted
│⭔ stickernobg ? url-quoted
│⭔ stickerp ? quoted
│⭔ takesticker ? quoted
│⭔ toimg ? quoted
│⭔ tourl ? quoted
│⭔ tovideo ? url-quoted
│⭔ whatmusic ? url-quoted
│⭔ ssweb ? url
│
└───────⭓

┌──⭓ *Creator Menu*
│
│⭔ attp ? query
│⭔ botcomment ? query
│⭔ sadcat ? query
│⭔ captcha ? query
│⭔ changemymind ? query
│⭔ hartatahta ? query
│⭔ tahtacustom ? query
│⭔ kannagen ? query
│⭔ pikachu ? query
│⭔ nuliskanan ? query
│⭔ nuliskiri ? query
│⭔ phcomment ? query
│⭔ drakememe ? query
│⭔ poohmeme ? query
│⭔ smeme ? query
│⭔ trump ? query
│⭔ biden ? query
│⭔ ttp ? query
│⭔ ttpcustom ? query
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│⭔ cocofun ? url
│⭔ facebook ? url
│⭔ gore ? -
│⭔ instagram ? url
│⭔ instastory ? url
│⭔ joox ? query
│⭔ mediafire ? url
│⭔ pinterest ? url
│⭔ soundcloud ? url
│⭔ tiktok ? url
│⭔ tiktokmp3 ? url
│⭔ tiktokwm ? url
│⭔ twitter ? ur
│⭔ youtube ? url
│⭔ ytplay ? url
│⭔ zippyshare ? url
│
└───────⭓

┌──⭓ *Islami Menu*
│
│⭔ audioayat ? query
│⭔ audiosurah ? query
│⭔ jadwalsholat ? query
│⭔ kisahmuslim ? -
│⭔ kisahnabi ? query
│⭔ listkota ? query
│⭔ listsurah ? query
│
└───────⭓

┌──⭓ *More Nsfw Menu*
│
│⭔ mnsfwimage ? query
│⭔ mnsfwmenu ? -
│
└───────⭓

┌──⭓ *Nekoslife Menu*
│
│⭔ sfwgif ? query
│⭔ sfwimage ? query
│⭔ sfwmenu ? -
│
└───────⭓

┌──⭓ *Photo Editor Menu*
│
│⭔ blur ? image
│⭔ brighten ? image
│⭔ circle ? image
│⭔ comrade ? image
│⭔ contrast ? image
│⭔ gay ? image
│⭔ glass ? image
│⭔ greyscale ? image
│⭔ horny ? image
│⭔ invert ? image
│⭔ jail ? image
│⭔ passed ? image
│⭔ pixelate ? image
│⭔ 2x ? image
│⭔ sepia ? image
│⭔ triggered ? image
│⭔ upscale ? image
│⭔ wasted ? image
│⭔ pet ? image
│⭔ wanted ? image
│⭔ gun ? image
│
└───────⭓

┌──⭓ *Random Anime Menu*
│
│⭔ randomanime ? type
│⭔ animecouple ? -
│⭔ animeme ? -
│⭔ hololive ? -
│⭔ animemenu ? [menu]
│
└───────⭓

┌──⭓ *Random Image Menu*
│
│⭔ randomimage ? type
│⭔ minecraft ? -
│⭔ imagemenu ? [menu]
│
└───────⭓

┌──⭓ *Random Text Menu*
│
│⭔ animequote ? query
│⭔ cerpen ? -
│⭔ cersex ? -
│⭔ randomtext ? type
│⭔ textmenu ? [menu]
│
└───────⭓

┌──⭓ *Search Menu*
│
│⭔ animequotes ? query
│⭔ bacaresep ? query
│⭔ dafont ? query
│⭔ gimage ? query
│⭔ jadwaltv ? query
│⭔ liriklagu ? query
│⭔ pin ? query
│⭔ pixiv ? query
│⭔ sfilesearch ? query
│⭔ stickersearch ? query
│⭔ styletext ? query
│⭔ trending ? query
│⭔ ytsearch ? query
│⭔ zerochan ? query
│
└─────

┌──⭓ *Users Menu*
│
│⭔ ceklimit ? -
│⭔ cekpremium ? -
│⭔ profile ? -
│⭔ leaderboard ? -
│⭔ afk ? reason
│⭔ del ? quoted
│
└───────⭓

┌──⭓ *Group Menu*
│
│⭔ leveling <type>
│⭔ nsfw <type>
│⭔ offline <type>
│
└───────⭓

`}

exports.inventory = (username, balance, fish, batu, permata, emas) => {
    return `
┏ [ *YOUR INVENTORY* ]
┃
┣ *NAME* : ${username}
┣ *BALANCE* : ${balance}
┃
┣ [ *HASIL NAMBANG* ]
┃
┣ *BATU 🗿* : ${batu}
┣ *PERMATA 💎* : ${permata}
┣ *EMAS 🪙* : ${emas}
┃
┣ [ *HASIL MANCING* ]
┃
┃ *FISH 🐟* : ${fish}
┗ 

`}