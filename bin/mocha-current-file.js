const path = require('path');
const fs = require('fs');

function findDistFile(filename) {
  const absolutePath = path.resolve(filename);
  const systemRoot = path.parse(absolutePath).root;
  let currentDir = path.dirname(absolutePath);
  let isPackageRoot = fs.existsSync(path.resolve(currentDir, 'package.json'));
  while (!isPackageRoot) {
    if (path.dirname(currentDir) === systemRoot) {
      throw new Error(`Could not find a package.json file in the path heirarchy of ${absolutePath}`);
    }
    currentDir = path.join(currentDir, '..');
    isPackageRoot = fs.existsSync(path.resolve(currentDir, 'package.json'));
  }
  const base = path.resolve(currentDir);
  const relative = path.relative(currentDir, absolutePath);
  const resultPath = relative.replace(/^src/, 'dist').replace(/\.ts$/, '.js');
  return path.resolve(base, resultPath);
}

const fileToTest = findDistFile(process.argv.splice(-1)[0]);

/**
 * Imagine we're running some integration tests, and we need to ensure that
 * there are databases up and running first.
 */
async function setup() {
  return new Promise(resolve => setTimeout(resolve, 1000))
}

/**
 * Imagine that those databases need to be brought down now
 */
async function teardown() {
  return new Promise(resolve => setTimeout(resolve, 1000))
}

if (fileToTest) {
  if (fileToTest.match(/dist\/__tests__\/it\/cases\/.*\.test\.js$/)) {
    setup()
      .then(() => {
        // maybe there are also come mocha hooks that are necessary
        console.log(`mocha/lib/cli --file ./dist/__tests__/lib/hooks.js ${fileToTest}`);
        return require('mocha/lib/cli').main(['--file', './dist/__tests__/lib/hooks.js', fileToTest]);
      })
      .finally(() => {
        teardown();
      });
  } else if (fileToTest.match(/dist\/.*\.unit\.js$/)) {
    console.log(`mocha/lib/cli ${fileToTest}`);
    return require('mocha/lib/cli').main([fileToTest]);
  }
}