"use strict";

import {
  default as React,
  Component,
} from 'react';

import D3Scale from 'd3-scale';
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

  triggerOver(data , e) {
    this.props.onMouseOver(e, data)
  }

  triggerOut(data, e) {
    this.props.onMouseOut(e, data)
  }


  _mkBarGroup(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet
    } = this.props;

    const that = this
    var dataset = series(this.props);
    var x1 = D3Scale.scaleBand();

    // mapping x1, inner x axis
    x1.domain(dataset.map((d) => { return d.field}))
      .range([0, xScaleSet.bandwidth()])
      .padding(.1)
      .round(true)

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
          <g className="bargroup" key={i}>
            {
              barGroup.data.map((bar, j) => {
                return (
                  <rect
                    key={j}
                    className={`${barClassName} bar`}
                    width={x1.bandwidth()}
                    x={xScaleSet(bar.x) || xScaleSet(bar.x) === 0? (xScaleSet(bar.x) + x1.bandwidth() * i) : -10000}
                    y={bar.y < 0 ? zeroBase: yScaleSet(bar.y)}
                    height={bar.y < domain[0] ? 0: Math.abs(zeroBase - yScaleSet(bar.y))}
                    fill={barGroup.color}
                    onMouseOut={that.triggerOut.bind(this, bar)}
                    onMouseOver={that.triggerOver.bind(this, bar)}
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
