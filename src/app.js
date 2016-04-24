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

    for (var i = 0; i < counterElems[0].children.length; i++) {
      if (counterElems[0].children[i].classList.contains('counter-value')) {
        counterElems[0].children[i].innerText = firstCounterValue;
      }
    }

    for (var j = 0; j < counterElems[1].children.length; j++) {
      if (counterElems[1].children[j].classList.contains('counter-value')) {
        counterElems[1].children[j].innerText = secondCounterValue;
      }
    }

    for (var k = 0; k < counterElems[2].children.length; k++) {
      if (counterElems[2].children[k].classList.contains('counter-value')) {
        counterElems[2].children[k].innerText = thirdCounterValue;
      }
    }
  }

  var firstCounterEl = document.createElement('div');
  var firstCounterTitle = document.createElement('span');
  var firstCounterValueBox = document.createElement('span');
  firstCounterEl.className = 'first-counter';
  firstCounterTitle.innerText = 'First counter value: ';
  firstCounterValueBox.className = 'counter-value';
  firstCounterValueBox.innerText = firstCounterValue;
  firstCounterEl.appendChild(firstCounterTitle);
  firstCounterEl.appendChild(firstCounterValueBox);
  counterElems.push(firstCounterEl);

  var secondCounterEl = document.createElement('div');
  var secondCounterTitle = document.createElement('span');
  var secondCounterValueBox = document.createElement('span');
  secondCounterEl.className = 'second-counter';
  secondCounterTitle.innerText = 'Second counter value: ';
  secondCounterValueBox.className = 'counter-value';
  secondCounterValueBox.innerText = secondCounterValue;
  secondCounterEl.appendChild(secondCounterTitle);
  secondCounterEl.appendChild(secondCounterValueBox);
  counterElems.push(secondCounterEl);

  var thirdCounterEl = document.createElement('div');
  var thirdCounterTitle = document.createElement('span');
  var thirdCounterValueBox = document.createElement('span');
  thirdCounterEl.className = 'third-counter';
  thirdCounterTitle.innerText = 'Third counter value: ';
  thirdCounterValueBox.className = 'counter-value';
  thirdCounterValueBox.innerText = thirdCounterValue;
  thirdCounterEl.appendChild(thirdCounterTitle);
  thirdCounterEl.appendChild(thirdCounterValueBox);
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
