import React, { useState } from 'react';
import Output from './Output';
import CreateFile from './CreateFile';

export default function Input() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operand1Exponent, setOperand1Exponent] = useState('');
  const [operand2Exponent, setOperand2Exponent] = useState('');
  const [numberOfDigits, setNumberOfDigits] = useState('');
  const [roundMethod, setRoundMethod] = useState('');
  const [errors, setErrors] = useState({ operand1: false, operand2: false });
  const [showOutput, setShowOutput] = useState(false);
  const [normalizedValues, setNormalizedValues] = useState({
    operand1Normalized: '',
    operand1Exponent: '',
    operand2Normalized: '',
    operand2Exponent: ''
  });

  const processOperands = (operand, digits) => {
    if (roundMethod === "GRS") {
      return applyGRS(operand, digits);
    } else if (roundMethod === "Rounding") {
      return applyRounding(operand, digits);
    }
    return operand;
  };

  function applyGRS(operand, nBits) {
    if (typeof operand !== 'string') {
      operand = operand.toString();
    }
    nBits = 8
    let [integerPart, fractionalPart = ''] = operand.split('.');
    if (fractionalPart.length > nBits) {
      let relevantFraction = fractionalPart.slice(0, nBits + 1);
      let decimalFraction = parseInt(relevantFraction, 2) / Math.pow(2, nBits + 1);
      let roundedDecimalFraction = Math.round(decimalFraction * Math.pow(2, nBits)) / Math.pow(2, nBits);
      let roundedFraction = (roundedDecimalFraction * Math.pow(2, nBits)).toString(2).padStart(nBits, '0');
      return integerPart + '.' + roundedFraction;
    } else {
      return integerPart + '.' + fractionalPart.padEnd(nBits, '0');
    }
  }

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
      carry = (sum > 1 ? '1' : '0') + carry;
      sum = sum > 1 ? 1 : 0;
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
      sum = sum > 1 ? 1 : 0;
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
  
  const isCalculateButtonEnabled = () => {
    return operand1!== '' && operand2!== '' && numberOfDigits!== '' && roundMethod!== '';
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    handleRoundMethodClick(option);
    setSelectedOption(option); 
  };

  const handleNumberOfDigitsChange = (e) => {
    setNumberOfDigits(e.target.value);
  };
  
  const handleRoundMethodClick = (option) => {
    setRoundMethod(option);
    setIsOpen(false);
  };
  
  const handleCalculate = () => {
    const isOperand1Valid = /^[01.]+$/.test(operand1);
    const isOperand2Valid = /^[01.]+$/.test(operand2);
    const isOperand1ExponentValid = /^-?\d+$/.test(operand1Exponent);
    const isOperand2ExponentValid = /^-?\d+$/.test(operand2Exponent);
  
    if (isOperand1Valid && isOperand2Valid && isOperand1ExponentValid && isOperand2ExponentValid) {
      let { normalized: operand1Normalized, newExponent: operand1NewExponent } = initialNormalize(operand1, parseInt(operand1Exponent));
      let { normalized: operand2Normalized, newExponent: operand2NewExponent } = initialNormalize(operand2, parseInt(operand2Exponent));
      const maxExponent = Math.max(operand1NewExponent, operand2NewExponent);
      operand1Normalized = reNormalize(operand1Normalized, operand1NewExponent, maxExponent);
      operand1NewExponent = maxExponent;
      operand2Normalized = reNormalize(operand2Normalized, operand2NewExponent, maxExponent);
      operand2NewExponent = maxExponent; 
      setNormalizedValues({
        operand1Normalized,
        operand1Exponent: maxExponent,
        operand2Normalized,
        operand2Exponent: maxExponent
      });
      setShowOutput(true);
    } else {
      setShowOutput(false);
    }
  };

  const initialNormalize = (operand, exponent) => {
    let [intPart, fracPart = ''] = operand.split('.');
    if (intPart.length > 1 && intPart !== '0') {
      let leftMostOneIndex = intPart.indexOf('1');
      let newExponent = exponent + (intPart.length - leftMostOneIndex - 1);
      let normalized = intPart[leftMostOneIndex] + '.' + intPart.slice(leftMostOneIndex + 1) + fracPart;
      return { normalized, newExponent };
    }
    if (intPart === '0' && fracPart.length > 0) {
      let leftMostOneIndex = fracPart.indexOf('1');
      let newExponent = exponent - leftMostOneIndex - 1;
      let normalized = '1.' + fracPart.slice(leftMostOneIndex + 1);
      return { normalized, newExponent };
    }
    return { normalized: operand, newExponent: exponent };
  };

  const reNormalize = (normalized, currentExponent, targetExponent) => {
    const shift = targetExponent - currentExponent;
    let [intPart, fracPart = ''] = normalized.split('.');
  
    if (shift > 0) {
      const zeroPadding = '0'.repeat(shift-1);
      let combined = intPart + fracPart ; 
      combined = zeroPadding + combined; 
      combined = `0.${combined}`;
      return combined;
    } else if (shift < 0) {
      const actualShift = Math.abs(shift);
      let combined = intPart + fracPart ; 
      if (combined.length > actualShift) {   
        combined = combined.substr(0, combined.length - actualShift) + '.' + combined.substr(combined.length - actualShift);
      } else {
        combined = '0.' + '0'.repeat(actualShift - combined.length) + combined;
      }
      return combined;
    }
    return normalized;
  };

  

  return (
  <>
  <div className="flex justify-center lg:p-4 mt-2">
  <div className="card bg-base-100 w-full lg:outline lg:outline-1">
  <div className="card-body pt-4 pb-8 lg:pb-10 lg:px-10 lg:pt-6">

  <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:mb-4">

    <div className="w-full col-span-3 mb-4 lg:mb-0">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Operand 1</label>
      <div className="join w-full">
        <input type="text" placeholder="" value={operand1} onChange={(e) => setOperand1(e.target.value)}  
        className={`join-item w-full text-lg rounded-md py-1.5 px-3 ring-1 ring-inset ${errors.operand1 ? 'ring-red-500' : 'ring-gray-300'}`}/>
        <input type="text" id="" aria-label="" value="x 2 ^" disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input id="" name="" type="number" placeholder="" value={operand1Exponent}
          onChange={(e) => setOperand1Exponent(e.target.value)}
          className="join-item w-1/4 lg:w-1/4 text-lg pb-2 rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
      </div>
    </div>
    
    <div className="w-full col-span-3 mb-4 lg:mb-0">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Operand 2</label>
      <div className="join w-full">
        <input type="text" placeholder="" value={operand2} onChange={(e) => setOperand2(e.target.value)}  
        className={`join-item w-full text-lg rounded-md py-1.5 px-3 ring-1 ring-inset ${errors.operand2 ? 'ring-red-500' : 'ring-gray-300'}`} />
        <input type="text" id="" aria-label="" value="x 2 ^" disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
        <input id="" name="" type="number" placeholder="" value={operand2Exponent}
          onChange={(e) => setOperand2Exponent(e.target.value)}
          className="join-item w-1/4 lg:w-1/4 text-lg pb-2 rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
      </div>
    </div>

    <div className="w-full mb-2 lg:mb-0 col-span-3">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Number of Digits</label>
      <div className="join w-full">
      <input name="" type="number" placeholder="" value={numberOfDigits} onChange={handleNumberOfDigitsChange} 
       className="join-item w-full lg:w-full text-lg pb-2 rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
      </div>
    </div>

    <div className="w-full mb-2 lg:mb-0 col-span-3">

      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Round Method</label>
      <div className="join w-full relative mb-2 lg:mb-0">

      <div className="relative inline-block text-left w-full">

        <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={toggleDropdown}
          className="join-item pt-2.5 h-full inline-flex w-full justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
          {selectedOption || 'Select Method'}
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02l3.72 3.79 3.72-3.79a.75.75 0 111.08 1.04l-4.25 4.33a.75.75 0 01-1.08 0l-4.25-4.33a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        {isOpen && (
          <div role="menu" aria-orientation="vertical" aria-labelledby="menu-button"
            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1" role="none">
              <a href="#" role="menuitem" onClick={() => handleOptionClick('GRS')}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">GRS</a>
              <a href="#" role="menuitem" onClick={() => handleOptionClick('Rounding')}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">Rounding</a>
            </div>
          </div>
        )}

      </div>

    </div>

  </div>
  </div>

    <div className="flex justify-center space-x-4">
      <button onClick={handleCalculate} disabled={!isCalculateButtonEnabled()} className="btn flex-1">Calculate</button>
      <CreateFile isDisabled={!isCalculateButtonEnabled()}
      operand1={operand1}
      operand2={operand2}
      operand1ExponentO={operand1Exponent}
      operand2ExponentO={operand2Exponent}
      operand1Normalized={normalizedValues.operand1Normalized} 
      operand1Exponent={normalizedValues.operand1Exponent}
      operand2Normalized={normalizedValues.operand2Normalized} 
      operand2Exponent={normalizedValues.operand2Exponent}
      numberOfDigits={numberOfDigits}
      roundMethod={roundMethod}
      processOperands={processOperands}
      applyGRS={applyGRS}
      getCarry={getCarry}
      addBinary={addBinary}
      applyRounding={applyRounding}
      normalizeResult={normalizeResult}
      />
    </div>

  </div>
  </div>
  </div>

  {showOutput && (
          <Output operand1={operand1}
          operand2={operand2}
          operand1ExponentO={operand1Exponent}
          operand2ExponentO={operand2Exponent}
          operand1Normalized={normalizedValues.operand1Normalized} 
          operand1Exponent={normalizedValues.operand1Exponent}
          operand2Normalized={normalizedValues.operand2Normalized} 
          operand2Exponent={normalizedValues.operand2Exponent}
          numberOfDigits={numberOfDigits}
          roundMethod={roundMethod}
          processOperands={processOperands}
          applyGRS={applyGRS}
          getCarry={getCarry}
          addBinary={addBinary}
          applyRounding={applyRounding}
          normalizeResult={normalizeResult} />
        )}

  </>
  )
}