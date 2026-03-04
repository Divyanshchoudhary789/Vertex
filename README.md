# 🖥️ VERTEX – Real-Time Multi-User Video Conferencing Platform

Vertex is a **full-stack, real-time video conferencing application** built using **WebRTC and Socket.io**.  
It enables secure **multi-user video communication** using a **peer-to-peer mesh architecture**.

This project demonstrates **advanced real-time system design, WebRTC signaling implementation, authentication security, and scalable room-based communication.**

---

# 🌐 Live Deployment

### Frontend (Render)
https://vertex-8xx2.onrender.com

### Backend (Render)
https://vertex-backend-x0fo.onrender.com

---

# ✨ Core Features

## 🎥 Real-Time Video Calling
- Peer-to-peer video & audio streaming
- WebRTC media negotiation
- ICE candidate exchange
- Dynamic stream handling

## 👥 Multi-User Mesh Architecture
- Fully connected peer mesh topology
- Each participant establishes direct connections with all others
- Real-time join/leave synchronization
- Automatic peer cleanup on disconnect

## 🔐 Secure Authentication
- JWT-based authentication
- bcrypt password hashing
- Protected frontend routes
- Backend token verification middleware

## 📡 Socket-Based Signaling Server
- WebRTC offer/answer exchange via Socket.io
- ICE candidate propagation
- Room-based signaling isolation

## 🏠 Room Management System
- Create or join unique rooms
- Room-based socket isolation
- Dynamic participant handling

---

# 🏗 System Architecture

```
User Browser
      ↓
React + Vite (Frontend - Vercel)
      ↓ WebSocket (Socket.io)
Express.js Signaling Server (Render)
      ↓
WebRTC Peer Connections (Mesh Network)
      ↓
Direct Peer-to-Peer Media Streams
```

---

# 🧠 Deep Technical Architecture

## 1️⃣ Authentication Layer

User registers → Password hashed using **bcrypt**  
JWT generated upon login  
JWT stored client-side  
Protected routes verify token before allowing room access

This ensures:

- Stateless authentication  
- Secure user isolation  
- Controlled room entry  

---

## 2️⃣ WebRTC Signaling Flow

WebRTC requires a **signaling mechanism** to exchange connection metadata.

Vertex implements custom signaling using **Socket.io**.

### Connection Flow

1. User joins a room  
2. Socket connects to room
3. New RTCPeerConnection created  
4. Offer generated  
5. Offer sent via socket  
6. Answer returned  
7. ICE candidates exchanged  
8. Peer connection established  
9. Media streams flow directly peer-to-peer  

---

# 🧠 Tech Stack

## Frontend
- React
- Vite
- Socket.io Client
- WebRTC API
- JWT handling
- Protected Routes
- Custom Hooks (Room Call Management)

## Backend
- Node.js
- Express.js
- Socket.io
- JWT
- bcrypt
- MongoDB
- CORS

---

# 🔄 Complete Call Flow Summary

1. User logs in  
2. JWT is validated  
3. User joins a room  
4. Socket connection established  
5. Signaling events exchanged  
6. Peer connections created  
7. Media streams exchanged directly between users  
8. Users can join/leave dynamically without breaking room state  


# 👨‍💻 Author

**Divyansh Choudhary**

Full Stack Developer | MERN STACK Developer

GitHub:  
https://github.com/Divyanshchoudhary789

LinkedIn:  
https://www.linkedin.com/in/divyansh--choudhary/
