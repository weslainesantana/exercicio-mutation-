// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
export class Calculator {
  add(a: number, b: number): number {
    if (stryMutAct_9fa48("0")) {
      {}
    } else {
      stryCov_9fa48("0");
      return stryMutAct_9fa48("1") ? a - b : (stryCov_9fa48("1"), a + b);
    }
  }
  subtract(a: number, b: number): number {
    if (stryMutAct_9fa48("2")) {
      {}
    } else {
      stryCov_9fa48("2");
      return stryMutAct_9fa48("3") ? a + b : (stryCov_9fa48("3"), a - b);
    }
  }
  multiply(a: number, b: number): number {
    if (stryMutAct_9fa48("4")) {
      {}
    } else {
      stryCov_9fa48("4");
      return stryMutAct_9fa48("5") ? a / b : (stryCov_9fa48("5"), a * b);
    }
  }
  divide(a: number, b: number): number {
    if (stryMutAct_9fa48("6")) {
      {}
    } else {
      stryCov_9fa48("6");
      if (stryMutAct_9fa48("9") ? b !== 0 : stryMutAct_9fa48("8") ? false : stryMutAct_9fa48("7") ? true : (stryCov_9fa48("7", "8", "9"), b === 0)) {
        if (stryMutAct_9fa48("10")) {
          {}
        } else {
          stryCov_9fa48("10");
          throw new Error(stryMutAct_9fa48("11") ? "" : (stryCov_9fa48("11"), 'Division by zero'));
        }
      }
      return stryMutAct_9fa48("12") ? a * b : (stryCov_9fa48("12"), a / b);
    }
  }
  isEven(number: number): boolean {
    if (stryMutAct_9fa48("13")) {
      {}
    } else {
      stryCov_9fa48("13");
      return stryMutAct_9fa48("16") ? number % 2 !== 0 : stryMutAct_9fa48("15") ? false : stryMutAct_9fa48("14") ? true : (stryCov_9fa48("14", "15", "16"), (stryMutAct_9fa48("17") ? number * 2 : (stryCov_9fa48("17"), number % 2)) === 0);
    }
  }
  factorial(n: number): number {
    if (stryMutAct_9fa48("18")) {
      {}
    } else {
      stryCov_9fa48("18");
      if (stryMutAct_9fa48("22") ? n >= 0 : stryMutAct_9fa48("21") ? n <= 0 : stryMutAct_9fa48("20") ? false : stryMutAct_9fa48("19") ? true : (stryCov_9fa48("19", "20", "21", "22"), n < 0)) throw new Error(stryMutAct_9fa48("23") ? "" : (stryCov_9fa48("23"), 'Negative numbers not allowed'));
      if (stryMutAct_9fa48("26") ? n !== 0 : stryMutAct_9fa48("25") ? false : stryMutAct_9fa48("24") ? true : (stryCov_9fa48("24", "25", "26"), n === 0)) return 1;
      // ✅ CONDIÇÃO SIMPLIFICADA - remove a redundância que gerava mutantes
      return stryMutAct_9fa48("27") ? n / this.factorial(n - 1) : (stryCov_9fa48("27"), n * this.factorial(stryMutAct_9fa48("28") ? n + 1 : (stryCov_9fa48("28"), n - 1)));
    }
  }
  power(base: number, exponent: number): number {
    if (stryMutAct_9fa48("29")) {
      {}
    } else {
      stryCov_9fa48("29");
      return Math.pow(base, exponent);
    }
  }
}