import React from 'react';
import { connect } from 'react-redux';
import getActionCreators from '../../action';
import Form from './Form';


class User extends React.PureComponent {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    console.log(this.props.users);
    return (
      <div>
        <Form />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users:state.user.users
  }
}
export default connect(mapStateToProps, getActionCreators)(User);