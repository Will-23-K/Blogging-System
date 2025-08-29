
   import { initModals } from './components/modal.js';
import { initUpload } from './components/upload.js';
import { initNavigation } from './components/navigation.js';
import { generateSampleContent } from './utils/helpers.js';

// Main application initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initModals();
  initUpload();
  initNavigation();
  
  // Bio Editing
  const editBioBtn = document.getElementById('editBioBtn');
  const bioText = document.getElementById('bioText');
  const bioEdit = document.getElementById('bioEdit');
  const bioChars = document.getElementById('bioChars');
  const saveBioBtn = document.getElementById('saveBioBtn');
  const cancelBioBtn = document.getElementById('cancelBioBtn');
  
  if (editBioBtn) {
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
  }
  
  if (bioEdit) {
    bioEdit.addEventListener('input', updateBioChars);
  }
  
  function updateBioChars() {
    const remaining = 120 - bioEdit.value.length;
    bioChars.textContent = `${remaining} characters remaining`;
  }
  
  if (saveBioBtn) {
    saveBioBtn.addEventListener('click', () => {
      bioText.textContent = bioEdit.value;
      cancelEdit();
    });
  }
  
  if (cancelBioBtn) {
    cancelBioBtn.addEventListener('click', cancelEdit);
  }
  
  function cancelEdit() {
    bioText.style.display = 'block';
    bioEdit.style.display = 'none';
    bioChars.style.display = 'none';
    saveBioBtn.style.display = 'none';
    cancelBioBtn.style.display = 'none';
    editBioBtn.style.display = 'inline-block';
  }
  
  // Generate sample content
  generateSampleContent();
  
  // Composer tabs
  const composerTabs = document.querySelectorAll('.composer-tab');
  if (composerTabs.length) {
    composerTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        composerTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const type = tab.getAttribute('data-type');
        const uploadArea = document.getElementById('uploadArea');
        
        // Update upload area text based on type
        if (type === 'video') {
          uploadArea.innerHTML = `
            <div class="upload-icon">📹</div>
            <p>Click to upload or drag and drop</p>
            <p>MP4, MOV, AVI, MKV (max 10GB)</p>
          `;
        } else if (type === 'peep') {
          uploadArea.innerHTML = `
            <div class="upload-icon">🎬</div>
            <p>Click to upload or drag and drop</p>
            <p>MP4, MOV (max 5min, 500MB)</p>
          `;
        } else {
          uploadArea.innerHTML = `
            <div class="upload-icon">🖼️</div>
            <p>Click to upload or drag and drop</p>
            <p>JPG, PNG, GIF (max 20MB)</p>
          `;
        }
      });
    });
  }
});
