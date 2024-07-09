import { useState } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Cards from './Cards'
import camaro from './assets/camaro.jpg'
import mclaren from './assets/mclaren.jpg'
import mustang from './assets/mustang.jpg'
import Cars from './Cars'
import Members from './assets/Members'
import elon from './assets/elon.jpg'
import bernard from './assets/bernard.jpg'
import jeff from './assets/jeff.webp'
import Mycomponent from './assets/Mycomponent'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
          <Header></Header>
          <Cars></Cars>
          <div className='container'>
              <Cards img={mclaren} brand="McLaren" name="Artura" price={12260000} isbrandnew={true}/>
              <Cards img={mustang} brand="Ford" name="Mustang" price={3048000} isbrandnew={false}/>
              <Cards img={camaro} brand="Chevrolet" name="Camaro" price={4067000} isbrandnew={true}/>
          </div>
          <Footer></Footer>
          <Header></Header>
          <div className='container'>
          <Members img={elon} name="Elon Musk" pos="Co-founder and CEO: Tesla" def="Elon Musk is the richest man in the world. He was born in South Africa and attended a university in Canada before transferring to the University of Pennsylvania, where he earned bachelor's degrees in physics and economics."/>
         
          <Members img={jeff} name="Jeff Bezos" pos="Founder and Executive Chair: Amazon " def="Jeff Bezos founded Amazon.com in a garage in Seattle, shortly after he resigned from the hedge fund giant D.E. Shaw. He had originally pitched the idea of an online bookstore to his former boss David E. Shaw, who wasn’t interested"/>
          <Members img={bernard} name="Bernard Arnault" pos="CEO and Chair: LVMH" def="Bernard Arnault is the chair and CEO of LVMH, the world’s largest luxury goods company. LVMH brands include Louis Vuitton, Hennessey, Marc Jacobs, and Sephora."/>
          </div>
          <Footer></Footer>
          <br></br>

          <Mycomponent></Mycomponent>
      </div>
  )
}

export default App
