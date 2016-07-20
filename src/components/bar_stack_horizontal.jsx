"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';
import { series } from '../utils/series';

export default class BarStackHorizontal extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_stack_horizontal'
  }

  triggerOver(data, e) {
    this.props.onMouseOver(e, data)
  }

  triggerOut(data, e) {
    this.props.onMouseOut(e, data)
  }

  _mkBarStack(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet,
      barWidth
    } = this.props;

    const that = this
    var dataset = series(this.props, true);
    const _setStack = this._setStack();

    // make areas
    var chart = d3.select(dom)
      .attr("class", "g")

    var domain = xScaleSet.domain();
    var zeroBase;
    var barBandWidth;

    if (domain[0] * domain[1] < 0) {
      zeroBase = xScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)) {
      zeroBase = xScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)) {
      zeroBase = xScaleSet.range()[1];
    }

    // user defined barwidth
    if(barWidth) {
      barBandWidth = barWidth;
    }
    else {
      barBandWidth = yScaleSet.bandwidth();
    }

    return (
      <g>
        {
          _setStack(dataset).map((barGroup, i) => {
            return(
              <g
                className="barGroup"
                fill={barGroup.color}
                style={barGroup.style}
                key={i}
                >
                {
                  barGroup.data.map((bar, j) => {
                    return(
                      <rect
                        className={`${barClassName} bar`}
                        height={barBandWidth}
                        y={yScaleSet(bar.y) || yScaleSet(bar.y) === 0? yScaleSet(bar.y): -10000}
                        x={xScaleSet(bar.x0)}
                        width={Math.abs(xScaleSet(bar.x) - xScaleSet(0))}
                        onMouseOut={that.triggerOut.bind(this, bar)}
                        onMouseOver={that.triggerOver.bind(this, bar)}
                        key={j}
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

  _setStack() {
    const {
      chartSeries
    } = this.props;

    var buildOut = function(len) {
      // baseline for positive and negative bars respectively.
      var currentXOffsets = [];
      var currentXIndex = 0;
      return function(d, x0, x) {

        if (currentXIndex++ % len === 0) {
          currentXOffsets = [0, 0];
        }

        if (x >= 0) {
          d.x0 = currentXOffsets[1];
          d.x = x;
          currentXOffsets[1] += x;
        } else {
          d.x0 = currentXOffsets[0] + x;
          d.x = -x;
          currentXOffsets[0] += x;
        }
      }
    }
    return d3.layout.stack()
      .values((d) => {
        return d.data;
      })
      .y((d) => {
        return d.x;
      })
      .out(buildOut(chartSeries.length));

  }

  render() {
    var bar = this._mkBarStack();

    return (
      <g>
        {bar}
      </g>
    )
  }
}
