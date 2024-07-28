import React from 'react';

export default function CreateFile({ operand1, operand2, operand1ExponentO, operand2ExponentO, operand1Normalized, operand1Exponent, operand2Normalized, operand2Exponent, numberOfDigits, roundMethod, processOperands, applyGRS, getCarry, addBinary, applyRounding, normalizeResult, isDisabled }) {
  const createFile = () => {
    const content = `Operand 1 Details:
  Original Operand 1: ${operand1}
  Original Operand 1 Exponent: ${operand1ExponentO}
  Operand 1 Normalized: ${operand1Normalized}
  Operand 1 Exponent: ${operand1Exponent}

Operand 2 Details:
  Original Operand 2: ${operand2}
  Original Operand 2 Exponent: ${operand2ExponentO}
  Operand 2 Normalized: ${operand2Normalized}
  Operand 2 Exponent: ${operand2Exponent}

Additional Details:
  Number of Digits: ${numberOfDigits}
  Rounding Method: ${roundMethod}

Processes:
  Operand1 Required Length: ${processOperands(operand1Normalized, numberOfDigits)}
  Operand2 Required Length: ${processOperands(operand2Normalized, numberOfDigits)}
  Add Binary: ${addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits))}
  Apply Rounding: ${applyRounding(normalizeResult(addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits)), operand2Exponent).normalizedResult, numberOfDigits)}
  Normalize Result: ${normalizeResult(addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits)), operand2Exponent).normalizedResult}
`;
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'output.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
  <>    
    <button onClick={createFile} className="btn flex-1" disabled={isDisabled}>
      Create File
    </button>
  </>
  );
}
