class Hello extends React.Component {
    render() {
        return <div>Hello {this.props.toWhat}</div>;
    }
}
  
ReactDOM.render(
    <Hello toWhat="World" />,
    document.getElementById('root1')
);

class Hello extends React.Component {
    render() {
        return React.createElement('div', null, `Hello ${this.props.toWhat}`);
    }
}
  
ReactDOM.render(
    React.createElement(Hello, {toWhat: 'World'}, null),
    document.getElementById('root2')
);
