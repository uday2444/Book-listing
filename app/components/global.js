import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Button } from "react-bootstrap";
import { BiSearchAlt2 } from "react-icons/bi";
import Gallery from "./gallery";

class GlobalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      items: [],
    };
  }

  search() {
    const Base_URL = "https://www.googleapis.com/books/v1/volumes?q=";
    fetch(`${Base_URL}${this.state.query}`, { method: "GET" })
      .then((response) => response.json())
      .then((json) => {
        let { items } = json;
        this.setState({ items });
      });
    // console.log("search", this.state.query);
  }
  render() {
    return (
      <div className="global-wrapper">
        <h2>Book Store!</h2>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a book"
              onChange={(event) => this.setState({ query: event.target.value })}
            />
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={() => this.search()}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            >
              <BiSearchAlt2 />
            </Button>
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items} />
      </div>
    );
  }
}

export default GlobalComponent;
