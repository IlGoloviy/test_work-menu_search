import React from 'react';

import MenuItem from './MenuItem';
import Search from './Search';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    }
    this.openSearch = this.openSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  openSearch() {
    this.setState({search: true});
  }

  closeSearch() {
    this.setState({search: false});
  }

  render() {
    let content;
    if(!this.state.search) {
      content = <>
                <i className="material-icons nav-icon">menu</i>
                <h1 className="logo logo-small"><span>t</span>ile.expert</h1>
                <ul className="menu-content">
                  <MenuItem>Ссылки</MenuItem>
                  <MenuItem>Контакты</MenuItem>
                  <MenuItem>Теги</MenuItem>
                  <MenuItem>Просьбы</MenuItem>
                  <MenuItem>Избранное</MenuItem>
                  <MenuItem>Посещения</MenuItem>
                </ul>
                <i className="material-icons search-icon" onClick={this.openSearch}>
                  search
                </i>
                </>;
    } else {
      content = <Search search={this.state.search} closeSearch={this.closeSearch} />;
    }

    return (  
      <div className="menu">
        {content}
        <i className="material-icons add-icon">add_circle</i>
      </div>    
    );
  }
}

export default Menu;