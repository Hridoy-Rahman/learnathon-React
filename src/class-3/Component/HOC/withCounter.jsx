import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    state = {
      count: 0,
    };
    handleCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} handleCount={this.handleCount} />;
    }
  }
  return NewComponent;
};

export default withCounter;