import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let NoImage =
      "https://www.bing.com/th?id=OIP.BJjKPC1A5YjD6HnHfE3yrAAAAA&w=132&h=165&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    return (
      <div className="gallery-wrapper">
        {this.props.items.map((item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
          return (
            <a href={infoLink} key={index} className="book" target="_blank">
              <img
                src={imageLinks !== undefined ? imageLinks.thumbnail : NoImage}
                alt="book image"
                className="book-image"
              />
              <div className="book-text">{title}</div>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
