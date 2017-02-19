import React, { Component } from 'react';

class Filter extends Component {
  // takes user input and passes up to app
  constructor(props) {
    super(props);
  }

  onInputChange(term) {
    this.props.updateFilter(term);
    // goes to app.js
  }

  render() {
    return (
      <div className="filter">
        <input
          value={this.props.term} // value is dynamic, gets term from props from app.js
          // fires off function on input change, passing in event.target.value--> emits object that app can listen for
          // accessing value and passing into onInputChange (go up to goInputChange function)
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

// export so that app can receive it
export default Filter;
