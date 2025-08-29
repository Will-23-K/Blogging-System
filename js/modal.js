import { closeAllDropdowns } from '../utils/helpers.js';

// Modal functionality
export function initModals() {
  const editWordBtn = document.getElementById('editWordBtn');
  const wordModal = document.getElementById('wordModal');
  const closeModalBtns = document.querySelectorAll('.close-modal, .btn-secondary');
  const saveWordBtn = document.getElementById('saveWord');
  const wordInput = document.getElementById('wordInput');
  const wordOfDay = document.querySelector('.word-of-day');
  const editModal = document.getElementById('editModal');
  const editTitle = document.getElementById('editTitle');
  const editLabel = document.getElementById('editLabel');
  const editInput = document.getElementById('editInput');
  const saveEditBtn = document.getElementById('saveEdit');
  const cancelEditBtn = document.getElementById('cancelEdit');
  const editIcons = document.querySelectorAll('.edit-icon');
  
  // Word of the Day Modal
  if (editWordBtn) {
    editWordBtn.addEventListener('click', () => {
      wordInput.value = wordOfDay.textContent.split('Edit')[0].trim();
      wordModal.classList.add('active');
    });
  }
  
  // Close modals
  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
      });
    });
  });
  
  // Save Word of the Day
  if (saveWordBtn) {
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
  }
  
  // Edit category and location
  if (editIcons.length) {
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
  }
  
  // Close on Escape globally
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
      });
    }
  });
}
