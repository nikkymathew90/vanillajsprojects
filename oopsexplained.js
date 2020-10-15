//Solution 1 * Using Object.create

function userCreator(name, score) {
  const newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const functionStore = {
  increment: function() {
    return this.score++;
  }
};

const user1 = userCreator("will", 5);
const user2 = userCreator("tim", 10);
console.log(user1.increment());

console.log(user1 instanceof userCreator); // false
console.log(functionStore.isPrototypeOf(user1)); // true

//Solution 1 * Using constructor

function UserCreator1(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator1.prototype.increment = function() {
  this.score++;
};

const will = new UserCreator1("will", 5);
const tim = new UserCreator1("tim", 10);
console.log(user1.increment());

console.log("[constructor]", will instanceof UserCreator1); // true
console.log("[constructor]", functionStore.isPrototypeOf(user1)); // true

// Inheritance example with Object.create
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info("Shape moved.");
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log("Is rect an instance of Rectangle?", rect instanceof Rectangle); // true
console.log("Is rect an instance of Shape?", rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'
