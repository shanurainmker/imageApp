import React, { Component } from "react";
import SearchBar from "../../components/SearchBar";
import ImageList from "../../components/ImageList";
import unsplash from "../../api/unsplash";
import { ImageContext } from "../../context/imageContext";

export class Home extends Component {
  state = { image: [], showPop: "", desc: "", page: 1, termSearch: "" };
  onSearchSubmit = async (term) => {
    this.setState({ termSearch: term });

    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 9, page: this.state.page },
      headers: {
        Authorization: "Client-ID 7uqasLCNBoLqdU-o2BeAG8basdZLeMnUewAuhVlCcOw",
      },
    });
    this.setState({ image: response.data.results });
  };
  loadmorePage = () => {
    console.log("page---", this.state.page);
    this.setState({ page: this.state.page + 1 }, () =>
      this.onSearchSubmit(this.state.termSearch)
    );
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} found={this.state.image} />
        <ImageList images={this.state.image} {...this.props} />
        <div className="text-center">
          {this.state.image.length > 0 ? (
            <button className="loadMore" onClick={this.loadmorePage}>
              Load More
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
