'use strict';

import React from 'react';

require('styles/SearchBar.sass');

class SearchBarComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

  render() {
    return (
      <div className="searchbar-component">
      	<input
          placeholder="Search"
      		value={this.state.term}
      		onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

SearchBarComponent.displayName = 'SearchBarComponent';

export default SearchBarComponent;
