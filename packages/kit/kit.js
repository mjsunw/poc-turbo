const cli = require('cac')()
const initApp = require('./scripts/init-app')

cli
  .command('init-app', 'Init a sub app')
  .option('--name <name>', 'App name')
  .action(({ name }) => {
    initApp(name)
  })

cli.help()
cli.parse()
