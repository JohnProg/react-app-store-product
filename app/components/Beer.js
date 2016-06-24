import React, {Component} from 'react';
import slug from 'slug';
import { Link } from 'react-router';

class Beer extends Component {
  render() {
    const { name, labels, id } = this.props.details;
    const image = (labels ? labels.medium : 'null.jpg' );

    return (
      <div className="beer">
        <Link to={`/beer/${id}/${slug(name)}`}>
          <h2>
            {name}
          </h2>
          <img src={image} />
        </Link>
      </div>
    )
  }
}

export default Beer;
