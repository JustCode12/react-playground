import React from 'react';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KeyPad from './KeyPad.js';
import { CalculationContext } from './CalculationProvider';

configure({ adapter: new Adapter() })

const TestProvider = props => {
    const result = 5;
    return (
      <CalculationContext.Provider
        value={{ result }}>
        {props.children}
      </CalculationContext.Provider>
    )
  }
  describe('KeyPad component test', () => {
    it('should match the snapshot', () => {
      const wrapper = shallow(
        <TestProvider><KeyPad /></TestProvider>
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('should be one KeyPad component', () => {
      const wrapper = mount(<TestProvider><KeyPad /></TestProvider>);
      expect(wrapper.find(KeyPad).length).toBe(1);
    })
    it('should have 20 buttons', () => {
        const wrapper = mount(<TestProvider><KeyPad /></TestProvider>);
        expect(wrapper.find('button').length).toBe(20);
      })
    it('should update expression', ()=>{
      const wrapper = mount(<TestProvider><KeyPad /></TestProvider>);
      //const expression = '2+';
      expect(wrapper.find('button[name="4"]').length).toBe(1);
      wrapper.find('button[name="4"]').simulate('click');
      expect(wrapper.contains(<strong>4</strong>)).toEqual(true);
    })
  });