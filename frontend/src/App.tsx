import { BrowserRouter as Routers, Routes, Route, } from 'react-router'
import NavBar from '@/components/NavBar'
import Dashboard from '@/pages/Dashboard'
import About from './pages/About'

function App() {
  return (
    <Routers>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Routers>
  )
}

export default App
