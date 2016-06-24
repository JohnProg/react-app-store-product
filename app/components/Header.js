import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <h1>
        <Link to="/">{this.props.siteName}</Link>
      </h1>
    )
  }
}

export default Header;
