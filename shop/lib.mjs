import utils from '@laufire/utils';

const { merge } = utils.collection;

const unique = (array) => [...new Set(array)];

const flatten = (data) => [].concat.apply([], data);

const matrix = (denormalized, ...keys) => {
  const branchKeys = keys.slice(0, -2);
  const [leafKey, valueKey] = keys.slice(-2);
  
  return merge(...denormalized.map((item) =>
      branchKeys.reduce(
          (t, branchKey) => ({[item[branchKey]]: t}),
          {[item[leafKey]]: item[valueKey]}
      )
  ));
}

const dictToLines = (dict) =>
  Object.keys(dict).map((key) => key + ": " + dict[key]).join("\n");

export { unique, flatten, matrix, dictToLines };