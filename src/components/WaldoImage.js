import "../css/WaldoImage.scss";
import React from "react";
import Firebase from "../Firebase";

export default class WaldoImage extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.getData = this.getData.bind(this);
    this.state = {
      link:
        "https://static.techspot.com/images2/news/bigimage/2018/08/2018-08-13-image-14.jpg",
      coords: { x: 0, y: 0 },
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getData(this.props.img);
  }

  calcCoords(num) {
    const ratios = [
      { x: 0.79685534591, y: 0.0876656473 },
      { x: 0.48875, y: 0.88522954092 },
      { x: 0.68359375, y: 0.34843982169 },
    ];
    const image = document.getElementById("image");

    return {
      x: image.width * ratios[num].x,
      y: image.height * ratios[num].y,
    };
  }

  getData(num) {
    const data = Firebase.getData(num);
    //if all goes according to plan update the state
    data
      .then(
        (res) => {
          this._isMounted &&
            this.setState({
              link: res.links[num] ? res.links[num] : res.links[0],
              coords: res.links[num] ? this.calcCoords(num) : { x: 0, y: 0 },
            });
        },
        (e) => {}
      )
      .catch((e) => {});
  }

  render() {
    const calcStyle = {
      position: "absolute",
      top: this.state.coords.y,
      left: this.state.coords.x,
      width: "25px",
      height: "25px",
    };
    return (
      <div className="waldoimage">
        <img id="image" src={this.state.link} alt="waldo"></img>
        <button
          style={calcStyle}
          onClick={this.props.handleClick}
          id="target"
        ></button>
      </div>
    );
  }
}
