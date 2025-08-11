document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    renderJournalists();
    renderTimeline();
    updateStatistics();
    setupSearch();
    setupLanguageButtons();
});

function initializeApp() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'tr';
    setLanguage(savedLanguage);
}

function setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            // Aktif buton stilini güncelle
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            setLanguage(lang);
            
            // İçeriği yeniden render et
            renderJournalists();
            renderTimeline();
            updateSearchPlaceholder();
        });
    });
}

function updateSearchPlaceholder() {
    const searchInput = document.getElementById('search-input');
    const placeholders = {
        tr: 'Gazeteci ara...',
        ar: 'البحث عن صحفي...',
        en: 'Search journalist...'
    };
    
    if (searchInput) {
        searchInput.placeholder = placeholders[currentLanguage];
    }
}

function renderJournalists() {
    const grid = document.getElementById('journalists-grid');
    const t = getCurrentTranslation();
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    journalists.forEach(journalist => {
        const card = document.createElement('div');
        card.className = 'journalist-card';
        card.setAttribute('data-status', journalist.status);
        
        const statusClass = journalist.status === 'killed' ? 'martyred' : 'injured';
        const statusText = journalist.status === 'killed' ? 
            (currentLanguage === 'ar' ? 'شهيد' : currentLanguage === 'en' ? 'Martyred' : 'Şehit') :
            (currentLanguage === 'ar' ? 'مصاب' : currentLanguage === 'en' ? 'Injured' : 'Yaralı');
        
        card.innerHTML = `
            <div class="journalist-image">
                <img src="${journalist.image}" alt="${journalist.name[currentLanguage]}" onerror="this.src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=300&h=300&fit=crop&crop=center'">
            </div>
            <div class="journalist-header">
                <h3>${journalist.name[currentLanguage]}</h3>
                <span class="status-badge ${statusClass}">${statusText}</span>
            </div>
            <div class="journalist-info">
                <p><strong>${t.journalistCard.age}:</strong> ${journalist.age}</p>
                <p><strong>${t.journalistCard.organization}:</strong> ${journalist.organization[currentLanguage]}</p>
                <p><strong>${t.journalistCard.date}:</strong> ${formatDate(journalist.date)}</p>
                <p><strong>${t.journalistCard.location}:</strong> ${journalist.location[currentLanguage]}</p>
            </div>
            <div class="journalist-description">
                <p>${journalist.description[currentLanguage]}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';
    
    // Tarihe göre sırala (yeniden eskiye)
    const sortedEvents = [...timelineEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sortedEvents.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.className = 'timeline-event';
        
        eventElement.innerHTML = `
            <div class="timeline-date">${formatDate(event.date)}</div>
            <div class="timeline-content">
                <h4>${event.title[currentLanguage]}</h4>
                <p>${event.description[currentLanguage]}</p>
            </div>
        `;
        
        timeline.appendChild(eventElement);
    });
}

function updateStatistics() {
    document.getElementById('total-deaths').textContent = statistics.totalDeaths;
    document.getElementById('deaths-2023').textContent = statistics.deaths2023;
    document.getElementById('deaths-2024').textContent = statistics.deaths2024;
    document.getElementById('total-journalists').textContent = `${statistics.totalDeaths}+`;
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.journalist-card');
        
        cards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const organization = card.querySelector('.journalist-info p:nth-child(2)').textContent.toLowerCase();
            const location = card.querySelector('.journalist-info p:nth-child(4)').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || organization.includes(searchTerm) || location.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    
    // Dile göre tarih formatı
    const locales = {
        tr: 'tr-TR',
        ar: 'ar-EG', 
        en: 'en-US'
    };
    
    return date.toLocaleDateString(locales[currentLanguage], options);
}

// Smooth scroll için navigasyon linkleri
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});