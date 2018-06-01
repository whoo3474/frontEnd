import React, { Component } from 'react';
import { getItem } from 'api/items';
import { Button } from 'components'
import './index.css'

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
      <div className="item-detail">
        <img alt={item.name} src={item.photoURL}/>
        <div className="info">
          <div>
            <h2>{item.name}</h2>
            <p className="ft-bold ft-18">{item.price.toLocaleString()}원</p>
            <p className="ft-12"><span className="primary">{item.inventory}</span>개의 재고가 남아있습니다.</p>
          </div>
          <div>
            <Button className="secondary border" style={{marginRight:10}} onClick={()=>{}}>장바구니 담기</Button>
            <Button className="primary" onClick={()=>{}}>구매하기</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail;