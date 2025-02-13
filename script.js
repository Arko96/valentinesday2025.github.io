// Function to create a tiny heart
function createTinyHeart() {
    const tinyHeart = document.createElement('div');
    tinyHeart.classList.add('heart', 'tiny-heart');

    // Random position within the visible viewport
    const x = Math.random() * (window.innerWidth - 30); // Subtract heart width to keep it in view
    const y = Math.random() * (window.innerHeight - 30); // Subtract heart height to keep it in view
    tinyHeart.style.left = `${x}px`;
    tinyHeart.style.top = `${y}px`;

    // Random animation duration for variety
    const duration = Math.random() * 4 + 2; // Between 2 and 6 seconds
    tinyHeart.style.animationDuration = `${duration}s`;

    // Append the tiny heart to the body
    document.body.appendChild(tinyHeart);

    // Remove the tiny heart after the animation ends
    setTimeout(() => {
        tinyHeart.remove();
    }, duration * 1000); // Match the duration of the float animation
}

// Create tiny hearts at random intervals
setInterval(createTinyHeart, 500); // Create a new tiny heart every 500ms