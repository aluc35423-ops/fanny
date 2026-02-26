// =========================================
// 1. LISTA DE REPRODUCCIÓN (PLAYLIST)
// =========================================
const playlist = [
    {
        title: "Desvelado",
        artist: "Bobby Pulido",
        audioSrc: "static/music/desvelado.mp3",
        coverSrc: "static/img/desvelado.avif",
        message: "Para todas esas noches que me quedé pensando en ti..."
    },
    {
        title: "2 AM",
        artist: "Mustard Service",
        audioSrc: "static/music/2am.mp3",
        coverSrc: "static/img/2am.avif",
        message: "Porque a esta hora mi mente siempre viaja hacia donde estás tú.",
        isSpecial: true
    },
    {
        title: "A un minuto de ti",
        artist: "Mikel Erentxun",
        audioSrc: "static/music/A_un_minuto_de_ti.mp3",
        coverSrc: "static/img/minuto.avif",
        message: "Contigo siento que ni el tiempo ni la distancia podría llegar a importar."
    },
    {
        title: "Accidente",
        artist: "Las Ligas Menores",
        audioSrc: "static/music/accidente.mp3",
        coverSrc: "static/img/accidente.avif",
        message: "Eres el accidente más bonito."
    },
    {
        title: "Amor",
        artist: "Dannylux, Alta Elegancia",
        audioSrc: "static/music/amor.mp3",
        coverSrc: "static/img/amor.avif",
        message: "Eres el mejor regalo que alguien podría tener.",
        isSpecial: true
    },
    {
        title: "Nubes",
        artist: "Caifanes",
        audioSrc: "static/music/caifanesnubes.mp3",
        coverSrc: "static/img/ca.avif",
        message: "Quiero dar una vuelta al cielo para ver tu eternidad."
    },
    {
        title: "Te estoy mirando",
        artist: "Caifanes",
        audioSrc: "static/music/CaifanesTeEstoyMirando.mp3",
        coverSrc: "static/img/viento.avif",
        message: "Si al mirarte tuviera que morir, no me importaria hacerlo."
    },
    {
        title: "Divergencia",
        artist: "Enjambre",
        audioSrc: "static/music/divergencia.mp3",
        coverSrc: "static/img/divergencia.avif",
        message: "Todo me puede angustiar, pero tú me haces vivir."
    },
    {
        title: "¿Dónde estás?",
        artist: "Duck Fizz",
        audioSrc: "static/music/donde estas.mp3",
        coverSrc: "static/img/donde.avif",
        message: "Hasta que me duela todo.",
        isSpecial: true
    },
    {
        title: "La Diferencia",
        artist: "Enjambre",
        audioSrc: "static/music/EnjambreLaDiferencia.mp3",
        coverSrc: "static/img/diferencia.avif",
        message: "Hiciste de mi mundo algo mejor."
    },
    {
        title: "I Could Die For You",
        artist: "Red Hot Chilli Peppers",
        audioSrc: "static/music/ICouldDieforYou.mp3",
        coverSrc: "static/img/die.avif",
        message: "Te daría todo de mí, sin pensarlo dos veces."
    },
    {
        title: "Loco (Tu Forma de Ser)",
        artist: "Autenticos Decadentes",
        audioSrc: "static/music/loco.mp3",
        coverSrc: "static/img/loco.avif",
        message: "En mi mente suenas a esta canción.",
        isSpecial: true
    },
    {
        title: "Money",
        artist: "The Drums",
        audioSrc: "static/music/money.mp3",
        coverSrc: "static/img/money.avif",
        message: "Podría no tener nada, pero si te tuviera a ti, siento que lo tendría todo."
    },
    {
        title: "Para que no digas que no pienso en ti",
        artist: "Caifanes",
        audioSrc: "static/music/ParaQueNoDigasQueNoPiensoenTi.mp3",
        coverSrc: "static/img/ca.avif",
        message: "Amo pensarte."
    },
    {
        title: "Passionfruit",
        artist: "Drake",
        audioSrc: "static/music/Passion.mp3",
        coverSrc: "static/img/passion.avif",
        message: "Si el sentimiento de tranquilidad se pudiera expresar, seria así:",
        isSpecial: true
    },
    {
        title: "Ring Ring Ring",
        artist: "Tyler, the creator",
        audioSrc: "static/music/ring.mp3",
        coverSrc: "static/img/ring.avif",
        message: "Se que me dijiste que me alejara, pero te extraño."
    },
    {
        title: "The Longest Wave",
        artist: "Red Hot Chilli Peppers",
        audioSrc: "static/music/TheLongestWave.mp3",
        coverSrc: "static/img/Red_Hot_Chilli_Peppers.avif",
        message: "Esperaría el tiempo que fuera necesario si al final la ola me llevará a ti.",
        isSpecial: true
    },
    {
        title: "Tú",
        artist: "Sabino",
        audioSrc: "static/music/Tu.mp3",
        coverSrc: "static/img/tu.avif",
        message: "Esta canción no se explica, se siente."
    },
    {
        title: "Viento",
        artist: "Caifanes",
        audioSrc: "static/music/viento.mp3",
        coverSrc: "static/img/viento.avif",
        message: "Peiname el alma.",
        isSpecial: true
    },
    {
        title: "Siesta Freestyle",
        artist: "Lewis Ofman",
        audioSrc: "static/music/siesta.mp3",
        coverSrc: "static/img/siesta.avif",
        message: "Podría estar equivocado, pero esta canción tiene tus vibras."
    }
];

let currentSongIndex = 0;

// =========================================
// 2. ELEMENTOS DEL DOM
// =========================================
const musicPlayer = document.getElementById('musicPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const disc = document.querySelector('.disc');

const songTitleEl = document.getElementById('songTitle');
const songArtistEl = document.getElementById('songArtist');
const songMessageEl = document.getElementById('songMessage');
const songCoverEl = document.getElementById('songCover');

const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const durationTimeEl = document.getElementById('durationTime');

const hojas = document.querySelectorAll('[class^="hoja-"]');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// =========================================
// 3. ESTADO GLOBAL DE ANIMACIÓN
// =========================================
let isPlaying = false; 
let animationPaused = true; 
let angulo = 0;
const amplitud = 5; 
const velocidad = 0.02; 
let transformacionesOriginales = [];

let isSpecialSong = false;

// =========================================
// 4. FUNCIONES DE REPRODUCCIÓN
// =========================================
// Formatear segundos a "Minutos:Segundos"
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Cargar la información de la canción elegida
function loadSong(index) {
    const song = playlist[index];
    
    // Actualizar textos e imagen
    songTitleEl.textContent = song.title;
    songArtistEl.textContent = song.artist;
    songCoverEl.src = song.coverSrc;
    
    if (song.isSpecial) {
        isSpecialSong = true;
    } else {
        isSpecialSong = false;
    }

    // Actualizar el mensaje oculto
    if (song.message) {
        songMessageEl.textContent = `"${song.message}"`;
    } else {
        songMessageEl.textContent = ""; // Lo limpia si no hay mensaje
    }

    // Actualizar audio
    musicPlayer.src = song.audioSrc;
    
    // Reiniciar barra
    progressBar.value = 0;
    
    // Si estaba sonando, reproducir la nueva automáticamente
    if (isPlaying) {
        musicPlayer.play();
        disc.style.animationPlayState = 'running';
        animationPaused = false;
    }
}

// Inicializar la primera canción
loadSong(currentSongIndex);

// =========================================
// 5. EVENTOS DEL REPRODUCTOR
// =========================================
// Mostrar la duración al cargar
musicPlayer.addEventListener('loadedmetadata', () => {
    durationTimeEl.textContent = formatTime(musicPlayer.duration);
});

// Actualizar barra y color mágico (Arcoíris)
musicPlayer.addEventListener('timeupdate', () => {
    if (!musicPlayer.duration) return;
    
    // Progreso de la barra
    const progress = (musicPlayer.currentTime / musicPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeEl.textContent = formatTime(musicPlayer.currentTime);

    // Cambio de color dinámico
    const vueltas = 15; // Veces que dará la vuelta al arcoíris por canción
    const hue = ((musicPlayer.currentTime / musicPlayer.duration) * 360 * vueltas) % 360; 
    
    // Aplicar el color a la variable CSS
    document.documentElement.style.setProperty('--green', `hsl(${hue}, 80%, 55%)`);
});

// Arrastrar la barra
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * musicPlayer.duration;
    musicPlayer.currentTime = seekTime;
});

// Botón Play / Pause
playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        musicPlayer.pause();
        disc.style.animationPlayState = 'paused';
        animationPaused = true;
        playPauseBtn.classList.add('paused');
    } else {
        musicPlayer.play();
        disc.style.animationPlayState = 'running';
        animationPaused = false;
        playPauseBtn.classList.remove('paused');
    }
    isPlaying = !isPlaying;
});

// Botón Anterior
prevBtn.addEventListener('click', () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
    }
    loadSong(currentSongIndex);
});

// Botón Siguiente
nextBtn.addEventListener('click', () => {
    currentSongIndex++;
    if (currentSongIndex > playlist.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
});

// Auto-saltar a la siguiente al terminar
musicPlayer.addEventListener('ended', () => {
    nextBtn.click();
});

// =========================================
// 6. ANIMACIÓN DE LAS HOJAS (BALANCEO)
// =========================================
setTimeout(() => {
    transformacionesOriginales = Array.from(hojas).map(hoja => {
        const estilo = window.getComputedStyle(hoja);
        return estilo.transform !== 'none' ? estilo.transform : '';
    });

    function animarHojas() {
        if (!animationPaused) {
            const oscilacion = Math.sin(angulo) * amplitud;
            hojas.forEach((hoja, index) => {
                const transformOriginal = transformacionesOriginales[index];
                hoja.style.transform = `${transformOriginal} rotate(${oscilacion}deg)`;
            });
            angulo += velocidad;
        }
        requestAnimationFrame(animarHojas);
    }
    
    requestAnimationFrame(animarHojas);
}, 1000);

// =========================================
// 7. EFECTO DE VIENTO Y PARTÍCULAS (CANVAS)
// =========================================
class Particle {
    constructor(x, y, minRadius, maxRadius, color, changeSpeed) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * (maxRadius - minRadius) + minRadius;
        this.color = color;
        this.changeSpeed = changeSpeed;
        this.maxRadius = maxRadius;
        this.minRadius = minRadius;
        
        // Viento horizontal y ligera variación vertical
        this.vx = Math.random() * 2 + 0.5; 
        this.vy = (Math.random() - 0.5) * 1; 

        this.heartColor = `hsl(${Math.random() * 360}, 100%, 65%)`;
    }
    
    update() {
        if (!animationPaused) {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;
        }

        this.radius += this.changeSpeed;
        if (this.radius > this.maxRadius || this.radius < this.minRadius) {
            this.changeSpeed = -this.changeSpeed;
        }
        
        this.draw();
    }
    
    draw() {
        if (isSpecialSong) {
            // SI ES LA CANCIÓN ESPECIAL: Dibujamos corazones de colores
            ctx.font = `${this.radius * 6}px Arial`; 
            ctx.fillStyle = this.heartColor; // <-- ¡Usamos el color aleatorio!
            ctx.fillText('❤', this.x, this.y);
        } else {
            // CANCIÓN NORMAL: Dibujamos los círculos de colores
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
}

const particles = [];
const colors = ['#eee776', '#d6d7df', '#eaea7d'];

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0; 
    
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push(new Particle(x, y, 1, 3, color, Math.random() * 0.1));
    }
}

function animateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animateCanvas);
}

window.addEventListener('resize', initCanvas);
initCanvas();
animateCanvas();

// =========================================
// 8. LÓGICA DE LA CARTA SECRETA (MODAL)
// =========================================
const letterBtn = document.getElementById('letterBtn');
const letterModal = document.getElementById('letterModal');
const closeModal = document.getElementById('closeModal');

// Función para abrir la carta
letterBtn.addEventListener('click', () => {
    letterModal.classList.add('active');
    // Bajar el volumen suavemente al 20%
    musicPlayer.volume = 0.2; 
});

// Función para cerrar la carta
function closeLetterModal() {
    letterModal.classList.remove('active');
    // Restaurar el volumen al 100%
    musicPlayer.volume = 1.0;
}

// Cerrar con la X
closeModal.addEventListener('click', closeLetterModal);

// Cerrar si dan clic fuera de la caja de la carta (en el fondo oscuro)
letterModal.addEventListener('click', (e) => {
    if (e.target === letterModal) {
        closeLetterModal();
    }
});

// Cerrar con la tecla Escape (opcional, buena práctica de UX)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && letterModal.classList.contains('active')) {
        closeLetterModal();
    }
});