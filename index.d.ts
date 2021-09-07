import type Collection from "collect.js"

declare module 'laravel-js-str' {

    export class Stringable {
        constructor(value?: any);

        /**
         * Return the remainder of a string after the first occurrence of a given value
         */
        public after(search?): Stringable

        /**
         * Returns the remainder of a string after the last occurrence of a given value
         */
        public afterLast(subject, search?: string): Stringable

        /**
         * Append the given values to the string.
         * @return Stringable
         */
        public append(...values): Stringable

        /**
         * Transliterate a UTF-8 value to ASCII.
         */
        public ascii(language?: string): Stringable

        /**
         * Get the portion of a string before the first occurrence of a given value
         *
         */
        public before(search?: string): Stringable

        /**
         * Get the portion of a string before the last occurrence of a given value
         */
        public beforeLast(search?: string): Stringable

        /**
         * Get the portion of a string between two given values
         */
        public between(at?: string, to?: string): Stringable

        /**
         * Convert a value to camel case.
         */
        public camel(): Stringable

        /**
         * Determine if a given string contains a given substring.
         * @return boolean
         */
        public contains(needles?: Array<any> | string): boolean

        /**
         * Determine if a given string contains all array values
         */
        public containsAll(needles?: Array<any>): boolean

        /**
         * Determine if a given string ends with a given substring
         */
        public endsWith(needles?: Array<any> | string): boolean


        /**
         * Determine if the string is an exact match with the given value.
         */
        public exactly(value): boolean

        /**
         * Explode the string into an array.
         */
        public explode(delimiter, limit: number): typeof Collection

        /**
         * Split a string using a regular expression.
         */
        public split(pattern, limit?: number, flags?: number): typeof Collection;

        /**
         * Cap a string with a single instance of a given value
         */
        public finish(cap): Stringable

        /**
         * Determine if a given string matches a given pattern
         */
        public is(pattern): boolean

        /**
         * Determine if a given string is 7 bit ASCII
         */
        public isAscii(): boolean

        /**
         * Determine if the given string is empty.
         */
        public isEmpty(): boolean

        /**
         * Determine if the given string is empty.
         */
        public isNotEmpty(): boolean

        /**
         * Convert a string to kebab case.
         */
        public kebab(): Stringable

        /**
         * Return the length of the given string
         */
        public length(encoding?): number

        /**
         * Limit the number of characters in a string.
         *
         * @return Stringable
         */
        public limit(limit?: number, end?: string): Stringable

        /**
         * Convert the given string to lower-case
         */
        public lower(): Stringable

        /**
         * Get the string matching the given pattern.
         * @return Stringable|null
         */
        public match(pattern): Stringable | null;

        /**
         * Parse a Class@method style callback into class and method
         */
        public parseCallback(fallback): Array<string>

        /**
         * Get the plural form of an English word.
         */
        public plural(count: number): Stringable

        /**
         * Pluralize the last word of an English, studly caps case string.
         */
        public pluralStudly(count: number): Stringable

        /**
         * Replace the given value in the given string.
         *
         * @return Stringable
         */
        public replace(search, replace): Stringable

        /**
         * Replace a given value in the string sequentially with an array.
         * @return Stringable
         */
        public replaceArray(search, replace: Array<string>): Stringable

        /**
         * Replace the first occurrence of a given value in the string.
         */
        public replaceFirst(search, replace): Stringable

        /**
         * Replace the last occurrence of a given value in the string.
         */
        public replaceLast(search, replace): Stringable

        /**
         * Begin a string with a single instance of a given value
         *
         */
        public start(prefix): Stringable

        /**
         * Convert the given string to upper-case.
         */
        public upper(): Stringable

        /**
         * Convert the given string to title case.
         */
        public title(): Stringable

        /**
         * Get the singular form of an English word.
         */
        public singular(): Stringable

        /**
         *
         */
        public slug(separator?, language?): Stringable

        /**
         * Convert a string to snake case.
         */
        public snake(delimiter?): Stringable

        /**
         * Determine if a given string starts with a given substring.
         */
        public startsWith(needles): Stringable

        /**
         * Convert a value to studly caps case.*
         */
        public studly(): Stringable

        /**
         * Returns the portion of string specified by the start and length parameters.
         */
        public substr(start, length?): Stringable

        /**
         * Returns the number of substring occurrences.
         *
         * @param needle
         * @param offset
         * @param length
         *
         * @return int
         */
        public substrCount(needle, offset?, length?): number;

        /**
         * Trim the string of the given characters.
         *
         */
        public trim(characters?): Stringable;

        /**
         * Left trim the string of given characters.
         */
        public ltrim(characters?): Stringable


        /**
         * Right trim the string of given characters.
         */
        public rtrim(characters?): Stringable

        /**
         * Make a string's first character uppercase.
         */
        public whenEmpty(callback: Function): Stringable

        /**
         * Limit the number of words in a string.
         */
        public words(words?, end?): Stringable

        /**
         * Dump the string.
         */
        public dump(): this

        /**
         * Dump the string then die.
         */
        public dd(): void

        /**
         * Proxy dynamic properties properties onto methods.*
         */
        public get(key): any

        /**
         * Used when returning as a string operation
         */
        public toLocaleString(): string

        /**
         * Used when returning as a string operation
         *
         * @returns string
         */
        public toString(): string

        /**
         * Used when JSON.stringify is called
         */
        public toJSON()

        /**
         * Used when returning as a value operation
         *
         */
        public valueOf()
    }

    export default class Str {

        static of(str): Stringable

        /**
         * Return the remainder of a string after the first occurrence of a given value
         *
         */
        static after(subject, search?: string): string

        /**
         * Returns the remainder of a string after the last occurrence of a given value
         *
         */
        static afterLast(subject, search?: string): string

        /**
         * Transliterate a UTF-8 value to ASCII.
         *
         */
        static ascii(value?: string, language?: string): string

        /**
         * Get the portion of a string before the first occurrence of a given value
         *
         */
        static before(subject, search?: string): string

        /**
         * Get the portion of a string before the last occurrence of a given value
         *
         */
        static beforeLast(subject, search?: string): string

        /**
         * Get the portion of a string between two given values
         *
         */
        static between(subject, at?: string, to?: string): string

        /**
         * Convert a value to camel case.
         *
         */
        static camel(value?: string): string

        /**
         * Determine if a given string contains a given substring.
         *
         */
        static contains(haystack, needles: string | Array<string>): boolean

        /**
         * Determine if a given string contains all array values
         *
         */
        static containsAll(haystack, needles?: Array<string>): boolean

        /**
         * Determine if a given string ends with a given substring
         *
         */
        static endsWith(haystack, needles: string | Array<string>): boolean

        /**
         * Cap a string with a single instance of a given value if it doesnt already end with it
         *
         */
        static finish(value, cap): string

        /**
         * Determine if a given string matches a given pattern
         *
         */
        static is(pattern, value): boolean

        /**
         * Determine if a given string is 7 bit ASCII
         *
         */
        static isAscii(value): boolean

        /**
         * Determine if a given string is valid UUID.
         *
         */
        static isUuid(value): boolean

        /**
         * Convert a string to kebab case.
         *
         */
        static kebab(value): string

        /**
         * Convert a string to snake case.
         *
         */
        static snake(value, delimiter?: string): string

        /**
         * Return the length of the given string
         *
         */
        static length(value?: string, encoding?: string): number


        /**
         * Limit the number of characters in a string
         *
         */
        static limit(value?: string, limit ?: number, end?: string): string

        /**
         * Convert the given string to lower-case.
         */
        static lower(value?: string): string

        /**
         * Limit the number of words in a string.
         *
         */
        static words(value?: string, words ?: number, end ?: string): string

        /**
         * Parse a Class[@]method style callback into class and method.
         *
         */
        static parseCallback(callback, fallback): Array<string>

        /**
         * Get the plural form of an english word
         *
         */
        static plural(value, count?: number): string

        /**
         * Pluralize the last word of an English, studly caps case string.
         *
         */
        static pluralStudly(value, count: number): string

        /**
         * Generate a more truly "random" alpha-numeric string.
         *
         */
        static random(length ?: number): string

        /**
         * Replace a given value in the string sequentially with an array.
         *
         */
        static replaceArray(search, replace: Array<string>, subject): string

        /**
         * Replace the first occurrence of a given value in the string.
         *
         */
        static replaceFirst(search, replace, subject): string

        /**
         * Replace the last occurrence of a given value in the string
         */
        static replaceLast(search, replace, subject): string

        /**
         * Begin a string with a single instance of a given value.
         */
        static start(value, prefix): string

        /**
         * Convert a value to studly caps case
         */
        static studly(value): string

        /**
         * Convert the given string to upper-case
         *
         */
        static upper(value): string

        /**
         * Convert the given string to title case.
         *
         */
        static title(value): string

        /**
         * Get the singular form of an English word.
         *
         */
        static singular(value): string

        /**
         * Generate a URL friendly "slug" from a given string.
         */
        static slug(title, separator?: string, language?: string): string

        /**
         * Determine if a given string starts with a given substring
         */
        static startsWith(haystack, needles?: string | Array<string>): boolean

        /**
         * Returns the portion of string specified by the start and length parameters
         */
        static substr(string, start, length ?): string

        /**
         * Returns the number of substring occurrences
         */
        static substrCount(haystack, needle, offset, length?): number

        /**
         * Make a strings first character upper case.
         */
        static ucfirst(value?: string): string


        /**
         * Generate a UUID (version 4).
         */
        static uuid(): string
    }
}
