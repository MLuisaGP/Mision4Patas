import './App.css'
import Header from './layout/Header'
import HeaderInicio from './components/HeaderInicio'
import { MobileMenuOpenProvider } from './providers/MobileMenuOpenProvider'
import Home from './Pages/Home'

function App() {

  return (
    <MobileMenuOpenProvider>
      <Header/>
      <Home/>
      <h1>HOLA</h1>
    </MobileMenuOpenProvider>
  )
}

export default App
