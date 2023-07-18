/**
 * @author heyq
 * @create 2023/7/18
 * @path test
 * @project md-5.ts
 * @organization nizhou-studio
 */

const main = require('../src/main');

test('Convert string \'abc\' to binary code', () => {
	expect(main.str_2_bin('abc')).toBe('110000111000101100011');
});