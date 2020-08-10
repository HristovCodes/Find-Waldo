import React from "react";
import Firebase from "../Firebase";

export default class WaldoImage extends React.Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.getImage = this.getImage.bind(this);
    this.state = {
      link: "",
    };
  }

  async getImage(num) {
    //returns a link of an image from the db

    //if anything but an integer is passed return an empty string
    //as to not make unecessary calls to the api
    if (isNaN(num)) return false;

    //get the img link from the database
    const img = await Firebase.db
      .ref("imgs/links/" + num)
      .once("value")
      .then((snapshot) => {
        return snapshot.val() === null ? {} : snapshot.val();
      })
      .catch((err) => {
        console.log(err);
        return "";
      });

    //if all goes according to plan update the state and return true
    this._isMounted && this.setState({ link: img });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getImage(this.props.img);
  }

  render() {
    return <img className="waldoimage" src={this.state.link} alt="waldo"></img>;
  }
}
