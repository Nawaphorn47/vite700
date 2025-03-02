import Header from '../Header';
import Navbar from '../Navbar';
import Contact from '../Contact';

const Leftsection = () => {
  return (
    <div className='px-5'>
      <div className='sticky top-14 grid gap-y-5 grid-rows-[35%_45%_20%] h-[87vh]'>
        <Header/>
        <Navbar/>
        <Contact/>
      </div>
    </div>
  )
}
export default Leftsection
