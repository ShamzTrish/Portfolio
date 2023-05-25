import About from "./components/About/About"
import Contact from "./components/Contact Form/Contact"
import MainPage from "./components/mainPage/MainPage"
import Work from "./components/Work/Work"
import Divinero from './components/Work/Divinero'

import { useState } from 'react'


const App = () => {

  const [seeDivinero, setSeeDivinero] = useState(false)


  return <div className='is-preload'>
      
    <MainPage />

    <div id="main">
    {seeDivinero || <>
      <About/>

      <Work setSeeDivinero={setSeeDivinero} />

      <Contact />
      </>
    }


      {seeDivinero && <Divinero seeDivinero={seeDivinero} setSeeDivinero={setSeeDivinero} />}
    </div>


  </div>
}



export default App