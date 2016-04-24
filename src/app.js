window.onload = function() {
  var state = {
    red: {
      initialValue: 83,
    },
    green: {
      initialValue: 124,
    },
    blue: {
      initialValue: 190,
    },
  };

  function Counter(name, value, onValueChange) {
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

    this.name = name;
    this.propagateUpdate = onValueChange;
    this.initialValue = value;
    this.value = value;
    this.valueBox = valueBox;
    return counterEl;
  };

  Counter.prototype.updateValue = function(value) {
    if (value) {
      this.value = limitValue(this.value + value);
    } else {
      this.value = this.initialValue;
    }

    this.valueBox.innerText = this.value;
    this.propagateUpdate(this.name, this.value);
  };

  function CounterControls(counter) {
    var wrapper = document.createElement('div');
    var incrementButton = document.createElement('button');
    var incrementByTwoButton = document.createElement('button');
    var decrementButton = document.createElement('button');
    var decrementByTwoButton = document.createElement('button');
    var resetButton = document.createElement('button');

    incrementButton.innerText = 'increment';
    incrementButton.onclick = counter.updateValue.bind(counter, 1);

    incrementByTwoButton.innerText = 'increment by 20';
    incrementByTwoButton.onclick = counter.updateValue.bind(counter, 20);

    decrementButton.innerText = 'decrement';
    decrementButton.onclick = counter.updateValue.bind(counter, -1);

    decrementByTwoButton.innerText = 'decrement by 20';
    decrementByTwoButton.onclick = counter.updateValue.bind(counter, -20);

    resetButton.innerText = 'reset';
    resetButton.onclick =  counter.updateValue.bind(counter, 0);

    wrapper.appendChild(incrementButton);
    wrapper.appendChild(incrementByTwoButton);
    wrapper.appendChild(resetButton);
    wrapper.appendChild(decrementButton);
    wrapper.appendChild(decrementByTwoButton);

    return wrapper;
  };

  var limitValue = function(val) {
    return val ? ((val > 255) ? 255 : ((val < 0) ? 0 : val)) : 0;
  };

  var stateToRGB = function(state) {
    var colors = Object.keys(state).map(function(counterName) {
      var valFromState = typeof state[counterName].currentValue !== 'undefined'
        ? state[counterName].currentValue
        : state[counterName].initialValue;
      return valFromState;
    }).join(',');

    return 'rgb(' + colors +')';
  };

  var updateState = function(name, value) {
    state[name].currentValue = value;
    document.body.style['background'] = stateToRGB(state);
  };

  // display
  Object.keys(state).forEach(function(counterName) {
    document.body.appendChild(
      new Counter(counterName, state[counterName].initialValue, updateState)
    );
  });

  document.body.style['background'] = stateToRGB(state);
}
