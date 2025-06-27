//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFKb0lUV1FJazBDbVpGNytuWjJqYXJERERwQm9mcXExTFJjREs4UTFHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDdsVDNNd2ZlaHpSczN6OEJWSnl3MzlPaVQ1alNVdkJiZU1mRnBzenRBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSGsxS3IwNlE4TTRTaWk1QjYwNVJtWDVYcWUzaUxxUmRUUDh0RXVwMzJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPcVFtdG12ajJOckp5a2ZUZVIvVDlxTGpONTArM1RsRlVONmhLaURUcjBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlCcTludytSVnZodnFqM2tpbm5zbjRuQVNTOFJuZ3l3dytNdS93TTE4Mmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJdkJCemcvMUV3eno5NldoTzRRanZnaFRWdjAwYVRVeDBMeWh6NnlZSHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBjbnNSTGE4M0lMRjVRTlJGT3JxcHp5YWtEc2RSSFRvMStpaG01S1Uyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2lIZTJjcnFoaHJSVVVpdy9nT3hxd0loUDh4cE5DYVpieEVrZ0dKRWFSdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1kQ1ZVOXVzM2tONXF6ZFg0RjB0aXRGZndCaG85VDJSUE5kbmdSSnVGT25VcGE1VzJVQk9mMklxYWUvUmYzS1IwRUFTazVSS2ZaSlVzZHJlMHhKVWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjYsImFkdlNlY3JldEtleSI6Img0QzVoVHNkMWJsNFp2YkJHYkFkcitJNHUyS05WdTNEYUlQOFY2ZFpSdUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxQa2xBdTk1UWlxeVBEX0lzRGZjTkEiLCJwaG9uZUlkIjoiOGUzYjlmMDItOGJjNy00YWZhLTg3ZTctNWM1ZjMxMGFmYTBmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims2RU11cGpsc2JVdEFWRmRpT0dmU3ZyUDJPWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyM2RDcjFWOG5OQ3VhQTZOTGVTdi9vU0toNVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVDdYSlhSRFEiLCJtZSI6eyJpZCI6Ijk0NzAxMzg4NDIzOjMzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTA2MTEyNjA2MjUwODk6MzNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKK2t1b0FHRUlUVStzSUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJObGFQOE9pb1crUzRuOE1WcUE3cXZ6d3FMYUg3ZDd0RVNxNGRDRHREZVF3PSIsImFjY291bnRTaWduYXR1cmUiOiJQR21XNlI0a1BvcVNSY3dscG9ja0VHU1BhT1hXa2xpeXdEV1IxOTJnVDFGOFlEYis2OXdBL2pCU1hFT2g1SllzMnlSTGVrRHlnMXQ5MWJWNkxuSHZBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSnA1S081VlZpc051NTloSFg0Q3piQzRnOUVCejRlWnBjN3psdFNXMGg1aEpVV2pTWmNDd1hZV3dJV0hRdVlGak8yOUxIdENXQjFmNEQ1WHBVU2g1anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcwMTM4ODQyMzozM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUWldqL0RvcUZ2a3VKL0RGYWdPNnI4OEtpMmgrM2U3UkVxdUhRZzdRM2tNIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTEwMzQzODUsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLdlQifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "1",
  PASSWORD: 
    process.env.PASSWORD || "rasanjana-54233",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
