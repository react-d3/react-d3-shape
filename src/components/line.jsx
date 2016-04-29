"use strict";

import {
  default as React,
  PropTypes,
  Component,
} from 'react';

import D3Shape from 'd3-shape'
import CommonProps from '../commonProps';
import {series} from '../utils/series';
import {getTranslateXAmount} from '../utils/alignment';

export default class Line extends Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    pointAlign: PropTypes.oneOf(['left', 'center', 'right'])
  };

  static defaultProps = {
    interpolate: null,
    lineClassName: 'react-d3-basic__line',
    ...CommonProps
  }

  _mkLine(dom) {
    const {
      lineClassName
    } = this.props;

    var dataset = series(this.props);
    var that = this;

    return (
      <g>
        {
          dataset.map((line, i) => {
            return (
              <path
                stroke={line.color}
                fill="none"
                className={`${lineClassName} line`}
                d={that._setAxes(line.data)}
                style={line.style}
                key={i}/>
            )
          })
        }
      </g>
    )
  }

  _setAxes (data) {
    const {
      xScaleSet,
      yScaleSet
    } = this.props;

    var line =  D3Shape.line()
      .x((d) => { return xScaleSet(d.x) })
      .y((d) => { return yScaleSet(d.y) })

    return line.call(this, data);
  }

  render() {
    var line = this._mkLine();

    const translateXAmount = getTranslateXAmount(
      this.props.pointAlign,
      this.props.xScaleSet.bandwidth()
    );
    const style = {
      transform: `translateX(${translateXAmount}px)`
    };

    return (
      <g style={style}>
        {line}
      </g>
    );
  }
}
