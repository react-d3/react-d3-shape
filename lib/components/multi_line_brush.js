"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactD3Core = require('react-d3-core');

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _chart = require('../chart');

var _chart2 = _interopRequireDefault(_chart);

var _blank_chart = require('./blank_chart');

var _blank_chart2 = _interopRequireDefault(_blank_chart);

var _area = require('./area');

var _area2 = _interopRequireDefault(_area);

var _brush = require('./brush');

var _brush2 = _interopRequireDefault(_brush);

var _rectangle = require('../utils/rectangle');

var _rectangle2 = _interopRequireDefault(_rectangle);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
    Component that renders multi-line + area chart if there is a data or else blank chart.
    Also provides brush (depending on isBrushable value), styling for chart (using svg Rectangle)
**/

var MultiLineBrushChart = function (_Component) {
	_inherits(MultiLineBrushChart, _Component);

	function MultiLineBrushChart(props) {
		_classCallCheck(this, MultiLineBrushChart);

		return _possibleConstructorReturn(this, (MultiLineBrushChart.__proto__ || Object.getPrototypeOf(MultiLineBrushChart)).call(this, props));
	}

	_createClass(MultiLineBrushChart, [{
		key: 'render',
		value: function render() {
			// if there is no data render Blank chart
			if (!(this.props.data && this.props.data.length > 0)) return _react2.default.createElement(_blank_chart2.default, this.props);

			var _props = this.props,
			    width = _props.width,
			    height = _props.height,
			    margins = _props.margins,
			    data = _props.data,
			    chartSeries = _props.chartSeries,
			    showXGrid = _props.showXGrid,
			    showYGrid = _props.showYGrid,
			    showLegend = _props.showLegend,
			    categoricalColors = _props.categoricalColors,
			    isBrushable = _props.isBrushable,
			    chartClassName = _props.chartClassName;


			var xgrid, ygrid;

			/*
    Create a separate chartSeries object based on area value and pass it to respective chart components.
    Note: chartSeries is an array of objects.
    */
			var chartSeriesType = chartSeries.map(function (d, i) {
				var series = [];
				if (d.area) {
					series.push(d);
					// area chart
					return _react2.default.createElement(_area2.default, { chartSeries: series, key: i });
				} else {
					series.push(d);
					// simple line chart
					return _react2.default.createElement(_line2.default, { chartSeries: series, key: i });
				}
			});

			if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, this.props);
			if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, this.props);

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					_chart2.default,
					_extends({}, this.props, {
						width: width,
						height: height,
						margins: margins,
						data: data,
						chartSeries: chartSeries }),
					chartClassName ? _react2.default.createElement(_rectangle2.default, _extends({}, this.props, { styleClassName: chartClassName })) : null,
					isBrushable ? _react2.default.createElement(_brush2.default, this.props) : null,
					chartSeriesType,
					_react2.default.createElement(_reactD3Core.Xaxis, this.props),
					_react2.default.createElement(_reactD3Core.Yaxis, this.props),
					xgrid,
					ygrid
				),
				showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
					width: width,
					margins: margins,
					chartSeries: chartSeries,
					categoricalColors: categoricalColors })) : null
			);
		}
	}]);

	return MultiLineBrushChart;
}(_react.Component);

MultiLineBrushChart.defaultProps = _extends({
	showScatter: false,
	isBrushable: false
}, _commonProps2.default);
MultiLineBrushChart.propTypes = {
	width: _react.PropTypes.number.isRequired,
	height: _react.PropTypes.number.isRequired,
	margins: _react.PropTypes.object.isRequired,
	data: _react.PropTypes.array.isRequired,
	chartSeries: _react.PropTypes.array.isRequired
};
exports.default = MultiLineBrushChart;