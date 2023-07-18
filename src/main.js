'use strict';
/**
 * @author heyq
 * @create 2023/7/18
 * @path src
 * @project md-5.ts
 * @organization nizhou-studio
 */
Object.defineProperty(exports, '__esModule', { value: true });
function f(info) {
	/*
  字符串转二进制模块
   */
	var bin = [];
	for (var i = 0; i < info.length * 8; i += 8) {
		bin[i >> 5] |= (info.charCodeAt(i / 8) & 255) << (i % 32);
	}
	/*
  填充字符串模块
   */
	bin[info.length * 8 >> 5] |= 0x80 << (info.length * 8 % 32);
	bin[(((info.length * 8 + 64) >>> 9) << 4) + 14] = info.length * 8;
	var a = 1732584193;
	var b = -271733879;
	var c = -1732584194;
	var d = 271733878;
	/*
  编码模块
   */
	for (var i = 0; i < bin.length; i += 16) {
		var a0 = a;
		var b0 = b;
		var c0 = c;
		var d0 = d;
		a = ff(a, b, c, d, bin[i], 7, -680876936);
		d = ff(d, a, b, c, bin[i + 1], 12, -389564586);
		c = ff(c, d, a, b, bin[i + 2], 17, 606105819);
		b = ff(b, c, d, a, bin[i + 3], 22, -1044525330);
		a = ff(a, b, c, d, bin[i + 4], 7, -176418897);
		d = ff(d, a, b, c, bin[i + 5], 12, 1200080426);
		c = ff(c, d, a, b, bin[i + 6], 17, -1473231341);
		b = ff(b, c, d, a, bin[i + 7], 22, -45705983);
		a = ff(a, b, c, d, bin[i + 8], 7, 1770035416);
		d = ff(d, a, b, c, bin[i + 9], 12, -1958414417);
		c = ff(c, d, a, b, bin[i + 10], 17, -42063);
		b = ff(b, c, d, a, bin[i + 11], 22, -1990404162);
		a = ff(a, b, c, d, bin[i + 12], 7, 1804603682);
		d = ff(d, a, b, c, bin[i + 13], 12, -40341101);
		c = ff(c, d, a, b, bin[i + 14], 17, -1502002290);
		b = ff(b, c, d, a, bin[i + 15], 22, 1236535329);
		a = gg(a, b, c, d, bin[i + 1], 5, -165796510);
		d = gg(d, a, b, c, bin[i + 6], 9, -1069501632);
		c = gg(c, d, a, b, bin[i + 11], 14, 643717713);
		b = gg(b, c, d, a, bin[i], 20, -373897302);
		a = gg(a, b, c, d, bin[i + 5], 5, -701558691);
		d = gg(d, a, b, c, bin[i + 10], 9, 38016083);
		c = gg(c, d, a, b, bin[i + 15], 14, -660478335);
		b = gg(b, c, d, a, bin[i + 4], 20, -405537848);
		a = gg(a, b, c, d, bin[i + 9], 5, 568446438);
		d = gg(d, a, b, c, bin[i + 14], 9, -1019803690);
		c = gg(c, d, a, b, bin[i + 3], 14, -187363961);
		b = gg(b, c, d, a, bin[i + 8], 20, 1163531501);
		a = gg(a, b, c, d, bin[i + 13], 5, -1444681467);
		d = gg(d, a, b, c, bin[i + 2], 9, -51403784);
		c = gg(c, d, a, b, bin[i + 7], 14, 1735328473);
		b = gg(b, c, d, a, bin[i + 12], 20, -1926607734);
		a = hh(a, b, c, d, bin[i + 5], 4, -378558);
		d = hh(d, a, b, c, bin[i + 8], 11, -2022574463);
		c = hh(c, d, a, b, bin[i + 11], 16, 1839030562);
		b = hh(b, c, d, a, bin[i + 14], 23, -35309556);
		a = hh(a, b, c, d, bin[i + 1], 4, -1530992060);
		d = hh(d, a, b, c, bin[i + 4], 11, 1272893353);
		c = hh(c, d, a, b, bin[i + 7], 16, -155497632);
		b = hh(b, c, d, a, bin[i + 10], 23, -1094730640);
		a = hh(a, b, c, d, bin[i + 13], 4, 681279174);
		d = hh(d, a, b, c, bin[i], 11, -358537222);
		c = hh(c, d, a, b, bin[i + 3], 16, -722521979);
		b = hh(b, c, d, a, bin[i + 6], 23, 76029189);
		a = hh(a, b, c, d, bin[i + 9], 4, -640364487);
		d = hh(d, a, b, c, bin[i + 12], 11, -421815835);
		c = hh(c, d, a, b, bin[i + 15], 16, 530742520);
		b = hh(b, c, d, a, bin[i + 2], 23, -995338651);
		a = ii(a, b, c, d, bin[i], 6, -198630844);
		d = ii(d, a, b, c, bin[i + 7], 10, 1126891415);
		c = ii(c, d, a, b, bin[i + 14], 15, -1416354905);
		b = ii(b, c, d, a, bin[i + 5], 21, -57434055);
		a = ii(a, b, c, d, bin[i + 12], 6, 1700485571);
		d = ii(d, a, b, c, bin[i + 3], 10, -1894986606);
		c = ii(c, d, a, b, bin[i + 10], 15, -1051523);
		b = ii(b, c, d, a, bin[i + 1], 21, -2054922799);
		a = ii(a, b, c, d, bin[i + 8], 6, 1873313359);
		d = ii(d, a, b, c, bin[i + 15], 10, -30611744);
		c = ii(c, d, a, b, bin[i + 6], 15, -1560198380);
		b = ii(b, c, d, a, bin[i + 13], 21, 1309151649);
		a = ii(a, b, c, d, bin[i + 4], 6, -145523070);
		d = ii(d, a, b, c, bin[i + 11], 10, -1120210379);
		c = ii(c, d, a, b, bin[i + 2], 15, 718787259);
		b = ii(b, c, d, a, bin[i + 9], 21, -343485551);
		a = add(a, a0);
		b = add(b, b0);
		c = add(c, c0);
		d = add(d, d0);
	}
	var result = [a, b, c, d];
	/*
  编码结果转16进制模块
   */
	var hex_tab = '0123456789ABCDEF';
	var str = '';
	for (var i = 0; i < result.length * 4; i++) {
		str += hex_tab.charAt((result[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
            hex_tab.charAt((result[i >> 2] >> ((i % 4) * 8)) & 0xF);
	}
	return str;
	function add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}
	function rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}
	function ff(a, b, c, d, x, s, t) {
		return add(rol(add(add(a, (b & c) | ((~b) & d)), add(x, t)), s), b);
	}
	function gg(a, b, c, d, x, s, t) {
		return add(rol(add(add(a, (b & d) | (c & (~d))), add(x, t)), s), b);
	}
	function hh(a, b, c, d, x, s, t) {
		return add(rol(add(add(a, b ^ c ^ d), add(x, t)), s), b);
	}
	function ii(a, b, c, d, x, s, t) {
		return add(rol(add(add(a, c ^ (b | (~d))), add(x, t)), s), b);
	}
}
exports.default = f;
