import { Routes, Route } from 'react-router-dom'
import HomePost from './Components/HomePost/HomePost.jsx'
import NewPost from './Components/NewPost/NewPost.jsx'
// import Navbar from './Components/Navbar/Navbar.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Signin from './pages/Signin/Signin.jsx'
import Signup from './pages/Signup/Signup.jsx'
import './App.css';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/post" element={<HomePost />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
