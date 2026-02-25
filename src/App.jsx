import { useState } from 'react'
import Header from './Header'
import Fournisseur from './Fournisseur'
//hrllo
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
    <Fournisseur />
    </>
  )
}

export default App
