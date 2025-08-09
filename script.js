    function startCountdown() {
  document.getElementById("countdownText").textContent = "Countdown Running!";
  document.querySelector("button").style.display = "none";
  document.getElementById("countdownTimer").style.display = "block";

  let seconds = 10;
  const display = document.getElementById("timerDisplay");

  const interval = setInterval(() => {
    display.textContent = `00d 00h 00m ${seconds}s`;
    if (seconds === 0) {
      clearInterval(interval);
      showCelebration();
    }
    seconds--;
  }, 1000);
}

function showCelebration() {
  document.getElementById("countdownTimer").style.display = "none";
  document.getElementById("celebration").style.display = "block";
  document.getElementById("footerMsg").style.display = "none";
}

function cutCake() {
  document.getElementById("cakeGif").style.display = "block";
  document.getElementById("birthdayMsg").style.display = "block";

  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play();

  const fireworks = document.getElementById("fireworksContainer");
  fireworks.style.display = "block";
  for (let i = 0; i < 25; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random() * window.innerWidth + "px";
    fw.style.top = Math.random() * window.innerHeight + "px";
    fw.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    fireworks.appendChild(fw);
    setTimeout(() => fw.remove(), 1000);
  }

  const glitter = document.getElementById("glitterContainer");
  glitter.style.display = "block";
  for (let i = 0; i < 100; i++) {
    const star = document.createElement("div");
    star.className = "glitter";
    star.style.left = Math.random() * 100 + "vw";
    star.style.animationDelay = Math.random() + "s";
    glitter.appendChild(star);
    setTimeout(() => star.remove(), 3000);
  }

  const hearts = document.getElementById("heartContainer");
  hearts.style.display = "block";
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0";
    hearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}
