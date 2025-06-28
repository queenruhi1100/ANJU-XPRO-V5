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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS09hVkFzdk4wQzJkM0JFUVNjcFZQS25nK2ZUWFFFZHFvZ0dNK2o3NkJsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDZqdHJQSTNHUUVzTkQwMjlnYjl4RjM1T0hlM1RJQjZrczk4K1E3K1l3az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNQVJtc0wvNEI3Ym9CRE91b1VCTHFDUmJYL1pkWkJZeGRGWGd6SjByWlhNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOUMrNkk4eFlTb2gxbW95dW91bmppRE4vQ3JhT0tvUHFER3ZhUmRLeUVBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVHb3BYZDVTUmdhRk5Oa05oWjM2Z2pnU1JFNzdMK3k3Rjg4cmR6NGphSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhUb0hVYW5mYXlPdHhVTytod0xvYTFJOCs3MHFZZU9PSnZRMkZXQjc1Uzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU9aYUJ4U0lQNFVqUldBMkNESjlKdThqNHJVOXN0Q1daT2dKci9UTGNtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZnBWQU1velJYY3luTEtsNmpyQ0Q3NTdyNU4ra3NTN25LY0lSUkhhRGNFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9pVTFNemhoY21MSGdublQ0QjJodkVkR3I2MGtkcXA3YldlOXBFK0R1Z3VscUNIa0d4aHpwcWhhUW5YR3loWHdaeFp5QlJQeGFLaXBxTFpMNTlIaUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI3LCJhZHZTZWNyZXRLZXkiOiJRVis4YTdPSUlTd0dndjhyUWdSdU93UHJwWDQvQjc3OGZTNU5MVnBoU2lVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2X0JOY2laSVRLLXNGQjZTcHZXakJRIiwicGhvbmVJZCI6IjJjMWNmMmNjLTllM2ItNGI1NS04YjdhLTdhODQ3ZGMzZjJmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3UVNIbGE4NGZxdjVUYTcrSDhBbXk4L2NDR3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFNqWHdCZlFkZDNMNFdmcUVTdjBRUVhadWpZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRaNk0yQ0ZNIiwibWUiOnsiaWQiOiI5NDc0MTcxNDA2MDo3NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijc1ODIzOTA2MzIwNTMyOjc0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUs5N3U4RkVNQysvOElHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXB6amVzMmpJTTc1K0ptU1JsMWorYzR0dHR4VmxvVkRKYjQxYVBULzZWUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOUVqRFVkQXpUNjlaU3hSZzVpQ1lxcVBIN3pBZjZzd1hvNDFWQ085ZkttYUU2dk9WbU5OcWxHb25qcXBnL2FqRDhZRXVaeUNwZ3k3UTFkeTBYei9UREE9PSIsImRldmljZVNpZ25hdHVyZSI6IjBVU24wZ2YrSG5RYWY4TnBGekpBN2tGcUg3TWVxSmFMSmdHdC9HNEc4akQvdGI4NjIrTTRTamdXQWZBdzM0dW9vd3VGQ0dXMnI2MUV6V2tHVlM2VEFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDE3MTQwNjA6NzRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVktjNDNyTm95RE8rZmlaa2taZFkvbk9MYmJjVlphRlF5VytOV2owLytsVSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUxMTEzNTUwLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNIMCJ9",
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
