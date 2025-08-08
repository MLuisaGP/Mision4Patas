import './App.css'
import Header from './layout/Header'
import { MobileMenuOpenProvider } from './providers/MobileMenuOpenProvider'
import Home from './Pages/Home/Home'
import Footer from './layout/Footer'

function App() {

  return (
    <MobileMenuOpenProvider>
      <Header/>
      <Home/>
      <Footer/>
    </MobileMenuOpenProvider>
  )
}

export default App
