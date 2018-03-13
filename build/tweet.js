'use strict'
require('./check-versions')()

// const fs = require('fs');
// const path = require('path');
// const envPath = path.join(__dirname, '..', 'private', '.env');
// require('dotenv').config({path: envPath})

const Twitter = require('twitter');
const deployConfig = require('../private/config.js');
const ora = require('ora')
const chalk = require('chalk')
const twitterClient = new Twitter(deployConfig.twitter);

const deployTweet = (function(){
  const deployTweet = () => {
    twitterClient.post('statuses/update', {
      status: 'The site www.siegfriedgrimbeek.co.za has just been updated and deployed. This is an automated tweet! #twitterbot #bot #webdevelopment #webdev 🙌🙌🙌 ID:' + Date.now(),
      place: '3A99cdab25eddd6bce'
    }, (error, tweet, response) => {
      if(error) throw error
      console.log(chalk.cyan('Successfully posted to Twitter.\n'))
    })
  }
  return { launch : deployTweet}
})

module.exports = deployTweet
