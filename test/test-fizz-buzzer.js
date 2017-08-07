const should = require('chai').should();

const fizzBuzz = require('../fizzBuzzer')

describe('fizzBuzz', function() {
	it('should input words in place of numbers based of divisabilty', function () {

		const normalCases = [
			[3, 'fizz'],
			[5, 'buzz'],
			[15,'fizz-buzz'],
			[1, 1]
		]

		normalCases.forEach(function(input) {
			// invoke our function with the number
			const result = fizzBuzz(input[0]);
			// check if it meets our expected value
			result.should.equal(input[1]);
		})
	})

	it('should throw an error when NaN', function() {

		const failCases = ['text', true, {}, [], function() {}]

		failCases.forEach(function(input) {
			(function() {
				fizzBuzz(input);
			}).should.throw(Error);
		})
	})
})