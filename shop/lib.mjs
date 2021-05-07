import utils from '@laufire/utils';

const { summarize } = utils.crunch;

const unique = (array) => [...new Set(array)];

const flatten = (data) => [].concat.apply([], data);


const matrix = (denormalized, ...keys) => {
  const indexKeys = keys.slice(0, -1);
  const [valueKey] = keys.slice(-1);
  
  return summarize(denormalized, (item) => item[valueKey], ...indexKeys);
}

const dictToLines = (dict) =>
  Object.keys(dict).map((key) => key + ": " + dict[key]).join("\n");

export { unique, flatten, matrix, dictToLines };