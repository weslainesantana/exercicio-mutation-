// @ts-nocheck
import { Calculator } from './calculator';
import { beforeEach, describe, it, expect } from '@jest/globals';
// Ou se estiver usando Jasmine:
// import { beforeEach, describe, it, expect } from 'jasmine';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    it('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    it('should add negative numbers correctly', () => {
      expect(calculator.add(-1, -1)).toBe(-2);
    });

    it('should add zero correctly', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    it('should subtract numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(calculator.subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply numbers correctly', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    it('should multiply by zero correctly', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    it('should multiply negative numbers correctly', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide', () => {
    it('should divide numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });

    it('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Division by zero');
    });
  });

  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(calculator.isEven(4)).toBe(true);
      expect(calculator.isEven(0)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(calculator.isEven(3)).toBe(false);
      expect(calculator.isEven(7)).toBe(false);
    });
  });

  describe('factorial', () => {
    it('should calculate factorial of 0', () => {
      expect(calculator.factorial(0)).toBe(1);
    });

    it('should calculate factorial of 1', () => {
      expect(calculator.factorial(1)).toBe(1);
    });

    it('should calculate factorial of 2', () => {
      expect(calculator.factorial(2)).toBe(2);
    });

    it('should calculate factorial of 3', () => {
      expect(calculator.factorial(3)).toBe(6);
    });

    it('should calculate factorial of positive numbers', () => {
      expect(calculator.factorial(5)).toBe(120);
    });

    it('should throw error for negative numbers', () => {
      expect(() => calculator.factorial(-1)).toThrow('Negative numbers not allowed');
    });
  });

  describe('power', () => {
    it('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
    });

    it('should handle power of 0', () => {
      expect(calculator.power(5, 0)).toBe(1);
    });

    it('should handle negative exponents', () => {
      expect(calculator.power(2, -1)).toBe(0.5);
    });
  });
});