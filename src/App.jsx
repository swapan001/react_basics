import { useState } from 'react'
import HelloWorld from './assets/HelloWorld'
import Header from './assets/Header'
import Footer from './assets/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HelloWorld/>
      <Footer/>

        
    </>
  )
}

export default App
