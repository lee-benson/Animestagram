import { Routes, Route } from 'react-router-dom'
import HomePost from './Components/HomePost/HomePost.jsx'
import NewPost from './Components/NewPost/NewPost.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Profile from './pages/Profile.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePost />}></Route>
        <Route path="/:username" element={<Profile />}></Route>
        <Route path="/new" element={<NewPost />}></Route>
        <Route path="/auth/signup" element={<Signup />}></Route>
        <Route path="/auth/signin" element={<Signin />}></Route>
      </Routes>
      <Signin />
      <Signup />
    </>
  );
}

export default App;
