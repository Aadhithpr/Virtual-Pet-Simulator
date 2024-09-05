// Retrieve the pet's name from local storage.
const petName = localStorage.getItem('petName');

// Retrieve the pet's type from local storage.
const petType = localStorage.getItem('petType');

// Set the text content of the element with the ID 'pet-name-tag' to the pet's name.
document.getElementById('pet-name-tag').innerText = petName;


// Initialize pet attributes
let hunger = 50;
let happiness = 50;
let energy = 50;

// Store image paths for different pet emotions
const petImages = {
    kitten: {
        happy: 'assets/kitten_happy.png',
        sad: 'assets/kitten_sad.png',
        hungry: 'assets/kitten_hungry.png',
        sleepy: 'assets/kitten_sleepy.png'
    },
    puppy: {
        happy: 'assets/puppy_happy.png',
        sad: 'assets/puppy_sad.png',
        hungry: 'assets/puppy_hungry.png',
        sleepy: 'assets/puppy_sleepy.png'
    },
    duckling: {
        happy: 'assets/duckling_happy.png',
        sad: 'assets/duckling_sad.png',
        hungry: 'assets/duckling_hungry.png',
        sleepy: 'assets/duckling_sleepy.png'
    }
};

// Update the visual status bars based on pet attributes
function updateStatusBars() {
    document.getElementById('hunger-bar').style.width = hunger + '%';
    document.getElementById('happiness-bar').style.width = happiness + '%';
    document.getElementById('energy-bar').style.width = energy + '%';
}

// Determine the pet's current emotion based on attributes
function getPetEmotion() {
    if (hunger >= 90) {
        return 'hungry';
    } else if (happiness <= 30) {
        return 'sad';
    } else if (energy <= 20) {
        return 'sleepy';
    } else {
        return 'happy';
    }
}

// Update the displayed pet image based on emotion
function updatePetImage() {
    const emotion = getPetEmotion();
    document.getElementById('pet').src = petImages[petType][emotion]; // Assuming 'petType' is defined elsewhere
}

// Decrease happiness, increase hunger, and decrease energy over time
function decreaseAttributesOverTime() {
    happiness = Math.max(0, happiness - 10);
    hunger = Math.min(100, hunger + 10);
    energy = Math.max(0, energy - 10);
    updateStatusBars();
    updatePetImage();
}

// Set up a timer to decrease attributes every 10 seconds
let attributeTimer = setInterval(decreaseAttributesOverTime, 10000);

// Event listener for feeding the pet
document.getElementById('feed-btn').addEventListener('click', function() {
    hunger = Math.max(0, hunger - 10);
    happiness = Math.min(100, happiness + 5);
    updateStatusBars();
    updatePetImage();
});

// Event listener for playing with the pet
document.getElementById('play-btn').addEventListener('click', function() {
    happiness = Math.min(100, happiness + 10);
    energy = Math.max(0, energy - 10);
    updateStatusBars();
    updatePetImage();

    // Reset the attribute decrease timer
    clearInterval(attributeTimer);
    attributeTimer = setInterval(decreaseAttributesOverTime, 10000);
});

// Event listener for putting the pet to sleep
document.getElementById('sleep-btn').addEventListener('click', function() {
    energy = Math.min(100, energy + 20);
    hunger = Math.min(100, hunger + 5);
    updateStatusBars();
    updatePetImage();
});

// Initialize the status bars and pet image on page load
updateStatusBars();
updatePetImage();


