export default function Card() {
  return (
  <>
  <div className="flex justify-center lg:p-4">
  <div className="card bg-base-100 w-full lg:outline lg:outline-1">
  <div className="card-body">

    <div className="w-full mb-2 lg:mb-4">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Operand 1</label>
      <div className="join w-full">
        <input id="" name="" type="text" placeholder=""
          className="join-item w-full text-lg rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
        <input type="text" id="" aria-label="" value="x 2" disabled
        className="join-item text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    </div>

    <div className="w-full mb-2 lg:mb-4">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Operand 2</label>
      <div className="join w-full">
        <input id="" name="" type="text" placeholder=""
          className="join-item w-full text-lg rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
        <input type="text" id="" aria-label="" value="x 2" disabled
        className="join-item text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    </div>

    <div className="w-full mb-2 lg:mb-4">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Rounding Method</label>

      

    </div>

  </div>
  </div>
  </div>
  </>
  )
}