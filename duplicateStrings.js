const testString = "This is is a test test string";

function removeDuplicates(str) {
  const strArr = str.split(" ");
  const newString = [];
  for (let i = 0; i < strArr.length; i++) {
    if (!newString.includes(strArr[i])) {
      newString.push(strArr[i]);
    }
  }
  return newString.join(" ");
}

//Fancy solution

function removeDuplicates1(str) {
  const arr = str.split(" ");
  const set = new Set(arr);
  const newString = [...set].join(" ");
  return newString;
}

console.log(removeDuplicates(testString));
console.log(removeDuplicates1(testString));
