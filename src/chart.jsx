"use strict";

import {
  default as React,
  Component
} from 'react';

import * as PropTypes from 'prop-types';

import {
  scale,
  xDomainCount,
  yDomainCount
} from 'react-d3-core';

import CommonProps from './commonProps';

export default class ChartSvg extends Component {
  constructor(props) {
    super (props);
  }

  static defaultProps = {
    svgClassName: 'react-d3-core__container_svg',
    ...CommonProps
  }

  static propTypes = {
    id: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    margins: PropTypes.object.isRequired,
    svgClassName: PropTypes.string.isRequired,
  }

  render() {

    var {
      horizontal,
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
      xBandPaddingInner,
      xBandPaddingOuter,
      yBandPaddingInner,
      yBandPaddingOuter,
      xLabel,
      yLabel,
      stack,
      data,
      svgClassName,
      id,
      x,
      y
    } = this.props;

    var xRange = xRange || [0, width - margins.left - margins.right];
    var yRange = yRange || [height - margins.top - margins.bottom, 0]
    var xDomain = xDomain || xDomainCount(this.props, stack, horizontal);
    var yDomain = yDomain || yDomainCount(this.props, stack, horizontal);

    if(xScale === 'ordinal')
      xScale = 'band'

    if(yScale === 'ordinal')
      yScale = 'band'

    var newXScale = {
      scale: xScale,
      range: xRange,
      domain: xDomain,
      bandPaddingInner: xBandPaddingInner,
      bandPaddingOuter: xBandPaddingOuter
    }

    var xScaleSet = scale(newXScale);

    var newYScale = {
      scale: yScale,
      range: yRange,
      domain: yDomain,
      bandPaddingInner: yBandPaddingInner,
      bandPaddingOuter: yBandPaddingOuter
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
          xBandPaddingInner: xBandPaddingInner,
          xBandPaddingOuter: xBandPaddingOuter,
          yBandPaddingInner: yBandPaddingInner,
          yBandPaddingOuter: yBandPaddingOuter,
          xScale: xScale,
          yScale: yScale,
          xTickFormat: xTickFormat,
          yTickFormat: yTickFormat,
          xTicks: xTicks,
          yTicks: yTicks,
          xLabel: xLabel,
          yLabel: yLabel,
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
