// Upload functionality
export function initUpload() {
  const uploadArea = document.getElementById('uploadArea');
  
  if (!uploadArea) return;
  
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
}
