<<<<<<< HEAD

const Rightsection = () => {
    return (
        <div>
        <div>About</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
        <div className='mb-96'>Experience</div>
=======
import About from "../About";
import Experience from "../Experience";
const Rightsection = () => {
    return (
        <div className="text-left grid gap-y-4 px-5">
        <About />
        <Experience />
        
      </div>
    )
}

export default Rightsection;