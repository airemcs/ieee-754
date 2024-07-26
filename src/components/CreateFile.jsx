import React from 'react';

export default function CreateFile({ calculationData, isEnabled }) {
  const createFile = () => {
    if (isEnabled) {
      const { operand1RequiredLength, operand2RequiredLength, operand1Exponent, operand2Exponent, result, normalizedResult, roundedResult } = calculationData;
      // Logic to create and download the file using the provided data
    }
  };

  return (
    <button onClick={createFile} disabled={!isEnabled} className="btn flex-1">
      Create File
    </button>
  );
}
