const path = require('path');
const fs = require('fs');

const resolveApp = (relativePath) => {
  const appDirectory = fs.realpathSync(process.cwd());
  return path.resolve(appDirectory, relativePath);
};

module.exports = resolveApp;
