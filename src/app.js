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

  var decrementButton = document.createElement('button');
  decrementButton.innerText = 'decrement';
  decrementButton.onclick = function() {
    counterValue -= 1;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  document.body.appendChild(counter);
  document.body.appendChild(incrementButton);
  document.body.appendChild(decrementButton);
}
