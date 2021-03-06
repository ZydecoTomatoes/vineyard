import axios from 'axios';

export function updateMessages(messages) {
  return {
    type: 'UPDATE_MESSAGES',
    value: messages
  };
}

export function receivedMessage(message) {
  return {
    type: "MESSAGE_RECEIVED",
    value: message
  };
}

export function textInputChange(text) {
  return {
    type: "TEXT_INPUT_CHANGE",
    value: text
  };
}


/**
 * Dispatches request for room messages..
 * @function grabMessagesInRoom
 * @param {integer} roomId
 * @description Retrieves messages belonging to specific room.
 * @memberOf Messages Actions
 */


export function grabMessagesInRoom(roomId) {
  return dispatch => axios.get('/api/messages/byRoomId/' + roomId,
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    })
    .then(messages => {
      dispatch(updateMessages(messages.data));
    });
}

export function clearTextInput() {
  return {
    type: 'CLEAR_TEXT_INPUT'
  };
}
