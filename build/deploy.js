'use strict'
require('./check-versions')()

const ora = require('ora')
const chalk = require('chalk')
const FtpDeploy = require('ftp-deploy')

const websiteDeploy = (function(skipDeployment){
  const launchDeploy = function() {

    if (skipDeployment === 'false'){
      console.log(chalk.cyan('\n  Deployment not initiated.\n'))
      return false
    }

    const spinner = ora('FTP Website deployment initiated...')
    spinner.start()

    const privateConfig = require('../private/config.js')
    const deployConfig = privateConfig.ftp_settings

    const ftpDeploy = new FtpDeploy()
    ftpDeploy.deploy(deployConfig, function(err) {
        spinner.stop()
        if (err) console.log(err)
        else console.log(chalk.cyan('\n  Deployment complete.\n'))
    })

    ftpDeploy.on('uploading', function(data) {
        data.totalFileCount
        data.transferredFileCount
        data.percentComplete
        data.filename
    })

    ftpDeploy.on('uploaded', function(data) {
      spinner.stop()
      console.log(chalk.yellow(`    Transferring: ${data.filename} | ${data.percentComplete}%`))
      console.log(chalk.green(`    ${data.transferredFileCount}/${data.totalFileCount} files transferred.`))
    })
  }
  return { launch : launchDeploy}
})


module.exports = websiteDeploy
