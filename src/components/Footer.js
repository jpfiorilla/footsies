import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { facebookPage, twitterHandle } from '../data';

export default class Footer extends React.Component {
  render() {
    return (
      <div id="Footer">
        {facebookPage ? (
          <SocialIcon
            url={
              facebookPage.includes('.com')
                ? facebookPage
                : `https://www.facebook.com/${facebookPage.replace(/\W/g, '')}`
            }
          />
        ) : null}
        {twitterHandle ? (
          <SocialIcon
            url={
              twitterHandle.includes('.com')
                ? twitterHandle
                : `https://twitter.com/${twitterHandle.replace(/\W/g, '')}`
            }
          />
        ) : null}
      </div>
    );
  }
}
