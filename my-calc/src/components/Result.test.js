import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from './Result.js';

configure({ adapter: new Adapter() })

const TestContext = React.createContext();
const TestProvider = () => {
  return (<TestContext.Provider>
    value={{
      result: 5
    }}
  </TestContext.Provider>)
}

describe('Result component test', () => {

  const wrapper = shallow(
    <TestProvider><Result /></TestProvider>
  );
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});