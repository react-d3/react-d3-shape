"use strict";

import D3Scale from 'd3-scale';

const width = 960;
const height = 500;
const margins = {top: 80, right: 100, bottom: 80, left: 100};

export default {
  width: width,
  height: height,
  margins: margins,
  y: (d) => {return +d;},
  xScale: 'linear',
  yScale: 'linear',
  showXGrid: true,
  showYGrid: true,
  pointAlign: 'left'
}

export const pieProps = {
  width: width,
  height: height,
  margins: margins,
  innerRadius: 0,
  categoricalColors: D3Scale.scaleCategory10(),
  pieSort: () => {},
  pieTextShow: true
}
