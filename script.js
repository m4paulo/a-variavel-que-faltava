* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Georgia', serif;
  background: #f6f4f1;
  color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  max-width: 600px;
  text-align: center;
  padding: 40px;
}

h1 {
  margin-bottom: 30px;
}

.terminal {
  background: #1e1e1e;
  color: #dcdcdc;
  padding: 20px;
  text-align: left;
  font-family: monospace;
  border-radius: 8px;
  margin-bottom: 20px;
}

.highlight {
  color: #ffcc70;
}

.note {
  margin-bottom: 30px;
  font-style: italic;
}

button {
  padding: 14px 28px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  background: #2b2b2b;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #444;
}

.hidden {
  display: none;
}

#finalMessage {
  margin-top: 30px;
  font-size: 22px;
}

