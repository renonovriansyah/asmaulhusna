// 1. DAFTARKAN SERVICE WORKER (Wajib untuk PWA/Offline)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('SW: Terdaftar (Versi Aktif)'))
            .catch(err => console.log('SW: Gagal daftar', err));
    });
}

const dataAsmaulHusna = [
    { no: 0, latin: "Ya Allah", arabic: "يَا اَللّٰهُ", arti: "Wahai Allah" },
    { no: 1, latin: "Ar-Rahman", arabic: "ٱلرَّحْمٰنُ", arti: "Yang Maha Pengasih" },
    { no: 2, latin: "Ar-Rahim", arabic: "ٱلرَّحِيْمُ", arti: "Yang Maha Penyayang" },
    { no: 3, latin: "Al-Malik", arabic: "ٱلْمَلِكُ", arti: "Yang Maha Merajai" },
    { no: 4, latin: "Al-Quddus", arabic: "ٱلْقُدُّوْسُ", arti: "Yang Maha Suci" },
    { no: 5, latin: "As-Salam", arabic: "ٱلسَّلَامُ", arti: "Yang Maha Memberi Kesejahteraan" },
    { no: 6, latin: "Al-Mu'min", arabic: "ٱلْمُؤْمِنُ", arti: "Yang Maha Memberi Keamanan" },
    { no: 7, latin: "Al-Muhaimin", arabic: "ٱلْمُهَيْمِنُ", arti: "Yang Maha Pemelihara" },
    { no: 8, latin: "Al-Aziz", arabic: "ٱلْعَزِيْزُ", arti: "Yang Maha Perkasa" },
    { no: 9, latin: "Al-Jabbar", arabic: "ٱلْجَبَّارُ", arti: "Yang Memiliki Mutlak Kegagahan" },
    { no: 10, latin: "Al-Mutakabbir", arabic: "ٱلْمُتَكَبِّرُ", arti: "Yang Maha Megah" },
    { no: 11, latin: "Al-Khaliq", arabic: "ٱلْخَالِقُ", arti: "Yang Maha Pencipta" },
    { no: 12, latin: "Al-Bari'", arabic: "ٱلْبَارِئُ", arti: "Yang Maha Melepaskan" },
    { no: 13, latin: "Al-Mushawwir", arabic: "ٱلْمُصَوِّرُ", arti: "Yang Maha Membentuk Rupa" },
    { no: 14, latin: "Al-Ghaffar", arabic: "ٱلْغَفَّارُ", arti: "Yang Maha Pengampun" },
    { no: 15, latin: "Al-Qahhar", arabic: "ٱلْقَهَّارُ", arti: "Yang Maha Menundukkan" },
    { no: 16, latin: "Al-Wahhab", arabic: "ٱلْوَهَّابُ", arti: "Yang Maha Pemberi Karunia" },
    { no: 17, latin: "Ar-Razzaq", arabic: "ٱلرَّزَّاقُ", arti: "Yang Maha Pemberi Rezeki" },
    { no: 18, latin: "Al-Fattah", arabic: "ٱلْفَتَّاحُ", arti: "Yang Maha Pembuka Rahmat" },
    { no: 19, latin: "Al-'Alim", arabic: "ٱلْعَلِيْمُ", arti: "Yang Maha Mengetahui" },
    { no: 20, latin: "Al-Qabidh", arabic: "ٱلْقَابِضُ", arti: "Yang Maha Menyempitkan" },
    { no: 21, latin: "Al-Basit", arabic: "ٱلْبَاسِطُ", arti: "Yang Maha Melapangkan" },
    { no: 22, latin: "Al-Khafidh", arabic: "ٱلْخَافِضُ", arti: "Yang Maha Merendahkan" },
    { no: 23, latin: "Ar-Rafi'", arabic: "ٱلرَّافِعُ", arti: "Yang Maha Meninggikan" },
    { no: 24, latin: "Al-Mu'izz", arabic: "ٱلْمُعِزُّ", arti: "Yang Maha Memuliakan" },
    { no: 25, latin: "Al-Mudzill", arabic: "ٱلْمُذِلُّ", arti: "Yang Maha Menghinakan" },
    { no: 26, latin: "As-Sami'", arabic: "ٱلسَّمِيْعُ", arti: "Yang Maha Mendengar" },
    { no: 27, latin: "Al-Bashir", arabic: "ٱلْبَصِيْرُ", arti: "Yang Maha Melihat" },
    { no: 28, latin: "Al-Hakam", arabic: "ٱلْحَكَمُ", arti: "Yang Maha Menetapkan" },
    { no: 29, latin: "Al-'Adl", arabic: "ٱلْعَدْلُ", arti: "Yang Maha Adil" },
    { no: 30, latin: "Al-Lathif", arabic: "ٱللَّطِيْفُ", arti: "Yang Maha Lembut" },
    { no: 31, latin: "Al-Khabir", arabic: "ٱلْخَبِيْرُ", arti: "Yang Maha Mengenal" },
    { no: 32, latin: "Al-Halim", arabic: "ٱلْحَلِيْمُ", arti: "Yang Maha Penyantun" },
    { no: 33, latin: "Al-'Azhim", arabic: "ٱلْعَظِيْمُ", arti: "Yang Maha Agung" },
    { no: 34, latin: "Al-Ghafur", arabic: "ٱلْغَفُوْرُ", arti: "Yang Maha Pengampun" },
    { no: 35, latin: "Asy-Syakur", arabic: "ٱلشَّكُوْرُ", arti: "Yang Maha Pembalas Budi" },
    { no: 36, latin: "Al-'Aliyy", arabic: "ٱلْعَلِيُّ", arti: "Yang Maha Tinggi" },
    { no: 37, latin: "Al-Kabir", arabic: "ٱلْكَبِيْرُ", arti: "Yang Maha Besar" },
    { no: 38, latin: "Al-Hafizh", arabic: "ٱلْحَفِيْظُ", arti: "Yang Maha Memelihara" },
    { no: 39, latin: "Al-Muqit", arabic: "ٱلْمُقِيْتُ", arti: "Yang Maha Pemberi Kecukupan" },
    { no: 40, latin: "Al-Hasib", arabic: "ٱلْحَسِيْبُ", arti: "Yang Maha Membuat Perhitungan" },
    { no: 41, latin: "Al-Jalil", arabic: "ٱلْجَلِيْلُ", arti: "Yang Maha Luhur" },
    { no: 42, latin: "Al-Karim", arabic: "ٱلْكَرِيْمُ", arti: "Yang Maha Pemurah" },
    { no: 43, latin: "Ar-Raqib", arabic: "ٱلرَّقِيْبُ", arti: "Yang Maha Mengawasi" },
    { no: 44, latin: "Al-Mujib", arabic: "ٱلْمُجِيْبُ", arti: "Yang Maha Mengabulkan" },
    { no: 45, latin: "Al-Wasi'", arabic: "ٱلْوَاسِعُ", arti: "Yang Maha Luas" },
    { no: 46, latin: "Al-Hakim", arabic: "ٱلْحَكِيْمُ", arti: "Yang Maha Bijaksana" },
    { no: 47, latin: "Al-Wadud", arabic: "ٱلْوَدُوْدُ", arti: "Yang Maha Mengasihi" },
    { no: 48, latin: "Al-Majid", arabic: "ٱلْمَجِيْدُ", arti: "Yang Maha Mulia" },
    { no: 49, latin: "Al-Ba'its", arabic: "ٱلْبَاعِثُ", arti: "Yang Maha Membangkitkan" },
    { no: 50, latin: "Asy-Syahid", arabic: "ٱلشَّهِيْدُ", arti: "Yang Maha Menyaksikan" },
    { no: 51, latin: "Al-Haqq", arabic: "ٱلْحَقُّ", arti: "Yang Maha Benar" },
    { no: 52, latin: "Al-Wakil", arabic: "ٱلْوَكِيْلُ", arti: "Yang Maha Memelihara" },
    { no: 53, latin: "Al-Qawiyyu", arabic: "ٱلْقَوِيُّ", arti: "Yang Maha Kuat" },
    { no: 54, latin: "Al-Matin", arabic: "ٱلْمَتِيْنُ", arti: "Yang Maha Kokoh" },
    { no: 55, latin: "Al-Waliyy", arabic: "ٱلْوَلِيُّ", arti: "Yang Maha Melindungi" },
    { no: 56, latin: "Al-Hamid", arabic: "ٱلْحَمِيْدُ", arti: "Yang Maha Terpuji" },
    { no: 57, latin: "Al-Muhshi", arabic: "ٱلْمُحْصِيُ", arti: "Yang Maha Mengalkulasi" },
    { no: 58, latin: "Al-Mubdi'", arabic: "ٱلْمُبْدِئُ", arti: "Yang Maha Memulai" },
    { no: 59, latin: "Al-Mu'id", arabic: "ٱلْمُعِيْدُ", arti: "Yang Maha Mengembalikan Kehidupan" },
    { no: 60, latin: "Al-Muhyi", arabic: "ٱلْمُحْيِي", arti: "Yang Maha Menghidupkan" },
    { no: 61, latin: "Al-Mumit", arabic: "ٱلْمُمِيْتُ", arti: "Yang Maha Mematikan" },
    { no: 62, latin: "Al-Hayyu", arabic: "ٱلْحَيُّ", arti: "Yang Maha Hidup" },
    { no: 63, latin: "Al-Qayyum", arabic: "ٱلْقَيُّوْمُ", arti: "Yang Maha Mandiri" },
    { no: 64, latin: "Al-Wajid", arabic: "ٱلْوَاجِدُ", arti: "Yang Maha Penemu" },
    { no: 65, latin: "Al-Majid", arabic: "ٱلْمَاجِدُ", arti: "Yang Maha Mulia" },
    { no: 66, latin: "Al-Wahid", arabic: "ٱلْوَاحِدُ", arti: "Yang Maha Tunggal" },
    { no: 67, latin: "Al-Ahad", arabic: "ٱلْأَحَدُ", arti: "Yang Maha Esa" },
    { no: 68, latin: "Ash-Shamad", arabic: "ٱلصَّمَدُ", arti: "Yang Maha Dibutuhkan" },
    { no: 69, latin: "Al-Qadir", arabic: "ٱلْقَادِرُ", arti: "Yang Maha Menentukan" },
    { no: 70, latin: "Al-Muqtadir", arabic: "ٱلْمُقْتَدِرُ", arti: "Yang Maha Berkuasa" },
    { no: 71, latin: "Al-Muqaddim", arabic: "ٱلْمُقَدِّمُ", arti: "Yang Maha Mendahulukan" },
    { no: 72, latin: "Al-Mu'akkhir", arabic: "ٱلْمُؤَخِّرُ", arti: "Yang Maha Mengakhirkan" },
    { no: 73, latin: "Al-Awwal", arabic: "ٱلْأَوَّلُ", arti: "Yang Maha Awal" },
    { no: 74, latin: "Al-Akhir", arabic: "ٱلْأٰخِرُ", arti: "Yang Maha Akhir" },
    { no: 75, latin: "Azh-Zhahir", arabic: "ٱلظَّاهِرُ", arti: "Yang Maha Nyata" },
    { no: 76, latin: "Al-Bathin", arabic: "ٱلْبَاطِنُ", arti: "Yang Maha Gaib" },
    { no: 77, latin: "Al-Wali", arabic: "ٱلْوَالِي", arti: "Yang Maha Memerintah" },
    { no: 78, latin: "Al-Muta'ali", arabic: "ٱلْمُتَعَالِي", arti: "Yang Maha Tinggi" },
    { no: 79, latin: "Al-Barri", arabic: "ٱلْبَرُّ", arti: "Yang Maha Penderma" },
    { no: 80, latin: "At-Tawwab", arabic: "ٱلتَّوَّابُ", arti: "Yang Maha Penerima Tobat" },
    { no: 81, latin: "Al-Muntaqim", arabic: "ٱلْمُنْتَقِمُ", arti: "Yang Maha Pemberi Balasan" },
    { no: 82, latin: "Al-'Afuww", arabic: "ٱلْعَفُوُّ", arti: "Yang Maha Pemaaf" },
    { no: 83, latin: "Ar-Ra'uf", arabic: "ٱلرَّؤُوْفُ", arti: "Yang Maha Pengasuh" },
    { no: 84, latin: "Malikul-Mulk", arabic: "مَالِكُ ٱلْمُلْكِ", arti: "Yang Maha Penguasa Kerajaan" },
    { no: 85, latin: "Dzul-Jalali Wal-Ikram", arabic: "ذُو ٱلْجَلَالِ وَٱلْإِكْرَامِ", arti: "Yang Maha Pemilik Kebesaran dan Kemuliaan" },
    { no: 86, latin: "Al-Muqsit", arabic: "ٱلْمُقْسِطُ", arti: "Yang Maha Pemberi Keadilan" },
    { no: 87, latin: "Al-Jami'", arabic: "ٱلْجَامِعُ", arti: "Yang Maha Mengumpulkan" },
    { no: 88, latin: "Al-Ghaniyy", arabic: "ٱلْغَنِيُّ", arti: "Yang Maha Kaya" },
    { no: 89, latin: "Al-Mughni", arabic: "ٱلْمُغْنِي", arti: "Yang Maha Pemberi Kekayaan" },
    { no: 90, latin: "Al-Mani'", arabic: "ٱلْمَانِعُ", arti: "Yang Maha Mencegah" },
    { no: 91, latin: "Adh-Dhar", arabic: "ٱلضَّارُّ", arti: "Yang Maha Penimpa Kemudaratan" },
    { no: 92, latin: "An-Nafi'", arabic: "ٱلنَّافِعُ", arti: "Yang Maha Memberi Manfaat" },
    { no: 93, latin: "An-Nur", arabic: "ٱلنُّوْرُ", arti: "Yang Maha Bercahaya" },
    { no: 94, latin: "Al-Hadi", arabic: "ٱلْهَادِي", arti: "Yang Maha Pemberi Petunjuk" },
    { no: 95, latin: "Al-Badi'", arabic: "ٱلْبَدِيْعُ", arti: "Yang Maha Pencipta Indah" },
    { no: 96, latin: "Al-Baqi", arabic: "ٱلْبَاقِي", arti: "Yang Maha Kekal" },
    { no: 97, latin: "Al-Warits", arabic: "ٱلْوَارِثُ", arti: "Yang Maha Pewaris" },
    { no: 98, latin: "Ar-Rasyid", arabic: "ٱلرَّشِيْدُ", arti: "Yang Maha Pandai" },
    { no: 99, latin: "Ash-Shabur", arabic: "ٱلصَّبُوْرُ", arti: "Yang Maha Sabar" }
];

// 3. INISIALISASI DOM
const container = document.getElementById('container');
const searchInput = document.getElementById('search');
const fontSizeSlider = document.getElementById('fontSize');

// 4. FUNGSI RENDER CARD
function renderData(data) {
    container.innerHTML = data.map(item => `
        <div class="card">
            <div class="card-info">
                <div class="no">${item.no === 0 ? '✨' : '#' + item.no}</div>
                <div class="latin">${item.latin}</div>
                <div class="arti">${item.arti}</div>
            </div>
            <div class="arabic">${item.arabic}</div>
        </div>
    `).join('');
}

// 5. FITUR MEMORI UKURAN FONT (LocalStorage)
// Mengambil ukuran yang tersimpan atau gunakan default 40
const savedFontSize = localStorage.getItem('asmaul-font-size') || '40';
fontSizeSlider.value = savedFontSize;
document.documentElement.style.setProperty('--arabic-font-size', savedFontSize + 'px');

// 6. EVENT LISTENER SLIDER FONT
fontSizeSlider.addEventListener('input', (e) => {
    const size = e.target.value;
    document.documentElement.style.setProperty('--arabic-font-size', size + 'px');
    // Simpan ke memori browser
    localStorage.setItem('asmaul-font-size', size);
});

// 7. EVENT LISTENER SEARCH
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = dataAsmaulHusna.filter(item => 
        item.latin.toLowerCase().includes(term) || 
        item.arti.toLowerCase().includes(term)
    );
    renderData(filtered);
});

// 8. TAMPILKAN DATA PERTAMA KALI
renderData(dataAsmaulHusna);