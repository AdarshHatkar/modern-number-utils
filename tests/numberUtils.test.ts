import { describe, it, expect } from 'vitest';
import {
    convertToInt,
    convertToTwoDecimalInt,
    randomNumberWithFixedLength,
} from '../src/numberUtils';

describe('Modern Number Utils Tests', () => {
    it('convertToInt converts string to integer', () => {
        const result = convertToInt('42');
        expect(result).toBe(42);
    });

    it('convertToTwoDecimalInt converts string to number with two decimal places', () => {
        const result = convertToTwoDecimalInt('42.123');
        expect(result).toBe(42.12);
    });

    it('randomNumberWithFixedLength returns a number with the specified length', () => {
        const length = 5;
        const result = randomNumberWithFixedLength(length);
        expect(result.toString().length).toBe(length);
    });

    it('convertToInt throws an error for invalid input', () => {
        expect(() => convertToInt('abc')).toThrowError('Invalid input: not a number');
    });

    it('convertToTwoDecimalInt throws an error for invalid input', () => {
        expect(() => convertToTwoDecimalInt('abc')).toThrowError('Invalid input: not a number');
    });

    it('randomNumberWithFixedLength throws an error for non-positive or non-integer length', () => {
        expect(() => randomNumberWithFixedLength(0)).toThrowError('Length must be a positive integer.');
        expect(() => randomNumberWithFixedLength(2.5)).toThrowError('Length must be a positive integer.');
    });
});
