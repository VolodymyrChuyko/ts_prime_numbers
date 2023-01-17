interface IPrimeNumber {
  isPrimeNumber: (n: number) => boolean;
  range: (start: number, end: number) => number[];
}

export class PrimeNumber implements IPrimeNumber {
  static singleDigit = [2, 3, 5, 7];

  range(start: number, end: number) {
    const primeNumbers: number[] = [];

    for (let i = start; i <= end; i++) {
      if (this.isPrimeNumber(i)) {
        primeNumbers.push(i);
      }
    }

    return primeNumbers;
  }

  isPrimeNumber(n: number) {

    if (this.isSingleDigit(n)) {
      return PrimeNumber.singleDigit.includes(n);
    }

    const lastDigit = Number(n.toString().slice(-1));

    if ([0, 2, 4, 5, 6, 8].includes(lastDigit)) {
      return false;
    }

    if (this.getSumOfDigits(n) % 3 === 0) {
      return false;
    }

    const num = Math.floor(Math.sqrt(n));

    for (let i = num; i >= 2; i--) {
      if (n % i === 0) {
        return false;
      }
    }

    return true;
  }

  private isSingleDigit(n: number) {
    return n < 10;
  }

  private getSumOfDigits(n: number) {
    const digits = `${n}`;
    let sumOfDigits = 0;

    for (let i = 0; i < digits.length; i++) {
      sumOfDigits += Number(digits[i]);
    }

    return sumOfDigits;
  }
}
