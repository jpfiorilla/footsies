import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function ExampleTwoDeepComponent({ location }) {
  const queryPresent = location.search !== '';
  const hashPresent = location.hash !== '';

  function queryStringTitle() {
    if (queryPresent) return 'The query string field-value pairs are:';
    return 'No query string in the url';
  }

  function hashFragmentTitle() {
    if (hashPresent) return 'The hash fragment is:';
    return 'No hash fragment in the url';
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent && hashPresent) return null;

    const queryString = queryPresent
      ? location.search
      : '?field1=foo&field2=bar';
    const hashFragment = hashPresent ? location.hash : '#boom!';

    let linkText = '';
    if (queryPresent && !hashPresent) linkText = 'Show with hash fragment';
    if (!queryPresent && hashPresent) linkText = 'Show with query string';
    if (!queryPresent && !hashPresent) {
      linkText = 'Show with query string and hash fragment';
    }

    return (
      <div>
        <Link to={`/example/two-deep${queryString}${hashFragment}`}>
          {linkText}
        </Link>
      </div>
    );
  }

  function parseQueryString() {
    if (!queryPresent) return [];
    return location.search
      .replace('?', '')
      .split('&')
      .map(fvPair => fvPair.split('='))
      .map(pair => [pair[0], pair.slice(1).join('=')]);
  }

  return (
    <div>
      <div>
        <div>{queryStringTitle()}</div>
        <ul>
          {parseQueryString().map((pair, index) => (
            <li key={`${pair[0]}${pair[1]}${index}`}>{`${pair[0]}: ${
              pair[1]
            }`}</li>
          ))}
        </ul>
      </div>
      <div>
        <div>{hashFragmentTitle()}</div>
        <ul>{hashPresent && <li>{location.hash.slice(1)}</li>}</ul>
      </div>
      {linkToShowQueryAndOrHash()}
    </div>
  );
}

ExampleTwoDeepComponent.propTypes = propTypes;
