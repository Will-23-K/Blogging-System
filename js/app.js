
    document.addEventListener('DOMContentLoaded', () => {
      // DOM Elements
      const navItems = document.querySelectorAll('.nav-item');
      const contentPages = document.querySelectorAll('.content-page');
      const editWordBtn = document.getElementById('editWordBtn');
      const wordModal = document.getElementById('wordModal');
      const closeModalBtns = document.querySelectorAll('.close-modal, .btn-secondary');
      const saveWordBtn = document.getElementById('saveWord');
      const wordInput = document.getElementById('wordInput');
      const wordOfDay = document.querySelector('.word-of-day');
      const editBioBtn = document.getElementById('editBioBtn');
      const bioText = document.getElementById('bioText');
      const bioEdit = document.getElementById('bioEdit');
      const bioChars = document.getElementById('bioChars');
      const saveBioBtn = document.getElementById('saveBioBtn');
      const cancelBioBtn = document.getElementById('cancelBioBtn');
      const editIcons = document.querySelectorAll('.edit-icon');
      const editModal = document.getElementById('editModal');
      const editTitle = document.getElementById('editTitle');
      const editLabel = document.getElementById('editLabel');
      const editInput = document.getElementById('editInput');
      const saveEditBtn = document.getElementById('saveEdit');
      const cancelEditBtn = document.getElementById('cancelEdit');
      const uploadArea = document.getElementById('uploadArea');
      
      // Navigation
      navItems.forEach(item => {
        item.addEventListener('click', () => {
          const target = item.getAttribute('data-target');
          
          // Update active nav item
          navItems.forEach(navItem => navItem.classList.remove('active'));
          item.classList.add('active');
          
          // Show corresponding content page
          contentPages.forEach(page => {
            page.classList.remove('active');
            if (page.id === target) {
              page.classList.add('active');
            }
          });
        });
      });
      
      // Word of the Day Modal
      editWordBtn.addEventListener('click', () => {
        wordInput.value = wordOfDay.textContent.split('Edit')[0].trim();
        wordModal.classList.add('active');
      });
      
      // Close modals
      closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
          });
        });
      });
      
      // Save Word of the Day
      saveWordBtn.addEventListener('click', () => {
        const newWord = wordInput.value.trim();
        if (newWord) {
          wordOfDay.innerHTML = newWord + ' <button class="edit-word" id="editWordBtn">Edit</button>';
          // Reattach event listener to the new button
          document.getElementById('editWordBtn').addEventListener('click', () => {
            wordInput.value = wordOfDay.textContent.split('Edit')[0].trim();
            wordModal.classList.add('active');
          });
          wordModal.classList.remove('active');
        }
      });
      
      // Bio Editing
      editBioBtn.addEventListener('click', () => {
        bioText.style.display = 'none';
        bioEdit.style.display = 'block';
        bioChars.style.display = 'block';
        saveBioBtn.style.display = 'inline-block';
        cancelBioBtn.style.display = 'inline-block';
        editBioBtn.style.display = 'none';
        
        bioEdit.value = bioText.textContent;
        updateBioChars();
      });
      
      bioEdit.addEventListener('input', updateBioChars);
      
      function updateBioChars() {
        const remaining = 120 - bioEdit.value.length;
        bioChars.textContent = `${remaining} characters remaining`;
      }
      
      saveBioBtn.addEventListener('click', () => {
        bioText.textContent = bioEdit.value;
        cancelEdit();
      });
      
      cancelBioBtn.addEventListener('click', cancelEdit);
      
      function cancelEdit() {
        bioText.style.display = 'block';
        bioEdit.style.display = 'none';
        bioChars.style.display = 'none';
        saveBioBtn.style.display = 'none';
        cancelBioBtn.style.display = 'none';
        editBioBtn.style.display = 'inline-block';
      }
      
      // Edit category and location
      editIcons.forEach(icon => {
        icon.addEventListener('click', () => {
          const editType = icon.getAttribute('data-edit');
          const pill = icon.parentElement;
          const currentValue = pill.textContent.replace('✏️', '').trim();
          
          editTitle.textContent = editType.charAt(0).toUpperCase() + editType.slice(1);
          editLabel.textContent = `Your ${editType}`;
          editInput.value = currentValue;
          
          editModal.classList.add('active');
          
          saveEditBtn.onclick = () => {
            const newValue = editInput.value.trim();
            if (newValue) {
              pill.innerHTML = newValue + ` <span class="edit-icon" data-edit="${editType}">✏️</span>`;
              // Reattach event listener
              document.querySelector(`.edit-icon[data-edit="${editType}"]`).addEventListener('click', () => {
                editTitle.textContent = editType.charAt(0).toUpperCase() + editType.slice(1);
                editLabel.textContent = `Your ${editType}`;
                editInput.value = newValue;
                editModal.classList.add('active');
              });
              editModal.classList.remove('active');
            }
          };
        });
      });
      
      // File upload
      uploadArea.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'video/*,image/*';
        input.click();
        
        input.addEventListener('change', () => {
          if (input.files.length > 0) {
            const fileName = input.files[0].name;
            uploadArea.innerHTML = `
              <div class="upload-icon">✅</div>
              <p>${fileName}</p>
              <p>Click to change file</p>
            `;
          }
        });
      });
      
      // Drag and drop for upload
      uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = '#8a2be2';
      });
      
      uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      });
      
      uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        
        if (e.dataTransfer.files.length > 0) {
          const fileName = e.dataTransfer.files[0].name;
          uploadArea.innerHTML = `
            <div class="upload-icon">✅</div>
            <p>${fileName}</p>
            <p>Click to change file</p>
          `;
        }
      });
      
      // Generate sample content
      generateContent();
      
      function generateContent() {
        // Sample data
        const videos = [
          { title: 'Sunset at the Beach - Cinematic Vlog', creator: 'Yawork', date: '2 days ago', duration: '15:42', avatar: 'abstract.png' },
          { title: 'How to Edit Videos Like a Pro - Tutorial', creator: 'Yawork', date: '1 week ago', duration: '22:18', avatar: 'abstract.png' },
          { title: 'My Creative Process - Behind the Scenes', creator: 'Yawork', date: '2 weeks ago', duration: '18:33', avatar: 'abstract.png' },
          { title: 'Travel Vlog: Exploring the City', creator: 'Yawork', date: '3 weeks ago', duration: '25:07', avatar: 'abstract.png' }
        ];
        
        const peeps = [
          { title: 'Quick tip for better lighting!', plays: '12K', avatar: 'abstract.png' },
          { title: 'New camera setup 🎥', plays: '8.5K', avatar: 'abstract.png' },
          { title: 'Behind the scenes of my latest video', plays: '15.2K', avatar: 'abstract.png' },
          { title: 'Day in the life of a content creator', plays: '23.4K', avatar: 'abstract.png' },
          { title: 'This effect took me hours to perfect!', plays: '9.7K', avatar: 'abstract.png' },
          { title: 'Answering your questions', plays: '7.3K', avatar: 'abstract.png' }
        ];
        
        const posts = [
          { title: 'New gear arrived! So excited to try this out.', avatar: 'abstract.png' },
          { title: 'Just posted a new video, check it out!', avatar: 'abstract.png' },
          { title: 'Working on something special for you all.', avatar: 'abstract.png' },
          { title: 'Which thumbnail do you prefer?', avatar: 'abstract.png' },
          { title: 'Behind the scenes of my latest shoot.', avatar: 'abstract.png' },
          { title: 'Thank you all for 1M subscribers!', avatar: 'abstract.png' }
        ];
        
        const reposts = [
          { title: 'Amazing tutorial by @filmmakerpro', avatar: 'abstract.png' },
          { title: 'Check out this awesome cinematic shot', avatar: 'abstract.png' },
          { title: 'Great advice for new creators', avatar: 'abstract.png' },
          { title: 'This editing technique changed everything', avatar: 'abstract.png' },
          { title: 'Inspiring story from @creativejourney', avatar: 'abstract.png' },
          { title: 'Must-have gear for video creators', avatar: 'abstract.png' }
        ];
        
        // Generate video cards
        const videosGrid = document.querySelector('.videos-grid');
        videos.forEach(video => {
          videosGrid.innerHTML += `
            <article class="card">
              <div class="card-thumb">
                <img src="thumb.png" alt="${video.title}">
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
                <img src="thumb.png" alt="${peep.title}">
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
                <img src="thumb.png" alt="${post.title}">
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
                <img src="thumb.png" alt="${repost.title}">
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
    });


