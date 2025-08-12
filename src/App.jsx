import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">

      {/* Produto */}
      <div className="cards">
        <img src="" alt="" />
        <h2></h2>
        <p></p>
        <p></p>
        <div className="avaliacao"></div>
      </div>

      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App
