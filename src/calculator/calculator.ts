export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero');
    }
    return a / b;
  }

  isEven(number: number): boolean {
    return number % 2 === 0;
  }

  factorial(n: number): number {
    if (n < 0) throw new Error('Negative numbers not allowed');
    if (n === 0) return 1;
    return n * this.factorial(n - 1);
  }

  power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }
}