//React requirements
import React from 'react';

//UI
import { Item } from 'semantic-ui-react';

export default props => (
  <Item>
    <Item.Image size='small' src={ props.image ? props.image : 'http://semantic-ui.com/images/wireframe/image.png'} />

    <Item.Content>
      <Item.Header>{props.title}</Item.Header>
      <Item.Description>
        <p>{props.text}</p>
        <p>Latitude: {props.lat}, Longitude: {props.lon}</p>
      </Item.Description>
    </Item.Content>
  </Item>

)

