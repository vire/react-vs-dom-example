import React from 'react';
import { shallow } from 'enzyme';
import Counter from './Counter';

describe('Counter', () => {
  it('should render text and value', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<Counter name={'Test'} updateCounter={spy} value={42} />);
    expect(wrapper.find('span').text()).to.equal('Test counter value: 42');
  });
});
