import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" />
        <input type="password" />
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