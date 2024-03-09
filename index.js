const utilitylibrary = {
  // Array methods
  array: {
    isEmpty: (arr) => arr.length === 0,
    contains: (arr, element) => arr.includes(element),
    removeDuplicates: (arr) => [...new Set(arr)],
    flatten: (arr) => arr.flat(),
    shuffle: (arr) => arr.sort(() => Math.random() - 0.5),
    sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),
    average: (arr) => utilitylibrary.array.sum(arr) / arr.length,
    max: (arr) => Math.max(...arr),
    min: (arr) => Math.min(...arr),
    filter: (arr, condition) => arr.filter(condition),
    map: (arr, transform) => arr.map(transform),
    forEach: (arr, action) => arr.forEach(action),
  },

  // Conditional loops
  loop: {
    forEach: (arr, action) => arr.forEach(action),
    map: (arr, transform) => arr.map(transform),
    filter: (arr, condition) => arr.filter(condition),
    reduce: (arr, reducer, initialValue) => arr.reduce(reducer, initialValue),
  },

  // Date formatting
  formatDate: (date, format) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  },

  // String manipulation
  string: {
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
    reverse: (str) => str.split("").reverse().join(""),
    truncate: (str, maxLength) =>
      str.length > maxLength ? str.slice(0, maxLength) + "..." : str,
    countWords: (str) => str.split(/\s+/).length,
    removeWhitespace: (str) => str.replace(/\s+/g, ""),
    replace: (str, find, replaceWith) =>
      str.replace(new RegExp(find, "g"), replaceWith),
  },
};

export default utilitylibrary;
