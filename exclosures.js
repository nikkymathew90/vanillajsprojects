// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


function createFunction() {
    function sayHello(){
        console.log("hello");
    }

    return sayHello;
}

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log("Exercise 1 -------");
var function1 = createFunction();
function1();



function createFunctionPrinter(input) {
    return function(){
      console.log(input);
    }

}

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log("Exercise 2 -------");
var printSample = createFunctionPrinter('sample');
printSample();
 var printHello = createFunctionPrinter('hello');
 printHello();



function outer() {
  var counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.
console.log("Exercise 3 -------");
 willCounter();
 willCounter();
 willCounter();

 jasCounter();
 willCounter();



function addByX(x) {
    return function(num){
      console.log(num+x);
    }
}


console.log("Exercise 4 -------");
//var addByTwo = addByX(2);

//addByTwo(1);
//addByTwo(10);

// now call addByTwo with an input of 1


// now call addByTwo with an input of 2



//--------------------------------------------------
// Extension
//--------------------------------------------------

function once(func) {
  var flag  = true;
  var onceR;
 return function(num){
    if(flag){
      onceR = func(num);
      flag = false;
      return onceR;
    }else{
      return onceR;
    }
  }


}

function addByTwo(num){
  
  return num+2;
}

var onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4));  //should log 6
console.log(onceFunc(10));  //should log 6
console.log(onceFunc(9001));  //should log 6


function after(count, func) {
  var counter  = 0;
  return function(){
    counter ++;
    if(counter >= count){
      return func();
    }else{
      console.log(counter);
    }
  }

}

var called = function() { console.log('hello') };
var afterCalled = after(3, called);

 afterCalled(); // -> nothing is printed
 afterCalled(); // -> nothing is printed
 afterCalled(); // -> 'hello' is printed


function delay(func, wait) {
    setTimeout(function(){
      return func();
    },wait);
}

function sayHelloAfterWait(){
  console.log("sorry for the delay");
}

delay(sayHelloAfterWait, 3000);

