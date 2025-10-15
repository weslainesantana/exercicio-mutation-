import { Calculator } from '../../src/calculator/calculator';

describe('Advanced Calculator Tests', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Edge cases', () => {
    it('should handle large numbers', () => {
      expect(calculator.add(Number.MAX_SAFE_INTEGER, 0)).toBe(
        Number.MAX_SAFE_INTEGER
      );
    });

    it('should handle decimal operations', () => {
      expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should handle multiple operations', () => {
      const result = calculator.add(
        calculator.multiply(2, 3),
        calculator.divide(10, 2)
      );
      expect(result).toBe(11);
    });
  });
});
