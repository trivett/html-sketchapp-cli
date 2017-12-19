const promisify = require('es6-promisify');
const rimrafAsync = promisify(require('rimraf'));
const path = require('path');
const { exec } = require('child-process-promise');
const dirContentsToObject = require('../_utils/dirContentsToObject');

const distPath = path.join(__dirname, 'dist');

beforeEach(() => rimrafAsync(distPath));

test('config-file', async () => {
  await exec('node ../../bin/cli', { cwd: __dirname });

  const output = await dirContentsToObject(distPath);
  expect(output).toMatchSnapshot();
});
