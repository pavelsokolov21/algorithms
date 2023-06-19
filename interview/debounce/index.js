const input = document.getElementById("input");
const output = document.getElementById("output");

function debounce(fn, timer = 1000) {
  let timerRef;

  return (...args) => {
    if (timerRef) {
      clearTimeout(timerRef);
    }

    timerRef = setTimeout(() => {
      fn(...args);
    }, timer);
  };
}

function throttle(fn, timer = 500) {
  let pause = false;

  return (...args) => {
    if (pause) {
      return;
    }

    fn(...args);
    pause = true;

    setTimeout(() => {
      pause = false;
    }, timer);
  };
}

function handleChange(value) {
  output.textContent = value;
}

const debouncedHandleChange = throttle(handleChange, 1000);

input.addEventListener("input", ({ target: { value } }) => {
  debouncedHandleChange(value);
});
