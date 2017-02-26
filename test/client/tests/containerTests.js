import React from 'react';
import { ControlLabel, FormControl } from 'react-bootstrap';
import { Form } from 'semantic-ui-react';
import { connect, Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import store from '../../../client/src/store';
import App from '../../../client/src/containers/App';
import MainNavBar from '../../../client/src/components/MainNavBar';
import NameBirthdateInput from '../../../client/src/components/NameBirthdateInput';
import Login from '../../../client/src/containers/Login';
import Signup from '../../../client/src/containers/Signup';

describe('Containers', () => {

  describe('<App />', () => {
    it('should have a children and store props', () => {
      console.log('hello there tho');
      const wrapper = mount(
        <Provider store={store}>
          <App>
            <div />
          </App>
        </Provider>
        );
      console.log('wrapper is ', wrapper);
   });   


    it('should render a navbar component', () => {
      // const wrapper = mount(
      //   <Provider store={store}>
      //     <App>
      //       <div />
      //     </App>
      //   </Provider>);

      // expect(wrapper.find(MainNavBar).length).to.equal(1);
    });

  });

  describe('<Login />', () => {
    it('should have two forms', () => {
      const wrapper = shallow(<Login login={ { username: '', password: '' } } />);

      expect(wrapper.find(Form.Input).length).to.equal(2);
    });

    it('should have titles username and password', () => {
      const wrapper = shallow(<Login login={ { username: '', password: '' } } />);
      
      var textNodes = [];

      wrapper.find(Form.Input).forEach((item)=>{
        textNodes.push(item.node.props.label);
      });

      expect(textNodes).to.deep.equal(['Username', 'Password']);
    });
  });

  describe('<Signup />', () => {
    it('should have five input forms', () => {
      const wrapper = shallow(<Signup signup={ { username: '', password: '' } } />);

      expect(wrapper.find(Form.Input).length).to.equal(5);
    });

    it('should have labels for username, password, and confirm pass', () => {
      const wrapper = shallow(<Signup signup={ { username: '', password: '' } } />);

    var textNodes = [];

    wrapper.find(Form.Input).forEach((item)=>{
      textNodes.push(item.node.props.label);
    });

    console.log('textNodes are', textNodes);

      expect(textNodes).to.deep.equal(["Username", "Password", "Confirm Password", "Phone Number", "Organization"]);
    });

    it('should render one NameBirthdateInput', () => {
      const wrapper = mount(<Signup signup={ { username: '', password: '' } } />);

      expect(wrapper.find(NameBirthdateInput).length).to.equal(1);
    });
  });
});
