import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import $ from "jquery";
import {
  Carousel as BootstrapCarousel,
  CarouselItem
} from "cicero/lib/client";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const style = {
      height: "300px",
      width: "100%"
    };
    const carouselItems = [
      new CarouselItem({
        content: "<div/>",
        caption: "<h5>cicero bootstrap-carousel</h5><p>slide-0</p>",
        style: { ...style, background: "#ff7251" }
      }),
      new CarouselItem({
        content: "<div/>",
        caption: "<h5>cicero bootstrap-carousel</h5><p>slide-1</p>",
        style: { ...style, background: "#f5a142" }
      }),
      new CarouselItem({
        content: "<div/>",
        caption: "<h5>cicero bootstrap-carousel</h5><p>slide-2</p>",
        style: { ...style, background: "#ffca7b" }
      })
    ];
    this.carousel = new BootstrapCarousel("cicero-carousel", carouselItems, { style }).get();
  }
  componentDidMount() {
    this._div.append(this.carousel);
  }
  render() {
    return <div ref={r => (this._div = r)} style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}></div>;
  }
}
Carousel.propTypes = {};
