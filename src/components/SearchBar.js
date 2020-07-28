import React from "react";
import SearchIcon from "../assets/imgSearch.png";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  formSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-container">
        <div className="search-form">
          <form onSubmit={(e) => this.formSubmit(e)}>
            <div className="field">
              <input
                type="text"
                placeholder="search Images here"
                onChange={(event) =>
                  this.setState({
                    term: event.target.value,
                  })
                }
                value={this.state.term}
              />
              <span>
                <img src={SearchIcon} alt="searchImg" />
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SearchBar;
