"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';
import {series} from '../utils/series';

export default class BarGroup extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_group'
  }

  _mkBarGroup(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver
    } = this.props;

    var dataset = series(this.props);
    var x1 = d3.scale.ordinal();

    // mapping x1, inner x axis
    x1.domain(dataset.map((d) => { return d.field}))
      .rangeRoundBands([0, xScaleSet.rangeBand()]);

    var domain = yScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = yScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = yScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = yScaleSet.range()[1];
    }


    return (
      dataset.map((barGroup, i) => {
        return (
          <g className="bargroup">
            {
              barGroup.data.map((bar) => {
                console.log(bar)
                return (
                  <rect
                    className={`${barClassName} bar`}
                    width={x1.rangeBand()}
                    x={xScaleSet(bar.x)? (xScaleSet(bar.x) + x1.rangeBand() * i) : -10000}
                    y={bar.y < 0 ? zeroBase: yScaleSet(bar.y)}
                    height={bar.y < domain[0] ? 0: Math.abs(zeroBase - yScaleSet(bar.y))}
                    fill={barGroup.color}
                    onMouseOver={onMouseOver}
                    onMouseOut={onMouseOut}
                    style={barGroup.style}
                  />
                )
              })
            }
          </g>
        )
      })
    )
  }

  render() {
    var bar = this._mkBarGroup();

    return (
      <g>
        {bar}
      </g>
    )
  }
}
