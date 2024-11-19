// Function to play sound for each game type
function playSound(gameType) {
    const audio = new Audio();
    let soundFile = '';

    // Select sound based on game
    if (gameType === 'alphabet') {
        soundFile = 'alphabet-game.mp3'; // Replace with actual file path
    } else if (gameType === 'matching') {
        soundFile = 'matching-game.mp3'; // Replace with actual file path
    } else if (gameType === 'memory') {
        soundFile = 'memory-game.mp3'; // Replace with actual file path
    }

    audio.src = soundFile;
    audio.play();

    // Fun game animation based on game selection
    let gameImage = document.getElementById('gameImage');
    gameImage.src = 'https://via.placeholder.com/250?text=' + gameType.charAt(0).toUpperCase() + gameType.slice(1); // Change image based on game type

    // Add fun animations to the image
    document.getElementById('gameAnimation').style.animation = 'bounce 1s ease-in-out infinite';
}