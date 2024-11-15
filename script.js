function spawnHearts() {
  const button = document.querySelector('.heart-btn');
  const container = document.querySelector('.container');

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤';
    heart.style.left = `${button.offsetLeft + button.offsetWidth / 2 - 10}px`;
    heart.style.top = `${button.offsetTop}px`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}
