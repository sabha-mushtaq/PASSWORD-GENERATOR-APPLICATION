// behaviour when clicked on logon button
// login.js
export function loginaction() {
    document.getElementById('loginbutton').addEventListener('click', function() {
      this.classList.add('cursor-progress');
      document.body.classList.add('blur-sm');
  
      // Wait for 3 seconds
      setTimeout(() => {
        // Remove the classes after 3 seconds
        this.classList.remove('cursor-progress');
        document.body.classList.remove('blur-sm');
        // Navigate to the next link
      window.location.href = 'index2.html';
      }, 3000);
    });
  }
  