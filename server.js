require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.FOOTBALL_DATA_API_KEY;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/matches', async (req, res) => {
  try {
    const response = await fetch(
      'https://api.football-data.org/v4/matches?status=SCHEDULED',
      { headers: { 'X-Auth-Token': API_KEY } }
    );

    const text = await response.text();
    console.log("API raw response:", text);
    const data = JSON.parse(text);

    if (!response.ok) throw new Error(`Football-Data API error: ${response.status} - ${data.message}`);

    res.json(data.matches);
  } catch (err) {
    console.error("Server Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});