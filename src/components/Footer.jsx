import React from 'react';

import Menu from './Menu';
import PersonalInfo from './PersonalInfo';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <h1 className="logo logo-big"><span>t</span>ile.expert</h1>
        <Menu />
        <PersonalInfo />
      </div>
    )
  }

}

export default Footer;