const unique = (array) => [...new Set(array)];

const flatten = (data) => [].concat.apply([], data);

export { unique, flatten };