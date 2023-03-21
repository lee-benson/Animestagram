import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signin } from '../../api/users'
import './Signin.css'

export default function Signin() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(text.toLowerCase())
    const response = await signin(text.toLowerCase(), password)
    console.log(response);
    // redirect to home on successful login please
    if (response.status === 200) {
      navigate('/post')
    }
  }

  return (
    <div>
      <h1 className="signInHead">
        <div className="websiteTitleBlock">
          <p className="websiteTitleWords">
            Sign In
          </p>
        </div>
      </h1>
      <form className="signInForm" onSubmit={handleSubmit}>
        <input
          className="signInInput"
          type="text"
          placeholder="Username"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <br></br>
        <input
          className="signInInput"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br></br>
        <button className="signInButton">Signin</button>
        <br></br>
      </form>
      <span className="signUpLink">
        {'Not already a user?'}
        <br></br>
      </span>
      <span className="signUpLink">
        <Link to="/auth/signup">Go to Signup</Link>
      </span>
    </div>
  )
}