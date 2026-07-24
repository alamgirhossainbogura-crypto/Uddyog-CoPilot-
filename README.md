# Uddyog-CoPilot (উদ্যোগ কো-পাইলট) 🚀

![GitHub release](https://img.shields.io/github/v/release/alamgirhossainbogura-crypto/Uddyog-CoPilot?color=blue)
![License](https://img.shields.io/badge/license-MIT-green)
![CI Build](https://img.shields.io/badge/build-passing-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

**Uddyog-CoPilot** is an AI-powered digital business assistant and productivity co-pilot tailored for Bangla-speaking entrepreneurs and early-stage startups. Built for the **Brainwave 2026 Hackathon**, it transforms vague startup ideas into structured, stress-tested execution plans through multi-agent AI debates, risk mapping, and actionable productivity tools.

---

## 🌟 Key Features (The Four Pillars)

### 📘 1. War Room & Business Guide (ওয়ার রুম ও বিজনেস গাইড)
* **Multi-Agent AI Debate:** Evaluates business ideas through 3 distinct AI agent perspectives:
  * 🕵️ **Skeptic:** Uncovers hidden risks, flawed logic, and unvalidated assumptions.
  * 🎯 **Strategist:** Analyzes market positioning, growth models, and strategic advantages.
  * ⚙️ **Operator:** Assesses operational costs, daily feasibility, and execution logistics.
* **Assumption Map:** Visualizes business risks categorizing claims into `VALIDATED`, `UNVALIDATED`, and `NEEDS_INFO`.

### 📝 2. Task Manager & To-Do List (টাস্ক ম্যানেজার)
* Tracks daily execution tasks for starting and running the business.
* Visual progress updates, interactive checkmarks, and real-time state persistence.

### 📊 3. Launchpad & Strategy Room (লঞ্চপ্যাড ও স্ট্র্যাটেজি রুম)
* **Customer Connect:** Drafts targeted outreach emails and messages for potential customer validation.
* **Validation Roadmap:** Offers week-by-week testing strategies with low-cost experiments.
* **Document Advisor (RAG):** Upload pitch decks or PDFs to query an AI advisor trained on your project documents.

### 🎙️ 4. Pitch Session (পিচ সেশন)
* Gemini Live Multimodal integration for real-time, interactive pitch feedback via audio and camera feed.

---

## ⚡ Special Integrations

* **x402 Micropayments:** Web3 protocol integration for micro-transactions when accessing premium AI analysis.
* **Monetization Engine:** Standardized ad slots built directly into core user navigation screens (Home, Business Guide, To-Do List).
* **Bangla-First UX:** Fully localized native Bangla system prompts and smooth UI navigation.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript |
| **Styling** | Tailwind CSS 4, shadcn/ui |
| **State & Graph** | React Flow / @xyflow/react |
| **AI Models** | Gemini Flash (Google AI Studio) & Gemini Live Multimodal |
| **Backend** | Express 5, TypeScript |
| **Database** | PostgreSQL via Prisma 6 + `pgvector` |
| **Payments** | x402 Micropayment Protocol |
| **Process Manager** | PM2 (`ecosystem.config.cjs`) |

---             

## 🚀 Quick Start (Local Setup)
​1. **Clone the Repository*:*
git clone [https://github.com/alamgirhossainbogura-crypto/Uddyog-CoPilot.git](https://github.com/alamgirhossainbogura-crypto/Uddyog-CoPilot.git)
cd Uddyog-CoPilot
2. **Install Dependencies:**
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
3. **Setup Environment Variables
​Create a .env file in both frontend and backend directories using .env.example as a template:**
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=postgresql://user:password@localhost:5432/uddyog_db
4. **Run the Application
​Run both services simultaneously using the root startup script:**
chmod +x start-all.sh
./start-all.sh
Or start individual services:
# Frontend (localhost:3000)
cd frontend && npm run dev

# Backend (localhost:5000)
cd backend && npm start

---

## 📜 License
​Distributed under the MIT License. See LICENSE for more information.
​© 2026 Uddyog-CoPilot 
