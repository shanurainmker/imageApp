import React, { Component } from "react";

import PopupImage from "../../components/PopImage";
import { ImageContext } from "../../context/imageContext";

export class ImagePopup extends Component {
  render() {
    return (
      <div>
        <ImageContext.Consumer>
          {({ imgState, desc, onImageclick }) => (
            <PopupImage imagePop={imgState} desc={desc} />
          )}
        </ImageContext.Consumer>
      </div>
    );
  }
}

export default ImagePopup;
