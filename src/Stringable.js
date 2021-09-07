import collect from "collect.js";
import Str from "./index";
import preg_match from "locutus/php/pcre/preg_match";
import forceString from "./helpers/forceString";
import explode from "locutus/php/strings/explode";
import ltrim from "locutus/php/strings/ltrim";
import rtrim from "locutus/php/strings/rtrim";
import str_replace from "locutus/php/strings/str_replace";
import trim from "locutus/php/strings/trim";


/**
 * @return {string}
 */
export default class Stringable {
    constructor(value) {
        this.value = forceString(value);
        return this.value;
    }

    /**
     * Return the remainder of a string after the first occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */
    after(search = '') {
        return (new Stringable(Str.after(this.value, search)));
    };

    /**
     * Returns the remainder of a string after the last occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return Stringable
     */
    afterLast(subject, search = '') {
        return new Stringable(Str.afterLast(this.value, search));
    };

    /**
     * Append the given values to the string.
     *
     * @param values
     *
     * @return Stringable
     */
    append(...values) {
        return new Stringable(this.value + values.join(''));
    };

    /**
     * Transliterate a UTF-8 value to ASCII.
     *
     * @param language
     *
     * @return Stringable
     */
    ascii(language = 'en') {
        return new Stringable(Str.ascii(this.value, language));
    };

    /**
     * Get the portion of a string before the first occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */
    before(search = '') {
        return new Stringable(Str.before(this.value, search));
    };

    /**
     * Get the portion of a string before the last occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */
    beforeLast(search = '') {
        return new Stringable(Str.beforeLast(this.value, search));
    };

    /**
     * Get the portion of a string between two given values
     *
     * @param at
     * @param to
     *
     * @return Stringable
     */
    between(at = '', to = '') {
        return new Stringable(Str.between(this.value, at, to));
    };

    /**
     * Convert a value to camel case.
     *
     * @return Stringable
     */
    camel() {
        return new Stringable(Str.camel(this.value));
    };

    /**
     * Determine if a given string contains a given substring.
     *
     * @param needles
     *
     * @return boolean
     */
    contains(needles = []) {
        return Str.contains(this.value, needles);
    };

    /**
     * Determine if a given string contains all array values
     *
     * @param needles[]
     *
     * @return boolean
     */
    containsAll(needles = []) {
        return Str.containsAll(this.value, needles);
    };

    /**
     * Determine if a given string ends with a given substring
     *
     * @param needles
     *
     * @return boolean
     */
    endsWith(needles = []) {
        return Str.endsWith(this.value, needles);
    };


    /**
     * Determine if the string is an exact match with the given value.
     *
     * @param value
     *
     * @return boolean
     */
    exactly(value) {
        return this.value === value;
    };

    /**
     * Explode the string into an array.
     *
     * @param delimiter
     * @param limit
     *
     * @return Collection
     */
    explode(delimiter, limit = Number.MAX_SAFE_INTEGER) {
        return collect(explode(delimiter, this.value, limit));
    };

    /**
     * Split a string using a regular expression.
     *
     * @param pattern
     * @param limit
     * @param flags
     *
     * @return Collection
     */
    split(pattern, limit = -1, flags = 0) {
        let segments = this.value.split(new RegExp(pattern));

        return !(typeof segments === 'undefined' || segments.length < 1) ? collect(segments) : collect();
    };

    /**
     * Cap a string with a single instance of a given value
     *
     * @param cap
     *
     * @return Stringable
     */
    finish(cap) {
        return new Stringable(Str.finish(this.value, cap));
    };

    /**
     * Determine if a given string matches a given pattern
     *
     * @param  pattern
     *
     * @return boolean
     */
    is(pattern) {
        return Str.is(pattern, this.value);
    };

    /**
     * Determine if a given string is 7 bit ASCII
     *
     * @return boolean
     */
    isAscii() {
        return Str.isAscii(this.value);
    };

    /**
     * Determine if the given string is empty.
     *
     * @return boolean
     */
    isEmpty() {
        return this.value === '';
    };

    /**
     * Determine if the given string is empty.
     *
     * @return boolean
     */
    isNotEmpty() {
        return !this.isEmpty();
    };


    /**
     * Convert a string to kebab case.
     *
     * @return Stringable
     */
    kebab() {
        return new Stringable(Str.kebab(this.value));
    };

    /**
     * Return the length of the given string
     *
     * @param encoding
     *
     * @return int
     */
    length(encoding = null) {
        return Str.length(this.value, encoding);
    };

    /**
     * Limit the number of characters in a string.
     *
     * @param limit
     * @param end
     *
     * @return Stringable
     */
    limit(limit = 100, end = '...') {
        return new Stringable(Str.limit(this.value, limit, end));
    };

    /**
     * Convert the given string to lower-case
     *
     * @return Stringable
     */
    lower() {
        return new Stringable(Str.lower(this.value));
    };

    /**
     * Get the string matching the given pattern.
     *
     * @param pattern
     *
     * @return Stringable|null
     */
    match(pattern) {
        let matches = preg_match(pattern, this.value);

        if (!matches) {
            return new Stringable('');
        }

        return new Stringable(matches[1] || matches[0]);
    };

// @TODO matchAll
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
    parseCallback(fallback) {
        return Str.parseCallback(this.value, fallback);
    };

    /**
     * Get the plural form of an English word.
     *
     * @param count
     *
     * @return Stringable
     */
    plural(count = 2) {
        return new Stringable(Str.plural(this.value, count));
    };

    /**
     * Pluralize the last word of an English, studly caps case string.
     *
     * @param  count
     *
     * @return Stringable
     */
    pluralStudly(count = 2) {
        return new Stringable(Str.pluralStudly(this.value, count));
    };

    /**
     * Replace the given value in the given string.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    replace(search, replace) {
        return new Stringable(str_replace(search, replace, this.value));
    };

    /**
     * Replace a given value in the string sequentially with an array.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    replaceArray(search, replace = []) {
        return new Stringable(Str.replaceArray(search, replace, this.value));
    };

    /**
     * Replace the first occurrence of a given value in the string.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    replaceFirst(search, replace) {
        return new Stringable(Str.replaceFirst(search, replace, this.value));
    };

    /**
     * Replace the last occurrence of a given value in the string.
     *
     * @param search
     * @param replace
     *
     * @return Stringable
     */
    replaceLast(search, replace) {
        return new Stringable(Str.replaceLast(search, replace, this.value));
    };

// /** @TODO Add replaceMatches method
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
    start(prefix) {
        return new Stringable(Str.start(this.value, prefix));
    };

    /**
     * Convert the given string to upper-case.
     *
     * @return Stringable
     */
    upper() {
        return new Stringable(Str.upper(this.value));
    };

    /**
     * Convert the given string to title case.
     *
     * @return Stringable
     */
    title() {
        return new Stringable(Str.title(this.value));
    };

    /**
     * Get the singular form of an English word.
     *
     * @return Stringable
     */
    singular() {
        return new Stringable(Str.singular(this.value));
    };

    /**
     *
     * @param separator
     * @param language
     *
     * @returns Stringable
     */
    slug(separator = '-', language = 'en') {
        return new Stringable(Str.slug(this.value, separator, language));
    };

    /**
     * Convert a string to snake case.
     *
     * @param delimiter
     *
     * @return Stringable
     */
    snake(delimiter = '_') {
        return new Stringable(Str.snake(this.value, delimiter));
    };

    /**
     * Determine if a given string starts with a given substring.
     *
     * @param needles
     *
     * @return boolean
     */
    startsWith(needles) {
        return Str.startsWith(this.value, needles);
    };

    /**
     * Convert a value to studly caps case.
     *
     * @return Stringable
     */
    studly() {
        return new Stringable(Str.studly(this.value));
    };

    /**
     * Returns the portion of string specified by the start and length parameters.
     *
     * @param start
     * @param length
     *
     * @return Stringable
     */
    substr(start, length = null) {
        return new Stringable(Str.substr(this.value, start, length));
    };

    /**
     * Returns the number of substring occurrences.
     *
     * @param needle
     * @param offset
     * @param length
     *
     * @return int
     */
    substrCount(needle, offset = null, length = null) {
        return Str.substrCount(this.value, needle, offset, length);
    };

    /**
     * Trim the string of the given characters.
     *
     * @param characters
     *
     * @returns Stringable
     */
    trim(characters = null) {
        return new Stringable(trim(...[this.value, ...arguments]));
    };

    /**
     * Left trim the string of given characters.
     *
     * @param characters
     *
     * @return Stringable
     */
    ltrim(characters = null) {
        return new Stringable(ltrim(...[this.value, ...arguments]));
    };

    /**
     * Right trim the string of given characters.
     *
     * @param characters
     *
     * @return Stringable
     */
    rtrim(characters = null) {
        return new Stringable(rtrim(...[this.value, ...arguments]));
    };

    /**
     * Make a string's first character uppercase.
     *
     * @return Stringable
     */
    whenEmpty(callback) {
        if (this.isEmpty()) {
            let result = callback(this);

            return result === null || typeof result === 'undefined' ? this : result;
        }

        return this;
    };

    /**
     * Limit the number of words in a string.
     *
     * @param words
     * @param end
     *
     * @return Stringable
     */
    words(words = 100, end = '...') {
        return new Stringable(Str.words(this.value, words, end));
    };

    /**
     * Dump the string.
     *
     * @return this
     */
    dump() {
        console.log(this);

        return this;
    };

    /**
     * Dump the string then die.
     *
     * @return void
     */
    dd() {
        this.dump();

        if (typeof process !== 'undefined') {
            if (typeof process.exit !== 'undefined') {
                process.exit(1);
            }
        }
    };

    /**
     * Proxy dynamic properties properties onto methods.
     *
     * @param key
     *
     * @return mixed
     */
    get(key) {
        return this[key]();
    };

    /**
     * Stringable.dirname
     */
    /**
     * Used when returning as a string operation
     *
     * @returns string
     */
    toLocaleString() {
        return `${this.value}`;
    };

    /**
     * Used when returning as a string operation
     *
     * @returns string
     */
    toString() {
        return `${this.value}`;
    };

    /**
     * Used when JSON.stringify is called
     */
    toJSON() {
        return this.toString();
    };

    /**
     * Used when returning as a value operation
     *
     * @returns string
     */
    valueOf() {
        return `${this.value}`;
    };

}
