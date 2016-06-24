import React, {Component} from 'react';
import Search from './Search';
import Beer from './Beer';
import Header from './Header';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: [],
      loading: true
    }
  }
  loadBeers(searchTerm = 'hops') {
    this.setState({loading: true});

    // Check for beers in local storage
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if(localStorageBeers) {
      this.state.beers = JSON.parse(localStorageBeers);
      this.setState({beers : this.state.beers, loading:false });
      return; // stop before fetch happens!
    }

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`).then(data => data.json())
    .then((beers) => {
      console.log(beers);
      // filter for beers with images
      this.state.beers = beers.data.filter(beer => !!beer.labels);
      this.setState({beers : this.state.beers, loading:false });
      // save to local storage in case we search for this again
      localStorage.setItem(`search-${searchTerm}`, JSON.stringify(this.state.beers));
    })
    .catch(err => console.log(err))
  }
  componentWillMount() {
    this.loadBeers();
  }
  componentWillReceiveProps(nextProps) {
    this.loadBeers(nextProps.params.searchTerm);
  }
  render() {
    return (
      <div className="wrapper">
        <Header siteName="Product App"/>
        {React.cloneElement(this.props.children, {loadBeers:this.loadBeers, ...this.state })}
      </div>
    )
  }
}

export default Main;
