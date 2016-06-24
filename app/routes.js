import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Single from './components/Single';
import Results from './components/Results';
import NoMatch from './components/NoMatch';

import { Route, IndexRoute } from 'react-router';

export default (
	<Route path="/" component={Main}>
      <IndexRoute component={Results} />
      <Route path="/search/:searchTerm" component={Results}/>
      <Route path="/beer/:beerId/:beerSlug" component={Single}/>
      <Route path="*" component={NoMatch}/>
    </Route>
)