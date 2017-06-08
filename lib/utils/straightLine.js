"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
	Renders straightline with given x and y coordinates.
*/
var StraightLine = function (_Component) {
	_inherits(StraightLine, _Component);

	function StraightLine(props) {
		_classCallCheck(this, StraightLine);

		return _possibleConstructorReturn(this, (StraightLine.__proto__ || Object.getPrototypeOf(StraightLine)).call(this, props));
	}

	_createClass(StraightLine, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getLine();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// line needs to be updated upon window re-sizing
			if (this.line) this.line.attr("width", this.props.width - this.props.margins.left - this.props.margins.right);
		}
	}, {
		key: 'getLine',
		value: function getLine() {
			var _props = this.props,
			    x1 = _props.x1,
			    x2 = _props.x2,
			    y1 = _props.y1,
			    y2 = _props.y2,
			    width = _props.width,
			    height = _props.height;


			this.line = d3.select(_reactDom2.default.findDOMNode(this.refs.StLine)).append("line").attr("x1", x1).attr("y1", y1).attr("x2", x2).attr("y2", y2);

			return this.line;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'g',
				{ ref: 'StLine', className: 'straight-line' },
				' '
			);
		}
	}]);

	return StraightLine;
}(_react.Component);

StraightLine.defaultProps = {
	showXGrid: true,
	showYGrid: false
};
exports.default = StraightLine;