"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _collect = _interopRequireDefault(require("collect.js"));

var _index = _interopRequireDefault(require("./index"));

var _preg_match = _interopRequireDefault(require("locutus/php/pcre/preg_match"));

var _forceString = _interopRequireDefault(require("./helpers/forceString"));

var _explode2 = _interopRequireDefault(require("locutus/php/strings/explode"));

var _ltrim2 = _interopRequireDefault(require("locutus/php/strings/ltrim"));

var _rtrim2 = _interopRequireDefault(require("locutus/php/strings/rtrim"));

var _str_replace = _interopRequireDefault(require("locutus/php/strings/str_replace"));

var _trim2 = _interopRequireDefault(require("locutus/php/strings/trim"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @return {string}
 */
var Stringable = /*#__PURE__*/function () {
  function Stringable(value) {
    _classCallCheck(this, Stringable);

    this.value = (0, _forceString["default"])(value);
    return this.value;
  }
  /**
   * Return the remainder of a string after the first occurrence of a given value
   *
   * @param search
   *
   * @return Stringable
   */


  _createClass(Stringable, [{
    key: "after",
    value: function after() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Stringable(_index["default"].after(this.value, search));
    }
  }, {
    key: "afterLast",
    value:
    /**
     * Returns the remainder of a string after the last occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return Stringable
     */
    function afterLast(subject) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Stringable(_index["default"].afterLast(this.value, search));
    }
  }, {
    key: "append",
    value:
    /**
     * Append the given values to the string.
     *
     * @param values
     *
     * @return Stringable
     */
    function append() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return new Stringable(this.value + values.join(''));
    }
  }, {
    key: "ascii",
    value:
    /**
     * Transliterate a UTF-8 value to ASCII.
     *
     * @param language
     *
     * @return Stringable
     */
    function ascii() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      return new Stringable(_index["default"].ascii(this.value, language));
    }
  }, {
    key: "before",
    value:
    /**
     * Get the portion of a string before the first occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */
    function before() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Stringable(_index["default"].before(this.value, search));
    }
  }, {
    key: "beforeLast",
    value:
    /**
     * Get the portion of a string before the last occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */
    function beforeLast() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Stringable(_index["default"].beforeLast(this.value, search));
    }
  }, {
    key: "between",
    value:
    /**
     * Get the portion of a string between two given values
     *
     * @param at
     * @param to
     *
     * @return Stringable
     */
    function between() {
      var at = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Stringable(_index["default"].between(this.value, at, to));
    }
  }, {
    key: "camel",
    value:
    /**
     * Convert a value to camel case.
     *
     * @return Stringable
     */
    function camel() {
      return new Stringable(_index["default"].camel(this.value));
    }
  }, {
    key: "contains",
    value:
    /**
     * Determine if a given string contains a given substring.
     *
     * @param needles
     *
     * @return boolean
     */
    function contains() {
      var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _index["default"].contains(this.value, needles);
    }
  }, {
    key: "containsAll",
    value:
    /**
     * Determine if a given string contains all array values
     *
     * @param needles[]
     *
     * @return boolean
     */
    function containsAll() {
      var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _index["default"].containsAll(this.value, needles);
    }
  }, {
    key: "endsWith",
    value:
    /**
     * Determine if a given string ends with a given substring
     *
     * @param needles
     *
     * @return boolean
     */
    function endsWith() {
      var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return _index["default"].endsWith(this.value, needles);
    }
  }, {
    key: "exactly",
    value:
    /**
     * Determine if the string is an exact match with the given value.
     *
     * @param value
     *
     * @return boolean
     */
    function exactly(value) {
      return this.value === value;
    }
  }, {
    key: "explode",
    value:
    /**
     * Explode the string into an array.
     *
     * @param delimiter
     * @param limit
     *
     * @return Collection
     */
    function explode(delimiter) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
      return (0, _collect["default"])((0, _explode2["default"])(delimiter, this.value, limit));
    }
  }, {
    key: "split",
    value:
    /**
     * Split a string using a regular expression.
     *
     * @param pattern
     * @param limit
     * @param flags
     *
     * @return Collection
     */
    function split(pattern) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var segments = this.value.split(new RegExp(pattern));
      return !(typeof segments === 'undefined' || segments.length < 1) ? (0, _collect["default"])(segments) : (0, _collect["default"])();
    }
  }, {
    key: "finish",
    value:
    /**
     * Cap a string with a single instance of a given value
     *
     * @param cap
     *
     * @return Stringable
     */
    function finish(cap) {
      return new Stringable(_index["default"].finish(this.value, cap));
    }
  }, {
    key: "is",
    value:
    /**
     * Determine if a given string matches a given pattern
     *
     * @param  pattern
     *
     * @return boolean
     */
    function is(pattern) {
      return _index["default"].is(pattern, this.value);
    }
  }, {
    key: "isAscii",
    value:
    /**
     * Determine if a given string is 7 bit ASCII
     *
     * @return boolean
     */
    function isAscii() {
      return _index["default"].isAscii(this.value);
    }
  }, {
    key: "isEmpty",
    value:
    /**
     * Determine if the given string is empty.
     *
     * @return boolean
     */
    function isEmpty() {
      return this.value === '';
    }
  }, {
    key: "isNotEmpty",
    value:
    /**
     * Determine if the given string is empty.
     *
     * @return boolean
     */
    function isNotEmpty() {
      return !this.isEmpty();
    }
  }, {
    key: "kebab",
    value:
    /**
     * Convert a string to kebab case.
     *
     * @return Stringable
     */
    function kebab() {
      return new Stringable(_index["default"].kebab(this.value));
    }
  }, {
    key: "length",
    value:
    /**
     * Return the length of the given string
     *
     * @param encoding
     *
     * @return int
     */
    function length() {
      var encoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return _index["default"].length(this.value, encoding);
    }
  }, {
    key: "limit",
    value:
    /**
     * Limit the number of characters in a string.
     *
     * @param limit
     * @param end
     *
     * @return Stringable
     */
    function limit() {
      var _limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '...';
      return new Stringable(_index["default"].limit(this.value, _limit, end));
    }
  }, {
    key: "lower",
    value:
    /**
     * Convert the given string to lower-case
     *
     * @return Stringable
     */
    function lower() {
      return new Stringable(_index["default"].lower(this.value));
    }
  }, {
    key: "match",
    value:
    /**
     * Get the string matching the given pattern.
     *
     * @param pattern
     *
     * @return Stringable|null
     */
    function match(pattern) {
      var matches = (0, _preg_match["default"])(pattern, this.value);

      if (!matches) {
        return new Stringable('');
      }

      return new Stringable(matches[1] || matches[0]);
    }
  }, {
    key: "parseCallback",
    value: // @TODO matchAll
    // /**
    //  * Get the string matching the given pattern.
    //  *
    //  * @param pattern
    //  * @return Collection
    //  */
    // matchAll = function(pattern)
    // {
    // 	let matches = pattern
    // };

    /**
     * Parse a Class@method style callback into class and method
     *
     * @param fallback
     *
     * @return array
     */
    function parseCallback(fallback) {
      return _index["default"].parseCallback(this.value, fallback);
    }
  }, {
    key: "plural",
    value:
    /**
     * Get the plural form of an English word.
     *
     * @param count
     *
     * @return Stringable
     */
    function plural() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      return new Stringable(_index["default"].plural(this.value, count));
    }
  }, {
    key: "pluralStudly",
    value:
    /**
     * Pluralize the last word of an English, studly caps case string.
     *
     * @param  count
     *
     * @return Stringable
     */
    function pluralStudly() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      return new Stringable(_index["default"].pluralStudly(this.value, count));
    }
  }, {
    key: "replace",
    value:
    /**
     * Replace the given value in the given string.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    function replace(search, _replace) {
      return new Stringable((0, _str_replace["default"])(search, _replace, this.value));
    }
  }, {
    key: "replaceArray",
    value:
    /**
     * Replace a given value in the string sequentially with an array.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    function replaceArray(search) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return new Stringable(_index["default"].replaceArray(search, replace, this.value));
    }
  }, {
    key: "replaceFirst",
    value:
    /**
     * Replace the first occurrence of a given value in the string.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    function replaceFirst(search, replace) {
      return new Stringable(_index["default"].replaceFirst(search, replace, this.value));
    }
  }, {
    key: "replaceLast",
    value:
    /**
     * Replace the last occurrence of a given value in the string.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    function replaceLast(search, replace) {
      return new Stringable(_index["default"].replaceLast(search, replace, this.value));
    }
  }, {
    key: "start",
    value: // /** @TODO Add replaceMatches method
    //  * Replace the patterns matching the given regular expression.
    //  *
    //  * @param  string  $pattern
    //  * @param  \Closure|string  $replace
    //  * @param  int  $limit
    //  * @return static
    //  */
    // replaceMatches(pattern, replace, limit = -1)
    // {
    //
    // };

    /**
     * Begin a string with a single instance of a given value
     *
     * @param  prefix
     *
     * @return Stringable
     */
    function start(prefix) {
      return new Stringable(_index["default"].start(this.value, prefix));
    }
  }, {
    key: "upper",
    value:
    /**
     * Convert the given string to upper-case.
     *
     * @return Stringable
     */
    function upper() {
      return new Stringable(_index["default"].upper(this.value));
    }
  }, {
    key: "title",
    value:
    /**
     * Convert the given string to title case.
     *
     * @return Stringable
     */
    function title() {
      return new Stringable(_index["default"].title(this.value));
    }
  }, {
    key: "singular",
    value:
    /**
     * Get the singular form of an English word.
     *
     * @return Stringable
     */
    function singular() {
      return new Stringable(_index["default"].singular(this.value));
    }
  }, {
    key: "slug",
    value:
    /**
     *
     * @param separator
     * @param language
     *
     * @returns Stringable
     */
    function slug() {
      var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';
      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
      return new Stringable(_index["default"].slug(this.value, separator, language));
    }
  }, {
    key: "snake",
    value:
    /**
     * Convert a string to snake case.
     *
     * @param delimiter
     *
     * @return Stringable
     */
    function snake() {
      var delimiter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '_';
      return new Stringable(_index["default"].snake(this.value, delimiter));
    }
  }, {
    key: "startsWith",
    value:
    /**
     * Determine if a given string starts with a given substring.
     *
     * @param needles
     *
     * @return boolean
     */
    function startsWith(needles) {
      return _index["default"].startsWith(this.value, needles);
    }
  }, {
    key: "studly",
    value:
    /**
     * Convert a value to studly caps case.
     *
     * @return Stringable
     */
    function studly() {
      return new Stringable(_index["default"].studly(this.value));
    }
  }, {
    key: "substr",
    value:
    /**
     * Returns the portion of string specified by the start and length parameters.
     *
     * @param start
     * @param length
     *
     * @return Stringable
     */
    function substr(start) {
      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return new Stringable(_index["default"].substr(this.value, start, length));
    }
  }, {
    key: "substrCount",
    value:
    /**
     * Returns the number of substring occurrences.
     *
     * @param needle
     * @param offset
     * @param length
     *
     * @return int
     */
    function substrCount(needle) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return _index["default"].substrCount(this.value, needle, offset, length);
    }
  }, {
    key: "trim",
    value:
    /**
     * Trim the string of the given characters.
     *
     * @param characters
     *
     * @returns Stringable
     */
    function trim() {
      var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Stringable(_trim2["default"].apply(void 0, [this.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "ltrim",
    value:
    /**
     * Left trim the string of given characters.
     *
     * @param characters
     *
     * @return Stringable
     */
    function ltrim() {
      var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Stringable(_ltrim2["default"].apply(void 0, [this.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "rtrim",
    value:
    /**
     * Right trim the string of given characters.
     *
     * @param characters
     *
     * @return Stringable
     */
    function rtrim() {
      var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return new Stringable(_rtrim2["default"].apply(void 0, [this.value].concat(Array.prototype.slice.call(arguments))));
    }
  }, {
    key: "whenEmpty",
    value:
    /**
     * Make a string's first character uppercase.
     *
     * @return Stringable
     */
    function whenEmpty(callback) {
      if (this.isEmpty()) {
        var result = callback(this);
        return result === null || typeof result === 'undefined' ? this : result;
      }

      return this;
    }
  }, {
    key: "words",
    value:
    /**
     * Limit the number of words in a string.
     *
     * @param words
     * @param end
     *
     * @return Stringable
     */
    function words() {
      var _words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;

      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '...';
      return new Stringable(_index["default"].words(this.value, _words, end));
    }
  }, {
    key: "dump",
    value:
    /**
     * Dump the string.
     *
     * @return this
     */
    function dump() {
      console.log(this);
      return this;
    }
  }, {
    key: "dd",
    value:
    /**
     * Dump the string then die.
     *
     * @return void
     */
    function dd() {
      this.dump();

      if (typeof process !== 'undefined') {
        if (typeof process.exit !== 'undefined') {
          process.exit(1);
        }
      }
    }
  }, {
    key: "get",
    value:
    /**
     * Proxy dynamic properties properties onto methods.
     *
     * @param key
     *
     * @return mixed
     */
    function get(key) {
      return this[key]();
    }
  }, {
    key: "toLocaleString",
    value:
    /**
     * Stringable.dirname
     */

    /**
     * Used when returning as a string operation
     *
     * @returns string
     */
    function toLocaleString() {
      return "".concat(this.value);
    }
  }, {
    key: "toString",
    value:
    /**
     * Used when returning as a string operation
     *
     * @returns string
     */
    function toString() {
      return "".concat(this.value);
    }
  }, {
    key: "toJSON",
    value:
    /**
     * Used when JSON.stringify is called
     */
    function toJSON() {
      return this.toString();
    }
  }, {
    key: "valueOf",
    value:
    /**
     * Used when returning as a value operation
     *
     * @returns string
     */
    function valueOf() {
      return "".concat(this.value);
    }
  }]);

  return Stringable;
}();

exports["default"] = Stringable;