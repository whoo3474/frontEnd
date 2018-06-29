import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from '../../action';

class Form extends React.Component {
  state = {
    alert:'',
    email:'',
    pw:'',
    pwConfirm:'',
    name:'',
    phone:'',
    addr:''
  }
  handleChange = (evt) => {
    switch(evt.target.name) {
      case 'email':
        var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        var is_valid = regex.test(evt.target.value);
        if(!is_valid) {
          this.setState({alert:'이메일 형식이 맞지 않습니다.'});
        }
        else {
          this.setState({alert:''});
        }
        break;
      default:
        this.setState({alert:''});
    }
    this.setState({[evt.target.name]:evt.target.value});
  }
  handleSignUp = () => {
    this.props.addUser(this.state).then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    });
  }
  render() {
    const {
      email,
      pw,
      pwConfirm,
      name,
      phone,
      addr,
      alert
    } = this.state;
    return (
      <form>
        <input
          autoComplete="false"
          type="email" 
          name="email" 
          placeholder="이메일" 
          value={email} 
          onChange={this.handleChange}/>
        <input 
          type="password" 
          name="pw" 
          placeholder="비밀번호" 
          value={pw} 
          onChange={this.handleChange}/>
        <input 
          type="password" 
          name="pwConfirm" 
          placeholder="비밀번호 확인" 
          value={pwConfirm} 
          onChange={this.handleChange} />
        <input 
          type="text" 
          name="name" 
          placeholder="이름" 
          value={name} 
          onChange={this.handleChange} />
        <input 
          type="text" 
          name="phone" 
          placeholder="전화번호" 
          value={phone} 
          onChange={this.handleChange} />
        <div>
          <input 
            type="text" 
            name="addr" 
            placeholder="주소" 
            value={addr} 
            onChange={this.handleChange}/>
          <button type="button">주소찾기</button>
        </div>
        <p className="alert">{alert}</p>
        <button type="button" disabled={alert.length > 0} onClick={this.handleSignUp} >가입</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    users:state.user.users
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);