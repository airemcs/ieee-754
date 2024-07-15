import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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

      <Menu as="div" className="relative inline-block text-left">

        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          G<ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
        <div className="py-1">

          <MenuItem>
            <a href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
            R</a>
          </MenuItem>

          <MenuItem>
            <a href="#"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
            S</a>
          </MenuItem>

          <MenuItem>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900">
            Roundings</a>
          </MenuItem>

          <form action="#" method="POST">
          </form>

        </div>
        </MenuItems>

      </Menu>

    </div>

  </div>
  </div>
  </div>
  </>
  )
}