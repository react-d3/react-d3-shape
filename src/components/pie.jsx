"use strict";

import {
  default as React,
  Component,
} from 'react';

import D3Shape from 'd3-shape'
import {pieProps} from '../commonProps';

export default class Pie extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    ...pieProps
  }

  mkSeries() {
    const {
      data,
      chartSeries,
      value,
      name,
      categoricalColors
    } = this.props;

    var chartSeriesData = chartSeries.map((f, i) => {

      // set a color if not set
      if(!f.color)
        f.color = categoricalColors(i);

      // set name if not set
      if(!f.name)
        f.name = f.field;

      var val;

      data.forEach((d) => {
        if(name(d) === f.field)
          val = d;
      })

      return Object.assign(f, {value: value(val)});
    })

    return chartSeriesData;
  }

  _mkPie () {
    var {
      width,
      height,
      innerRadius,
      outerRadius,
      pieSort,
      value,
      radius,
      onMouseOut,
      onMouseOver
    } = this.props;

    var radius = this.props.radius || Math.min(width - 100, height - 100) / 2;
    var outerRadius = outerRadius || (radius - 10)
    var labelr = radius + 10;

    var chartSeriesData = this.mkSeries();

    var arc = D3Shape.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    var arcOver = D3Shape.arc()
      .outerRadius(outerRadius + 10)
      .innerRadius(innerRadius);

    var pie = D3Shape.pie()
      .sort((a, b) => { return pieSort(a.value, b.value)})
      .value((d) => { return d.value; })

    return (
      <g className="arc">
        {
          pie(chartSeriesData).map((slice, i) => {
            var textTransform = (d) => {
              var c = arc.centroid(d),
                x = c[0],
                y = c[1],
                // pythagorean theorem for hypotenuse
                h = Math.sqrt( x * x + y * y);

              return "translate(" + (x / h * labelr) +  ',' +
                 (y / h * labelr) +  ")";
            }

            var textAnchor = (d) => {
              return (d.endAngle + d.startAngle)/2 > Math.PI ?
                "end" : "start";
            }

            return (
              <g>
                <path 
                  key={i}
                  d={arc(slice)} 
                  style={{fill: slice.data.color, stroke: '#FFF', ...slice.data.style}}
                  onMouseOver={onMouseOver}
                  onMouseOut={onMouseOut}
                  />
                <text
                  transform={textTransform(slice)}
                  dy=".35em"
                  textAnchor={textAnchor(slice)}
                >
                  {slice.data.name}
                </text>
              </g>
            )
          })
        }
      </g>
    )
  }

  render() {

    const{
      width,
      height,
      margins
    } = this.props;

    var t = `translate(${(width - margins.left - margins.right) / 2},  ${(height - margins.top - margins.bottom) / 2})`;
    var pie = this._mkPie();

    return (
      <g transform={t}>
        {pie}
      </g>
    )
  }
}
