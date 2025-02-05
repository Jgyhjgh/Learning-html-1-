document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const emoji = document.getElementById('emoji');
    const emojis = ['🙂', '😃', '😊', '🤩', '😍'];

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            emoji.textContent = emojis[index];
            emoji.style.opacity = '1';
        });
    });
});