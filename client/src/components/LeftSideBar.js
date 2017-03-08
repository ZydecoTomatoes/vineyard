//React requirements
import React from 'react';

//UI
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

//Components
import MenuLink from './MenuLink';

//Actions
import { logoutUser } from '../actions/navigation';

//styles
import styles from '../styles/AppStyles';

export default props => {
  const handleLogout = (e) => {
    e.preventDefault();

    props.dispatch(logoutUser());
  };

  return (
    <Menu
      icon='labeled'
      vertical 
      fixed='left'
      inverted 
      width='thin'
      style={ styles.leftSideBarInner }
    >
      <Menu.Item header style={styles.logo}>
        <img src='/wine-icon-22.png' /> 
      </Menu.Item>
      {
        props.auth.id ? 
          (
            <Menu.Menu>
              <MenuLink name='Home' icon='home' to='/' />
              <MenuLink name='Messages' icon='talk outline' to='/messages' />
              <MenuLink name='View Notes' icon='book' to='/notesView' />
              <MenuLink name='View Data' icon='bar graph' to='/data/view' />
              <MenuLink name='View Alerts' icon='bell' to='alerts' />
              <MenuLink name='Write Note' icon='sticky note' to='form' />
              <MenuLink name='Record Data' icon='write' to='/dataForm' />
              <MenuLink name='View Map' icon='map' to='/mapHome' />
              <Menu.Item name='Sign out' icon='log out' onClick={handleLogout} />
            </Menu.Menu>
          ) : (
            <Menu.Menu>
              <MenuLink name='Sign in' to='/login' icon='sign in'/>
              <MenuLink name='Sign Up' to='/signup' icon='user circle' />
              <MenuLink name='Organization Signup' to='/orgsignup' icon='university' />
            </Menu.Menu>
          )
      }
    </Menu>
  );
}
