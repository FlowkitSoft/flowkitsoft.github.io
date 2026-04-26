// ========== DATA SOFTWARE ==========
// Tambah software baru cukup dengan menambah objek di array ini

const softwareList = [
    {
        id: 1,
        icon: 'fas fa-cash-register',
        badge: '#Business',
        title: 'ExCash',
        desc: 'Software kasir berbasis Excel untuk manajemen penjualan, stok, dan laporan keuangan real-time.',
        meta1: '<i class="fas fa-chart-line"></i> Keuangan',
        meta2: '<i class="fas fa-file-excel"></i> Excel',
        download: '#',
        infoId: 'excash',
        infoTitle: 'ExCash',
        infoDesc: 'Software kasir berbasis Excel yang dirancang untuk memudahkan manajemen penjualan, pembelian, dan stok barang. Dilengkapi dengan fitur laporan laba rugi real-time.',
        infoTech: 'Microsoft Excel | VBA Macro | Pivot Table'
    },
    {
        id: 2,
        icon: 'fas fa-hand-holding-usd',
        badge: '#Finance',
        title: 'ExDebt',
        desc: 'Software pencatatan hutang-piutang dengan monitoring jatuh tempo dan laporan keuangan akurat.',
        meta1: '<i class="fas fa-chart-line"></i> Akuntansi',
        meta2: '<i class="fas fa-file-excel"></i> Excel',
        download: '#',
        infoId: 'exdebt',
        infoTitle: 'ExDebt',
        infoDesc: 'Aplikasi pencatatan hutang-piutang dengan sistem monitoring jatuh tempo pembayaran. Memudahkan pengelolaan data debitur dan laporan keuangan.',
        infoTech: 'Microsoft Excel | VBA Programming | Data Validation'
    },
    {
        id: 3,
        icon: 'fas fa-globe',
        badge: '#WebDev',
        title: 'WebKit',
        desc: 'Platform web yang meniru antarmuka media sosial untuk keperluan demo, testing, dan pembelajaran.',
        meta1: '<i class="fab fa-html5"></i> HTML/CSS',
        meta2: '<i class="fab fa-js"></i> JavaScript',
        download: '#',
        infoId: 'webkit',
        infoTitle: 'WebKit',
        infoDesc: 'Platform web untuk replikasi antarmuka media sosial populer. Ideal untuk keperluan demonstrasi UI/UX, prototyping, dan pembelajaran front-end.',
        infoTech: 'HTML5 | CSS3 | JavaScript ES6'
    },
    {
        id: 4,
        icon: 'fas fa-fingerprint',
        badge: '#Security',
        title: 'Hashkit',
        desc: 'Generator hash cryptographic (MD5, SHA-1, SHA-256) untuk enkripsi data dan verifikasi integritas.',
        meta1: '<i class="fas fa-lock"></i> Enkripsi',
        meta2: '<i class="fab fa-php"></i> PHP/JS',
        download: '#',
        infoId: 'hashkit',
        infoTitle: 'Hashkit',
        infoDesc: 'Cryptographic hash generator untuk mengkonversi teks menjadi kode hash dengan berbagai algoritma (MD5, SHA-1, SHA-256).',
        infoTech: 'PHP 8 | JavaScript | OpenSSL'
    },
    {
        id: 5,
        icon: 'fas fa-desktop',
        badge: '#Admin',
        title: 'RAT - Remote Admin Tool',
        desc: 'Alat administrasi jarak jauh dengan enkripsi SSL/TLS untuk manajemen server dan device.',
        meta1: '<i class="fas fa-network-wired"></i> Remote',
        meta2: '<i class="fab fa-python"></i> Python',
        download: '#',
        infoId: 'rat',
        infoTitle: 'RAT - Remote Admin Tool',
        infoDesc: 'Perangkat administrasi jarak jauh dengan enkripsi SSL/TLS. Memungkinkan pengelolaan server dan device secara remote.',
        infoTech: 'Python 3 | Socket Programming | SSL/TLS'
    },
    {
        id: 6,
        icon: 'fas fa-code-merge',
        badge: '#Utility',
        title: 'Program Compile',
        desc: 'Utility untuk menggabungkan dua atau lebih program menjadi satu aplikasi terintegrasi.',
        meta1: '<i class="fas fa-code"></i> Binary',
        meta2: '<i class="fas fa-cogs"></i> C++',
        download: '#',
        infoId: 'compile',
        infoTitle: 'Program Compile',
        infoDesc: 'Utility untuk menggabungkan dua atau lebih program menjadi satu aplikasi terintegrasi. Mendukung berbagai format binary.',
        infoTech: 'C++ | Linker | Binary Merger'
    }
];

// ====== CARA MENAMBAH SOFTWARE BARU ======
// Salin blok kode di bawah ini dan tempelkan setelah software terakhir
// Ubah nilainya sesuai dengan software baru

/*
{
    id: 7,
    icon: 'fas fa-icon',
    badge: '#Kategori',
    title: 'Nama Software',
    desc: 'Deskripsi singkat...',
    meta1: '<i class="fas fa-tag"></i> Label1',
    meta2: '<i class="fas fa-code"></i> Label2',
    download: '#',
    infoId: 'namasoftware',
    infoTitle: 'Nama Software',
    infoDesc: 'Deskripsi lengkap untuk modal...',
    infoTech: 'Tech stack yang digunakan'
}
*/