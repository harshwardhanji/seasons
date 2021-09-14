import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import "semantic-ui-css/semantic.min.css";
// const App = () => {
// window.navigator.geolocation.getCurrentPosition(
// (position) => console.log(position),
// (err) => console.log(err)
// );
// return <div>Hi There!</div>;
// };

class App extends React.Component {
  // constructor(props) {
  // super(props);
  //  this.state = { lat: null, err: "" };
  // }
  state = { lat: null, err: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState !!!!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ err: err.message });
      }
    );
    //this.state = { lat: null, err: "" };
  }
  componentDidUpdate() {
    console.log("update was called");
  }
  render() {
    if (this.state.lat && !this.state.err) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.err) {
      return <div>err : {this.state.err}</div>;
    }
    return <div>loading</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
