import React from 'react';

export default function CreateFile({ operand1, operand2, operand1ExponentO, operand2ExponentO, operand1Normalized, operand1Exponent, operand2Normalized, operand2Exponent, numberOfDigits, roundMethod, processOperands, applyGRS, getCarry, addBinary, applyRounding, normalizeResult, isDisabled }) {
  const createFile = () => {

    
    const op1Req = processOperands(operand1Normalized, numberOfDigits)
    const op2Req = processOperands(operand2Normalized, numberOfDigits)
    const result = addBinary(op1Req, op2Req)
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
  Operand1 Required Length: ${op1Req} + x 2^${operand2Exponent}
  Operand2 Required Length: ${op2Req} + x 2^${operand2Exponent}

Computation:
    Operand1 Required Length: ${op1Req} + x 2^${operand2Exponent}
  + Operand2 Required Length: ${op2Req} + x 2^${operand2Exponent}
  -----------------------------------------------                       
                              ${addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits))} + x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}
  
Answer:
  Normalize Result: ${normalizeResult(addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits)), operand2Exponent).normalizedResult} + x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}
  Apply Rounding: ${applyRounding(normalizeResult(addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits)), operand2Exponent).normalizedResult, numberOfDigits)} + x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}
  Final Answer: ${applyRounding(normalizeResult(addBinary(processOperands(operand1Normalized, numberOfDigits), processOperands(operand2Normalized, numberOfDigits)), operand2Exponent).normalizedResult, numberOfDigits)} + x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}

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
