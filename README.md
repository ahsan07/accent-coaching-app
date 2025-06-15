# Accent Coaching App

An AI-powered accent coaching application that helps users improve their American accent through real-time speech recognition, pronunciation feedback, and personalized training exercises.

## 🎯 Features

- **Real-time Speech Analysis**: Advanced speech recognition to analyze pronunciation patterns
- **Personalized Feedback**: AI-driven feedback on accent improvement areas
- **Interactive Exercises**: Targeted pronunciation drills and practice sessions
- **Progress Tracking**: Detailed analytics on accent improvement journey
- **Multiple Accents**: Support for various target accents (starting with American English)
- **User Authentication**: Secure user accounts with progress persistence

## 🏗️ Architecture

### Frontend (`/frontend`)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Web Speech API** for real-time audio capture
- **Chart.js** for progress visualization
- **React Router** for navigation

### Backend (`/backend`)
- **Node.js** with Express.js
- **TypeScript** for type safety
- **PostgreSQL** database with Prisma ORM
- **JWT Authentication**
- **WebSocket** for real-time communication
- **Speech-to-Text APIs** (Google Speech API, Azure Speech)

### AI/ML Components (`/ml`)
- **Phoneme Analysis Engine**
- **Accent Classification Models**
- **Pronunciation Scoring Algorithms**
- **Progress Prediction Models**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ahsan07/accent-coaching-app.git
cd accent-coaching-app
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

3. Environment Setup
```bash
# Copy environment templates
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

# Configure your environment variables
```

4. Database Setup
```bash
cd backend
npx prisma migrate dev
npx prisma generate
```

5. Start Development Servers
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm start
```

## 📱 User Flow

1. **Registration/Login**: Users create accounts or sign in
2. **Initial Assessment**: Voice analysis to determine current accent level
3. **Personalized Plan**: AI generates custom improvement roadmap
4. **Practice Sessions**: Interactive pronunciation exercises
5. **Real-time Feedback**: Immediate correction and guidance
6. **Progress Tracking**: Visual analytics of improvement over time

## 🔧 Technology Stack

### Frontend
- React 18 + TypeScript
- Tailwind CSS
- Web Speech API
- WebRTC for audio processing
- Chart.js for analytics
- Axios for API calls

### Backend
- Node.js + Express + TypeScript
- PostgreSQL + Prisma ORM
- JWT Authentication
- WebSocket (Socket.io)
- Google Speech-to-Text API
- Azure Cognitive Services

### DevOps
- Docker containers
- GitHub Actions CI/CD
- Vercel/Netlify deployment
- AWS/Google Cloud hosting

## 🎓 Core Features Breakdown

### 1. Speech Recognition Engine
- Real-time audio capture and processing
- Phoneme-level analysis
- Accent pattern detection
- Pronunciation accuracy scoring

### 2. Feedback System
- Visual waveform analysis
- Color-coded pronunciation feedback
- Targeted improvement suggestions
- Progress celebration and motivation

### 3. Exercise Library
- Word-level pronunciation drills
- Sentence fluency practice
- Conversational scenarios
- Minimal pair exercises (bit/beat, etc.)

### 4. Analytics Dashboard
- Improvement trajectory graphs
- Problem sound identification
- Practice time tracking
- Achievement milestones

## 🗂️ Project Structure

```
accent-coaching-app/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service functions
│   │   ├── utils/          # Utility functions
│   │   └── types/          # TypeScript type definitions
│   ├── public/             # Static assets
│   └── package.json
├── backend/                 # Node.js backend API
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Database models
│   │   ├── middleware/     # Express middleware
│   │   ├── services/       # Business logic services
│   │   ├── routes/         # API routes
│   │   └── utils/          # Utility functions
│   ├── prisma/             # Database schema and migrations
│   └── package.json
├── ml/                     # Machine learning components
│   ├── models/             # Trained ML models
│   ├── training/           # Model training scripts
│   └── api/               # ML API endpoints
├── docs/                   # Documentation
├── scripts/                # Deployment and utility scripts
└── docker-compose.yml      # Development environment setup
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Roadmap

- [ ] MVP with basic speech recognition
- [ ] User authentication system
- [ ] Real-time pronunciation feedback
- [ ] Progress tracking dashboard
- [ ] Mobile app development
- [ ] Multiple accent support
- [ ] AI-powered personalized curriculum
- [ ] Social features and community challenges

---

**Built with ❤️ for accent learners worldwide**