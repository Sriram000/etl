const unique = (array) => [...new Set(array)];

const flatten = (data) => [].concat.apply([], data);

const matrix = (denormalized, ...keys) => {
  const branchKeys = keys.slice(0, -2);
  const [leafKey, valueKey] = keys.slice(-2);
  const root = {};

  denormalized.forEach((item) => {
      let branch = root;
      
      branchKeys.forEach((branchKey) => {
          const key = item[branchKey];
          branch = (branch[key] = branch[key] || {})
      });

      branch[item[leafKey]] = item[valueKey];
  });

  return root;
}

const dictToLines = (dict) =>
  Object.keys(dict).map((key) => key + ": " + dict[key]).join("\n");

export { unique, flatten, matrix, dictToLines };