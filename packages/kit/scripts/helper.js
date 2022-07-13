const path = require('path')
const fs = require('fs')

const isRoot = (dir) => {
  try {
    fs.accessSync(path.join(dir, 'turbo.json'))
    return true
  } catch (e) {
    return false
  }
}
  
module.exports.getProjectRoot = () => {
  let dir = __dirname
  while(dir) {
    if (isRoot(dir)) {
      return dir
    } else {
      dir = path.dirname(dir)
    }
  }
  throw new Error('Unable to locate project root')
}

module.exports.existsSync = (p) => {
  try {
    fs.accessSync(p)
    return true
  } catch (e) {
    return false
  }
}