// Drag image di dalam container
document.querySelectorAll('.illustration img').forEach(img => {
  let isDragging = false;
  let startX, startY;
  let currentX = 0;
  let currentY = 0;

  img.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    img.classList.add('dragging');
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      img.classList.remove('dragging');
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    currentX = e.clientX - startX;
    currentY = e.clientY - startY;

    const containerRect = img.parentElement.getBoundingClientRect();
    const imgRect = img.getBoundingClientRect();

    const initialLeft = img.offsetLeft;
    const initialTop = img.offsetTop;

    const minX = -initialLeft;
    const maxX = containerRect.width - initialLeft - imgRect.width;

    const minY = -20;
    const maxY = 20;

    if (currentX < minX) currentX = minX;
    if (currentX > maxX) currentX = maxX;
    if (currentY < minY) currentY = minY;
    if (currentY > maxY) currentY = maxY;

    img.style.transform = `translate(${currentX}px, ${currentY}px)`;
  });

  // Nonaktifkan drag default bawaan browser
  img.ondragstart = () => false;
});

// Efek klik pada ikon kontak (email, IG, WA)
document.querySelectorAll('.contacts').forEach(icon => {
  icon.addEventListener('click', () => {
    icon.classList.add('clicked');
    setTimeout(() => {
      icon.classList.remove('clicked');
    }, 400);
  });
});
