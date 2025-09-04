# Building a Secure File Transfer Web App with React, Node.js, and PeerJS

Secure and seamless file transfers are increasingly important in today’s digital world. In this blog post, we’ll explore a **File Transfer Web App** that empowers users to send and receive files via peer-to-peer connections using **WebRTC (via PeerJS)**. The application includes **user authentication**, **MongoDB-based user management**, and a clean React frontend for interaction.

> 🛠 **Tech Stack**: React, Node.js, MongoDB (via Mongoose), PeerJS (WebRTC)

## 🧠 Project Overview

This project allows two users to connect in real time and transfer files directly through their browsers, leveraging **Peer-to-Peer** technology. It includes:

* **User Login system** (MongoDB + Express)
* **React-based UI** for sending and receiving files
* **PeerJS integration** for direct browser-to-browser file transfer

## 🔐 User Authentication with MongoDB

Authentication starts with the `login.jsx` component:

```jsx
export default function UserAuth() {
  const [form, setForm] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    setForm({ username, password });

    const response = await fetch('http://localhost:8080/user', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    navg('/choose');
  };
```

On the backend (`server.js`), the login logic is handled using **Mongoose**:

```js
server.post('/user', async (req, res) => {
  let user = new User(req.body);
  const doc = await user.save();
  res.json(doc);
});
```

## 🔁 Navigating Between File Actions

The user then chooses between sending or receiving a file via the `choose.jsx` interface:

```jsx
<button className="send-button" onClick={handleSend}>Send File</button>
<button className="receive-button" onClick={handleReceive}>Receive File</button>
```

## 📤 Sending Files (via WebRTC)

Sending files is done using the `send.jsx` component. Once the user uploads a file, it’s transferred directly to another peer using PeerJS:

```jsx
const call = (remoteid, file) => {
  var conn = peerInstance.current.connect(remoteid);
  conn.on('open', function() {
    conn.send(file);
  });
};
```

This relies on the PeerJS connection being open and linked to a receiving peer.

## 📥 Receiving Files

In `accept.jsx`, users receive the file after accepting the connection. The downloaded data is then converted to a Blob and made downloadable:

```jsx
const downloadFile = () => {
  const blob = new Blob([file], { type: 'application/octet-stream' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'file.pdf';
  downloadLink.click();
};
```

Users can decline or accept file transfers with a simple button interface.

## 🔄 Live Media Test (Optional)

The `test.jsx` component is an experimental file that enables **real-time video streaming** using WebRTC:

```jsx
peer.on('call', (call) => {
  navigator.getUserMedia({ video: true, audio: true }, (mediaStream) => {
    call.answer(mediaStream);
    call.on('stream', (remoteStream) => {
      remoteVideoRef.current.srcObject = remoteStream;
    });
  });
});
```

> 📷 Placeholder for live stream UI:
>
> ![WebRTC test UI](/images/webrtc-preview.png)

## 🌐 App Structure and Routing

React Router manages the transitions across these pages:

```jsx
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/choose" element={<Choose />} />
  <Route path="/send" element={<Send />} />
  <Route path="/accept" element={<Accept />} />
</Routes>
```

## 🌍 Backend Overview

The Express backend includes endpoints for:

* **User creation** (`/user`)
* **User validation** (`/home`)
* **Data persistence** with MongoDB

Sample schema in `server.js`:

```js
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});
```

## 🧪 Technologies Used

| Technology             | Purpose                    |
| ---------------------- | -------------------------- |
| **React**              | Frontend UI rendering      |
| **Node.js**            | Backend server & API       |
| **MongoDB (Mongoose)** | User data storage          |
| **PeerJS (WebRTC)**    | Peer-to-peer file transfer |

## 🧠 Lessons Learned

* WebRTC is a powerful protocol for real-time P2P transfers.
* MongoDB and Express simplify backend setup.
* React’s component-based design streamlines UI updates.
* File handling in JavaScript requires Blob management and careful encoding.

## 🚀 Future Improvements

* Add encryption for files in transit
* Implement password hashing (e.g., bcrypt)
* Add file previews and upload progress
* Deploy the app using Docker or cloud platforms

---

> 📁 **GitHub Repository**: \[Link Placeholder]
> 📸 **Screenshots**: \[Coming soon]

A powerful, full-stack peer-to-peer file sharing tool built from scratch using open web standards. Perfect for learning how WebRTC, Node, and React can power modern real-time web apps.
