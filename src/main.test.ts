/**
 * @author heyq
 * @create 2023/7/18
 * @path test
 * @project md-5.ts
 * @organization nizhou-studio
 */

import main from './main';

test('MD5 encoding of ""', () => {
	expect(main('')).toBe('D41D8CD98F00B204E9800998ECF8427E');
});

test('MD5 encoding of a', () => {
	expect(main('a')).toBe('0CC175B9C0F1B6A831C399E269772661');
});

test('MD5 encoding of jklmn', () => {
	expect(main('jklmn')).toBe('603F52D844017E83CA267751FEE5B61B');
});