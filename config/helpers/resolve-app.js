const path = require('path'),
      fs = require('fs'),
      appDirectory = fs.realpathSync(process.cwd())

const resolveApp = relativePath => {
  return path.resolve(appDirectory, relativePath)
}

module.exports = resolveApp
