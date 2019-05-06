import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import BlackBoxAnimated from "./BlackBoxAnimated";

const ImageBox = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: url('${props => props.image}');
  background-size: cover;
  background-position: center;
`;

class ImageBoxAnimated extends React.Component {
  componentWillMount() {
    this.setState({
      animationNumber: 0
    });

    if (this.props.startAnimation) {
      this.runAnimation();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.startAnimation !== nextProps.startAnimation) {
      if (nextProps.startAnimation) {
        this.runAnimation();
      }
    }
  }

  runAnimation = () => {
    setTimeout(this.startNextAnimation, 0);
    setTimeout(this.startNextAnimation, 500);
    setTimeout(this.startNextAnimation, 1000);
    setTimeout(this.startNextAnimation, 1500);
  };

  startNextAnimation = () => {
    this.setState({
      animationNumber: this.state.animationNumber + 1
    });
  };

  render() {
    const { animationNumber } = this.state;

    const { image, width, height } = this.props;
    return (
      <ImageBox image={image} width={width} height={height}>
        <BlackBoxAnimated
          reverseDirection={false}
          heightPercentage={25}
          startAnimation={animationNumber >= 1}
        />
        <BlackBoxAnimated
          reverseDirection={true}
          heightPercentage={25}
          startAnimation={animationNumber >= 2}
        />
        <BlackBoxAnimated
          reverseDirection={false}
          heightPercentage={25}
          startAnimation={animationNumber >= 3}
        />
        <BlackBoxAnimated
          reverseDirection={true}
          heightPercentage={25}
          startAnimation={animationNumber >= 4}
        />
      </ImageBox>
    );
  }
}

ImageBoxAnimated.propTypes = {
  image: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default ImageBoxAnimated;
