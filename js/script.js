// ========== GLOBAL VARIABLES ==========
let currentPage = 1;
const itemsPerPage = 6;
let filteredSoftware = [...softwareList];
let currentSearchTerm = '';

// ========== RENDER SOFTWARE GRID ==========
function renderSoftwareGrid() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filteredSoftware.slice(startIndex, endIndex);
    const softwareGrid = document.getElementById('softwareGrid');
    
    if (!softwareGrid) return;
    
    if (filteredSoftware.length === 0) {
        softwareGrid.innerHTML = `<div class="no-results">
            <i class="fas fa-search"></i>
            <p>Tidak ada software yang ditemukan</p>
            <p>Coba dengan kata kunci lain</p>
        </div>`;
        document.getElementById('paginationContainer').innerHTML = '';
        document.getElementById('totalSoftwareCount').innerText = softwareList.length;
        document.getElementById('resultInfo').innerHTML = 'Tidak ada hasil yang ditemukan';
        return;
    }
    
    // Build HTML untuk setiap card
    let html = '';
    paginatedItems.forEach((software, index) => {
        // delay animasi untuk efek stagger
        const delay = 100 + (index * 50);
        html += `
            <div class="software-card" data-aos="fade-up" data-aos-delay="${delay}">
                <div class="card-header">
                    <div class="card-icon"><i class="${software.icon}"></i></div>
                    <div class="card-badge">${software.badge}</div>
                </div>
                <h3>${software.title}</h3>
                <p>${software.desc}</p>
                <div class="card-meta">
                    <span>${software.meta1}</span>
                    <span>${software.meta2}</span>
                </div>
                <div class="card-actions">
                    <a href="${software.download}" class="btn-download"><i class="fas fa-download"></i> Download</a>
                    <button class="btn-info" onclick="showInfo('${software.infoId}')"><i class="fas fa-info-circle"></i></button>
                </div>
            </div>
        `;
    });
    
    softwareGrid.innerHTML = html;
    
    // Update total software count
    document.getElementById('totalSoftwareCount').innerText = softwareList.length;
    
    // Update result info
    const startNum = startIndex + 1;
    const endNum = Math.min(endIndex, filteredSoftware.length);
    document.getElementById('resultInfo').innerHTML = `Menampilkan ${startNum}-${endNum} dari ${filteredSoftware.length} software`;
    
    // Reinit AOS untuk animasi card baru
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
    
    // Render pagination
    renderPagination();
}

// ========== RENDER PAGINATION ==========
function renderPagination() {
    const totalPages = Math.ceil(filteredSoftware.length / itemsPerPage);
    const paginationContainer = document.getElementById('paginationContainer');
    
    if (!paginationContainer) return;
    
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }
    
    let html = '<div class="pagination">';
    
    // Tombol Previous
    if (currentPage > 1) {
        html += `<button class="page-btn" onclick="changePage(${currentPage - 1})"><i class="fas fa-chevron-left"></i> Sebelumnya</button>`;
    } else {
        html += `<button class="page-btn disabled" disabled><i class="fas fa-chevron-left"></i> Sebelumnya</button>`;
    }
    
    // Nomor halaman
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            html += `<button class="page-btn active" onclick="changePage(${i})">${i}</button>`;
        } else {
            html += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }
    
    // Tombol Next
    if (currentPage < totalPages) {
        html += `<button class="page-btn" onclick="changePage(${currentPage + 1})">Selanjutnya <i class="fas fa-chevron-right"></i></button>`;
    } else {
        html += `<button class="page-btn disabled" disabled>Selanjutnya <i class="fas fa-chevron-right"></i></button>`;
    }
    
    html += '</div>';
    paginationContainer.innerHTML = html;
}

// ========== CHANGE PAGE ==========
function changePage(page) {
    currentPage = page;
    renderSoftwareGrid();
    // Scroll ke section software
    document.querySelector('.software').scrollIntoView({ behavior: 'smooth' });
}

// ========== SEARCH SOFTWARE ==========
function searchSoftware() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    currentSearchTerm = searchTerm;
    const clearBtn = document.getElementById('clearSearch');
    
    if (searchTerm === '') {
        filteredSoftware = [...softwareList];
        if (clearBtn) clearBtn.style.display = 'none';
    } else {
        filteredSoftware = softwareList.filter(software => 
            software.title.toLowerCase().includes(searchTerm) ||
            software.badge.toLowerCase().includes(searchTerm) ||
            software.desc.toLowerCase().includes(searchTerm)
        );
        if (clearBtn) clearBtn.style.display = 'flex';
    }
    
    currentPage = 1;
    renderSoftwareGrid();
}

// ========== CLEAR SEARCH ==========
function clearSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    filteredSoftware = [...softwareList];
    currentSearchTerm = '';
    currentPage = 1;
    document.getElementById('clearSearch').style.display = 'none';
    renderSoftwareGrid();
}

// ========== MODAL INFO ==========
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalTech = document.getElementById('modalTech');
const modalDownload = document.getElementById('modalDownload');
const closeModal = document.querySelector('.modal-close');

// Build software details dari array
const softwareDetails = {};
softwareList.forEach(software => {
    softwareDetails[software.infoId] = {
        title: software.infoTitle,
        desc: software.infoDesc,
        tech: software.infoTech,
        download: software.download
    };
});

function showInfo(softwareId) {
    const data = softwareDetails[softwareId];
    if (data) {
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalTech.innerHTML = `<i class="fas fa-code"></i> Technology: ${data.tech}`;
        modalDownload.href = data.download;
        modal.style.display = 'flex';
    }
}

// Close modal
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ========== COPY TO CLIPBOARD ==========
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Perintah berhasil disalin!');
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 12, 15, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 12, 15, 0.95)';
    }
});

// ========== INITIAL RENDER ==========
document.addEventListener('DOMContentLoaded', function() {
    renderSoftwareGrid();
});