window.onload = function() {
  var firstCounterInitialState = 0;
  var secondCounterInitialState = 2;
  var thirdCounterInitialState = 5;
  var firstCounterValue = firstCounterInitialState;
  var secondCounterValue = secondCounterInitialState;
  var thirdCounterValue = thirdCounterInitialState;

  var firstCounterEl = document.createElement('div');
  firstCounterEl.innerText = firstCounterValue;
  firstCounterEl.className = 'first-counter';

  var secondCounterEl = document.createElement('div');
  secondCounterEl.innerText = secondCounterValue;
  secondCounterEl.className = 'second-counter';

  var thirdCounterEl = document.createElement('div');
  thirdCounterEl.innerText = thirdCounterValue;
  thirdCounterEl.className = 'third-counter';

  var incrementButton = document.createElement('button');
  incrementButton.innerText = 'increment';
  incrementButton.onclick = function() {
    var _firstCounterEl = document.getElementsByClassName('first-counter')[0];
    var _secondCounterEl = document.getElementsByClassName('second-counter')[0];
    var _thirdCounterEl = document.getElementsByClassName('third-counter')[0];

    firstCounterValue += 1;
    secondCounterValue += 1;
    thirdCounterValue += 1;

    _firstCounterEl.innerText = firstCounterValue;
    _secondCounterEl.innerText = secondCounterValue;
    _thirdCounterEl.innerText = thirdCounterValue;
  };

  var incrementByTwoButton = document.createElement('button');
  incrementByTwoButton.innerText = 'increment by 2';
  incrementByTwoButton.onclick = function() {
    var _firstCounterEl = document.getElementsByClassName('first-counter')[0];
    var _secondCounterEl = document.getElementsByClassName('second-counter')[0];
    var _thirdCounterEl = document.getElementsByClassName('third-counter')[0];

    firstCounterValue += 2;
    secondCounterValue += 2;
    thirdCounterValue += 2;

    _firstCounterEl.innerText = firstCounterValue;
    _secondCounterEl.innerText = secondCounterValue;
    _thirdCounterEl.innerText = thirdCounterValue;
  };

  var decrementButton = document.createElement('button');
  decrementButton.innerText = 'decrement';
  decrementButton.onclick = function() {
    var _firstCounterEl = document.getElementsByClassName('first-counter')[0];
    var _secondCounterEl = document.getElementsByClassName('second-counter')[0];
    var _thirdCounterEl = document.getElementsByClassName('third-counter')[0];

    firstCounterValue -= 1;
    secondCounterValue -= 1;
    thirdCounterValue -= 1;

    _firstCounterEl.innerText = firstCounterValue;
    _secondCounterEl.innerText = secondCounterValue;
    _thirdCounterEl.innerText = thirdCounterValue;
  };

  var decrementByTwoButton = document.createElement('button');
  decrementByTwoButton.innerText = 'decrement by 2';
  decrementByTwoButton.onclick = function() {
    var incrementValue = 2;
    var _firstCounterEl = document.getElementsByClassName('first-counter')[0];
    var _secondCounterEl = document.getElementsByClassName('second-counter')[0];
    var _thirdCounterEl = document.getElementsByClassName('third-counter')[0];

    firstCounterValue -= 2;
    secondCounterValue -= 2;
    thirdCounterValue -= 2;

    _firstCounterEl.innerText = firstCounterValue;
    _secondCounterEl.innerText = secondCounterValue;
    _thirdCounterEl.innerText = thirdCounterValue;
  };

  var resetButton = document.createElement('button');
  resetButton.innerText = 'reset';
  resetButton.onclick = function() {
    var _firstCounterEl = document.getElementsByClassName('first-counter')[0];
    var _secondCounterEl = document.getElementsByClassName('second-counter')[0];
    var _thirdCounterEl = document.getElementsByClassName('third-counter')[0];

    firstCounterValue = firstCounterInitialState
    secondCounterValue = secondCounterInitialState;
    thirdCounterValue = thirdCounterInitialState;

    _firstCounterEl.innerText = firstCounterValue;
    _secondCounterEl.innerText = secondCounterValue;
    _thirdCounterEl.innerText = thirdCounterValue;
  };

  // display
  document.body.appendChild(firstCounterEl);
  document.body.appendChild(secondCounterEl);
  document.body.appendChild(thirdCounterEl);
  // controls
  document.body.appendChild(incrementButton);
  document.body.appendChild(incrementByTwoButton);
  document.body.appendChild(resetButton);
  document.body.appendChild(decrementButton);
  document.body.appendChild(decrementByTwoButton);
}
