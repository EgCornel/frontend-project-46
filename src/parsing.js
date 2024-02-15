import * as fs from 'node:fs';
import path from 'path';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);

const genDiff = (filepath1, filepath2) => {
  const resolveFilepath1 = getPath(filepath1);
  const resolveFilepath2 = getPath(filepath2);
  const cont1 = fs.readFileSync(resolveFilepath1, { encoding: 'utf-8' });
  const cont2 = fs.readFileSync(resolveFilepath2, { encoding: 'utf-8' });
  const parser1 = JSON.parse(cont1);
  const parser2 = JSON.parse(cont2);
  console.log(parser1);
  console.log(parser2);
};

export default genDiff;
