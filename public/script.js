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

      const teamsDiv = document.createElement('div');
      teamsDiv.className = 'teams';

      const homeTeamDiv = document.createElement('div');
      homeTeamDiv.className = 'team home-team';
      const homeLogo = document.createElement('img');
      homeLogo.src = match.homeTeam.crest || '';
      homeLogo.alt = `${match.homeTeam.name} Logo`;
      homeTeamDiv.appendChild(homeLogo);
      const homeName = document.createElement('span');
      homeName.textContent = match.homeTeam.name;
      homeTeamDiv.appendChild(homeName);

     
      const vsSpan = document.createElement('span');
      vsSpan.textContent = 'vs';
      vsSpan.className = 'vs-separator';

    
      const awayTeamDiv = document.createElement('div');
      awayTeamDiv.className = 'team away-team';
      const awayLogo = document.createElement('img');
      awayLogo.src = match.awayTeam.crest || '';
      awayLogo.alt = `${match.awayTeam.name} Logo`;
      awayTeamDiv.appendChild(awayLogo);
      const awayName = document.createElement('span');
      awayName.textContent = match.awayTeam.name;
      awayTeamDiv.appendChild(awayName);

      teamsDiv.append(homeTeamDiv, vsSpan, awayTeamDiv);

      
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

      card.append(teamsDiv, competition, time);
      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p class="error">Error loading matches: ${err.message}</p>`;
    console.error(err);
  }
}

window.addEventListener('DOMContentLoaded', fetchMatches);
