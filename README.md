# 🌿 GrassApp

A modern, full-stack cannabis delivery platform with an AI-powered chatbot assistant.

---

> 👋 **New to the project?** Jump to our [Setup Guide](#-setup-guide) to get started!

---

## 📑 Table of Contents
1. [Features](#-features)
2. [Technical Stack](#️-technical-stack)
3. [Security Features](#-security-features)
4. [Mobile Responsiveness](#-mobile-responsiveness)
5. [Design System](#-design-system)
6. [State Management](#-state-management)
7. [Location Services](#-location-services)
8. [Setup Guide](#-setup-guide)
9. [Development](#-development)
10. [Documentation](#-documentation)
11. [Contributing](#-contributing)
12. [License](#-license)
13. [Acknowledgments](#-acknowledgments)

## 🚀 Features

### For Customers
- **Smart AI Assistant (Grassy)**
  - Personalized strain recommendations
  - Product suggestions based on desired effects
  - Real-time chat with witty responses
  - Effects visualization with interactive meters
  - Dad jokes and 4th wall breaking humor

- **Live Updates**
  - Real-time strain availability
  - Flash sales notifications
  - New product alerts
  - Promotional offers

- **User Experience**
  - Seamless authentication
  - MMCC ID verification
  - Multiple delivery addresses
  - Order tracking
  - GrassPoints rewards system
  - GrassPass subscription service

### For Delivery Partners (Budz)
- **Delivery Management**
  - Real-time order assignments
  - Route optimization
  - Turn-by-turn navigation
  - Customer communication
  - ID verification system
  - Compliance checks

- **Earnings & Analytics**
  - Real-time earnings tracking
  - Performance metrics
  - Delivery statistics
  - Rating system

### For Dispensaries
- **Inventory Management**
  - Real-time stock updates
  - Product categorization
  - Strain information management
  - Pricing controls

- **Order Processing**
  - Real-time order notifications
  - Automated dispatch
  - Delivery status tracking
  - Customer communication

## 🛠️ Technical Stack

- **Frontend**
  - Next.js 14
  - React 18
  - TypeScript
  - Redux Toolkit
  - Framer Motion
  - TailwindCSS
  - MapLibre GL

- **Backend**
  - Node.js
  - WebSocket for real-time updates
  - Redis for caching
  - MongoDB for data storage

- **AI Integration**
  - Custom NLP model for product recommendations
  - Sentiment analysis for customer feedback
  - Context-aware responses

## 🔐 Security Features

- Secure authentication
- MMCC compliance checks
- Real-time ID verification
- Encrypted data transmission
- Secure payment processing

## 📱 Mobile Responsiveness

- Responsive design for all screen sizes
- Progressive Web App (PWA) capabilities
- Touch-optimized interfaces
- Offline functionality

## 🎨 Design System

- Modern, clean UI
- Dark mode optimized
- Consistent color scheme
- Animated transitions
- Loading states
- Error handling

## 🚦 State Management

- Redux for global state
- React Query for server state
- WebSocket for real-time updates
- Persistent storage

## 📍 Location Services

- Real-time GPS tracking
- Geofencing
- Route optimization
- Address verification

---

# 📖 Setup Guide

## System Requirements Checklist

Before starting, ensure you have:

- [ ] Node.js (version 18 or higher)
- [ ] npm (comes with Node.js)
- [ ] Git
- [ ] Git LFS
- [ ] A code editor (VS Code recommended)
- [ ] A modern web browser

To verify your setup:
```bash
node --version    # Should be 18 or higher
npm --version     # Should be 8 or higher
git --version     # Should be 2.34 or higher
git lfs --version # Should be installed
```

## 🗂️ Project Structure

```
GrassApp/
├── grassapp-web/          # Main customer-facing application
│   ├── public/           # Static files
│   ├── src/             # Source code
│   ├── package.json     # Dependencies
│   └── .env.example     # Example environment variables
│
├── sun-admin/           # Admin dashboard application
│   ├── src/            # Source code
│   ├── public/         # Static files
│   └── package.json    # Dependencies
│
└── shared-types/       # Shared TypeScript definitions
    ├── src/           # Source code
    └── package.json   # Dependencies
```

## 🚀 Installation Steps

### 1. Clone & Setup
```bash
# Clone the repository
git clone https://github.com/WaterVibes/GrassApp.git
cd GrassApp

# Install Git LFS
# Windows (using Chocolatey):
choco install git-lfs
# OR Mac:
brew install git-lfs
# OR Linux:
sudo apt install git-lfs  # Ubuntu/Debian
sudo yum install git-lfs  # CentOS/RHEL

# Initialize Git LFS
git lfs install
```

### 2. Set Up Shared Types
```bash
# Navigate to shared-types
cd shared-types

# Install dependencies
npm install

# Build the package
npm run build
```

### 3. Set Up GrassApp Web
```bash
# Navigate to grassapp-web
cd ../grassapp-web

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local
```

Edit `.env.local` with your values:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000
NEXTAUTH_URL=http://localhost:3006
NEXTAUTH_SECRET=your-secret-key-here
NEXT_PUBLIC_MAPBOX_TOKEN=your-mapbox-token
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your-google-maps-key
```

### 4. Set Up Sun Admin
```bash
# Navigate to sun-admin
cd ../sun-admin

# Install dependencies
npm install
```

## 🏃‍♂️ Running the Applications

1. **Start GrassApp Web** (in one terminal):
   ```bash
   cd grassapp-web
   npm run dev
   # Available at http://localhost:3006
   ```

2. **Start Sun Admin** (in another terminal):
   ```bash
   cd sun-admin
   npm run dev
   # Available at http://localhost:3000
   ```

## ✅ Verification Checklist

### GrassApp Web
- [ ] Homepage loads (http://localhost:3006)
- [ ] Map displays correctly
- [ ] Dispensary listings appear
- [ ] Login/Signup forms work

### Sun Admin
- [ ] Dashboard loads (http://localhost:3000)
- [ ] Analytics graphs display
- [ ] Order management works
- [ ] Real-time updates appear

## ❗ Troubleshooting

### Common Issues

1. **Module Not Found**
   ```bash
   rm -rf node_modules
   npm install
   ```

2. **Port In Use**
   ```bash
   # Windows
   netstat -ano | findstr :3006
   taskkill /PID <PID> /F

   # Mac/Linux
   lsof -i :3006
   kill -9 <PID>
   ```

3. **Environment Variables**
   - Check `.env.local` exists
   - No spaces around = signs
   - All variables set

4. **Git LFS Issues**
   ```bash
   git lfs uninstall
   git lfs install
   git lfs pull
   ```

### Still Having Problems?

1. Check browser console (F12)
2. Check terminal errors
3. Verify environment variables
4. Check dependencies
5. Clear browser cache
6. Verify Node.js version

## 📞 Support

- GitHub Issues: [Create an issue](https://github.com/WaterVibes/GrassApp/issues)
- Email: support@grassapp.com
- Documentation: [View Docs](docs/)
