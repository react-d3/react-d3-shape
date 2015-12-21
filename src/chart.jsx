"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import {
  scale,
  xDomainCount,
  yDomainCount
} from 'react-d3-core';

import d3 from 'd3';
import CommonProps from './commonProps';

export default class ChartSvg extends Component {
  constructor(props) {
    super (props);
  }

  static defaultProps = Object.assign(CommonProps, {
    svgClassName: 'react-d3-core__container_svg'
  })

  static propTypes = {
    id: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    svgClassName: PropTypes.string.isRequired,
  }

  render() {

    var {
      horizonal,
      height,
      width,
      margins,
      xScale,
      yScale,
      xRange,
      yRange,
      xDomain,
      yDomain,
      xTicks,
      yTicks,
      xTickFormat,
      yTickFormat,
      xRangeRoundBands,
      yRangeRoundBands,
      stack,
      data,
      svgClassName,
      id,
      x,
      y
    } = this.props;

    var xRange = xRange || [0, width - margins.left - margins.right];
    var yRange = yRange || [height - margins.top - margins.bottom, 0]
    var xRangeRoundBands = xRangeRoundBands || {interval: [0, width - margins.left - margins.right], padding: .1};
    var yRangeRoundBands = yRangeRoundBands || {interval: [0, height - margins.top - margins.bottom], padding: .1};
    var xDomain = xDomain || xDomainCount(this.props, stack, horizonal);
    var yDomain = yDomain || yDomainCount(this.props, stack, horizonal);

    var newXScale = {
      scale: xScale,
      range: xRange,
      domain: xDomain,
      rangeRoundBands: xRangeRoundBands
    }

    console.log(xDomain, xRange)

    var xScaleSet = scale(newXScale);

    var newYScale = {
      scale: yScale,
      range: yRange,
      domain: yDomain,
      rangeRoundBands: yRangeRoundBands
    }

    var yScaleSet = scale(newYScale);

    var children = React.Children.map(this.props.children, (el) => {
      if(el) {
        return React.cloneElement(el, {
          height: height,
          width: width,
          margins: margins,
          xScaleSet: xScaleSet,
          yScaleSet: yScaleSet,
          xDomain: xDomain,
          yDomain: yDomain,
          xRange: xRange,
          yRange: yRange,
          xRangeRoundBands: xRangeRoundBands,
          yRangeRoundBands: yRangeRoundBands,
          xScale: xScale,
          yScale: yScale,
          xTickFormat: xTickFormat,
          yTickFormat: yTickFormat,
          xTicks: xTicks,
          yTicks: yTicks,
          data: data,
          x: x,
          y: y
        })
      }else {
        return null;
      }
    });

    var t = `translate(${margins.left}, ${margins.top})`;

    return (
      <svg
        height = {height}
        width = {width}
        className = {svgClassName}
        id = {id}
        ref = "svgContainer"
      >
        <g
          transform = {t}
        >
          {children}
        </g>
      </svg>
    )
  }
}
