# File 1: ARCHITECTURE.md (Put in root folder)

# Uddyog-CoPilot Architecture & Design 🏗️

This document details the system design, data flows, and technical stack powering **Uddyog-CoPilot**.

## 🔄 High-Level Data Flow

1. **User Interaction (Frontend):** 
   - Built with Next.js 15 (App Router) & React 19.
   - Captures user input for startup ideas, questionnaire responses, and daily tasks.

2. **AI Reasoning Engine (War Room Debate):**
   - Directs queries through Google Gemini API.
   - Executes multi-agent prompt flows: **Skeptic**, **Strategist**, and **Operator**.
   - Generates structured JSON outputs representing the **Assumption Map**.

3. **Backend API & Database (Express & Prisma):**
   - Express 5 API coordinates session states and user preferences.
   - PostgreSQL database (via Prisma ORM) persists sessions, assumption nodes, and To-Do items.
   - Vector extension (`pgvector`) used for RAG document chunk retrieval in Strategy Room.

4. **Monetization & Extensions:**
   - Integrated Ad Slot components on primary sub-pages.
   - x402 Micropayment protocol support for accessing premium AI insights.


---


# File 2: CHANGELOG.md (Put in root folder)

# Changelog 📜

All notable changes to **Uddyog-CoPilot** will be documented in this file.

## [1.0.0] - 2026-07-24

### Added
- **War Room Engine:** Multi-agent debate setup with Skeptic, Strategist, and Operator prompts in Bangla.
- **To-Do List Management:** Real-time task creation, completion toggling, and deletion interface.
- **Business Guide Interface:** Dedicated module for startup idea analysis.
- **Ad Slot Integration:** Standardized monetization placements on key views.
- **CI/CD Pipeline:** Basic GitHub Actions workflow for automated build checks.
- **Root Configuration:** Environment templates (`.env.example`), production runners, and database schemas.


---


# File 3: SECURITY.md (Put in root folder)

# Security Policy 🔒

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within **Uddyog-CoPilot**, please do not open a public issue. Send an email to the repository maintainer instead.

All security vulnerabilities will be promptly addressed. Please allow up to 48 hours for an initial response.
