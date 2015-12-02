import { combineReducers } from 'redux';

import caw from './caw';
import counter from './counter';

export default combineReducers({ counter, caw });
