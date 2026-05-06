# Aurora Identity | Luminous Authentication Portal

Aurora Identity is a high-end, high-performance authentication application built with Vanilla HTML, Tailwind CSS, and Modular JavaScript. It features a stunning "Luminous Aurora" theme with deep atmospheric lighting, organic glassmorphism, and a robust security architecture.

Live Deployment: [authentication-app-tan-delta.vercel.app](https://authentication-app-tan-delta.vercel.app/)

---

## Features

- **Luminous Aurora UI**: A dreamy, atmospheric design with pulsing aurora lights and thick frosted glass.
- **Secure Auth Flow**: Full implementation of Login, Registration, and Session Management using FreeAPI.
- **Modular Architecture**: Logic separated into api, ui, and auth modules for peak maintainability.
- **Premium Typography**: Powered by Plus Jakarta Sans for a modern, high-fashion SaaS feel.
- **Ultra-Responsive**: Pixel-perfect layout across all devices, from mobile to ultra-wide monitors.
- **Performance Optimized**: Zero framework overhead—powered by lightning-fast Vanilla JS and Vite.

## Technology Stack

- **Frontend**: Vanilla HTML5, JavaScript (ES Modules)
- **Styling**: Tailwind CSS v4
- **Typography**: Plus Jakarta Sans (Google Fonts)
- **Tooling**: Vite (Dev Server & Bundler)
- **API**: [FreeAPI](https://freeapi.app) (Authentication Module)

## Project Structure

```text
/
├── js/
│   ├── api.js       # API communication logic
│   ├── ui.js        # DOM manipulation & notifications
│   └── auth.js      # Authentication state management
├── main.js          # App entry point & event listeners
├── index.html       # Main UI structure
├── style.css        # Luminous Aurora design tokens
└── vite.config.js   # Dev server & API proxy configuration
```

## Getting Started

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

## Authentication Logic
The app uses Bearer Token authentication. Tokens are stored securely in localStorage, and the app automatically synchronizes your session on page reload to ensure a seamless user experience.

---

Built with passion by Babita Kumari
