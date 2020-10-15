// Wiyhout using .flat() create a function to flatten the array

function flatten(arr) {
  const newArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    console.log(acc);
    return acc;
  }, []);
  return newArray;
}

console.log(flatten([1, 2, [[3, 4], 5, 6], 7, 8]));
