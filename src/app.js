window.onload = function() {
  var initialState = 0;
  var counterValue = initialState;

  var counter = document.createElement('div');
  counter.innerText = counterValue;
  counter.id = 'counter';

  var incrementButton = document.createElement('button');
  incrementButton.innerText = 'increment';
  incrementButton.onclick = function() {
    counterValue += 1;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  var incrementByTwoButton = document.createElement('button');
  incrementByTwoButton.innerText = 'increment by 2';
  incrementByTwoButton.onclick = function() {
    counterValue += 2;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  var decrementButton = document.createElement('button');
  decrementButton.innerText = 'decrement';
  decrementButton.onclick = function() {
    counterValue -= 1;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  var decrementByTwoButton = document.createElement('button');
  decrementByTwoButton.innerText = 'decrement by 2';
  decrementByTwoButton.onclick = function() {
    counterValue -= 2;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  var resetButton = document.createElement('button');
  resetButton.innerText = 'reset';
  resetButton.onclick = function() {
    counterValue = initialState;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  document.body.appendChild(counter);
  document.body.appendChild(incrementButton);
  document.body.appendChild(incrementByTwoButton);
  document.body.appendChild(resetButton);
  document.body.appendChild(decrementButton);
  document.body.appendChild(decrementByTwoButton);
}
