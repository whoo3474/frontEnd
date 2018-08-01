import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Text extends PureComponent {
  // static propTypes = {

  // }
  render() {
    console.log(this.props)
    const {
      color,
      weight,
      size,
      children
    } = this.props;
    const className=`${color||''} ${weight||''} ${size||''}`;
    return (
      <span className={className}>{children}</span>
    )
  }
}

export default Text;

// Text 컴포넌트 필요한 props 정리
// Text.propTypes = {
//   color:PropTypes.string,
//   weight:PropTypes.string,
//   size:PropTypes.string
// }

Text.propTypes = {
  color:PropTypes.oneOf(['default', 'primary', 'secondary']),
  weight:PropTypes.oneOf(['light', 'regular', 'bold']),
  size:PropTypes.oneOf(['small', 'medium', 'large']),
}

Text.defaultProps = {
  color:'default',
  weight:'regular',
  size:'medium'
}