const unique = (array) => [...new Set(array)];

const flatten = (data) => [].concat.apply([], data);

const matrix = (denormalized, ...keys) => {
  const branchKeys = keys.slice(0, -2);
  const leafKey = keys.slice(-2, -1)[0];
  const valueKey = keys.slice(-1)[0];
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

const dictToLines = (dict) => {
  const keys = Object.keys(dict);
  let result = "";

  keys.forEach((key) => {
    const value = dict[key];
    result += key + ": " + value + "\n";
  });

  return result;
} 

export { unique, flatten, matrix, dictToLines };