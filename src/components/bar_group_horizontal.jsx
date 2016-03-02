"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';
import {series} from '../utils/series';

export default class BarGroupHorizontal extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_group_horizontal'
  }

  _mkBarGroup() {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver
    } = this.props;

    var dataset = series(this.props, true);
    var y1 = d3.scale.ordinal();

    // mapping x1, inner x axis
    y1.domain(dataset.map((d) => { return d.field}))
      .rangeRoundBands([0, yScaleSet.rangeBand()]);

    var domain = xScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = xScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = xScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = xScaleSet.range()[1];
    }

    return (
      <g>
        {
          dataset.map((barGroup, i) => {
            return (
              <g className="bargroup">
                {
                  barGroup.data.map((bar) => {
                    return(
                      <rect 
                        className={`${barClassName} bar`}
                        height={y1.rangeBand()}
                        y={yScaleSet(bar.y)? (yScaleSet(bar.y) + y1.rangeBand() * i) : -10000}
                        x={bar.x > 0 ? zeroBase: (zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)))}
                        width={bar.x < domain[0] ? 0: Math.abs(zeroBase - xScaleSet(bar.x))}
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
        }
      </g>
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
