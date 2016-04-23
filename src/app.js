window.onload = function() {
  var counterValue = 0;

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

  document.body.appendChild(counter);
  document.body.appendChild(incrementButton);
  document.body.appendChild(incrementByTwoButton);
  document.body.appendChild(decrementButton);
  document.body.appendChild(decrementByTwoButton);
}
