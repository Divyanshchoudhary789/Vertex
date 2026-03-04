import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "../App.css";

export default function HistoryComponent() {

    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);

    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (e) {
                console.log(e);
            }
        }
        fetchHistory();
    }, []);

    return (
        <div>
            <div className="logo" style={{marginTop:"30px"}}>
                <Link to={"/home"} ><img src="logo.png" alt="logo" /></Link>
            </div>
            <h2 style={{margin:"50px 60px 0px"}}>Meeting History:</h2>
            <div className="cards-container">
                {
                    meetings.map((item, index) => {
                        return <>
                            <div className="card" key={index}>
                                <h4>Username: {item.user_id}</h4>
                                <p>Meeting Code: {item.meetingCode}</p>
                                <p>Date: {new Date(item.date).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</p>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    );
}