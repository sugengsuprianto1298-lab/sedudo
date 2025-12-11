// ============================
// ====== STYLE.JS CINEMATIC ======
// ============================

// Fungsi utama untuk menampilkan section yang dipilih
function show(sectionId, clickedElement) {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");

    // Fade out semua section dengan transisi cinematic
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-in-out';
    });

    // Hapus class active dari semua menu
    links.forEach(link => link.classList.remove("active"));

    // Setelah delay kecil, tampilkan section baru
    setTimeout(() => {
        sections.forEach(section => section.style.display = "none"); // sembunyikan semua
        const selected = document.getElementById(sectionId);
        selected.style.display = "block";

        // Fade in cinematic
        setTimeout(() => {
            selected.style.opacity = 1;
            selected.style.transform = 'translateY(0)';
        }, 50);

        // Tambahkan efek estetik cinematic
        selected.style.transition = 'all 0.7s ease-out';
    }, 300);

    // Tambahkan class active pada menu yang diklik
    clickedElement.classList.add("active");

    // Tambahkan efek cinematic pada navbar
    clickedElement.style.transition = 'all 0.4s ease';
    clickedElement.style.transform = 'scale(1.1)';
    clickedElement.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)';

    // Kembalikan efek setelah animasi
    setTimeout(() => {
        clickedElement.style.transform = '';
        clickedElement.style.boxShadow = '';
    }, 400);
}

// ============================
// ===== SCROLL ANIMATION =====
// ============================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight * 0.8) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
            section.style.transition = 'all 1s ease-out';
        }
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if(rect.top < window.innerHeight * 0.9) {
            img.style.opacity = 1;
            img.style.transform = 'scale(1) rotate(0deg)';
            img.style.transition = 'all 1s ease-in-out';
        }
    });
});

// ============================
// ===== INITIAL ANIMATION =====
// ============================

// Saat halaman pertama kali dimuat
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(30px)';
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = 0;
        img.style.transform = 'scale(0.95) rotate(-1deg)';
    });

    // Animasi cinematic pada home pertama kali
    setTimeout(() => {
        const home = document.getElementById('home');
        home.style.display = 'block';
        home.style.opacity = 1;
        home.style.transform = 'translateY(0)';
        home.style.transition = 'all 1s ease-out';
    }, 200);
});

// ============================
// ===== UTILITY FUNCTIONS =====
// ============================

// Fungsi untuk menambahkan cinematic hover pada gambar galeri
const galleryImages = document.querySelectorAll('#galeri img');
galleryImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.08) rotate(0.5deg)';
        img.style.boxShadow = '0 12px 28px rgba(0,0,0,0.4)';
        img.style.transition = 'all 0.5s ease-out';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotate(0deg)';
        img.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
        img.style.transition = 'all 0.5s ease-in';
    });
});
// Efek Kartun Penjaga dengan Speech Bubble
window.addEventListener('load', () => {
    const femaleGuard = document.querySelector('.guard.female');
    const maleGuard = document.querySelector('.guard.male');
    const speechBubble = document.getElementById('speech-bubble');

    // Delay cinematic untuk masuk
    setTimeout(() => {
        femaleGuard.style.opacity = 1;
        femaleGuard.style.bottom = '20px';
        femaleGuard.style.transform = 'translateY(0)';

        maleGuard.style.opacity = 1;
        maleGuard.style.bottom = '20px';
        maleGuard.style.transform = 'translateY(0)';

        // Tampilkan balon ucapan setelah karakter muncul
        setTimeout(() => {
            speechBubble.style.opacity = 1;
            speechBubble.style.top = '-120px';
        }, 800);
    }, 500);
});
