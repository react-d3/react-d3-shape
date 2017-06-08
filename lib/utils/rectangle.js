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
	Renders svg rectangle for given width and height
*/
var Rect = function (_Component) {
	_inherits(Rect, _Component);

	function Rect(props) {
		_classCallCheck(this, Rect);

		return _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, props));
	}

	_createClass(Rect, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.drawRectangle();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// rectangle width needs to be updated upon window re-sizing
			if (this.rectangle) this.rectangle.attr("width", this.props.width - this.props.margins.left - this.props.margins.right);
		}
	}, {
		key: 'drawRectangle',
		value: function drawRectangle() {
			var _props = this.props,
			    width = _props.width,
			    height = _props.height,
			    margins = _props.margins,
			    styleClassName = _props.styleClassName;


			this.rectangle = d3.select(_reactDom2.default.findDOMNode(this.refs.Rect)).append("rect").attr("x", 0).attr("y", -5).attr("width", width - margins.left - margins.right).attr("height", height - margins.bottom - margins.top + 3).attr("class", styleClassName);

			return this.rectangle;
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'g',
				{ ref: 'Rect', className: 'rectangle' },
				' '
			);
		}
	}]);

	return Rect;
}(_react.Component);

Rect.propTypes = {
	height: _react.PropTypes.number.isRequired,
	width: _react.PropTypes.number.isRequired,
	margins: _react.PropTypes.object.isRequired,
	styleClassName: _react.PropTypes.string.isRequired
};
exports.default = Rect;