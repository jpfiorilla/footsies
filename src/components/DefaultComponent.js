import React from 'react';
import camel from 'lodash.camelcase';
// import { Switch, Route } from 'react-router-dom';
// import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import { SEO } from '.';
import { getTitleFromPathname } from '../utils';

export default class DefaultComponent extends React.Component {
  render() {
    const {
      location,
      path,
      title = getTitleFromPathname(location || path),
      description,
    } = this.props;
    return (
      // <Switch>
      <div className={`defaultComponent ${camel(title)}`}>
        <SEO
          title={title}
          description={description}
          path={window.location.href}
        />
        {title + path}
      </div>
      // </Switch>
    );
  }
}

/*
can re-implement this code (and above switch statements) if using query/params to nest page types
<Route
  exact
  path="/example/two-deep"
  render={({ location }) => (
    <div>
      <ExampleTwoDeepComponent location={location} />
    </div>
  )}
/>
<Route
  exact
  path="/example"
  render={({ location }) => (
    <div className={location}>
      <SEO />
      <Link to="/example/two-deep?field1=foo&field2=bar#boom!">
        Example two deep with query and hash
      </Link>
    </div>
  )}
/>
*/
