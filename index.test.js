/**
 * Test suite for the first unique character problem
 * 
 * Problem: Given a string s, find the first non-repeating character and return its index.
 * If no such character exists, return -1.
 */

const { firstUniqChar } = require('./index.js');

describe('firstUniqChar', () => {
  // Test cases from the README examples
  describe('Example test cases', () => {
    test('should return 0 for "leetcode"', () => {
      expect(firstUniqChar("leetcode")).toBe(0);
    });

    test('should return 2 for "loveleetcode"', () => {
      expect(firstUniqChar("loveleetcode")).toBe(2);
    });

    test('should return -1 for "aabb"', () => {
      expect(firstUniqChar("aabb")).toBe(-1);
    });
  });

  // Additional edge cases and comprehensive tests
  describe('Edge cases', () => {
    test('should return 0 for single character string', () => {
      expect(firstUniqChar("a")).toBe(0);
    });

    test('should return -1 for empty string', () => {
      expect(firstUniqChar("")).toBe(-1);
    });

    test('should return 0 for string with all unique characters', () => {
      expect(firstUniqChar("abc")).toBe(0);
    });

    test('should return -1 for string with all same characters', () => {
      expect(firstUniqChar("aaaa")).toBe(-1);
    });
  });

  describe('Complex scenarios', () => {
    test('should return correct index for mixed case scenarios', () => {
      expect(firstUniqChar("abccba")).toBe(-1);
    });

    test('should return 3 for "abacabad"', () => {
      expect(firstUniqChar("abacabad")).toBe(3);
    });

    test('should return 0 for "abcdef"', () => {
      expect(firstUniqChar("abcdef")).toBe(0);
    });

    test('should return 6 for "aabbccd"', () => {
      expect(firstUniqChar("aabbccd")).toBe(6);
    });
  });

  describe('Performance and constraints', () => {
    test('should handle maximum length string (105 characters)', () => {
      const longString = 'a'.repeat(104) + 'b';
      expect(firstUniqChar(longString)).toBe(104);
    });

    test('should handle string with only lowercase English letters', () => {
      expect(firstUniqChar("abcdefghijklmnopqrstuvwxyz")).toBe(0);
    });
  });

  describe('Boundary conditions', () => {
    test('should return -1 for string with exactly 2 characters that are the same', () => {
      expect(firstUniqChar("aa")).toBe(-1);
    });

    test('should return 0 for string with exactly 2 different characters', () => {
      expect(firstUniqChar("ab")).toBe(0);
    });

    test('should handle string where first character is unique', () => {
      expect(firstUniqChar("abcabc")).toBe(-1);
    });

    test('should handle string where last character is unique', () => {
      expect(firstUniqChar("aabbc")).toBe(4);
    });
  });
});
