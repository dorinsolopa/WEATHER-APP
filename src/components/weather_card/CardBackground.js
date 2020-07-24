import React from "react";

class CardBackground extends React.Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}
export default CardBackground;
