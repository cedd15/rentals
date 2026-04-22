import { useState, type SubmitEvent } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import "../styles/Login.css"


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || "/";
    
    const handleSubmit = async (e : SubmitEvent) => {
        e.preventDefault();

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (username === "admin" && password === "1234") {
            const token = "fake-jwt-token-123";
            login(token)
            navigate(from, { replace: true });
        } else {
            alert("Wrong credentials!");
        }

        // const response = await fetch('https://api.example.com/login', {
        //     method: 'POST',
        //     body: JSON.stringify({ username, password }),
        //     headers: { 'Content-Type': 'application/json' }
        // });

        // const data = await response.json();
        // if (data.token) {
        //     login(data.token); 
        // } else {
        //     alert("Invalid credentials");
        // }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
  );
}

export default Login;