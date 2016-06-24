import React, {Component} from 'react';
import Search from './Search';
import Beer from './Beer';
import Loader from './Loader';

class Index extends Component {
  render() {
    if(this.props.loading) {
      return <Loader message="🍻 Loading..."/>
    }

    return (
      <div className="results">
        <Search />
        <div className="beers">
          {this.props.beers.map((details, i) => <Beer details={details} key={i}/>)}
        </div>
      </div>
    )
  }
}

export default Index;

