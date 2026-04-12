const cursor = document.querySelector("#custom-cursor");
let mouseX = innerWidth / 2,
  mouseY = innerHeight / 2;
let ballX = innerWidth / 2,
  ballY = innerHeight / 2;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // "* 0.x" define smoothness.
  ballX += (mouseX - ballX) * 0.3;
  ballY += (mouseY - ballY) * 0.3;

  cursor.style.transform = `translate3d(${ballX - 12}px, ${ballY - 12}px, 0)`;

  requestAnimationFrame(animate);
}

animate();
