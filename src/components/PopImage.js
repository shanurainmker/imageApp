import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const PopupImage = (props) => {
  console.log("props in image card------", props);

  return (
    <div className="backDrop">
      <h2>Img Show</h2>

      <div className="">
        <div className="modal-content">
          {props ? (
            <Link to="/home" className="close">
              {" "}
              &times;
            </Link>
          ) : null}

          {props.imagePop.links.download_location ? (
            <a href="" download={`${props.imagePop.links.download_location}`}>
              Download
            </a>
          ) : (
            <Redirect to="/home" />
          )}
          {props.imagePop ? (
            <div className="imgFull">
              <img
                src={`${
                  props.imagePop.urls.regular ? props.imagePop.urls.regular : ""
                }`}
              />
            </div>
          ) : (
            "no image is selected"
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupImage;
