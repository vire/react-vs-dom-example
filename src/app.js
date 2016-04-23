window.onload = function() {
  var counterValue = 0;

  var counter = document.createElement('div');
  counter.innerText = counterValue;
  counter.id = 'counter';

  var button = document.createElement('button');
  button.innerText = 'increment';
  button.onclick = function() {
    counterValue += 1;
    var counterEl = document.getElementById('counter');
    counterEl.innerText = counterValue;
  };

  document.body.appendChild(counter);
  document.body.appendChild(button);
}
