document.addEventListener('DOMContentLoaded', function() {
  const h1 = document.getElementById('stream-slugger');
  if (h1) {
    h1.addEventListener('click', function() {
      alert('You clicked on stream slugger!');
      // Add your custom function here
    });
  }
});