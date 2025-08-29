// Helper functions
export function closeAllDropdowns() {
  document.querySelectorAll('.settings-dropdown').forEach(dd => {
    dd.style.display = 'none';
    const postSettings = dd.closest('.post-settings');
    if (postSettings) postSettings.setAttribute('aria-expanded', 'false');
  });
}

export function generateSampleContent() {
  // Sample data
  const videos = [
    { title: 'Sunset at the Beach - Cinematic Vlog', creator: 'Yawork', date: '2 days ago', duration: '15:42', avatar: 'assets/images/abstract.png' },
    { title: 'How to Edit Videos Like a Pro - Tutorial', creator: 'Yawork', date: '1 week ago', duration: '22:18', avatar: 'assets/images/abstract.png' },
    { title: 'My Creative Process - Behind the Scenes', creator: 'Yawork', date: '2 weeks ago', duration: '18:33', avatar: 'assets/images/abstract.png' },
    { title: 'Travel Vlog: Exploring the City', creator: 'Yawork', date: '3 weeks ago', duration: '25:07', avatar: 'assets/images/abstract.png' }
  ];
  
  const peeps = [
    { title: 'Quick tip for better lighting!', plays: '12K', avatar: 'assets/images/abstract.png' },
    { title: 'New camera setup 🎥', plays: '8.5K', avatar: 'assets/images/abstract.png' },
    { title: 'Behind the scenes of my latest video', plays: '15.2K', avatar: 'assets/images/abstract.png' },
    { title: 'Day in the life of a content creator', plays: '23.4K', avatar: 'assets/images/abstract.png' },
    { title: 'This effect took me hours to perfect!', plays: '9.7K', avatar: 'assets/images/abstract.png' },
    { title: 'Answering your questions', plays: '7.3K', avatar: 'assets/images/abstract.png' }
  ];
  
  const posts = [
    { title: 'New gear arrived! So excited to try this out.', avatar: 'assets/images/abstract.png' },
    { title: 'Just posted a new video, check it out!', avatar: 'assets/images/abstract.png' },
    { title: 'Working on something special for you all.', avatar: 'assets/images/abstract.png' },
    { title: 'Which thumbnail do you prefer?', avatar: 'assets/images/abstract.png' },
    { title: 'Behind the scenes of my latest shoot.', avatar: 'assets/images/abstract.png' },
    { title: 'Thank you all for 1M subscribers!', avatar: 'assets/images/abstract.png' }
  ];
  
  const reposts = [
    { title: 'Amazing tutorial by @filmmakerpro', avatar: 'assets/images/abstract.png' },
    { title: 'Check out this awesome cinematic shot', avatar: 'assets/images/abstract.png' },
    { title: 'Great advice for new creators', avatar: 'assets/images/abstract.png' },
    { title: 'This editing technique changed everything', avatar: 'assets/images/abstract.png' },
    { title: 'Inspiring story from @creativejourney', avatar: 'assets/images/abstract.png' },
    { title: 'Must-have gear for video creators', avatar: 'assets/images/abstract.png' }
  ];
  
  // Generate video cards
  const videosGrid = document.querySelector('.videos-grid');
  videos.forEach(video => {
    videosGrid.innerHTML += `
      <article class="card">
        <div class="card-thumb">
          <img src="assets/images/thumb.png" alt="${video.title}">
          <div class="card-duration">${video.duration}</div>
        </div>
        <div class="card-info">
          <h3 class="card-title">${video.title}</h3>
          <div class="card-meta">
            <img class="card-avatar" src="${video.avatar}" alt="${video.creator}">
            <span class="card-creator">${video.creator}</span>
            <span class="card-date">${video.date}</span>
          </div>
        </div>
      </article>
    `;
  });
  
  // Generate peep cards
  const peepsGrid = document.querySelector('.peeps-grid');
  peeps.forEach(peep => {
    peepsGrid.innerHTML += `
      <article class="card">
        <div class="card-thumb">
          <img src="assets/images/thumb.png" alt="${peep.title}">
          <div class="card-plays">▶️ ${peep.plays}</div>
        </div>
        <div class="card-info">
          <h3 class="card-title">${peep.title}</h3>
          <div class="card-meta">
            <img class="card-avatar" src="${peep.avatar}" alt="Creator">
          </div>
        </div>
      </article>
    `;
  });
  
  // Generate post cards
  const postsGrid = document.querySelector('.posts-grid');
  posts.forEach(post => {
    postsGrid.innerHTML += `
      <article class="card">
        <div class="card-thumb">
          <img src="assets/images/thumb.png" alt="${post.title}">
        </div>
        <div class="card-info">
          <h3 class="card-title">${post.title}</h3>
          <div class="card-meta">
            <img class="card-avatar" src="${post.avatar}" alt="Creator">
          </div>
        </div>
      </article>
    `;
  });
  
  // Generate repost cards
  const repostsGrid = document.querySelector('.reposts-grid');
  reposts.forEach(repost => {
    repostsGrid.innerHTML += `
      <article class="card">
        <div class="card-thumb">
          <img src="assets/images/thumb.png" alt="${repost.title}">
        </div>
        <div class="card-info">
          <h3 class="card-title">${repost.title}</h3>
          <div class="card-meta">
            <img class="card-avatar" src="${repost.avatar}" alt="Creator">
          </div>
        </div>
      </article>
    `;
  });
}
