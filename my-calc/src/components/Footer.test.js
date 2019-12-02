import React from 'react';
import Footer from './Footer';
import {shallow, mount} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer component', () => {
    const wrapper = shallow(<Footer/>);
      it('should render component', () =>{
        const wrapper = shallow(<Footer/>);
        expect(wrapper).toMatchSnapshot();
      });
      it('should render Footer', ()=>{ 
          const wrapper = mount(<Footer/>);
          expect(wrapper.find(Footer).length).toBe(1);
      });
      it('should render Footer', ()=>{ 
        const wrapper = mount(<Footer/>);
        expect(wrapper.html()).toEqual('<div class="Footer">This is Footer.</div>');
    });

})
