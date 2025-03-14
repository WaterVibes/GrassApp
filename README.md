# 🌿 GrassApp

A modern, full-stack cannabis delivery platform with an AI-powered chatbot assistant.

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

## 💻 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Budz platform
npm run dev:budz

# Build for production
npm run build
```

## 🌐 Environment Variables

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_WEBSOCKET_URL=your_websocket_url
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

## 📚 Documentation

- [API Documentation](docs/api.md)
- [Component Library](docs/components.md)
- [State Management](docs/state.md)
- [WebSocket Events](docs/websocket.md)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- MapLibre GL for mapping
- Framer Motion for animations
- TailwindCSS for styling
- Next.js team for the framework 
