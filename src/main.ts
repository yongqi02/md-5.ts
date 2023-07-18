/**
 * @author heyq
 * @create 2023/7/18
 * @path src
 * @project md-5.ts
 * @organization nizhou-studio
 */

function str_2_bin(str: string): string {
  let result = "";
  for (const char of str) {
    result += char.charCodeAt(0).toString(2);
  }
  return result;
}

function f(info: string) {

  const A = 0x67452301;
  const B = 0xEFCDAB89;
  const C = 0x98BADCFE;
  const D = 0x10325476;

}

module.exports = {
  str_2_bin
}