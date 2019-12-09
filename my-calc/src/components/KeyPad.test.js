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
    )}
   

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
    it('should start the expression displayed', ()=>{
      const wrapper = mount(<TestProvider><KeyPad /></TestProvider>);
      expect(wrapper.find('button[name="4"]').length).toBe(1);
      wrapper.find('button[name="4"]').simulate('click');
      expect(wrapper.contains(<strong>4</strong>)).toEqual(true);
    })
    it('should update the expression displayed', ()=>{
      const wrapper = mount(<TestProvider><KeyPad /></TestProvider>);  
      expect(wrapper.find('strong').length).toBe(1);
      expect(wrapper.find('strong').text()).toEqual('');
      expect(wrapper.find('button[name="4"]').length).toBe(1);
      wrapper.find('button[name="4"]').simulate('click');
      expect(wrapper.contains(<strong>4</strong>)).toEqual(true);
      wrapper.find('button[name="+"]').simulate('click');
      expect(wrapper.contains(<strong>4+</strong>)).toEqual(true);
    })

    it('should clear expression when C is clicked', ()=>{
      const wrapper = mount(<TestProvider><KeyPad /></TestProvider>);  
      expect(wrapper.find('strong').length).toBe(1);
      expect(wrapper.find('strong').text()).toEqual('');
      expect(wrapper.find('button[name="C"]').length).toBe(1);

      expect(wrapper.find('button[name="4"]').length).toBe(1);
      wrapper.find('button[name="4"]').simulate('click');
      expect(wrapper.contains(<strong>4</strong>)).toEqual(true);

      wrapper.find('button[name="C"]').simulate('click');
      expect(wrapper.find('strong').text()).toEqual('');
    })
  });