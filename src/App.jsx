import Navbar from './components/Navbar'
import Input from './components/Input'
import Output from './components/Output'

export default function App() {
  return (
  <>
  <div className="lg:px-20">
  
    <Navbar />
    <hr />

    <Input />
    <hr className="lg:hidden" />
    <Output />
  
  </div>
  </>
  )
}