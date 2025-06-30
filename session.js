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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZHU3kyTmlYQVllNi9tdlJONzUxWXp2a1ZQUFhoUURTdjh5bWtKa1BtWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWdGMVpGZXRkUnhtZDQ4QVE4SGZYNVV6aittZ0tlUHNoaTVnemFJUGVCZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS29ncUtveVFhOHBKSHF6V053MnFKY3NnNXVaaGFINUJ2dE9qOTdWc25NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyY0dtaEJFeFdEL05jRXJjRGFUSElJbC9OWmhpd1ZXdEpobzlrcVZTeWdFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVMRTAxMENKL2p5RTcwNkVZaXdCcUNSYThwMVRGbitJQnlUdDJndHlCR3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJxMGgxK0g4ekhhQld1WnBuTHQwNm8rYitHaUFWd3RTUGhSTlBROXNneGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZSZlpERWV6dGM1c3doeTF1UEFQYnp3TFB5eUMvbUhhc09Ya2Z6MFhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWGdqSzZhWUQrM1B6TDRuOFZpYjlrcDlveU15eE1rcU5ranBZWXBnRWFHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhjeFZrMUhaaW1xSGhiUFV1UjZBZUt5ejVTL05pWG5KN1dlUHdnVHdVY3VsNUluV2xDZG5FN1phODAweUdpZFpkWC9VbEovTE9oRDZaMWQ0VGp2ckF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI3LCJhZHZTZWNyZXRLZXkiOiJQVWRlR0FnZUNNYkJreU5DUitiSFMreVJEbFVyeTh2SkRHeUQ1OUIwejJvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwN2FYaUhTWVNmNnExT20wbmh3YjlRIiwicGhvbmVJZCI6IjFjNzJkZGZhLTM2YzYtNGRjNi05OTdhLWNmMGViZjE3ZTE3MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMklvMEtzQm5UMkJ2OWkwSXo2SEpmM3VNZUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1pLYnpQSXJGY3FBMDFoMFNVUWxYRjlzNi9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNMTTI1U1c2IiwibWUiOnsiaWQiOiI5NDcwMTM4ODQyMzozNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwNjExMjYwNjI1MDg5OjM2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0trdW9BR0VQdWlpTU1HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmxhUDhPaW9XK1M0bjhNVnFBN3F2endxTGFIN2Q3dEVTcTRkQ0R0RGVRdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQnpCa21oMzM1RWxEeTA4VW5XeU9ydnVEOHhXNDkwNDV5eGJsOHM4c0hJSmpVQmFzeVk3TFhjRmpZdlNjOWphYmRINThkSGdiZlVNV2NrNE90SlpZQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IjlZaDlwQlRBL0dmUFZXdC9yWlZvM1RaUWlVTklVSFM4M3B2am50WFNJN2s4eUx6VzhkYzVqVXpQZ1VncXFIemwvcDc3STYwM2NoaktEVVRvRDJ3WEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDEzODg0MjM6MzZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFpXai9Eb3FGdmt1Si9ERmFnTzZyODhLaTJoKzNlN1JFcXVIUWc3UTNrTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMjU3NDgwLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS3ZUIn0=",
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
