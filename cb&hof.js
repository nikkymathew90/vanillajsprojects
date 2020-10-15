// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {

}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {

}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  


}

// console.log(map([1, 2, 3], addTwo));

const _ = {};
// Challenge 4
_.forEach = function(array, callback) {
  for(var i=0;i<array.length;i++){
    callback(array[i],i,array);
  }

}

var alphabet = '';
var letters = ['a', 'b', 'c', 'd'];
_.forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet);

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1


function mapWith(array, callback) {
  var storage=[];
  _.forEach(array, function(item){
    	storage.push(callback(item));
  })
  return storage;

}

function addTwo(num){
    return num+2;
  } 

console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
   var memo = initialValue;
   for(var i=0; i<array.length; i++){
      if(initialValue == undefined && i == 0){
        memo = array[0];
      }else{
        memo = callback(array[i], memo);
      }
   }

   return memo;

}

//console.log(reduce([1,2,3,4,5], (val, memo) => val+memo));

//Extension 3
function intersection(arrays) {
  return reduce(arrays, function(array1, memo){
      return memo.filter(val => array1.includes(val));
  },[])

}
 //console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
  var union =  reduce(arrays, function(array1, memo){
      _.forEach(array1, function(item){         
            if(!memo.includes(item)) memo.push(item);            
      })
      return memo;
  })
  return union;
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    var storage = {};
    for(var i=0; i< array1.length; i++){
      if(callback(array1[i],array2[i])){
        storage[array1[i]] = array2[i];
      }
    }
    return storage;
}


 console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (val1, val2) => val1.toUpperCase() == val2.toUpperCase() ));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
  var storage = {};
  _.forEach(arrVals, function(val, i , list){
    var result = [];
    _.forEach(arrCallbacks, function(cb,i){
        result.push(cb(val));  
    })
    storage[val] = result;
    console.log(result);
    
  })
  return storage;
}

 console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

