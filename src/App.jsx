import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {

  return (
    <div className='app-body'>
      <BrowserRouter>
        <Routes>
          <Route index path='/Portfolio-Page' element={<Home/>}/>
          <Route index path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
