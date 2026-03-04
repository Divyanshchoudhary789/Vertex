import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
    let router = useNavigate();
    return (
        <div className="landingPageContainer">
            <div className="header">
                <div className="logo">
                    <Link to={"/"} ><img src="logo.png" alt="logo" /></Link>
                </div>
                <div className="navbar">
                    <p onClick={() => router("/meet/zkahekeu")} style={{ cursor: "pointer" }}><b>Join as Guest</b></p>
                    <Link to="/auth" style={{ textDecoration: "none", color: "#02145d" }}><b>Register</b></Link>
                    <Link to="/auth" style={{ textDecoration: "none" }}><button className="mainBtn"><b>Login</b></button></Link>
                </div>
            </div>
            <div className="hero">
                <h1>Find out what's possible<br /></h1>
                <h1>when work connects</h1>
                <p>Vertex converges communication, collaboration, and innovation <br /></p>
                <p>into one seamless platform for global teams.</p>
            </div>
            <Link to="/auth" style={{ textDecoration: "none" }}><button className="heroBtn"><b>Get Started</b></button></Link>
            <h1 style={{ textAlign: "center", fontSize: "50px" }}>Connect . Collaborate . Converge</h1>
            <div className="body">
                <h2>One platform.</h2>
                <h2>Endless ways to work together.</h2>
                <p>From client pitches to global all-hands, patient consults to classrooms, Vertex delivers the flexibility and reliability you need.</p>
            </div>
            <div className="info">
                <div className="text">
                    <p>Strengthen culture and hybrid workforce engagement across teams with Vertex Workplace.</p>
                    <ul>
                        <li><b>Foster community in hybrid teams:</b> Get company-wide updates, recognition, and social feeds that connect remote employees.</li>
                        <li><b>Create immersive experiences:</b> Run interactive all-hands, learning sessions, and celebrations that teams look forward to.</li>
                        <li><b>Communicate on your schedule:</b> Share video announcements asynchronously, aligning teams without more meetings.</li>
                        <li><b>Reinforce culture and recognition:</b> Highlight employee wins, anniversaries, and initiatives with rich media and live events.</li>
                        <li><b>Measure engagement to improve:</b> Use analytics from Events, Clips, and Workvivo to understand participation and surface gaps.</li>
                    </ul>
                    <Link to="/auth" style={{ textDecoration: "none" }}><button className="mainBtn"><b>Get Started</b></button></Link>
                </div>
                <div className="imageSection">
                    <img src="employee-engagement.png" alt="image" />
                </div>
            </div>
            <div className="illustration">
                <div className="illustration-image">
                    <img src="new_image.png" alt="image" />
                </div>
                <div className="cta">
                    <h2>See what Vertex can do</h2>
                    <h2>for your business</h2>
                    <Link to="/auth" style={{ textDecoration: "none" }}><button className="mainBtn ctaBtn"><b>Get Started</b></button></Link>
                </div>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <div className="logo">
                        <img src="logo.png" alt="logo" />
                    </div>
                    <div className="socials">
                        <i class="fa-brands fa-square-instagram"></i>
                        <Link to="https://www.linkedin.com/in/divyansh--choudhary/" style={{ textDecoration: "none", color: "black" }}><i class="fa-brands fa-square-linkedin"></i></Link>
                        <i class="fa-brands fa-youtube"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-square-facebook"></i><br />
                        <h6 style={{ fontSize: "15px" }}>Copyright &copy; Vertex Communications,Inc. All rights reserverd.</h6>
                    </div>
                </div>
                <div className="footer-right">
                    <h5>About us</h5><br />
                    <p>Privacy</p>
                    <p>Terms & Condition</p>
                    <p>Legal & Compliance</p>
                    <p>Trust Centre</p>
                </div>
            </div>
        </div>
    )
}