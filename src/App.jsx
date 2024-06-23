import './App.css'
import Header from './components/gov.br/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Footer from './components/gov.br/Footer'

function App() {

  return (
    <>
      {/* header-gov.br */}
      <Header />    
      {/* pages */}
      <main className="main">
      {/* home */}
      <Home />
      {/* about */}
      <About />
      </main>      
      {/* footer-gov.br */}
      <Footer />
    </>
  )
}

export default App
