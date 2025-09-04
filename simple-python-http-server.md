## 📝 Blog: **A Simple HTTP Server to Understand the Basics of Networking**

If you’ve ever wondered how servers and clients actually communicate beneath the surface of the web, this blog post is for you.

Here I walk you through a minimalist server-client architecture written entirely in Python using the `socket` module — no frameworks, no HTTP libraries, just raw TCP/IP logic. I created this project as a starting point for learning networking, and plan to build more functionality on top of it later (headers, methods, routing, maybe even a mini web framework).

---

## 📂 Project Files

Let’s break down what each file does, line by line.

---

### `config.py`

```python
server_addr = ('127.0.0.1', 8080)
```

Just a config file to keep things neat. We define our server's IP address and port as a tuple. Using `127.0.0.1` (localhost) ensures the server only runs locally for now.

---

### `server.py`

```python
import socket
from config import server_addr
```

We import Python’s built-in `socket` module and the address config. Then:

```python
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
```

This creates a **TCP socket** (`SOCK_STREAM`) using the **IPv4 address family** (`AF_INET`).

```python
server_socket.bind(server_addr)
```

We bind our socket to the local IP/port defined in `config.py`.

```python
server_socket.listen(5)
```

This puts the socket into listening mode. The `5` means the OS will queue up to 5 incoming connections before refusing new ones.

```python
client_socket, client_addr = server_socket.accept()
```

This blocks execution and waits for a client to connect. When a connection arrives, `accept()` returns a new socket (`client_socket`) and the client's address (`client_addr`).

```python
recieved_data = client_socket.recv(1024).decode()
print(recieved_data)
```

We read up to 1024 bytes from the client, decode the raw bytes into a UTF-8 string, and print the result.

---

### `client.py`

```python
import socket
from config import server_addr
```

Again, we use the same address config for consistency.

```python
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(server_addr)
```

This creates a TCP socket and connects to the server. Once connected:

```python
for i in range(0, 10):
    data = str(i)
    client_socket.send(data.encode())
```

We loop from 0 to 9, sending each integer (converted to string) to the server after encoding it to bytes.

```python
client_socket.close()
```

Simple and graceful shutdown of the socket.

---

## 🧠 What I Learned

* The `socket` module is all you need to create a basic TCP client-server setup.
* Data must be encoded and decoded properly — sockets deal with bytes, not strings.
* A server can handle a client only once per call to `accept()`, which makes it single-threaded by default.
* You don’t need a web framework to build a server — it’s all just raw protocols beneath the surface.

---

## 🔧 Next Steps

In future iterations, I plan to:

* Make the server multithreaded so it can handle multiple clients.
* Add basic HTTP parsing — headers, methods like `GET`, `POST`, etc.
* Introduce a routing mechanism to serve different paths.
* Maybe even build a minimal templating engine or serve static files.

This was a great low-level dive into how networking works and a foundation for building real protocols from the ground up.

