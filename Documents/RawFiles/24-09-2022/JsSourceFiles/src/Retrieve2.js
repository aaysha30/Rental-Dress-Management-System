import React from "react";
import axios from "axios";

// import "./styles.css";

export default class Retriver3 extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      show: false,
      buttonText: true
    };
  }
  handleClick = () => {
    axios
      .get("http://localhost:9090/filedata/database")
      .then(res => {
        console.log(res);
        this.setState({ images: res.data.message });
      })
      .catch(err => console.log(err));
    this.setState({
      show: !this.state.show,
      buttonText: !this.state.buttonText
    });
  };

  render() {
    return (
      <div className="App">
        
        <div>
          <u className="h4 text-secondary font-italic font-weight-bold">
            Fetching Images from api using Axios
          </u>
        </div>
        <button
          className="mt-3 btn btn-outline-success"
          type="button"
          onClick={this.handleClick}
        >
          {this.state.buttonText ? "View Images" : "Hide Images"}
        </button>
        
        <div>
          {this.state.show &&
            this.state.images.map(image => (
              <img
                className="border border-success mt-3 w-50 d-inline"
                src={image}
                key={image}
                alt="image"
              />
            ))}
        </div>
        
        
      </div>
    );
  }
}
