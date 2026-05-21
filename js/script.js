// ============================================
// FLOWKIT - MAIN SCRIPT
// toolsData diambil dari file terpisah (toolsData.js)
// ============================================

// State management
let currentCategory = "all";
let currentSearch = "";
let currentSort = "name";

// DOM Elements
const toolsGrid = document.getElementById("toolsGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterBtns = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const toolsCountSpan = document.getElementById("toolsCount");
const resultCountSpan = document.getElementById("resultCount");
const totalToolsFooterSpan = document.getElementById("totalToolsFooter");

// Filter dan sorting
function getFilteredAndSortedTools() {
    let filtered = toolsData.filter(tool => {
        if (currentCategory !== "all" && tool.category !== currentCategory) {
            return false;
        }
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            return tool.name.toLowerCase().includes(searchLower) || 
                   tool.description.toLowerCase().includes(searchLower);
        }
        return true;
    });

    filtered.sort((a, b) => {
        switch(currentSort) {
            case "name":
                return a.name.localeCompare(b.name);
            case "name-desc":
                return b.name.localeCompare(a.name);
            case "category":
                return a.category.localeCompare(b.category);
            default:
                return 0;
        }
    });

    return filtered;
}

// Get category name
function getCategoryName(category) {
    const categories = {
        financial: "Keuangan",
        development: "Development",
        security: "Keamanan",
        utility: "Utility"
    };
    return categories[category] || category;
}

// Render tools
function renderTools() {
    const filteredTools = getFilteredAndSortedTools();
    const count = filteredTools.length;
    
    toolsCountSpan.textContent = toolsData.length;
    resultCountSpan.textContent = count;
    totalToolsFooterSpan.textContent = toolsData.length;

    if (filteredTools.length === 0) {
        toolsGrid.style.display = "none";
        emptyState.style.display = "block";
        return;
    }

    toolsGrid.style.display = "grid";
    emptyState.style.display = "none";

    toolsGrid.innerHTML = filteredTools.map(tool => `
        <div class="tool-card" data-id="${tool.id}" data-name="${tool.name}">
            <div class="tool-icon">
                <i class="${tool.icon}"></i>
            </div>
            
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
            
            <div class="tool-meta">
                <span class="tool-category">
                    <i class="fas fa-tag"></i> ${getCategoryName(tool.category)}
                </span>
                <span class="tool-version">
                    <i class="fas fa-code-branch"></i> v${tool.version}
                </span>
            </div>
            
            <div class="click-hint">
                <i class="fas fa-info-circle"></i>
                <span>klik untuk lihat detail & download</span>
            </div>
        </div>
    `).join("");

    attachCardEvents();
}

// Event handler untuk klik card (arah ke halaman detail)
function attachCardEvents() {
    const cards = document.querySelectorAll(".tool-card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.stopPropagation();
            const toolId = card.getAttribute("data-id");
            const toolName = card.getAttribute("data-name");
            
            card.style.transform = "scale(0.98)";
            setTimeout(() => {
                card.style.transform = "";
            }, 150);
            
            // Arahkan ke halaman detail
            window.location.href = `pages/${toolId}.html`;
        });
    });
}

// Notification
function showNotification(message, type = "info") {
    let notification = document.querySelector(".custom-notif");
    if (!notification) {
        notification = document.createElement("div");
        notification.className = "custom-notif";
        document.body.appendChild(notification);
        
        const style = document.createElement("style");
        style.textContent = `
            .custom-notif {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-left: 3px solid var(--accent);
                padding: 0.75rem 1.25rem;
                font-size: 0.85rem;
                z-index: 10000;
                animation: slideInRight 0.3s ease-out;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            }
            .custom-notif.error {
                border-left-color: var(--danger);
            }
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    notification.className = `custom-notif ${type}`;
    notification.innerHTML = `<i class="fas fa-info-circle"></i> ${message}`;
    notification.style.display = "block";
    
    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
            notification.style.display = "none";
            notification.style.opacity = "1";
        }, 300);
    }, 2500);
}

// Event Listeners
searchInput.addEventListener("input", (e) => {
    currentSearch = e.target.value;
    renderTools();
});

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        renderTools();
    });
});

sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderTools();
});

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
    renderTools();
    console.log(`✅ FlowKit siap | ${toolsData.length} tools tersedia`);
});

// Expose ke global
window.addTool = (newTool) => {
    console.warn("Add tool via toolsData.js langsung");
    return false;
};