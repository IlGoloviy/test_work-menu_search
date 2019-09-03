import React from 'react';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extraBlock: false
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.close = this.close.bind(this);
    this.openDetails = this.openDetails.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.close, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.close, false);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  close(event) {
    if (this.props.search && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeSearch();
    }
  }

  openDetails() {
    this.setState({extraBlock: true});
  }

  render() {
    let block;
    if (this.state.extraBlock) {
      block = <div className="details">
        <div className="details-row">
          <input id="det1" type="checkbox" className="det-check"/> 
          <label htmlFor="det1">мои</label>
          <input type="text" placeholder="Автор" className="det-avtor"/>
        </div>
        <div className="details-row details-row-btw">
          <p>Cортировать по:</p>
          <select name="" id="">
            <option>дате</option>
            <option>геолокации</option>
          </select>
        </div>
        <div className="details-row det-check-block">
          <div>
            <input id="det2" type="checkbox" className="det-check"/>
            <label htmlFor="det2">я участник</label>
          </div>
          <div>
            <input id="det3" type="checkbox" className="det-check"/>
            <label htmlFor="det3">в заголовке</label>
          </div>
          <div>
            <input id="det4" type="checkbox" className="det-check"/>
            <label htmlFor="det4">строгий поиск</label>
          </div>
        </div>
      </div>
    }

    return (
      <>
      <form ref={this.setWrapperRef}>
        <input onFocus={this.openDetails} className="input-search" type="text"/>
        <input className="btn-search" type="submit" value="найти"/>
        {block}
      </form>
      </>
    );
  }
}