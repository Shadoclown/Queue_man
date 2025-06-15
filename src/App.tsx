import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom' //install react-router-dom @types/react-router-dom
import './App.css'
import SignupPage from './components/signup_page'
import LoginPage from './components/login_page'

function App() {
  return (
    <Router basename="/Queue_man">
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
