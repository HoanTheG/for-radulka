// Listen for click on the surprise button
document.getElementById('surpriseButton').addEventListener('click', function() {
    // Toggle the 'hidden' class for the hidden message
    var hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.classList.toggle('hidden');
    
    // Call the function to create hearts
    createHearts();
    
    // Play the surprise sound
    playSurpriseSound();
    
    // Show the surprise GIFs
    showSurpriseGIFs();
});

// Function to create hearts inside the container
function createHearts() {
    // Loop to create multiple hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * window.innerWidth + 'px'; // Adjust to use window.innerWidth
        heart.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(heart); // Append to the body instead of the container

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

// Function to play surprise sound
function playSurpriseSound() {
    var audio = document.getElementById('surpriseSound');
    audio.play();
}

// Function to show the surprise GIFs
// Function to show the surprise GIF
function showSurpriseGIF() {
    var gif1 = document.getElementById('surpriseGIF1');
    var gif2 = document.getElementById('surpriseGIF2');
    gif1.classList.remove('hidden');
    gif2.classList.remove('hidden');
}

// Listen for GIF button click
document.getElementById('gifButton').addEventListener('click', function() {
    // Show the surprise GIFs
    showSurpriseGIF();
});


// Listen for surprise button click
document.getElementById('surpriseButton').addEventListener('click', function() {
    // Add the class to trigger the animation
    this.classList.add('cute-animation');

    // Remove the class after the animation completes
    setTimeout(() => {
        this.classList.remove('cute-animation');
    }, 500);

    // Call createHearts function to create hearts
    createHearts();

    // Play the surprise sound
    playSurpriseSound();
});

// Listen for GIF button click
document.getElementById('gifButton').addEventListener('click', function() {
    // Show the surprise GIF
    showSurpriseGIF();
    
    // Play the second audio
    playSecondAudio();
});

// Function to play the second audio
function playSecondAudio() {
    var secondAudio = document.getElementById('secondAudio');
    secondAudio.play();
}
