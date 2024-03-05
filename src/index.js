import * as fs from 'node:fs';
import path from 'node:path';
import parser from './parsing.js';
import getDiffObject from './tools.js';
import makeStylish from './stylish.js';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const genDiff = (filepath1, filepath2) => {
  const getFileRath1 = getPath(filepath1);
  const getFileRath2 = getPath(filepath2);
  const readFileRath1 = fs.readFileSync(getFileRath1, { encoding: 'utf-8' });
  const readFileRath2 = fs.readFileSync(getFileRath2, { encoding: 'utf-8' });
  const data1 = parser(readFileRath1);
  const data2 = parser(readFileRath2);
  const result = makeStylish(getDiffObject(data1, data2));
  return result;
};

export default genDiff;
