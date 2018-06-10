import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from './store';
import Enzyme from 'enzyme';
import myReducer from '../src/reducers';
// make sure to import your connected component, not your react class
import MyComponent from '../src/components/Meetups';
import './utils';

Enzyme.configure({ adapter: new Adapter() });

describe('integration tests', () => {
  let dispatchSpy;
  let router;
  // let store;
  // beforeEach(() => {
  //   ({ store, dispatchSpy } = setupIntegrationTest({ myReducer }, router));
  // });
  it('should change the text on click', () => {
    const sut = mount(
      <Provider store={store}>
        <MyComponent />
      </Provider>
    );

    // sut.find('div').simulate('click');

    // expect(sut.find('div').prop('children')).toEqual('new text');
  });
});