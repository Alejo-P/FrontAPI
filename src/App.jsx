import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderTools from './components/HeaderTools'
import IncidentsPage from './pages/IncidentsPage'
import LoginForm from './pages/LoginForm'
import RegisterForm from './pages/RegisterForm'
function App() {
  return (
    <BrowserRouter>
      <main>
        <HeaderTools/>
        <Routes>
          <Route path='/' element={<IncidentsPage/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
