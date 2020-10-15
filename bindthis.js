// Implement function.prototype.bind()

Function.prototype.bind = function(context) {
  const fn = this;
  return function() {
    fn.call(context);
  };
};

//implement bind()
function bind(fn, context) {
  fn.call(context);
}

function bind(fn, context) {
  fn.call(context);
}
