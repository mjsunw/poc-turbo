const path = require('path')
const fs = require('fs')
const c = require('picocolors')
const { exec } = require('child_process')
const { getProjectRoot, existsSync } = require('./helper')

const copyTemplate = async (src, dst) => {
  const command = `rsync -av ${src}/ ${dst}/ --exclude node_modules`

  return new Promise((resolve, reject) => exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(error.message)
      return reject()
    }
    if (stderr) {
      console.error(stderr)
      return
    }
    console.log(stdout)
    console.log(c.green('Copied template'))
    resolve()
  }))
}

const editPackageJson = (name, filePath) => {
  const json = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  json.name = name
  json.homepage = `/${name}/`
  fs.writeFileSync(filePath, JSON.stringify(json, null, 2), 'utf-8')
  console.log(c.green('Editted package.json'))
}

const initApp = async (name) => {
  const projectRoot = getProjectRoot()

  const src = path.resolve(projectRoot, 'packages', 'kit-template')
  const dst = path.resolve(projectRoot, 'apps', name || 'new-app')

  if (existsSync(dst)) {
    console.log(c.red('Project already exists'))
    return
  }

  await copyTemplate(src, dst)
  editPackageJson(name, path.resolve(dst, 'package.json'))
}

module.exports = initApp;
