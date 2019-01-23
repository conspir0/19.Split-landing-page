const left = document.querySelector('.left'),
      right = document.querySelector('.right'),
      container = document.querySelector('.container');

// Left side of container
left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})
left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

// Right side of container
right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})