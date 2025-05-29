<h1>NextMatch Pulse — Upcoming Football Matches</h1>

<h2>About NextMatch Pulse</h2>
<p>
  NextMatch Pulse is a modern and intuitive web application that provides up-to-date information on upcoming football matches worldwide. It retrieves live data from the Football-Data.org API, delivering real-time details including team names, official logos, competition information, and match kickoff times adjusted to your local timezone.
</p>
<p>
  Whether you're a passionate football fan tracking your favorite teams or simply appreciate clean and efficient web design, NextMatch Pulse offers a seamless and engaging user experience.
</p>

<hr>

<h2>Technologies Used</h2>
<ul>
  <li><strong>Frontend:</strong> HTML5, CSS3, and modern JavaScript (ES6+)</li>
  <li><strong>Backend:</strong> Node.js with Express.js for secure API communication</li>
  <li><strong>Data Source:</strong> Football-Data.org API (version 4)</li>
</ul>

<hr>

<h2>API Endpoint</h2>
<p>The application fetches scheduled matches using the following Football-Data.org API endpoint:</p>
<pre><code>GET https://api.football-data.org/v4/matches?status=SCHEDULED</code></pre>
<p>More info: <a href="https://www.football-data.org/documentation/quickstart">Football-Data.org API Documentation</a></p>

<hr>

<h2>Getting Started</h2>
<ol>
  <li>Clone the repository to your local machine.</li>
  <li>Create a <code>.env</code> file and add your Football-Data.org API key.</li>
  <li>Start the Node.js server.</li>
  <li>Open the application in your web browser to view live upcoming football matches.</li>
</ol>

<hr>

<h2>Preview</h2>
<p>Below is a preview of the application's user interface showing the list of upcoming matches:</p>
<img src="../public/output.png" alt="App Screenshot" width="600"/>
