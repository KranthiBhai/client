import React from 'react'
import { setTokenSourceMapRange } from 'typescript';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
  return (
    <div>
        <div>
            <h1>Login Form</h1>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
    </div>
  )
}
