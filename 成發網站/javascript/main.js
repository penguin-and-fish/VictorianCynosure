const lottiePlayer = document.querySelector('dotlottie-player');

lottiePlayer.parentElement.addEventListener('mouseenter', () => {
    lottiePlayer.play();
});

lottiePlayer.parentElement.addEventListener('mouseleave', () => {
    lottiePlayer.stop();
});