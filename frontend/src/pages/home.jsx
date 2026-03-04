import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import "../App.css";
import HistoryIcon from '@mui/icons-material/History';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { AuthContext } from '../contexts/AuthContext';

import { Link, useNavigate } from "react-router-dom";

function HomeComponent() {

    const navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");

    let handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/auth");
    }

    const { addToUserHistory } = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode);
        navigate(`/meet/${meetingCode}`);
    }

    let createRoom = () => {
        const roomId = Math.random().toString(36).substring(2, 10);
        navigate(`/meet/${roomId}`);
    }


    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to={"/"} ><img src="logo.png" alt="logo" /></Link>
                </div>
                <div className="navbar">
                    <div className="history-icon" style={{ display: "flex", alignItems: "center" }}>
                        <IconButton onClick={() => { navigate("/history") }}>
                            <HistoryIcon />
                        </IconButton>
                        <p>History</p>
                    </div>
                    <div className="logout-btn">
                        <Button variant="contained" onClick={handleLogout}>Logout</Button>
                    </div>
                </div>
            </div>
            <div className="home-hero">
                <div className="left-hero">
                    <h1>Video calls and meetings for everyone</h1>
                    <p style={{ marginBottom: "50px" }}>Connect, collaborate, and celebrate from anywhere with <span style={{ color: "#3860BE", fontWeight: "bold" }}>Vertex</span> </p>
                    <div className="left-hero-main">
                        <div className="create-room">
                            <h4>Create New Room</h4>
                            <p>Generate a unique room ID and start your call right away.</p>
                            <Button fullWidth variant="contained" onClick={createRoom}>Create Room</Button>
                        </div>
                        <div className="join-room">
                            <h4>Join existing room</h4>
                            <p style={{ marginBottom: "20px" }}>Enter the room ID shared by your teammate.</p>
                            <TextField fullWidth label="Room ID" id="fullWidth" placeholder="e.g.9b12ae35e4..." required value={meetingCode} onChange={(e) => { setMeetingCode(e.target.value) }} />
                            <Button onClick={handleJoinVideoCall} fullWidth variant="contained">Join Room</Button>
                        </div>
                    </div>
                </div>
                <div className="right-hero">
                    <img src="home-hero.png" alt="" />
                </div>
            </div>
        </>
    );
}


export default withAuth(HomeComponent);