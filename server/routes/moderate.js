import express from "express";
import axios from "axios";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/moderate", authMiddleware, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Text is required" });
    }

    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({ message: "Groq API key missing" });
    }

    const MASTER_PROMPT = `
You are Suraksha Mitra, an advanced AI Safety Agent.

Analyze the user message and return:

1) Detected Language
2) Risk Score (0–100)
3) Final Moderation Decision
4) Active Protection Mode
5) Short Explanation (1–2 lines)
6) Smart Moderator Suggestion (max 2 sentences)

----------------------------------------
LANGUAGE OPTIONS
----------------------------------------
- English
- Hindi
- Marathi
- Hinglish
- Mixed

The explanation and suggestion MUST be written in the detected language.

----------------------------------------
DECISION OPTIONS
----------------------------------------
- Allow
- Review
- Block

----------------------------------------
RISK SCORE RULES
----------------------------------------
- Must be 0–100.
- Allow → 0–30
- Review → 31–70
- Block → 71–100
- Must reflect severity logically.

----------------------------------------
MODE OPTIONS
----------------------------------------
- General Mode
- Women Safety Shield Mode
- Student Safe Mode
- FinTech Fraud Shield Mode

----------------------------------------
DECISION RULES
----------------------------------------

Block if:
- Explicit suicide intent
- Direct violence threats
- Strong hate speech
- Clear scam/phishing
- Clear impersonation

Review if:
- Bullying
- Emotional distress
- Suspicious financial signals
- Moderate harassment

Allow if safe and neutral.

----------------------------------------
OUTPUT FORMAT
----------------------------------------

Return STRICT valid JSON only:

{
  "language": "",
  "risk_score": 0,
  "decision": "",
  "active_mode": "",
  "explanation": "",
  "suggestion": ""
}

No markdown.
No extra text.
No additional fields.
`;

    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: MASTER_PROMPT,
          },
          {
            role: "user",
            content: text,
          },
        ],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const aiText = response.data.choices[0].message.content.trim();

    let parsed;

    try {
      parsed = JSON.parse(aiText);
    } catch (error) {
      console.error("JSON Parse Error:", aiText);

      parsed = {
        language: "Unknown",
        risk_score: 50,
        decision: "Review",
        active_mode: "General Mode",
        explanation: "AI response formatting issue.",
        suggestion: "Manual moderator review recommended."
      };
    }

    res.status(200).json(parsed);

  } catch (error) {
    console.error("GROQ ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: "Moderation failed",
    });
  }
});

export default router;