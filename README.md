# SurakshaMitra 🔐
### AI-Powered Multilingual Content Moderation & Threat Intelligence Platform

SurakshaMitra is an advanced AI-driven content safety and moderation platform designed to detect harmful, abusive, fraudulent, and emotionally concerning content in real-time across multiple languages.

The system leverages Large Language Models (LLMs), multilingual analysis, dynamic risk scoring, contextual moderation logic, and adaptive protection modes to provide intelligent moderation insights for modern digital platforms.

---

# 🚀 Features

## ✅ AI-Powered Content Moderation
- Real-time moderation using Groq LLM
- Context-aware decision engine
- Structured moderation pipeline

---

## 🌍 Multilingual Detection
Supports:
- English
- Hindi
- Marathi
- Hinglish
- Mixed Language Inputs

The system automatically detects the primary language and generates explanations/suggestions in the same language.

---

## 📊 Dynamic Risk Scoring
- Intelligent risk score generation (0–100)
- Severity-based scoring model
- Real-time visual risk representation

### Risk Categories

| Risk Score | Severity |
|------------|-----------|
| 0–30       | Low Risk |
| 31–70      | Medium Risk |
| 71–100     | High Risk |

---

## 🛡️ Adaptive Protection Modes

### General Mode
Activated for safe or neutral conversations.

### Women Safety Shield Mode
Detects:
- Gender harassment
- Misogynistic language
- Sexual threats

### Student Safe Mode
Detects:
- Bullying
- Emotional distress
- Self-harm indicators
- Toxic interactions

### FinTech Fraud Shield Mode
Detects:
- OTP scams
- UPI fraud
- Phishing attempts
- Financial impersonation

---

## 🤖 AI Moderator Suggestions
Generates:
- Smart moderation actions
- Human moderator guidance
- Intervention recommendations
- Escalation suggestions

---

## 🔐 Authentication System
- JWT-based authentication
- Secure signup/login flow
- Protected moderation APIs

---

# 🏗️ System Architecture

```text
                        ┌────────────────────┐
                        │      Frontend      │
                        │      React.js      │
                        └─────────┬──────────┘
                                  │
                                  │ REST API
                                  ▼
                    ┌─────────────────────────┐
                    │     Express Backend     │
                    │      Node.js Server     │
                    └─────────┬───────────────┘
                              │
                ┌─────────────┼─────────────┐
                │             │             │
                ▼             ▼             ▼
        ┌────────────┐ ┌────────────┐ ┌────────────┐
        │ JWT Auth   │ │ MongoDB    │ │ Groq LLM   │
        │ Middleware │ │ User Data  │ │ AI Engine  │
        └────────────┘ └────────────┘ └────────────┘
                                                │
                                                ▼
                                ┌────────────────────────┐
                                │ AI Moderation Pipeline │
                                └────────────┬───────────┘
                                             │
                    ┌────────────────────────┼────────────────────────┐
                    ▼                        ▼                        ▼
          ┌────────────────┐      ┌────────────────┐      ┌────────────────┐
          │ Language       │      │ Decision       │      │ Active Mode    │
          │ Detection      │      │ Engine         │      │ Detection      │
          └────────────────┘      └────────────────┘      └────────────────┘
                                             │
                                             ▼
                            ┌───────────────────────────┐
                            │ Explanation & Suggestion │
                            │      Generation Engine    │
                            └───────────────────────────┘
```

---

# 🧠 AI Moderation Workflow

## Step 1 — User Authentication
Users securely authenticate using JWT-based authentication.

---

## Step 2 — Content Submission
The user submits text content through the moderation dashboard.

---

## Step 3 — LLM Processing
The backend forwards the content to the Groq LLM moderation engine.

---

## Step 4 — AI Analysis Pipeline

The AI system performs:
- Language detection
- Threat analysis
- Risk scoring
- Context evaluation
- Protection mode selection
- Explanation generation
- Moderator suggestion generation

---

## Step 5 — Structured JSON Response

The backend receives structured AI output:

```json
{
  "language": "English",
  "risk_score": 82,
  "decision": "Block",
  "active_mode": "FinTech Fraud Shield Mode",
  "explanation": "The message contains phishing indicators requesting sensitive credentials.",
  "suggestion": "Block the content immediately and flag the user for fraud investigation."
}
```

---

## Step 6 — Frontend Visualization

The dashboard dynamically renders:
- Risk score
- Threat level
- AI decision
- Active protection mode
- Explanation
- Moderator suggestions

---

# 🛠️ Tech Stack

## Frontend
- React.js
- CSS3
- Axios
- React Router DOM

---

## Backend
- Node.js
- Express.js
- JWT Authentication
- Bcrypt.js

---

## Database
- MongoDB
- Mongoose ODM

---

## AI Layer
- Groq API
- Llama 3.1 8B Instant Model

---

# 📂 Project Structure

```text
SurakshaMitra/
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── styles/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .env
├── .gitignore
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Nikhil00-1/AgentX-SurakshaMitra.git
```

---

## 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
```

Run backend:

```bash
npm run dev
```

---

## 3️⃣ Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# 🔥 API Endpoints

## Authentication

### Signup

```http
POST /api/signup
```

### Login

```http
POST /api/login
```

---

## Moderation

### Analyze Content

```http
POST /api/moderate
```

Protected Route:
Requires JWT Token.

---

# 🧪 Example Test Inputs

## Scam Detection

```text
Send your OTP immediately to reactivate your account.
```

---

## Emotional Distress

```text
I feel like nobody cares about me anymore.
```

---

## Gender Harassment

```text
Women like you should stay quiet.
```


# 📈 Potential Use Cases

- Social media moderation
- Educational platforms
- Community forums
- FinTech fraud prevention
- Online gaming communities
- Enterprise communication systems

---

# 👨‍💻 Developed By

### Nikhil Wagh

AI & Full Stack Developer  
Focused on AI Safety, Intelligent Systems, and Real-Time Moderation Platforms.

---

# 📜 License

This project is licensed under the MIT License.

---

# ⭐ Final Vision

SurakshaMitra aims to become an intelligent multilingual AI safety infrastructure capable of protecting digital communities through adaptive moderation, contextual understanding, and proactive threat detection.
