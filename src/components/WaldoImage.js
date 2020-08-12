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
      coords: { x: 1267, y: 86 },
    };
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getData(this.props.img);
  }

  async getData(num) {
    //sets the link to the image
    //sets the coords of waldo
    if (isNaN(num)) return false;

    const data = await Firebase.db
      .ref("imgs/")
      .once("value")
      .then((snapshot) => {
        return snapshot.val() === null ? {} : snapshot.val();
      })
      .catch((err) => {
        console.log(err);
        return "";
      });
    //if all goes according to plan update the state
    this._isMounted &&
      this.setState({
        link: data.links[num] ? data.links[num] : data.links[0],
        coords: data.coords[num] ? data.coords[num] : data.coords[0],
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
