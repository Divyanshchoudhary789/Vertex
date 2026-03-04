import React, { useContext } from "react";
import { useState } from "react";
import "../App.css";
import { AuthContext } from '../contexts/AuthContext';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Snackbar } from '@mui/material';
import { Link } from "react-router-dom";




export default function Authentication() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formState, setFormState] = useState(0); /* 0 - login  1- register */
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState();
    const [error, setError] = useState();

    const { handleRegister, handleLogin } = useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setMessage(result);
                setOpen(true);
                setUsername("");
                setPassword("");
                setName("");
                setError("");
                setFormState(0);
            }
        } catch (error) {
            console.log(error);
            let message = (error.response.data.message);
            setError(message);
        }
    }

    return (
        <div className="auth-page">
            <Link to={"/"} ><img className="logo-image" src="logo.png" alt="logo" /> </Link>
            <div className="auth-form">
                {formState ? <><h2>Create account</h2><p>Get started with secure rooms and real-time video calls.</p><br/> </> : <><h2>Welcome back</h2>
                    <p>Login to continue your video meeting workspace.</p></>}

                <form>
                    {formState == 1 ? <Box sx={{ width: 400, maxWidth: '100%' }}>
                        <TextField fullWidth label="Full Name" id="Full Name" type="text" value={name} onChange={(e) => { setName(e.target.value) }} className="inputField" required />
                    </Box> : <></>}

                    <Box sx={{ width: 400, maxWidth: '100%' }}>
                        <TextField fullWidth label="Username" id="username" type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} className="inputField" required />
                    </Box>
                    <Box sx={{ width: 400, maxWidth: '100%' }}>
                        <TextField fullWidth label="Password" id="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="inputField" required />
                    </Box>
                    <p style={{ color: "red" }}>{error}</p>
                    {formState == 1 ? <Button sx={{ width: 400, maxWidth: '100%', backgroundColor: "#3860BE", margin: "8px 0px" }} variant="contained" onClick={handleAuth}>Create Account</Button> : <Button sx={{ width: 400, maxWidth: '100%', backgroundColor: "#3860BE" }} variant="contained" onClick={handleAuth}>Login</Button>}

                </form>
                {formState == 1 ? <p>Already have an Account ? <span onClick={() => { setFormState(0) }} style={{ color: "#3860BE" }} className="login-link"><b>Login</b></span> </p> : <p>New here ? <span onClick={() => { setFormState(1) }} style={{ color: "#3860BE" }} className="createAccount-link" ><b>Create an Account</b></span> </p>}

            </div>
            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
            />
        </div>

    );
}