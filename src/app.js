window.onload = function() {
  var counterElems = [];
  var firstCounterInitialState = 0;
  var secondCounterInitialState = 101;
  var thirdCounterInitialState = 42;
  var firstCounterValue = firstCounterInitialState;
  var secondCounterValue = secondCounterInitialState;
  var thirdCounterValue = thirdCounterInitialState;

  var clickHandler = function(value) {
    if (value) {
      firstCounterValue = firstCounterValue + value;
      secondCounterValue = secondCounterValue + value;
      thirdCounterValue = thirdCounterValue + value;
    } else {
      firstCounterValue = firstCounterInitialState
      secondCounterValue = secondCounterInitialState;
      thirdCounterValue = thirdCounterInitialState;
    }

    counterElems[0].innerText = firstCounterValue;
    counterElems[1].innerText = secondCounterValue;
    counterElems[2].innerText = thirdCounterValue;
  }

  var firstCounterEl = document.createElement('div');
  firstCounterEl.innerText = firstCounterValue;
  firstCounterEl.className = 'first-counter';
  counterElems.push(firstCounterEl);

  var secondCounterEl = document.createElement('div');
  secondCounterEl.innerText = secondCounterValue;
  secondCounterEl.className = 'second-counter';
  counterElems.push(secondCounterEl);

  var thirdCounterEl = document.createElement('div');
  thirdCounterEl.innerText = thirdCounterValue;
  thirdCounterEl.className = 'third-counter';
  counterElems.push(thirdCounterEl);

  var incrementButton = document.createElement('button');
  incrementButton.innerText = 'increment';
  incrementButton.onclick = clickHandler.bind(undefined, 1);

  var incrementByTwoButton = document.createElement('button');
  incrementByTwoButton.innerText = 'increment by 2';
  incrementByTwoButton.onclick = clickHandler.bind(undefined, 2);

  var decrementButton = document.createElement('button');
  decrementButton.innerText = 'decrement';
  decrementButton.onclick = clickHandler.bind(undefined, -1);

  var decrementByTwoButton = document.createElement('button');
  decrementByTwoButton.innerText = 'decrement by 2';
  decrementByTwoButton.onclick = clickHandler.bind(undefined, -2);

  var resetButton = document.createElement('button');
  resetButton.innerText = 'reset';
  resetButton.onclick = clickHandler.bind(undefined, 0);

  // display
  counterElems.forEach(function(counterEl) {
    document.body.appendChild(counterEl);
  })
  // controls
  document.body.appendChild(incrementButton);
  document.body.appendChild(incrementByTwoButton);
  document.body.appendChild(resetButton);
  document.body.appendChild(decrementButton);
  document.body.appendChild(decrementByTwoButton);
}
