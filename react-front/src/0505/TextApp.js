import React, { Component } from 'react';

class Text extends Component {

  constructor(props) {
    super(props);
    var tone = 'cool';
    switch(props.color) {
      case 'purple':
      case 'red':
        tone = 'warm';
        break;
      default:
        break;
    }
    this.state = {
      tone:tone
    }
  }
    render() {
      return (
        <div>
          <p style={{color:this.props.textColor, fontSize:30, fontWeight:'bold'}}>
            {`TEXT ${this.props.textColor}`}
          </p>
          {this.props.children}
        </div>
      )
    }
}

class TextApp extends Component {
    render() {
      return (
        <div className="App">
        {/* 글씨 색상을 입력받으면  */}
        {/* 색상명을 출력해주고,  */}
        {/* 색상도 적용해주는 텍스트 컴포넌트 */}
          <Text textColor="red">
            <ul>
              <li>hello</li>
              <li>world</li>
            </ul>
          </Text>
          <Text textColor="blue"/>
          <Text textColor="yellow"/>
          <Text textColor="green"/>
        </div>
      );
    }
  }
  
  export default TextApp;