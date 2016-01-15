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
      		value={this.state.term}
      		onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

SearchBarComponent.displayName = 'SearchBarComponent';

export default SearchBarComponent;
