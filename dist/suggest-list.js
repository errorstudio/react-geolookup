'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _suggestItem = require('./suggest-item');

var _suggestItem2 = _interopRequireDefault(_suggestItem);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // eslint-disable-line no-unused-vars


/**
 * The list with suggestions. Either from an API or provided as fixture
 * @param {Object} props The component's props
 * @return {JSX} The icon component.
 */
var SuggestList = function (_React$PureComponent) {
    _inherits(SuggestList, _React$PureComponent);

    function SuggestList(props) {
        _classCallCheck(this, SuggestList);

        var _this = _possibleConstructorReturn(this, (SuggestList.__proto__ || Object.getPrototypeOf(SuggestList)).call(this, props));

        _this.isHidden = _this.isHidden.bind(_this);
        return _this;
    }
    /**
    * Whether or not it is hidden
    * @return {Boolean} Hidden or not?
    */


    _createClass(SuggestList, [{
        key: 'isHidden',
        value: function isHidden() {
            return this.props.isHidden || this.props.suggests.length === 0;
        }

        /**
        * There are new properties available for the list
        * @param {Object} nextProps The new properties
        */

    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.suggests !== this.props.suggests) {
                if (nextProps.suggests.length === 0) {
                    this.props.onSuggestNoResults();
                }
            }
        }

        /**
        * Render the view
        * @return {Function} The React element to render
        */

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var classes = (0, _classnames3.default)('geolookup__suggests', { 'geolookup__suggests--hidden': this.isHidden() }, _defineProperty({}, this.props.hiddenClassName, this.props.hiddenClassName ? this.isHidden() : null));

            return _react2.default.createElement(
                'ul',
                { className: classes, style: this.props.style },
                this.props.suggests.map(function (suggest) {
                    var isActive = _this2.props.activeSuggest && suggest.placeId === _this2.props.activeSuggest.placeId;

                    return _react2.default.createElement(_suggestItem2.default, {
                        key: suggest.placeId,
                        className: suggest.className,
                        suggest: suggest,
                        style: _this2.props.suggestItemStyle,
                        isActive: isActive,
                        activeClassname: _this2.props.suggestItemActiveClassName,
                        onMouseDown: _this2.props.onSuggestMouseDown,
                        onMouseOut: _this2.props.onSuggestMouseOut,
                        onSelect: _this2.props.onSuggestSelect,
                        suggestItemLabelRenderer: _this2.props.suggestItemLabelRenderer
                    });
                })
            );
        }
    }]);

    return SuggestList;
}(_react2.default.PureComponent);

/**
 * Types for the properties
 * @type {Object}
 */


exports.default = SuggestList;
SuggestList.propTypes = {
    isHidden: _propTypes2.default.bool,
    suggests: _propTypes2.default.array,
    suggestItemStyle: _propTypes2.default.object,
    style: _propTypes2.default.object,
    activeSuggest: _propTypes2.default.object,
    hiddenClassName: _propTypes2.default.string,
    suggestItemActiveClassName: _propTypes2.default.string,
    onSuggestNoResults: _propTypes2.default.func,
    suggestItemLabelRenderer: _propTypes2.default.func,
    onSuggestMouseDown: _propTypes2.default.func,
    onSuggestMouseOut: _propTypes2.default.func,
    onSuggestSelect: _propTypes2.default.func
};

/**
 * Default values for the properties
 * @type {Object}
 */
SuggestList.defaultProps = {
    isHidden: true,
    suggests: [],
    onSuggestNoResults: function onSuggestNoResults() {/* no-op */},
    suggestItemLabelRenderer: function suggestItemLabelRenderer() {/* no-op */},
    onSuggestMouseDown: function onSuggestMouseDown() {/* no-op */},
    onSuggestMouseOut: function onSuggestMouseOut() {/* no-op */},
    onSuggestSelect: function onSuggestSelect() {/* no-op */}
};