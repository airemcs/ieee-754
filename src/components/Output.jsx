export default function Output() {
  return (
  <>
  <div className="flex justify-center lg:p-4 mt-2">
  <div className="card bg-base-100 w-full lg:outline lg:outline-1">
  <div className="card-body pt-4 lg:px-10 lg:pt-6">

  <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2">1. Initial Normalization</label>
  
  <div className="lg:flex justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-2">

    <div className="join flex-1">
      <input type="text" id="" aria-label="" value="X . X X" disabled
      className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="x 2^2" disabled
      className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    </div>

    <div className="join flex-1">
      <input type="text" id="" aria-label="" value="Y . Y Y" disabled
      className="join-item w-3/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="x 2^7" disabled
      className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    </div>

  </div>

  <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2">2. e' Computation</label>
  
  <div className="lg:flex justify-center space-y-4 lg:space-y-0 lg:space-x-4 mb-2">

    <div className="join flex-1">
      <input type="text" id="" aria-label="" value="e = 2" disabled
      className="join-item hidden lg:inline lg:w-1/6 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="e' = 2 + 127" disabled
      className="lg:join-item w-6/12 lg:w-2/6 text-lg rounded-l-lg lg:rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="= 129" disabled
      className="join-item w-2/12 lg:w-1/6 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="= 10000001" disabled
      className="join-item w-4/12 lg:w-2/6 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    </div>

    <div className="join flex-1">
      <input type="text" id="" aria-label="" value="e = 7" disabled
      className="join-item hidden lg:inline lg:w-1/6 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="e' = 7 + 127" disabled
      className="lg:join-item w-6/12 lg:w-2/6 text-lg rounded-l-lg lg:rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="= 134" disabled
      className="join-item w-2/12 lg:w-1/6 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="= 10000110" disabled
      className="join-item w-4/12 lg:w-2/6 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    </div>

  </div>

  <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">3. IEEE-754/1985 Floating-Point Format</label>

  <div className="w-full col-span-3 mb-4 lg:mb-2">
    <div className="join w-full">
      <input type="text" id="" aria-label="" value="x 2" disabled
      className="join-item w-2/12 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="x 2" disabled
      className="join-item w-3/12 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="x 2" disabled
      className="join-item w-8/12 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    </div>
  </div>

  <div className="w-full col-span-3 mb-4 lg:mb-0">
    <div className="join w-full">
      <input type="text" id="" aria-label="" value="x 2" disabled
      className="join-item w-2/12 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="x 2" disabled
      className="join-item w-3/12 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      <input type="text" id="" aria-label="" value="x 2" disabled
      className="join-item w-8/12 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
    </div>
  </div>

  </div>
  </div>
  </div>
  </>
  )
}