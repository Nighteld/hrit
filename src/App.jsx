// import './App.css'

import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Home from "./routes/Home"

function App() {

  return (
    <Routes>
        {/* Wrap all pages with the Layout component */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>

  )
}

export default App
