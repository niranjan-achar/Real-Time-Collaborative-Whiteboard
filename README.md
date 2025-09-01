# Real-Time Collaborative Whiteboard

A fast, minimal, and real-time collaborative whiteboard to brainstorm with your team. Create a room, share the code, and start drawing together instantly.

- **Live Demo**: https://whiteboardd.onrender.com

## ✨ Features

- **Real-time collaboration**: Low-latency drawing with Socket.IO
- **Rooms with shareable codes**: Spin up a room and invite others quickly
- **Multiple cursors**: See where others are drawing in real-time
- **Undo support**: Revert your last stroke
- **Color and brush controls**: Pick colors and adjust drawing options
- **Responsive UI**: Works smoothly across devices

> Note: Rooms currently allow up to 12 concurrent users.

## 🧰 Tech Stack

- **Framework**: Next.js 12, React 18, TypeScript
- **Realtime**: Socket.IO (client & server)
- **Server**: Express + Node.js
- **State Management**: Recoil
- **UI**: Tailwind CSS, Framer Motion, React Icons
- **Utilities**: react-colorful, uuid, react-toastify

## 🚀 Getting Started (Local Development)

1. **Clone the repo**
   ```bash
   git clone https://github.com/niranjan-achar/Real-Time-Collaborative-Whiteboard.git
   cd Real-Time-Collaborative-Whiteboard-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development**
   ```bash
   npm run dev
   ```
   - App will be available at: http://localhost:3000
   - A health check endpoint is available at: http://localhost:3000/health

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Start production server**
   ```bash
   npm start
   ```

## 🧪 How to Use

1. Open the **Live Demo** or your local URL.
2. Click **Create Room** to generate a short room code.
3. Share the code with collaborators to join the same room.
4. Start drawing together in real-time.
5. Use available controls to change color/brush and undo your last stroke.

## 📦 Available Scripts

- **dev**: Start the dev server with hot reload (nodemon + ts-node)
- **build**: Type-check and build both the server and Next.js app
- **start**: Run the compiled server in production mode
- **lint**: Lint the project

```json
{
  "dev": "nodemon --watch server --ext ts --exec \"ts-node server/index.ts\"",
  "build": "npm-run-all build:*",
  "start": "cross-env NODE_ENV=production node build/index.js",
  "lint": "next lint"
}
```

## 🛠 Requirements

- **Node.js**: v18+ recommended (works on Node 22 on Render)
- **npm**: v8+

## 🏗 Architecture (High Level)

- **Next.js** serves the UI and routes
- **Express** hosts Next and exposes a health endpoint
- **Socket.IO** powers real-time drawing and presence inside rooms
- **Recoil** manages client-side state for tools, options, and room data

## 🌐 Deployment

This project is deployed on **Render** using the build command `npm install && npm run build` and start command `npm start`.

- Live URL: https://whiteboardd.onrender.com

## 📄 License

This project is open-source. You’re welcome to fork and extend it.

## 🙌 Acknowledgements

- Next.js, React, and TypeScript
- Socket.IO for real-time communication
- Tailwind CSS and Framer Motion for delightful UI