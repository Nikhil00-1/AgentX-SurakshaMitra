import { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    if (!text.trim()) {
      alert("Enter text to analyze");
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/moderate",
        { text },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setResult(res.data);
    } catch (error) {
      alert("Analysis failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const getDecisionClass = (decision) => {
    if (!decision) return "";
    return decision.toLowerCase();
  };

  const getRiskColor = (score) => {
    if (score <= 30) return "#22c55e";
    if (score <= 70) return "#eab308";
    return "#ef4444";
  };

  return (
    <div className="dashboard-container">
      {/* NAVBAR */}
      <div className="dashboard-navbar">
        <h2>Suraksha Mitra</h2>
        <button onClick={logout}>Logout</button>
      </div>

      {/* MAIN */}
      <div className="dashboard-main">
        <h1>Live Risk Scanner</h1>
        <p>AI Powered Real-Time Content Threat Detection</p>

        <textarea
          placeholder="Enter your message here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className="analyze-btn" onClick={analyzeText}>
          {loading ? "Analyzing..." : "Analyze Content"}
        </button>

        {result && (
          <div className="results-section">

            {/* Language & Mode */}
            <div className="results-row">
              <div className="result-card">
                <h3>Detected Language</h3>
                <p>{result.language}</p>
              </div>

              <div className="result-card">
                <h3>Active Mode</h3>
                <p>{result.active_mode}</p>
              </div>
            </div>

            {/* Decision & Risk */}
            <div className="results-row">
              <div className={`result-card ${getDecisionClass(result.decision)}`}>
                <h3>Decision</h3>
                <p>{result.decision}</p>
              </div>

              <div className="result-card">
                <h3>Risk Score</h3>
                <p>{result.risk_score}%</p>

                <div className="risk-bar">
                  <div
                    className="risk-fill"
                    style={{
                      width: `${result.risk_score}%`,
                      backgroundColor: getRiskColor(result.risk_score),
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Explanation */}
            <div className="result-card full-width">
              <h3>Explanation</h3>
              <p>{result.explanation}</p>
            </div>

            {/* Suggestion */}
            <div className="result-card full-width">
              <h3>AI Suggestion</h3>
              <p>{result.suggestion}</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;