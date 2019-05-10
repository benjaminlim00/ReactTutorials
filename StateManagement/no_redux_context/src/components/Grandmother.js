import React from "react";
import { Provider, Consumer } from "./Context";

export class Grandmother extends React.Component {
  state = {
    lastName: "Sanchez"
  };

  render() {
    return (
      <Provider value={this.state.lastName}>
        <Mother />
      </Provider>
    );
  }
}

const Mother = () => {
  return <Child />;
};

const Child = () => {
  return <Consumer>{storedValue => <p>{storedValue}</p>}</Consumer>;
};
