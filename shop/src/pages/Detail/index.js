import React, { Component } from 'react';
import { getItem } from '../../api/items';

class Detail extends Component {
  state = {
    item:null
  }
  componentDidMount() {
    const { params } = this.props;
    // params.id
    // url에서 react-router parameter로 받은 id
    getItem(params.id).then(item => {
      this.setState({item:item});
    })
  }
  render() {
    const { item } = this.state;

    if(item === null) {
      return (
        <h4>Loading...</h4>
      )
    }

    return (
      <div>
        <img alt="thumbnail" src={item.photoURL}/>
        <h2>{item.name}</h2>
      </div>
    )
  }
}

export default Detail;