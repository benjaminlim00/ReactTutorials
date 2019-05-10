import React, { Component } from "react";

class AsyncNor extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    try {
      const response = await fetch(
        `https://api.coinmarketcap.com/v1/ticker/?limit=10`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default AsyncNor;
