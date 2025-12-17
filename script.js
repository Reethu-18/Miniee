function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const landingPage = document.getElementById('landingPage');
    const scrapbook = document.getElementById('scrapbook');

    // 1. Animate Envelope Opening
    envelope.classList.add('envelope-open');

    // 2. Wait for animation, then slide up landing page
    setTimeout(() => {
        landingPage.classList.add('slide-up');
        
        // 3. Reveal the scrapbook
        setTimeout(() => {
            landingPage.style.display = 'none';
            scrapbook.style.display = 'block';
            createHearts(); // Start heart animation
        }, 800);
    }, 1000);
}

// Function to create floating hearts background
function createHearts() {
    const heartContainer = document.body;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        
        // Randomize position and size
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        heartContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}