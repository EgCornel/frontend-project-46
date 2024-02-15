import * as fs from 'node:fs';
import path from 'path';

const getPath = ('filepath') => path.resolve(process.cwd(), 'filepath');

const genDiff = (filepath1, filepath2) => {
  const resolveFilepath1 = getPath(filepath1);
  const resolveFilepath2 = getPath(filepath2);
  const Cont1 = fs.readFileSync(resolveFilepath1, { encoding: 'utf-8' });
  const Cont2 = fs.readFileSync(resolveFilepath2, { encoding: 'utf-8' });
  const parser = JSON.parse(Cont1);
  return parser;
};

export default genDiff;
