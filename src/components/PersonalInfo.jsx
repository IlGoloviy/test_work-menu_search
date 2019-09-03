import React from 'react';

class PersonalInfo extends React.Component {
  render() {
    return(
      <div className="info-block">
        <i className="material-icons">mail_outline</i>
        <i className="material-icons">notifications_none</i>
        <i className="material-icons">person_pin</i>
      </div>
    )
  }
}

export default PersonalInfo;