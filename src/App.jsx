import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import fileResume from './assets/resume.pdf'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'
import Leftsection from './sections/Leftsection'
import Rightsection from './sections/Rightsection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mt-14 mx-auto max-w-6xl grid gap-y-4 lg:grid-cols-[40%_60%]'>
          <Leftsection/>
          <Rightsection/>
      </div>
    
      
  )
}

export default App
