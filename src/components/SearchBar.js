import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }; 

  render() {
    //not having any parenthesis while refercing onInputchange
    // e goes for event
    return (  
      <div className="ui segment">
        <form onSubmit ={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>this.setState({ term: e.target.value })}
              
            />
            <button class="ui button">Search</button>
              
            
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
