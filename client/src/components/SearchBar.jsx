import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { getImages } from "../actions/imageActions";

class SearchBar extends Component {
  state = {
    query: "random",
    done: false
  };

  render() {
    const fetchImages = (e) => {
      e.preventDefault();
      if (this.state.query === "")
        this.setState({ query: "random" }, () => {
          this.props.getImages(this.state.query);
        });
      else this.props.getImages(this.state.query);
      this.setState({ done: true });
    };

    const handleChange = (e) => {
      this.setState({ query: e.target.value });
    };

    return (
      <div className="header">
        <form className="form-search d-flex justify-content-between mt-4">
          <input
            type="text"
            placeholder="Search for photos..."
            name="searchbar"
            className="search-input px-4"
            onChange={handleChange}
          />
          <button
            onClick={fetchImages}
            className="custom-btn search-btn d-flex align-items-center justify-content-center"
          >
            Go
          </button>
        </form>
        <br/>
       {this.state.done && <div className="d-flex mt-2">
          <div className="request-two">
            <div className="request-one">Requesting </div>{" "}
            https://api.jikan.moe/v3/search/anime?q={this.state.query}
          </div>
        </div>
  }
      </div>
    );
  }
}

export default connect(null, { getImages })(SearchBar);
