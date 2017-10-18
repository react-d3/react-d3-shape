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
      height,
      width,
      margins,
      data,
      svgClassName,
      id,
      name,
      value
    } = this.props;

    var children = React.Children.map(this.props.children, (el) => {
      if(el)
        return React.cloneElement(el, this.props)
      else
        return null
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
