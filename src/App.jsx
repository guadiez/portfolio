import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  )
}
