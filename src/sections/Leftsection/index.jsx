import Header from '../Header'
import Navbar from '../Navbar'
import Contact from '../Contact'

const Leftsection = () => {
    return (
        <div className='sticky top-0 grid grid-rows-[35%_45%_20%] h-[87vh]'>
          <Header/>
          
          <Navbar/>
          
          <Contact/>
        </div>
    )
}

export default Leftsection