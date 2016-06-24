import React, {Component} from 'react';
import {Router} from 'react-router';

class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("Searching...");
    const searchTerm = this.refs.q.value;
    this.context.router.push(`/search/${searchTerm}`);
  }
  render() {
    return (
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="q" placeholder="Search..."/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Search;
