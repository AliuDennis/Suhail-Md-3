const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,2347026496844";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347026496844,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_28_04_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDg2LFxuICAgICAgICA1N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjExLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1LFxuICAgICAgICAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOSxcbiAgICAgICAgNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImF6YU1PWVJrNnpvK1NodFhOWVBYZFRYaWt1ZDlYaWYxdVZKcVhrU1RJNGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzAyNjQ5Njg0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzI1Q0Y3RThCMzU1OTRCMEI4MUVCOTVDODI5MjRBNEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ0ODAyODkzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjN4bDVSdktEUm1pZlhBQ2Q3YlZLWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjcyYjMwMDYtOWM4ZC00NmZkLWFjNmMtYjJkNzk3NjVkNDIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDIyMCxcbiAgICAgIDExMixcbiAgICAgIDExOCxcbiAgICAgIDY1LFxuICAgICAgMTM4LFxuICAgICAgMjA0LFxuICAgICAgMTE5LFxuICAgICAgMjE0LFxuICAgICAgMjA4LFxuICAgICAgMzYsXG4gICAgICAxMDUsXG4gICAgICAxOTksXG4gICAgICA5MCxcbiAgICAgIDIwMixcbiAgICAgIDEsXG4gICAgICAxMDIsXG4gICAgICAyNTAsXG4gICAgICA5NSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMixcbiAgICAgIDIzMixcbiAgICAgIDExMCxcbiAgICAgIDkwLFxuICAgICAgMjM1LFxuICAgICAgMTcsXG4gICAgICAyMTEsXG4gICAgICA1NixcbiAgICAgIDIzNixcbiAgICAgIDIxMyxcbiAgICAgIDE1OCxcbiAgICAgIDU5LFxuICAgICAgMTIyLFxuICAgICAgMTAyLFxuICAgICAgMTgwLFxuICAgICAgMTYwLFxuICAgICAgMjMzLFxuICAgICAgMTM4LFxuICAgICAgMjM5LFxuICAgICAgMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlRINkdYS1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjY0OTY4NDQ6NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyMTQ1MDM1OTcyNzMzOjQ1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05DSG1mOERFTVdvL3I4R0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ0FVdkNTR2xoTTFQczY0YjN1OHJFQzFrNmZvRXVKWSs0UXpjWE13Mjh3QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtR25TcGVORVdPaDVLWjFJSEI3eEtkMkROMkFMMGcxTHd5YU12eGFEamVCa3orbkordk1laVdXdC9SVEczaDlkL0lkRDU5SCtIRm9NS1VZNkk2Y2ZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaTGJzc1B0OGFzN1JIKzUrUi9kWXBWMXJaT0FTQ1FQRlBOK1R0dk5DZ0g1SDN3SzkxdytKYWcvTEI2VFk1ZkZZeWZ1MWRqbTBkZytUWGdleWd3TERpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2NDk2ODQ0OjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NDQ4MDI4ODksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIUlVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhSVS5qc29uIjogIntcImtleURhdGFcIjpcIm5Zdzk3Z1BtWStFNlZNTEUxTUtYRStROXZwUXdpY3R2V2JIbVo4V1dIaEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTA3MjA1NTI0OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzQ0NzkyMjA3MTk5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
