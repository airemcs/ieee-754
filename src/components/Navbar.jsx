export default function Navbar() {
  return (
  <>
  <div className="m-0 py-4 navbar">

  <div className="navbar-start">

    <div className="dropdown">

      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-32">
    <li><a href="https://github.com/airemcs/ieee-754" className="text-lg font-semibold">Repository</a></li>
      </ul>
      
    </div>
    
    <a to="/" className="btn btn-ghost text-2xl">IEEE-754 
    <span className="hidden 2xl:flex">Binary-32 Floating Point</span> Operation</a>
  
  </div>
  
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal gap-4">
    <li><a href="https://github.com/airemcs/ieee-754" className="text-lg font-semibold">Repository</a></li>
  </ul>
  </div>
  
  <div className="navbar-end hidden lg:flex">
  <label className="flex cursor-pointer gap-3">
    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
    <input type="checkbox" value="dracula" className="toggle theme-controller"/>
    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  </label>
  </div>
  
  </div>
  </>
  )
}