
import './index.css'
import PrivateRoute from './utils/PrivateRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.jsx'


function App() {

  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" exact element={<PrivateRoute />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
