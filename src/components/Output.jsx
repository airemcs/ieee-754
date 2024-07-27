export default function Output({operand1Normalized,operand1Exponent,operand2Normalized,operand2Exponent,numberOfDigits,processOperands,addBinary,applyRounding,normalizeResult}) {

  const Operand1RequiredLength = processOperands(operand1Normalized, numberOfDigits);
  const Operand2RequiredLength = processOperands(operand2Normalized, numberOfDigits);

  const result = Operand1RequiredLength && Operand2RequiredLength ? addBinary(Operand1RequiredLength, Operand2RequiredLength) : "";

  return (
    <>
      <div className="flex justify-center lg:p-4 mt-2">
        <div className="card bg-base-100 w-full lg:outline lg:outline-1">
          <div className="card-body pt-4 lg:px-10 lg:pt-6">
            <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2">1. Initial Normalization</label>
            <label htmlFor="">Aligning Decimal Points</label>
            <div className="lg:flex justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-2">
              <div className="join flex-1">
                <input type="text" value={operand1Normalized || ""} disabled
                  className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                <input type="text" value={operand1Exponent ? `x 2^${operand1Exponent}` : ""} disabled
                  className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
              </div>
              <div className="join flex-1">
                <input type="text" value={operand2Normalized || ""} disabled
                  className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : ""} disabled
                  className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
              </div>
            </div>
            <label htmlFor="">Rounding to Required Length (Digits)</label>
            <div className="lg:flex justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-2">
              <div className="join flex-1">
                <input type="text" value={Operand1RequiredLength || ""} disabled
                  className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                <input type="text" value={operand1Exponent ? `x 2^${operand1Exponent}` : ""} disabled
                  className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
              </div>
              <div className="join flex-1">
                <input type="text" value={Operand2RequiredLength || ""} disabled
                  className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : ""} disabled
                  className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
              </div>
            </div>

            <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2">2. Computation</label>

            <div className="lg:flex justify-center space-y-0 lg:space-y-0 mb-2 flex-col w-full gap-y-0 lg:gap-y-4">

              <div className="join flex-1 ml-5">
                <input type="text" value={Operand1RequiredLength || ""} disabled
                  className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                <input type="text" value={operand1Exponent ? `x 2^${operand1Exponent}` : ""} disabled
                  className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
              </div>

              <div className="flex flex-1 rounded-lg flex-row gap-2.5 items-center">
                <div>+</div>
                <div className="join w-full">
                  <input type="text" value={Operand2RequiredLength || ""} disabled
                    className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                  <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : ""} disabled
                    className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                </div>
              </div>

              <div className="flex flex-1 rounded-lg flex-row gap-2.5 items-center">
                <div>=</div>
              <div className="join w-full">
                <input type="text" id="" aria-label="" value={Operand1RequiredLength && Operand2RequiredLength ? addBinary(Operand1RequiredLength, Operand2RequiredLength) : ""} disabled
                  className="rounded-lg lg:join-item w-3/4 text-lg rounded-l-lg lg:rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                <input type="text" value={operand2Exponent ? `x 2^${operand2Exponent}` : ""} disabled
                  className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
              </div>
              </div>

            </div>

            <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">3. IEEE-754/1985 Floating-Point Format</label>
            <div className="flex flex-row w-full mb-4 lg:mb-0">
              <div className="w-full mb-2 flex flex-col gap-2">
                <label htmlFor="">Normalized Answer</label>
                <div className="join w-full">
                  <input type="text" value={normalizeResult(result, operand2Exponent).normalizedResult || ""} disabled
                    className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                  <input type="text" value={operand2Exponent ? `x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}` : ""} disabled
                    className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                </div>
                <label htmlFor="">Rounded Answer</label>
                <div className="join w-full">
                  <input type="text" value={applyRounding(normalizeResult(result, operand2Exponent).normalizedResult, numberOfDigits) || ""} disabled
                    className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                  <input type="text" value={operand2Exponent ? `x 2^${normalizeResult(result, operand2Exponent).normalizedExponent}` : ""} disabled
                    className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}