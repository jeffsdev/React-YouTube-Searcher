import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <h1>YouTube Searcher</h1>
        <input
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value) }
          placeholder="Search Videos"
        />
      </div>
    );
  }
}


export default SearchBar;
