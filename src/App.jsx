import { Outlet } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

function App() {
  return (
    <>
      <div className="font-manrope text-dark-01">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
