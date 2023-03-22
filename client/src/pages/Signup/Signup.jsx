import { Link } from "react-router-dom";
import { useState } from "react"
import { signup } from "../../api/users";
import './Signup.css'

export default function Signup() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const response = await signup(text.toLowerCase(), password)
    console.log(response);
  }

  return (
    <div>
      <h1 className="signUpHead">
        <div className="websiteTitleBlock">
          <p className="websiteTitleWords">
            Sign Up
          </p>
        </div></h1>
      <form className='signUpForm' onSubmit={handleSubmit}>
        <input
          className='signUpInput searchBar'
          type="text"
          placeholder='Username'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <br></br>
        <input
          className='signUpInput searchBar'
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br></br>
        <button className="signUpButton click-shadow-drop click-shadow-drop--blue">Signup</button>
        <br></br>
      </form>
      <span className="signInLink">
        {'Already have an account? '}
        <br></br>
      </span>
      <span className='signInLink'>
        <Link to="/auth/signin">Go to Signin</Link>
      </span>
    </div>
  )
}