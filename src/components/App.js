import React from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";

import Home from "../container/home/home";
import ImagePopup from "../container/imagePopup/imagePopup";
import { ImageContext } from "../context/imageContext";
import "./index.css";

//const ImgContext = React.createContext();

class App extends React.Component {
  state = { image: "", desc: "" };

  onImageclick = (image, desc) => {
    console.log("object000", image, this.props.history);
    this.setState({ image, desc });
    this.props.history.push("/popUp");
  };
  render() {
    return (
      <div className="set-con">
        <ImageContext.Provider
          value={{
            imgState: this.state.image,
            onImageclick: this.onImageclick,
          }}
        >
          <div>
            <Redirect
              exact
              from="/"
              to="home"
              render={(props) => <Home {...props} />}
            />

            <Route exact path="/home" render={(props) => <Home {...props} />} />

            <Route
              exact
              path="/popUp"
              render={(props) => <ImagePopup {...props} />}
            />
          </div>
        </ImageContext.Provider>
      </div>
    );
  }
}
export default withRouter(App);
