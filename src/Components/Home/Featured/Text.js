import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

import FeaturedPlayer from "../../../Resources/images/featured_player.png";

export class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(${window.innerWidth * 0.27}px, ${
                window.innerHeight * 0.06
              }px) rotateY(${rotate}deg)`,
            }}
          >
            3
          </div>
        );
      }}
    </Animate>
  );

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: window.innerHeight * 0.4,
      }}
      enter={{
        opacity: [1],
        x: [window.innerWidth * 0.278],
        y: [window.innerHeight * 0.4],
        timing: { delay: 100, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_first"
            style={{
              opacity,
              x,
              y,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            League
          </div>
        );
      }}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: window.innerHeight * 0.6,
      }}
      enter={{
        opacity: [1],
        x: [window.innerWidth * 0.278],
        y: [window.innerHeight * 0.6],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_second"
            style={{
              opacity,
              x,
              y,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            Championships
          </div>
        );
      }}
    </Animate>
  );

  animatePlayer = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: window.innerHeight * 0.05,
      }}
      enter={{
        opacity: [1],
        x: [window.innerWidth * 0.53],
        y: [window.innerHeight * 0.05],
        timing: { delay: 800, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_player"
            style={{
              opacity,
              x,
              y,
              transform: `translate(${x}px, ${y}px)`,
              background: `url(${FeaturedPlayer})`,
            }}
          />
        );
      }}
    </Animate>
  );
  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default Text;
