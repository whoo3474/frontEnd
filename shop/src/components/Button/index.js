import React, { Component } from 'react';
import './index.css'

class Button extends Component {
    render() {
        const {
            style,
            children,
            className,
            onClick,
        } = this.props;
        return (
            <button type="button" 
                className={`btnThemed ${className}`} 
                style={style}
                onClick={onClick}>
                {children}
            </button>
        )
    }
}

export default Button;