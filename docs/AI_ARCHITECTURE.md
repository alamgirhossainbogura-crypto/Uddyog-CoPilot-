# AI Architecture & Prompt Pipeline 🧠

This document outlines the multi-agent logic powering **Uddyog-CoPilot**.

## 🔄 Agent Pipeline

1. **Intake & Question Generation:**
   - Input: User's startup idea.
   - LLM Call: Generates 3 domain-specific risk validation questions using Gemini.

2. **War Room Multi-Agent Debate (3 Rounds x 3 Agents):**
   - **Skeptic:** Focuses on hidden assumptions, customer reluctance, and financial risks.
   - **Strategist:** Focuses on competitive positioning, USP, and go-to-market plan.
   - **Operator:** Focuses on daily execution, feasibility, cost, and logistics.

3. **Assumption Map Synthesis:**
   - JSON Extraction Pass: Analyzes the full 9-turn debate transcript.
   - Outputs nodes categorized into `VALIDATED`, `UNVALIDATED`, and `NEEDS_INFO`.
