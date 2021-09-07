import type Collection from "collect.js"

declare module 'laravel-js-str' {
    //export function collect<T>(collection?: T[] | Object): Collection<T>;
    //export default function collect<T>(collection?: T[] | Object): Collection<T>;
    class Stringable {
        constructor(value?: any);

        /**
         * Return the remainder of a string after the first occurrence of a given value
         */
        after(search?): Stringable

        /**
         * Returns the remainder of a string after the last occurrence of a given value
         */
        afterLast(subject, search?: string): Stringable

        /**
         * Append the given values to the string.
         * @return Stringable
         */
        append(...values): Stringable

        /**
         * Transliterate a UTF-8 value to ASCII.
         */
        ascii(language?: string): Stringable

        /**
         * Get the portion of a string before the first occurrence of a given value
         *
         */
        before(search?: string): Stringable

        /**
         * Get the portion of a string before the last occurrence of a given value
         */
        beforeLast(search?: string): Stringable

        /**
         * Get the portion of a string between two given values
         */
        between(at?: string, to?: string): Stringable

        /**
         * Convert a value to camel case.
         */
        camel(): Stringable

        /**
         * Determine if a given string contains a given substring.
         * @return boolean
         */
        contains(needles?: Array<any> | string): boolean

        /**
         * Determine if a given string contains all array values
         */
        containsAll(needles?: Array<any>): boolean

        /**
         * Determine if a given string ends with a given substring
         */
        endsWith(needles?: Array<any> | string): boolean


        /**
         * Determine if the string is an exact match with the given value.
         */
        exactly(value): boolean

        /**
         * Explode the string into an array.
         */
        explode(delimiter, limit: number): typeof Collection

        /**
         * Split a string using a regular expression.
         */
        split(pattern, limit?: number, flags?: number): typeof Collection;

        /**
         * Cap a string with a single instance of a given value
         */
        finish(cap): Stringable

        /**
         * Determine if a given string matches a given pattern
         */
        is(pattern): boolean

        /**
         * Determine if a given string is 7 bit ASCII
         */
        isAscii(): boolean

        /**
         * Determine if the given string is empty.
         */
        isEmpty(): boolean

        /**
         * Determine if the given string is empty.
         */
        isNotEmpty(): boolean


        /**
         * Convert a string to kebab case.
         */
        kebab(): Stringable

        /**
         * Return the length of the given string
         */
        length(encoding?): number

        /**
         * Limit the number of characters in a string.
         *
         * @return Stringable
         */
        limit(limit?: number, end?: string): Stringable

        /**
         * Convert the given string to lower-case
         */
        lower(): Stringable

        /**
         * Get the string matching the given pattern.
         * @return Stringable|null
         */
        match(pattern): Stringable | null;

        /**
         * Parse a Class@method style callback into class and method
         */
        parseCallback(fallback): Array<string>

        /**
         * Get the plural form of an English word.
         */
        plural(count: number): Stringable

        /**
         * Pluralize the last word of an English, studly caps case string.
         */
        pluralStudly(count: number): Stringable

        /**
         * Replace the given value in the given string.
         *
         * @return Stringable
         */
        replace(search, replace): Stringable

        /**
         * Replace a given value in the string sequentially with an array.
         * @return Stringable
         */
        replaceArray(search, replace: Array<string>): Stringable

        /**
         * Replace the first occurrence of a given value in the string.
         */
        replaceFirst(search, replace): Stringable

        /**
         * Replace the last occurrence of a given value in the string.
         */
        replaceLast(search, replace): Stringable

        /**
         * Begin a string with a single instance of a given value
         *
         */
        start(prefix): Stringable

        /**
         * Convert the given string to upper-case.
         */
        upper(): Stringable

        /**
         * Convert the given string to title case.
         */
        title(): Stringable

        /**
         * Get the singular form of an English word.
         */
        singular(): Stringable

        /**
         *
         */
        slug(separator?, language?): Stringable

        /**
         * Convert a string to snake case.
         */
        snake(delimiter?): Stringable

        /**
         * Determine if a given string starts with a given substring.
         */
        startsWith(needles): Stringable

        /**
         * Convert a value to studly caps case.*
         */
        studly(): Stringable

        /**
         * Returns the portion of string specified by the start and length parameters.
         */
        substr(start, length?): Stringable

        /**
         * Returns the number of substring occurrences.
         *
         * @param needle
         * @param offset
         * @param length
         *
         * @return int
         */
        substrCount(needle, offset?, length?): number;

        /**
         * Trim the string of the given characters.
         *
         */
        trim(characters?): Stringable;

        /**
         * Left trim the string of given characters.
         */
        ltrim(characters?): Stringable


        /**
         * Right trim the string of given characters.
         */
        rtrim(characters?): Stringable

        /**
         * Make a string's first character uppercase.
         */
        whenEmpty(callback: Function): Stringable

        /**
         * Limit the number of words in a string.
         */
        words(words?, end?): Stringable

        /**
         * Dump the string.
         */
        dump(): this

        /**
         * Dump the string then die.
         */
        dd(): void

        /**
         * Proxy dynamic properties properties onto methods.*
         */
        get(key): any

        /**
         * Used when returning as a string operation
         */
        toLocaleString(): string

        /**
         * Used when returning as a string operation
         *
         * @returns string
         */
        toString(): string

        /**
         * Used when JSON.stringify is called
         */
        toJSON()

        /**
         * Used when returning as a value operation
         *
         */
        valueOf()
    }

    export class Str {
        //constructor(collection?: Item[] | Object);

        static of(str): Stringable


    }
}
