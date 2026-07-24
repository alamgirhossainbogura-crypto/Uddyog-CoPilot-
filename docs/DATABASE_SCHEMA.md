# Database Schema & Data Models 🗄️

## Core Entities (Prisma + PostgreSQL)

* **User:** Tracks user authentication states, profiles, and Auth0 IDs.
* **WarRoomSession:** Persists startup ideas, debate logs, and assumption map JSONs.
* **DebateMessage:** Stores individual agent outputs per debate round.
* **AssumptionNode:** Tracks extracted startup assumptions, status, and testing methods (`howToTest`).
* **TodoItem:** Stores actionable daily tasks for entrepreneurs.
