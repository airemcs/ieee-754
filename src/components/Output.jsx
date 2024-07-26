export default function Output({ operand1Normalized, operand1Exponent, operand2Normalized, operand2Exponent, numberOfDigits, roundMethod }) {

  const processOperands = (operand, digits) => {
    if (roundMethod === "GRS") {
      return applyGRS(operand, digits);
    } else if (roundMethod === "Rounding") {
      return applyRounding(operand, digits);
    }
    return operand;
  };

  function applyGRS(operand, nBits) {
    if (typeof operand!=='string') {
        operand = operand.toString();
    }
    nBits = 8
    let [integerPart, fractionalPart = ''] = operand.split('.');
    if (fractionalPart.length >= nBits) {
        let relevantFraction = fractionalPart.slice(0, nBits + 1);
        let decimalFraction = parseInt(relevantFraction, 2) / Math.pow(2, nBits + 1);
        let roundedDecimalFraction = Math.round(decimalFraction * Math.pow(2, nBits)) / Math.pow(2, nBits);
        let roundedFraction = (roundedDecimalFraction * Math.pow(2, nBits)).toString(2).padStart(nBits, '0');
        return integerPart + '.' + roundedFraction;
    } else {
        return integerPart + '.' + fractionalPart.padEnd(nBits, '0');
    }
}

//Temporary, this was for testing
function getCarry(a, b) {
  const aParts = a.split('.');
  const bParts = b.split('.');
  const aInt = parseInt(aParts[0], 2);
  const bInt = parseInt(bParts[0], 2);
  const aFrac = aParts[1];
  const bFrac = bParts[1];
  const maxLength = Math.max(aFrac.length, bFrac.length);
  const aFracPadded = aFrac.padEnd(maxLength, '0');
  const bFracPadded = bFrac.padEnd(maxLength, '0');
  let carry = '';
  let sum = 0;
  for (let i = maxLength - 1; i >= 0; i--) {
    sum = parseInt(aFracPadded[i], 2) + parseInt(bFracPadded[i], 2) + sum;
    carry = (sum > 1? '1' : '0') + carry;
    sum = sum > 1? 1 : 0;
  }
  sum = aInt + bInt + sum;
  carry = sum.toString(2) + '.' + carry;
  return carry;
}
function addBinary(a, b) {
  const aParts = a.split('.');
  const bParts = b.split('.');
  const aInt = parseInt(aParts[0], 2);
  const bInt = parseInt(bParts[0], 2);
  const aFrac = aParts[1];
  const bFrac = bParts[1];
  const maxLength = Math.max(aFrac.length, bFrac.length);
  const aFracPadded = aFrac.padEnd(maxLength, '0');
  const bFracPadded = bFrac.padEnd(maxLength, '0');
  let sum = 0;
  let result = '';
  for (let i = maxLength - 1; i >= 0; i--) {
    sum = parseInt(aFracPadded[i], 2) + parseInt(bFracPadded[i], 2) + sum;
    result = (sum % 2).toString() + result;
    sum = sum > 1? 1 : 0;
  }
  sum = aInt + bInt + sum;
  result = sum.toString(2) + '.' + result;
  return result;
}

  const applyRounding = (operand, significantDigits) => {
    if (operand === "0") return '0';
    let [integerPart, fractionalPart = ""] = operand.split('.');
    const requiredFractionalLength = significantDigits - integerPart.length;
    let paddedFractionalPart = fractionalPart.padEnd(requiredFractionalLength + 1, '0');
    let roundingDigit = paddedFractionalPart[requiredFractionalLength];
    let remainingDigits = paddedFractionalPart.slice(requiredFractionalLength + 1);
    let significantPart = paddedFractionalPart.slice(0, requiredFractionalLength);
    if (roundingDigit === '1' && (remainingDigits.includes('1') || parseInt(significantPart[requiredFractionalLength - 1]) % 2 !== 0)) {
      let carry = 1;
      significantPart = significantPart.split('').reverse().map(d => {
        if (carry === 0) return d;
        if (d === '0') {
          carry = 0;
          return '1';
        } else {
          return '0';
        }
      }).reverse().join('');
      if (carry === 1) {
        significantPart = '1' + significantPart;
      }
    }
    significantPart = significantPart.slice(0, requiredFractionalLength).padEnd(requiredFractionalLength, '0');
    return `${integerPart}.${significantPart}`;
  };
  const normalizeResult = (result, exponent) => {
    const parts = result.split('.');
    let integerPart = parts[0];
    let fractionalPart = parts[1];
    let newExponent = exponent;
    while (integerPart.length > 1 || integerPart[0] >= '2') {
      fractionalPart = integerPart.slice(-1) + fractionalPart;
      integerPart = integerPart.slice(0, -1);
      newExponent++;
    }
    while (integerPart === '0') {
      integerPart = fractionalPart.slice(0, 1);
      fractionalPart = fractionalPart.slice(1);
      newExponent--;
    }
  
    return {
      normalizedResult: integerPart + '.' + fractionalPart,
      normalizedExponent: newExponent,
    };
  };
  
  const Operand1RequiredLength = processOperands(operand1Normalized, numberOfDigits);
  const Operand2RequiredLength = processOperands(operand2Normalized, numberOfDigits);

  const result = Operand1RequiredLength && Operand2RequiredLength? addBinary(Operand1RequiredLength, Operand2RequiredLength) : "";


  return (
  <>
  <div className="flex justify-center lg:p-4 mt-2">
  <div className="card bg-base-100 w-full lg:outline lg:outline-1">
  <div className="card-body pt-4 lg:px-10 lg:pt-6">

  <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2">1. Initial Normalization</label>
  <label htmlFor="">Aligning Decimal Points</label>
  <div className="lg:flex justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-2">
  <div className="join flex-1">
        <input type="text" value={operand1Normalized || "X . X X"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand1Exponent ? `x 2^${operand1Exponent}` : "x 2^2"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>

      <div className="join flex-1">
        <input type="text" value={operand2Normalized || "Y . Y Y"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : "x 2^7"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
      
  </div>
  <label htmlFor="">Rounding to required length</label>
  <div className="lg:flex justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-2">
  <div className="join flex-1">
        <input type="text" value={Operand1RequiredLength || "X . X X"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand1Exponent ? `x 2^${operand1Exponent}` : "x 2^2"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>

      <div className="join flex-1">
        <input type="text" value={Operand2RequiredLength || "Y . Y Y"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : "x 2^7"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
  </div>
  <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2">2. Computation</label>
  
  <div className="lg:flex justify-center space-y-0 lg:space-y-0 mb-2 flex-col w-full">
      <div className="join flex-1 ml-5">
        <input type="text" value={Operand1RequiredLength || "X . X X"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand1Exponent ? `x 2^${operand1Exponent}` : "x 2^2"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    <div className="flex flex-1 rounded-lg flex-row gap-2.5 items-center">
      <div>+</div>
      <div className="w-full">
        <input type="text" value={Operand2RequiredLength || "Y . Y Y"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : "x 2^7"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    </div>
    <div className="flex-1 rounded-lg ml-5 flex ">
    <input type="text" id="" aria-label="" value={Operand1RequiredLength && Operand2RequiredLength? addBinary(Operand1RequiredLength, Operand2RequiredLength):"answer"} disabled
      className="rounded-lg lg:join-item w-3/4 text-lg rounded-l-lg lg:rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : "x 2^7"} disabled
      className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
  </div>
  </div>

  <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">3. IEEE-754/1985 Floating-Point Format</label>
  <div className="flex flex-row w-full mb-4 lg:mb-0">
    <div className="w-full mb-2 flex flex-col gap-2">
    <label htmlFor="">Normalized Answer</label>
    <div className="w-full">
        <input type="text" value={normalizeResult(result, operand2Exponent).normalizedResult|| "Y . Y Y"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input type="text" value={operand2Exponent ? `x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}` : "x 2^7"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
      <label htmlFor="">Rounded Answer</label>
      <div className="w-full">
        <input type="text" value={applyRounding(normalizeResult(result, operand2Exponent).normalizedResult, numberOfDigits) || "Y . Y Y"} disabled
        className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border borderfrom -gray-300 cursor-not-allowed"/>
        <input type="text" value={operand2Exponent ? `x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}` : "x 2^7"} disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  </>
  )
}