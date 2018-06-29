import {bindActionCreators} from 'redux';
import * as user from './user';

const ActionCreator = ({
  ...user,
});

function getActionCreators(dispatch) {
  return bindActionCreators(ActionCreator, dispatch);
}
export default getActionCreators;