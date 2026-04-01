 import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [buildInfo, setBuildInfo] = useState(null);

  useEffect(() => {
    // Try to fetch build info if it exists
    fetch('/build-info.json')
      .then(res => res.json())
      .then(data => setBuildInfo(data))
      .catch(() => setBuildInfo({ buildTime: 'Development', commitHash: 'local' }));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>🚀 CI/CD React Dashboard</h1>
          <p className="subtitle">Automated Deployment Pipeline</p>
        </div>

        <div className="card">
          <h2>✅ Deployment Successful!</h2>
          <p>This React application was automatically built and deployed using AWS CI/CD pipeline.</p>
        </div>

        <div className="grid">
          <div className="card">
            <h3>📦 Build Pipeline</h3>
            <ul>
              <li>GitHub → CodePipeline</li>
              <li>CodeBuild (npm install, build)</li>
              <li>Deploy to S3</li>
              <li>CloudFront Distribution</li>
            </ul>
          </div>

          <div className="card">
            <h3>🔧 Technologies</h3>
            <ul>
              <li>React 18</li>
              <li>AWS CodePipeline</li>
              <li>AWS CodeBuild</li>
              <li>S3 + CloudFront</li>
            </ul>
          </div>

          <div className="card">
            <h3>⚡ Features</h3>
            <ul>
              <li>Automated builds</li>
              <li>Instant deployment</li>
              <li>CloudFront CDN</li>
              <li>Version tracking</li>
            </ul>
          </div>

          <div className="card">
            <h3>📊 Build Info</h3>
            {buildInfo ? (
              <ul>
                <li><strong>Built:</strong> {buildInfo.buildTime}</li>
                <li><strong>Commit:</strong> {buildInfo.commitHash?.substring(0, 7) || 'N/A'}</li>
              </ul>
            ) : (
              <p>Loading build info...</p>
            )}
          </div>
        </div>

        <div className="footer">
          <p>Built by Debbie Oben | AWS DevOps Portfolio Project 4</p>
        </div>
      </div>
    </div>
  );
}

export default App;