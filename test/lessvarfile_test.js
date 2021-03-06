'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.lessvarfile = {
	setUp: function (done) {
		// setup here if necessary
		done();
	},
	default_options: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/variables--default.less');
		var expected = grunt.file.read('test/expected/default_options.less');
		test.equal(actual, expected, 'The file "tmp/variables--default.less" has been created or updated.');

		test.done();
	},
	custom_options: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/variables--custom.less');
		var expected = grunt.file.read('test/expected/custom_options.less');
		test.equal(actual, expected, 'The file "tmp/variables--custom.less" (This includes no optional component) has been created or updated.');

		test.done();
	},
	custom_options_2: function (test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/variables--custom-2.less');
		var expected = grunt.file.read('test/expected/custom_options_2.less');
		test.equal(actual, expected, 'The file "tmp/variables--custom-2.less" (This includes only one optional component) has been created or updated.');

		test.done();
	},
};
