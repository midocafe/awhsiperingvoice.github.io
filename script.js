const colorBlock = document.getElementById('colorBlock');
document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX + window.scrollX; // Add scroll position to X
  const mouseY = e.clientY + window.scrollY; // Add scroll position to Y

  colorBlock.style.left = (mouseX - colorBlock.offsetWidth / 2.4) + 'px';
  colorBlock.style.top = (mouseY - colorBlock.offsetHeight / 2) + 'px';
});
