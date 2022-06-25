import React from 'react'

export default function Register() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function registerUser(event:any) {
        event.preventDefault();
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password,
            })
        })

        const data = await response.json()
        console.log(data)
    }
  return (
    <div>
         <div>
            <h1>Registration Form</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <div>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    </div>
  )
}
