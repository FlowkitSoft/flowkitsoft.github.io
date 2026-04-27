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
        download: 'https://github.com/FlowkitSoft/ExCash/raw/refs/heads/main/EXCASH%20v1.0.zip',
        infoId: 'excash',
        infoTitle: 'ExCash',
        infoDesc: 'TUTORIAL DOWNLOAD & INSTALL ExCash:\n\n1. Klik tombol "Download" di bawah ini\n2. File ExCash.zip akan terdownload\n3. Extract file ZIP tersebut (klik kanan -> Extract Here)\n4. Setelah extract, akan muncul file ExCash.xlsm\n5. Double klik file ExCash.xlsm untuk membukanya\n6. Jika muncul peringatan macro, klik "Enable Content"\n7. Software siap digunakan'
    },
    {
        id: 2,
        icon: 'fas fa-hand-holding-usd',
        badge: '#Finance',
        title: 'ExDebt',
        desc: 'Software pencatatan hutang-piutang dengan monitoring jatuh tempo dan laporan keuangan akurat.',
        meta1: '<i class="fas fa-chart-line"></i> Akuntansi',
        meta2: '<i class="fas fa-file-excel"></i> Excel',
        download: 'https://github.com/FlowkitSoft/ExDebt/raw/refs/heads/main/EXDEBT%20v2.0.zip',
        infoId: 'exdebt',
        infoTitle: 'ExDebt',
        infoDesc: 'TUTORIAL DOWNLOAD & INSTALL ExDebt:\n\n1. Klik tombol "Download" di bawah ini\n2. File ExDebt.zip akan terdownload\n3. Extract file ZIP tersebut (klik kanan -> Extract Here)\n4. Setelah extract, akan muncul file ExDebt.xlsm\n5. Double klik file ExDebt.xlsm untuk membukanya\n6. Jika muncul peringatan macro, klik "Enable Content"\n7. Software siap digunakan'
    },
    {
        id: 3,
        icon: 'fas fa-globe',
        badge: '#WebDev',
        title: 'WebKit',
        desc: 'Platform web yang meniru antarmuka media sosial untuk keperluan demo, testing, dan pembelajaran.',
        meta1: '<i class="fab fa-html5"></i> HTML/CSS',
        meta2: '<i class="fab fa-js"></i> JavaScript',
        download: 'https://github.com/FlowkitSoft/WebKit/raw/refs/heads/main/WEBKIT%20v2.0.zip',
        infoId: 'webkit',
        infoTitle: 'WebKit',
        infoDesc: 'TUTORIAL DOWNLOAD & INSTALL WebKit:\n\n1. Klik tombol "Download" di bawah ini\n2. File WebKit.zip akan terdownload\n3. Extract file ZIP tersebut (klik kanan -> Extract Here)\n4. Pastikan Node.js sudah terinstall di komputer Anda\n   (Download Node.js di https://nodejs.org)\n5. Buka terminal/CMD, masuk ke folder WebKit hasil extract\n6. Ketik perintah: npm install -g\n7. Setelah selesai, jalankan dengan perintah: npm start\n8. Buka browser dan akses alamat yang muncul (biasanya http://localhost:3000)'
    },
    {
        id: 4,
        icon: 'fas fa-fingerprint',
        badge: '#Security',
        title: 'Hashkit',
        desc: 'Generator hash cryptographic (MD5, SHA-1, SHA-256) untuk enkripsi data dan verifikasi integritas.',
        meta1: '<i class="fas fa-lock"></i> Enkripsi',
        meta2: '<i class="fab fa-php"></i> PHP/JS',
        download: 'https://github.com/FlowkitSoft/HashKit/raw/refs/heads/main/HASHKIT%20v1.0.zip',
        infoId: 'hashkit',
        infoTitle: 'Hashkit',
        infoDesc: 'TUTORIAL DOWNLOAD & INSTALL Hashkit:\n\n1. Klik tombol "Download" di bawah ini\n2. File Hashkit.zip akan terdownload\n3. Extract file ZIP tersebut (klik kanan -> Extract Here)\n4. Pastikan Node.js sudah terinstall di komputer Anda\n   (Download Node.js di https://nodejs.org)\n5. Buka terminal/CMD, masuk ke folder Hashkit hasil extract\n6. Ketik perintah: npm install -g\n7. Setelah selesai, jalankan dengan perintah: npm start\n8. Buka browser dan akses alamat yang muncul (biasanya http://localhost:3000)'
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
        infoDesc: 'TUTORIAL DOWNLOAD & INSTALL RAT:\n\n1. Klik tombol "Download" di bawah ini\n2. File RAT.zip akan terdownload\n3. Extract file ZIP tersebut (klik kanan -> Extract Here)\n4. Setelah extract, akan muncul file RAT.exe\n5. Double klik file RAT.exe untuk menjalankannya\n6. Jika muncul peringatan keamanan, klik "Run Anyway"\n7. Software siap digunakan'
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
        infoDesc: 'TUTORIAL DOWNLOAD & INSTALL Program Compile:\n\n1. Klik tombol "Download" di bawah ini\n2. File Compile.zip akan terdownload\n3. Extract file ZIP tersebut (klik kanan -> Extract Here)\n4. Pastikan Node.js sudah terinstall di komputer Anda\n   (Download Node.js di https://nodejs.org)\n5. Buka terminal/CMD, masuk ke folder Compile hasil extract\n6. Ketik perintah: npm install -g\n7. Setelah selesai, jalankan dengan perintah: npm start\n8. Buka browser dan akses alamat yang muncul (biasanya http://localhost:3000)'
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
    infoDesc: 'TUTORIAL DOWNLOAD & INSTALL Nama Software:\n\n1. Langkah pertama...\n2. Langkah kedua...\n3. Langkah ketiga...'
}
*/