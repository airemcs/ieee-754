import React, { useState } from 'react'

export default function Card() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


  return (
  <>
  <div className="flex justify-center lg:p-4 mt-2">
  <div className="card bg-base-100 w-full lg:outline lg:outline-1">
  <div className="card-body lg:pb-10 lg:px-10 lg:pt-6">

  <div className="lg:grid lg:grid-cols-8 lg:gap-8 lg:mb-4">

    <div className="w-full mb-2 lg:mb-0 col-span-3 mb-4 lg:mb-0">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Operand 1</label>
      <div className="join w-full">
        <input id="" name="" type="text" placeholder="" 
        className="join-item w-full text-lg rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
        <input type="text" id="" aria-label="" value="x 2" disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    </div>

    <div className="w-full mb-2 lg:mb-0 col-span-3 mb-4 lg:mb-0">
      <label htmlFor="" className="block text-xl lg:text-2xl font-medium mb-2 lg:mb-4">Operand 2</label>
      <div className="join w-full">
        <input id="" name="" type="text" placeholder=""
        className="join-item w-full text-lg rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>
        <input type="text" id="" aria-label="" value="x 2" disabled
        className="join-item w-1/4 text-lg rounded-lg py-1.5 px-3 bg-gray-100 border border-gray-300 cursor-not-allowed"/>
      </div>
    </div>

    <div className="w-full mb-2 lg:mb-0 col-span-2">

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

              <a href="#" role="menuitem" onClick={() => handleOptionClick('Round Half Even')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
              Round Half Even</a>

              <a href="#" role="menuitem" onClick={() => handleOptionClick('Round Half Up')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
              Round Half Up</a>
              
              <a href="#" role="menuitem" onClick={() => handleOptionClick('Round Half Down')}
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100">
              Round Half Down</a>

          </div>
          </div>
          )}

        </div>

        <input id="" name="" type="text" placeholder=""
        className="join-item w-1/2 lg:w-1/4 text-lg pb-2 rounded-md py-1.5 px-3 ring-1 ring-inset ring-gray-300"/>

      </div>

    </div>

  </div>

  <div className="flex justify-center space-x-4">
    <button className="btn flex-1">Calculate</button>
    <button className="btn flex-1">Export as TXT</button>
  </div>


  </div>
  </div>
  </div>
  </>
  )
}