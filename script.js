document.addEventListener('DOMContentLoaded', function() {
    const images = ['assets/1shai.jpg', 'assets/2shai.jpg', 'assets/3shai.jfif']; // Lista de imagens
    let currentIndex = 0;
    const slideInterval = 7000; // Intervalo de tempo

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const slider = document.getElementById('slider');
        slider.style.opacity = 0; // Começa com opacidade zero
        setTimeout(function() {
            slider.src = images[currentIndex];
            slider.style.opacity = 4; // Após trocar a imagem, restaura a opacidade
        }, 500); // Tempo de espera antes de mostrar a próxima imagem
    }

    // Inicia a troca automática das imagens
    setInterval(changeImage, slideInterval);
});

document.addEventListener('DOMContentLoaded', function() {
    const images = ['assets/4shai.jpeg', 'assets/5shai.jpg', 'assets/6shai.jpg'];
    let currentIndex = 0;
    const slideInterval = 5000;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const slider = document.getElementById('slider2');
        slider.style.opacity = 0; 
        setTimeout(function() {
            slider.src = images[currentIndex];
            slider.style.opacity = 3;
        }, 500); 
    }

    setInterval(changeImage, slideInterval);
});

document.addEventListener('DOMContentLoaded', function() {
    const images = ['assets/7shai.jpg', 'assets/8shai.jpg', 'assets/9shai.jpg'];
    let currentIndex = 0;
    const slideInterval = 6000;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const slider = document.getElementById('slider3');
        slider.style.opacity = 0; 
        setTimeout(function() {
            slider.src = images[currentIndex];
            slider.style.opacity = 2;
        }, 500); 
    }

    setInterval(changeImage, slideInterval);
});

//EFEITO NO HOBBIES H2
