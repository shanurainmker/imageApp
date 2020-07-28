import React, { Component } from "react";
// import history from "../history";
import { ImageContext } from "../context/imageContext";

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
    };
    this.imgRef = React.createRef();
  }

  showInfo(urls, description) {
    this.props.popDetails(urls, description);
  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <ImageContext.Consumer>
        {({ imgState, onImageclick }) => (
          <div
            className="img-ind"
            onClick={() => onImageclick(this.props.image)}
          >
            <img src={urls.small} ref={this.imgRef} alt={description} />
          </div>
        )}
      </ImageContext.Consumer>
    );
  }
}
