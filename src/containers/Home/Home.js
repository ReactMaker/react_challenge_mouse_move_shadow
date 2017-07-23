import React, { Component } from 'react';
import UltraBall from 'static/ultra-ball.svg';
import './Home.less';

export default class Home extends Component {
  state = {
    top: 0,
    left: 0,
  };

  onMouseMove = (e) => {
    // const self = this;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.updatePosition(e.clientX, e.clientY);
    }, 1000);
    e.persist();
  };

  updatePosition = (x, y) => {
    this.setState({
      top: y,
      left: x,
    });
  }

  timeout = 0;

  render() {
    return (
      <div id="pageHome" onMouseMove={this.onMouseMove}>
        <img className="ball" src={UltraBall} alt="testball" style={this.state} />
        <div className="footer">Icons made by <a href="http://www.flaticon.com/authors/roundicons-freebies" title="Roundicons Freebies">Roundicons Freebies</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a></div>
      </div>
    );
  }
}
