// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
    return num+2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
 console.log(addTwo(10));


// Challenge 2
function addS(word) {
    return `${word}s `;
}

// uncomment these to check your work
 console.log(addS('pizza'));
 console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
    var storage =[];
    for(var i=0; i< array.length;i++){
        
        storage.push(callback(array[i]));
    }
    return storage;
}

function addTwoMap(num){
    return num+2;
}

 //console.log(map([1, 2, 3], addTwoMap));


// Challenge 4
function forEach(array, callback) {
    for(var i=0;i<array.length;i++){
        callback(array[i],i);
    }
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var storage = [];
    forEach(array,function(item){
        storage.push(callback(item));
    })

    return storage;

}

//console.log(mapWith([5, 2, 3], addTwoMap));

//Extension 2
function reduce(array, callback, initialValue) {
    var memo = initialValue;
    for(var i=0;i<array.length;i++){
        if(i==0 || memo == undefined){
            memo = array[0];
        }else{
            
            memo = callback(array[i],memo);
        }
    }

    return memo;
}

console.log(reduce([1,2,4],(item, sum) => item +sum));

//Extension 3
function intersection(arrays) {
    return reduce(arrays, function(array1, memo){
        return memo.filter(item => array1.includes(item));
    })

}

 //console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

//Extension 4
function union(arrays) {
    return reduce(arrays, function(array1, memo){
        forEach(array1,function(item){
            if(!memo.includes(item)){
                memo.push(item);
            }
        })
        return memo;
    })

}

//console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback1) {
    var storage = {};
    forEach(array1, function(item,i){
        if(callback1(array1[i],array2[i])){
            storage[array1[i]] = array2[i];
        }
    })
    return storage;
}



 //console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], (str,str1) =>  str.toUpperCase() == str1.toUpperCase()));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    var storage = {};
    forEach(arrVals, function(item,i){
        storage[arrVals[i]] = arrCallbacks[i](arrVals[i]);
    })
    return storage;

}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

