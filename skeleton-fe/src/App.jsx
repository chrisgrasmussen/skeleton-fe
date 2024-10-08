
import './index.css'
import PrivateRoute from './utils/PrivateRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import StartDetailPage from './pages/StartDetailPage.jsx'
import CreateNewPage from './pages/CreateNewPage.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/start" element={<PrivateRoute />} />
          <Route path="start/:id" element={<StartDetailPage />} />
          <Route path="/start/new" element={<CreateNewPage />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
