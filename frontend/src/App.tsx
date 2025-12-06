import { BrowserRouter as Routers, Routes, Route, } from 'react-router'
import Dashboard from '@/pages/Dashboard'

function App() {
  return (
    <Routers>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </Routers>
  )
}

export default App
