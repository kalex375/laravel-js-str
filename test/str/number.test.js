
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should works with number as well', () => {
		expect(Str.after(5555, '5')).to.eql('555');

		expect(Str.of(123456).after('4').toString()).to.eql('56');

		expect(Str.of(3333).toString()).to.eql('3333');
	})
};
