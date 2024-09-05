// Add an event listener to the "Play" button
document.getElementById('play-button').addEventListener('click', function() {
    // Hide the "Play" button
    this.classList.add('hidden');
 
    // After a short delay, show the pet form
    setTimeout(() => {
        document.getElementById('pet-form').classList.add('show');
    }, 500); 
});

// Add an event listener to the pet form submission
document.getElementById('pet-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the pet name and type from the form
    const petName = document.getElementById('pet-name').value;
    const petType = document.getElementById('pet-type').value;
    
    // Store the pet name and type in local storage
    localStorage.setItem('petName', petName);
    localStorage.setItem('petType', petType);
    
    // Redirect to the game page
    window.location.href = 'game.html'; 
});
