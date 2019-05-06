import React from "react";
import styled from "styled-components";
import ImageBoxAnimated from "./ImageBoxAnimated";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: #333;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startFirstBoxAnimation: false
    };
  }

  componentDidMount() {
    this.setState({
      startFirstBoxAnimation: false
    });
  }

  render() {
    const { startFirstBoxAnimation } = this.state;
    return (
      <Wrapper>
        <button onClick={() => this.setState({ startFirstBoxAnimation: true })}>
          Start First Box
        </button>
        <ImageBoxAnimated
          image={
            "https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg"
          }
          width={600}
          height={400}
          startAnimation={startFirstBoxAnimation}
        />

        <ImageBoxAnimated
          image={
            "https://www.adventure-journal.com/wp-content/uploads/2015/06/o-the-glory-of-it-all.jpg"
          }
          width={300}
          height={200}
          startAnimation={true}
        />
      </Wrapper>
    );
  }
}

export default App;
