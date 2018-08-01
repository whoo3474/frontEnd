import React from 'react';
import PropTypes from 'prop-types';
import './index.css'

const Button = ({
    style,
    children,
    className,
    onClick,
}) => {
    return (
        <button type="button" 
            className={`btnThemed ${className}`} 
            style={style}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;

Button.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

Button.defaultProps = {
    style:{},
    className:''
}