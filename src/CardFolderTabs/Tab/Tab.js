import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Tab;
