import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from './Result.js';
import { CalculationContext } from './CalculationProvider';

configure({ adapter: new Adapter() })

//mock context provider
const TestProvider = props => {
  const result = 5;
  return (
    <CalculationContext.Provider
      value={{ result }}>
      {props.children}
    </CalculationContext.Provider>
  )
}

describe('Result component test', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
      <TestProvider><Result /></TestProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should be one result component', () => {
    const wrapper = mount(<TestProvider><Result /></TestProvider>);
    expect(wrapper.find(Result).length).toBe(1);
  })
  it('should have correct result displayed', () => {
    const wrapper = mount(<TestProvider><Result /></TestProvider>);
    expect(wrapper.html()).toEqual('<div><span>Result: </span>5</div>');
  })
});