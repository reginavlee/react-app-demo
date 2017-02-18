import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  onInputChange(term) {
    this.props.updateFilter(term);
  }

  render() {
    return (
      <div className="filter">
        <input
          value={this.props.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default Filter;
