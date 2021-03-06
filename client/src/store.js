//Redux requirements
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

//Redux middleware
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

//Reducers
import { authStatusReducer } from './reducers/authStatus';
import messageReducer from './reducers/messages';
import { navReducer } from './reducers/navigation';
import { noteFormReducer } from './reducers/noteForm';
import { notesViewReducer } from './reducers/notesView';
import orgSignupReducer from './reducers/OrgSignup';
import roomsReducer from './reducers/rooms';
import { userLoginReducer } from './reducers/login';
import { userSignupReducer } from './reducers/signup';
import { homePageReducer } from './reducers/homePage';
import { dataFormReducer } from './reducers/dataForm';
import { dataArrayReducer } from './reducers/dataArray';
import { mapVisReducer } from './reducers/mapVis';
import { polygonsReducer } from './reducers/polygons';
import { dataVisReducer } from './reducers/dataVis';

const appReducer = combineReducers({
  authStatus: authStatusReducer,
  login: userLoginReducer,
  messages: messageReducer,
  nav: navReducer,
  note: noteFormReducer,
  notesView: notesViewReducer,
  orgSignup: orgSignupReducer,
  rooms: roomsReducer,
  routing: routerReducer,
  signup: userSignupReducer,
  homePage: homePageReducer,
  dataForm: dataFormReducer,
  dataArray: dataArrayReducer,
  mapVis: mapVisReducer,
  polygons: polygonsReducer,
  dataVis: dataVisReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined;
  }

  return appReducer(state, action);
}

const middleware = applyMiddleware(routerMiddleware(browserHistory), /*logger(),*/ promise(), thunk);

export default createStore(rootReducer, middleware);
