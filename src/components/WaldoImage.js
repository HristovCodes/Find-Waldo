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

  componentWillMount() {
    this.getData(this.props.img);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  calcCoords(num) {
    const ratios = [
      { x: 0.791, y: 0.079 },
      { x: 0.478, y: 0.885 },
      { x: 0.635, y: 0.343 },
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
          this.setState({
            link: res.links[num] ? res.links[num] : res.links[0],
            coords: res.links[num] ? this.calcCoords(num) : { x: 0, y: 0 },
          });
        },
        (e) => {
          console.log(e);
        }
      )
      .catch((e) => {
        console.log(e);
      });
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
