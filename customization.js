const os = require("os");
const packageJson = require("./package.json"); // Get package details

module.exports = {
  //====================menu=================================
  MENUMSG: function (pushname, runtime, config) {
    return `

┏━━━━❮ 📆 ᴛᴏ ᴅᴀʏ 📆❯━━━━
┃
┃ 📅 Date Today : ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now : ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 ᴅᴇᴛᴇʟᴇꜱ 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝚁𝚞𝚑𝚒 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃🤴𝙾𝚠𝚗𝚎𝚛 : ${config.OWNER_NAME}
┃🔊 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃🍁 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━
        `.trim();
  },
  //======================download============================
  TIKTOK: function (title, author, q) {
    return `
🎟️ *QUEEN RUHI-MD TIKTOK DOWNLOADER* 🎟️

🔢 *Please reply with the number you want to select:*

Title  * ${title}
Author * ${author}
URL    * ${q}
        `.trim();
  },
  FACEBOOK: function (title, q) {
    return `
💢 QUEEN RUHI-MD FB DOWNLOADER 💢
    
🎞 TITLE 🎞 ${title}

Fb-Url: -=-${q} 
        `.trim();
  },
  TWITTER: function (desc, q) {
    return `
💢 QUEEN RUHI-MD TWITTER DOWNLOADER 💢

📝 Description: ${desc || "No description"}

Twitter URL: ${q}
        `.trim();
  },
  //=================main==================================
  ALIVEIMG: "https://files.catbox.moe/p3vzjq.jpg",
  ALIVEVOICE: "https://files.catbox.moe/zf8z97.opus",
  ALIVEMSG: function (hostname, config, pushname, runtime) {
    return `
✈︎❤️ 𝐐𝐔𝐄𝐄𝐍 𝐑𝐔𝐇𝐈 𝐀𝐋𝐈𝐕𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 ✈︎❤️

✍︎◍ 𝗜'𝗺 𝗔𝗹𝗶𝘃𝗲, 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝗔𝘀𝗸𝗶𝗻𝗴!

┏━━━━❮ 🌐 TOᗪᗩY 🌐❯━━━━
┃
┃ 📅 Date Today: ${new Date().toLocaleDateString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃ ⌚ Time Now: ${new Date().toLocaleTimeString("en-GB", {
      timeZone: "Asia/Colombo",
    })}
┃
┗━━━━━━━━━━━━━━━
┏━━━━❮📝 𝗦𝘁𝗮𝘁𝘂𝘀 𝗗𝗲𝘁𝗮𝗶𝗹𝘀 📝❯━━━
┃🗣️ 𝚄𝚜𝚎𝚛 : ${pushname}
┃🤖 𝙱𝚘𝚝 : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ V${packageJson.version}
┃📜 𝙿𝚛𝚎𝚏𝚒𝚡 : ${config.PREFIX}
┃📚 𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : ${packageJson.version}
┃📝 𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${hostname}
┃📟 𝙷𝚘𝚜𝚝 : ${os.hostname()}
┃⚙️ 𝙼𝚘𝚍𝚎 : ${config.MODE}
┃💻 𝚄𝚙𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃✨𝙼𝚎𝚖 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
      2
    )}MB / ${Math.round(require("os").totalmem / 1024 / 1024)}MB
┗━━━━━━━━━━━━━━━

☕︎ ᴇɴᴏʏ ᴛʜᴇ ʙᴏᴛ ᴏғ © 𝚀𝚄𝙴𝙴𝙽 ʀᴜʜɪ 𝗑ᴾᴿᴼ♲︎︎︎ ✨
        `.trim();
  },
  //====================movie======================================
  GROUP: function (groupName, conf) {
    return `
📨 *𝙎𝙝𝙖𝙧𝙚𝙙 𝙄𝙣:* ${groupName}
🛡️ *𝘼𝙙𝙢𝙞𝙣:* ${conf.MNAME}
        `.trim();
  },
  SINHALASUB: function (movieData) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

☘️ *𝗧ɪᴛʟᴇ ➮* ${movieData.title}

💃 *𝗥ᴀᴛɪɴɢ ➮* ${movieData.rating?.value || "𝙽/𝙰"} ★
📅 *𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* ${movieData.metadata?.releaseDate || "𝙽/𝙰"}
🌎 *𝗖ᴏᴜɴᴛʀʏ ➮* ${movieData.metadata?.country || "𝙽/𝙰"}
⏰ *𝗥ᴜɴᴛɪᴍᴇ ➮* ${movieData.metadata?.runtime || "𝙽/𝙰"}
        `.trim();
  },
  CINESUBZ: function (title, metadata, rating) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

☘️ *𝗧ɪᴛʟᴇ ➮* ${title}
       
💃 *𝗥ᴀᴛɪɴɢ ➮* ${rating?.value || "𝙽/𝙰"} ★
📅 *𝗥ᴇʟᴇꜱᴇᴅ ᴅᴀᴛᴇ ➮* ${metadata?.releaseDate || "𝙽/𝙰"}
🌎 *𝗖ᴏᴜɴᴛʀʏ ➮* ${metadata?.country || "𝙽/𝙰"}
⏰ *𝗥ᴜɴᴛɪᴍᴇ ➮* ${metadata?.runtime || "𝙽/𝙰"}
🎭 *𝗚ᴇɴᴀʀᴇꜱ ➮* ${metadata?.genres.map((g) => `#${g}`).join(" • ") || "𝙽/𝙰"} 
        `.trim();
  },
  CINETVSHOW: function (movieResponse) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

☘️ *𝗧ɪᴛʟᴇ ➮* ${movieResponse.episodeInfo?.title || "𝙽/𝙰"}
🎞️ *𝗘𝗽𝗶𝘀𝗼𝗱𝗲 𝗧𝗶𝘁𝗹𝗲:* ${movieResponse.episodeInfo?.episodeTitle || "𝙽/𝙰"}
📅 *𝗗𝗮𝘁𝗲:* ${movieResponse.episodeInfo?.date || "𝙽/𝙰"}
        `.trim();
  },
  CINETVSHOWALLDL: function (movieData) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

📚 *𝗠𝗼𝘃𝗶𝗲 𝗧𝗶𝘁𝗹𝗲:* ${movieData.data.title}
📆 *𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:* ${movieData.data.releaseDate}
🌐 *𝗡𝗲𝘁𝘄𝗼𝗿𝗸:* ${movieData.data.network}
        `.trim();
  },
  SIMNHALAMOVIE: function (title) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

🎞️ *𝚃𝚒𝚝𝚕𝚎:* ${title}  
        `.trim();
  },
  AWAMOVIE: function (title, releaseDate, country) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

📚 *𝗧𝗶𝘁𝗹𝗲:* ${title}  
📆 *𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:* ${releaseDate}  
🌐 *𝗖𝗼𝘂𝗻𝘁𝗿𝘆:*  ${country}      
        `.trim();
  },
  ANIMEMOVIE: function (title, releaseDate, country, duration) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

📚 ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${releaseDate}  
🌍 𝗖𝗼𝘂𝗻𝘁𝗿𝘆:${country}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  BAISCOMOVIE: function (title, year, rating, duration) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺

📚 *𝗧𝗶𝘁𝗹𝗲:*  ${title} 
📅 𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:${year}  
🌍 RATINGS:${rating}  
⏳ 𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:${duration}  
        `.trim();
  },
  ADULTMOVIE: function (title, rating, description) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺
──────────────────
📚 *𝗧𝗶𝘁𝗹𝗲:* ${title}
⭐ *𝗥𝗮𝘁𝗶𝗻𝗴𝘀:* ${rating}

🌍 *Description:*  
${description}
──────────────────
📥 *Downloading...*
        `.trim();
  },
  ANIMOMOVIE: function (movieData) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺  
        
📚 ${movieData.title}  
⭐ Description:${movieData.description} 
    
🌍  ${movieData.plot} 
        `.trim();
  },
  FILMPOMOVIE: function (title, rating, year, duration) {
    return `
📺 *『 𝐑𝐔𝐇𝐈 𝕩ᵖʳᵒ 𝐂𝐈𝐍𝐄𝐌𝐀 』* 📺  

📚 *𝗠𝗼𝘃𝗶𝗲 𝗡𝗮𝗺𝗲:* ${title}
⭐ *𝗜𝗠𝗗𝗕 𝗥𝗮𝘁𝗶𝗻𝗴𝘀:* ${rating}
📅 *𝗥𝗲𝗹𝗲𝗮𝘀𝗲 𝗗𝗮𝘁𝗲:* ${year}
⏳ *𝗗𝘂𝗿𝗮𝘁𝗶𝗼𝗻:* ${duration}
        `.trim();
  },
  //=====================youtube===========================================
  SONG: function (data) {
    return `
🎵 SONG DOWNLOADER
      
✅ Song Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Ruhi Bot  
❤️ Created by Peksha rasanjana
        `.trim();
  },
  YTMP3: function (data) {
    return `
🎥 *MP3 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url}

🎬 *Enjoy the video brought to you by Queen Ruhi Bot!* 
        `.trim();
  },
  VIDEO: function (data) {
    return `
🎵 VIDEO DOWNLOADER
      
✅ VIDEO Found!
          
• 🎶 *Title:* ${data.title}
• ⏱️ *Duration:* ${data.timestamp}
• 👁️ *Views:* ${data.views}
• 📅 *Uploaded On:* ${data.ago}
• 🔗 *Link:* ${data.url}
          
🎧 Enjoy your music with Queen Ruhi Bot  
❤️ Created by Peksha rasanjana
        `.trim();
  },
  YTMP4: function (data) {
    return `
🎥 *MP4 Download Found!* 

➥ *Title:* ${data.title} 
➥ *Duration:* ${data.timestamp} 
➥ *Views:* ${data.views} 
➥ *Uploaded On:* ${data.ago} 
➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by Queen Ruhi Bot!* 
        `.trim();
  },
};
