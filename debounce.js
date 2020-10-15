// Implement debounce

//debouncedFn()
//debouncedFn()
//debouncedFn()
//debouncedFn()
//debouncedFn()

function debounce(fn, time) {
  let setTimeoutId;

  return function() {
    if (setTimeoutId) {
      clearTimeout(setTimeoutId);
      //return (in case of throttle)
    }

    setTimeoutId = setTimeout(() => {
      fn.call(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}
