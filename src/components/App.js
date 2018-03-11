import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { sampleAction } from '../redux/actions/actions';
import { pages } from '../data';
import {
  Home,
  PageNotFound,
  Header,
  Footer,
  components,
  DefaultComponent
} from '.';
import { SEO } from './common';
import { Root } from './root';
/* eslint-disable no-unused-vars */
import colors from '../main.scss';
/* eslint-enable */

class App extends React.Component {
  render() {
    return (
      <div id="App">
        <SEO />
        <Header />

        <Switch>
          {/*<Route exact path="/" component={Home} />*/}
          <Route exact path={'/'} component={Root} />
          {pages.map(page => {
            const Component = components[page.component] || DefaultComponent;
            return (
              <Route
                exact
                key={page.path}
                path={page.path}
                render={props => <Component {...props} {...page} />}
              />
            );
          })}
          <Route component={PageNotFound} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(state => state, { sampleAction })(App));
