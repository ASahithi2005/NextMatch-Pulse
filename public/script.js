const container = document.getElementById('matches-container');

async function fetchMatches() {
  container.innerHTML = '<p class="loading">Loading matches…</p>';
  try {
    const res = await fetch('/api/matches');
    if (!res.ok) throw new Error(`Server returned ${res.status}`);
    const matches = await res.json();

    if (!matches || matches.length === 0) {
      container.innerHTML = `
        <div class="no-matches">
          <p>No upcoming matches available right now.</p>
          <p>Please check back later or refresh the page.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    matches.forEach(match => {
      const card = document.createElement('div');
      card.className = 'match-card';

      const title = document.createElement('h2');
      title.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name}`;

      const competition = document.createElement('p');
      competition.textContent = `Competition: ${match.competition?.name || 'N/A'}`;

      const time = document.createElement('time');
      const dateObj = new Date(match.utcDate);
      time.textContent = dateObj.toLocaleString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      card.append(title, competition, time);
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p class="error">Error loading matches: ${err.message}</p>`;
    console.error(err);
  }
}

window.addEventListener('DOMContentLoaded', fetchMatches);
