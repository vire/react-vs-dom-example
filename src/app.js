window.onload = function() {
  var counterDefinitons = [
    {
      initialValue: 0,
      name: 'first',
    }, {
      initialValue: 101,
      name: 'second',
    }, {
      initialValue: 42,
      name: 'third',
    },
  ];

  function Counter(name, value) {
    var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
    var counterEl = document.createElement('div');
    var title = document.createElement('span');
    var valueBox = document.createElement('span');

    counterEl.className = name + '-counter';
    title.innerText = capitalizedName + ' counter value: ';
    valueBox.className = 'counter-value';
    valueBox.innerText = value;
    counterEl.appendChild(title);
    counterEl.appendChild(valueBox);
    counterEl.appendChild(new CounterControls(this));
    counterEl.appendChild(document.createElement('hr'));

    this.initialValue = value;
    this.value = value;
    this.valueBox = valueBox;
    return counterEl;
  };

  Counter.prototype.updateValue = function(value) {
    if (value) {
      this.value = this.value + value;
    } else {
      this.value = this.initialValue;
    }

    this.valueBox.innerText = this.value;
  }

  function CounterControls(counter) {
    var wrapper = document.createElement('div');
    var incrementButton = document.createElement('button');
    var incrementByTwoButton = document.createElement('button');
    var decrementButton = document.createElement('button');
    var decrementByTwoButton = document.createElement('button');
    var resetButton = document.createElement('button');

    incrementButton.innerText = 'increment';
    incrementButton.onclick = counter.updateValue.bind(counter, 1);

    incrementByTwoButton.innerText = 'increment by 2';
    incrementByTwoButton.onclick = counter.updateValue.bind(counter, 2);

    decrementButton.innerText = 'decrement';
    decrementButton.onclick = counter.updateValue.bind(counter, -1);

    decrementByTwoButton.innerText = 'decrement by 2';
    decrementByTwoButton.onclick = counter.updateValue.bind(counter, -2);

    resetButton.innerText = 'reset';
    resetButton.onclick =  counter.updateValue.bind(counter, 0);

    wrapper.appendChild(incrementButton);
    wrapper.appendChild(incrementByTwoButton);
    wrapper.appendChild(resetButton);
    wrapper.appendChild(decrementButton);
    wrapper.appendChild(decrementByTwoButton);

    return wrapper;
  };

  // display
  counterDefinitons.forEach(function(definition) {
    document.body.appendChild(new Counter(definition.name, definition.initialValue));
  });
}
