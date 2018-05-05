import React, {Component, PureComponent} from 'react';

class LifeCycle extends PureComponent {
    constructor(props){
        super(props);
        console.log('LC constructor');
    }
    componentWillMount() {
        console.log('LC will mount')
    }
    componentDidMount() {
        console.log('LC did mount');
    }
    componentWillUpdate () {
        console.log('LC will update')
    }
    componentDidUpdate() {
        console.log('LC did update');
    }
    render() {
        console.log('LC render')
        return (
            <h1>{this.props.children}</h1>
        )
    }
}

class LCApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'HELLO WORLD'
    }
    console.log('App constructor')
  }
  appendString = () => {
    this.setState({text:this.state.text + '!'});
  }
  componentWillMount() {
    console.log('App will mount')
  }
  componentDidMount() {
    console.log('App did mount');
  }
  componentWillUpdate () {
    console.log('App will update')
  }
  componentDidUpdate() {
    console.log('App did update');
  }
  render() {
    console.log('App render')
    return (
      <div className="App">
        <LifeCycle>HELLO</LifeCycle>
        <h1>{this.state.text}</h1>
        <button onClick={this.appendString}>APPEND</button>
      </div>
    );
  }
}

export default LCApp;