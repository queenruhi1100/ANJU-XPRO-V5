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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1Bc09qZGVpOXUzY1grZ29xallIdUtFZkVLNVVoRHJwRlBrSzNwcXpFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzUySmFtVi95cEt2N1ZLZFYza3J0cFdYako2b3B1c2EwNDZWMjByZ1h4Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSUxVRUJ5WUxJTzFlRTcyQVc2ODNZNC9RUlpZKzVSbUpTcVIyYVRTRUVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUUF4b3k5VmU1d1RNUGhQbzZpN2E1eFQzcXQ4Nm52OEVERHJvTFFScUZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDM3lhTlU5eG96UDlVbHhGUmsySkF0bXBWRkhJZk1CbU1VN2gwWEJyMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktxdlFLelJRQ205T0pObHJyclB6U3JUR2RzQVdiL2VEWUNEakJvVTA5UXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUNBZVFER1JNUEdxWDd3Rnp6aWNaNXY2ellVWTFjV1BaVU44Z1NCbCtXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibW1QVVVkeW9ZR2xPRlZlaFBoT2k0RDFYUkZjRTdmQ2kxei9EaE1HWFpFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhpeE5YQ0JJOEpjUVNrY20xbW5kNlN0U25kSTVXSVU3a1J2a2pHeEdKa1hyRlNVbVF2aWtQQmgyZmQxcFh6L3NJdW1DMVZ4eWwvdzBoTzBUaEdtRUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzMsImFkdlNlY3JldEtleSI6IlFyU2dPWG13K1BHcEdUNkZ3aWE4NHhBREYyb045KzJkUzR0NGxQbkV3clk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjAwMTgyNjNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjgwMUY1RDcyRDRGMjI3NTI5MzU4RThFRTgyNkFGRkQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MTI1OTgzN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNGJNbGZCUDFSYld5VnBjamluNzdSdyIsInBob25lSWQiOiJjMzM0OTk5ZC0yMGViLTQ2OTAtODMwYS02YWE2NjI0YmJkN2MiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDJwKzdtSWxteUJ2YnA1SHoza0tmbzNsMFNzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9TbXd0QnAyQ3NjV2ZRVTN1dWcreGhHWWE0dz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWSjdYNjhCSiIsIm1lIjp7ImlkIjoiOTQ3NjAwMTgyNjM6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2RufCdkpDwnZKE8J2SjPCdkpoiLCJsaWQiOiI1ODY1NjcwMzkzNDQ4NzoyMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDSzI3c0JFS3kxaU1NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1BYjFIekgxR3loZnpwa2p5ck1NY0E1Z0ZPL3J1S052a0FmOFNlVGtIZ3M9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRjTjhnSU5oKzJuZXkyYUFSY2xobGgzbWxNSEJsVjJvVnpQTWZtc3p0UkVXT2VnbjdVRFJiTGxEQ1Z0akM3b0xwNWJDcmNIRFpDUVdXczZ1bGo2UkJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvNDBodEMvOXA5T2EzN0lKU0N2UW9aQ0ZDT2VPYzhDaEhLTjZQZDJxOVRUTWg4dHBPbm56V2hIUDROb21DeDl4Sk1nL3dwclMvbWdPTU9TYnN3cU1BQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYwMDE4MjYzOjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRBRzlSOHg5UnNvWDg2Wkk4cXpESEFPWUJUdjY3aWpiNUFIL0VuazVCNEwifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTI1OTgzMywibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJwQSJ9",
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
