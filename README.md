# 🌌 NexusAuth | Midnight Premium Authentication

NexusAuth is a cutting-edge, high-performance authentication interface built with **Vanilla HTML, Tailwind CSS, and Modular JavaScript**. It features a stunning "Midnight Obsidian" dark theme with advanced glassmorphism, animated background elements, and a robust security architecture.

🚀 **Live Deployment:** [authentication-app-babita.vercel.app](https://authentication-app-babita.vercel.app/)
📊 **Vercel Project:** [View Dashboard](https://vercel.com/babita1947s-projects/authentication-app)

---

## ✨ Features

- **🌑 Midnight Premium UI**: A deep, sophisticated dark theme optimized for modern displays.
- **🛡️ Secure Auth Flow**: Full implementation of Login, Registration, and Session Management using **FreeAPI**.
- **🧩 Modular Architecture**: Cleanly separated logic into `api`, `ui`, and `auth` modules for maximum maintainability.
- **✨ Advanced Animations**: Floating ambient blobs, micro-interactions on inputs, and smooth "reveal" transitions.
- **📱 Ultra-Responsive**: Pixel-perfect layout across all devices, from mobile to ultra-wide monitors.
- **⚡ Performance Optimized**: Zero framework overhead—powered by lightning-fast Vanilla JS and Vite.

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML5, JavaScript (ES Modules)
- **Styling**: Tailwind CSS v4 (Integrated with Vite)
- **Tooling**: Vite (Dev Server & Bundler)
- **API**: [FreeAPI](https://freeapi.app) (Authentication Module)

## 📁 Project Structure

```text
/
├── js/
│   ├── api.js       # API communication logic
│   ├── ui.js        # DOM manipulation & notifications
│   └── auth.js      # Authentication state management
├── main.js          # App entry point & event listeners
├── index.html       # Main UI structure
├── style.css        # Custom design tokens & animations
└── vite.config.js   # Dev server & API proxy configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔑 Authentication Logic
The app uses **Bearer Token** authentication. Tokens are stored securely in `localStorage`, and the app automatically synchronizes your session on page reload to ensure a seamless user experience.

---

Built with 💜 by [Babita Kumari]
