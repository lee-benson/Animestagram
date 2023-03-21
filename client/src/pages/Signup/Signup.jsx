import { Link } from "react-router-dom";
import { useState } from "react"
import { signup } from "../../api/users";

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
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Signup</button>
      </form>
      <span>
        {'Already have an account? '}
        <Link to="/auth/signin">Go to Signin</Link>
        {' instead.'}
      </span>
    </div>
  )
}