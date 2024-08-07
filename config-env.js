const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
var SESSION_ID;

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}
if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
}else{
SESSION_ID = envv2.SESSION_ID
}




module.exports = {
    SESSION_ID: PRABATH-MD~h7Mx1YqI#PNz7v1bnGCVaWRKjzf0ANMUaT-O7u9zQz48PyhOc_v4,    
    BOT_NUMBER:  221765291883,
    GITHUB_USERNAME: abdou0diouf,
    GITHUB_AUTH_TOKEN: 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,
};
