import React, {Component} from 'react';
import slug from 'slug';
import Loader from './Loader';
import { Link } from 'react-router';
import { has } from 'lodash';

class Single extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: {},
      loading: true
    }
  }
  loadBeer(beerId) {
    this.setState({loading:true});
    console.log("Going to load beer..", beerId);
    fetch(`http://api.react.beer/v2/beer/${beerId}`)
      .then(data => data.json())
      .then(res => {
        this.state.beer = res.data;
        this.setState({beer : this.state.beer, loading:false});
      });
  }
  componentWillMount() {
    this.loadBeer(this.props.params.beerId);
  }
  renderGlass(beer){
    if(!beer.glass) return;
    return (
      <div className="glass">
        <img src={`/images/glass-${beer.glass.id}.jpg`}/>
        <h3>{beer.glass.name} Glass</h3>
      </div>
    )
  }
  renderAbv(beer){
    if(!beer.abv) return;
    return(
      <div className="abv">ABV: {beer.abv}%</div>
    )
  }
  render() {

    if(this.state.loading) {
      return <Loader message="Pouring a cold one!" />
    }

    const {beer} = this.state;
    console.log("BEER IS BACK", beer);
    return (
      <div className="single-beer">

        <div className="desc">
          <h2>{beer.name}</h2>
          <p>{beer.description}</p>
        </div>

        {has(beer, 'labels.large')  ? <img className="label" src={beer.labels.large} /> : null}

        <div className="deets">
          {this.renderGlass(beer)}
          {this.renderAbv(beer)}
        </div>

        <div className="style">
          <h3>More Info on {beer.style.name}</h3>
          <p>{beer.style.description}</p>
        </div>
      </div>
    )
  }
}

export default Single;

