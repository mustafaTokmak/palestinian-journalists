const translations = {
    tr: {
        siteTitle: "Filistinli Gazetecilerin Anısına",
        navigation: {
            home: "Ana Sayfa",
            journalists: "Gazeteciler",
            statistics: "İstatistikler",
            timeline: "Zaman Çizelgesi"
        },
        hero: {
            title: "Unutmayacağız, Unutturmayacağız",
            subtitle: "Gazetecilik mesleğini icra ederken hayatlarını kaybeden Filistinli gazetecilerin anısına...",
            quote: "Gazetecilerin uluslararası koruma altında olduğundan dair bahsedilen her şey slogan olmaktan öteye geçmiyor.",
            quoteAuthor: "Filistinli Gazeteci",
            totalJournalists: "Şehit Gazeteci",
            period: "Dönem"
        },
        sections: {
            journalists: "Gazeteciler",
            statistics: "İstatistikler",
            timeline: "Zaman Çizelgesi"
        },
        stats: {
            totalLoss: "Toplam Kayıp",
            year2023: "2023 Yılında",
            year2024: "2024 Yılında"
        },
        footer: {
            message: "Basın özgürlüğü için mücadele eden tüm gazetecilerin anısına...",
            dedication: "Gazetecilik mesleği asla suç değildir."
        },
        journalistCard: {
            age: "Yaş",
            date: "Tarih",
            location: "Konum",
            organization: "Kurum"
        }
    },
    ar: {
        siteTitle: "في ذكرى الصحفيين الفلسطينيين",
        navigation: {
            home: "الرئيسية",
            journalists: "الصحفيون",
            statistics: "الإحصائيات",
            timeline: "الجدول الزمني"
        },
        hero: {
            title: "لن ننسى، لن نترك العالم ينسى",
            subtitle: "تكريماً لذكرى الصحفيين الفلسطينيين الذين فقدوا حياتهم أثناء أداء واجبهم المهني...",
            quote: "كل ما يُقال عن الحماية الدولية للصحفيين لا يتجاوز كونه مجرد شعارات.",
            quoteAuthor: "صحفي فلسطيني",
            totalJournalists: "صحفي شهيد",
            period: "الفترة"
        },
        sections: {
            journalists: "الصحفيون",
            statistics: "الإحصائيات",
            timeline: "الجدول الزمني"
        },
        stats: {
            totalLoss: "إجمالي الخسائر",
            year2023: "في عام 2023",
            year2024: "في عام 2024"
        },
        footer: {
            message: "تكريماً لجميع الصحفيين الذين يناضلون من أجل حرية الصحافة...",
            dedication: "المهنة الصحفية ليست جريمة أبداً."
        },
        journalistCard: {
            age: "العمر",
            date: "التاريخ",
            location: "الموقع",
            organization: "المؤسسة"
        }
    },
    en: {
        siteTitle: "In Memory of Palestinian Journalists",
        navigation: {
            home: "Home",
            journalists: "Journalists",
            statistics: "Statistics",
            timeline: "Timeline"
        },
        hero: {
            title: "We Will Not Forget, We Will Not Let the World Forget",
            subtitle: "In memory of Palestinian journalists who lost their lives while performing their professional duty...",
            quote: "Everything said about international protection for journalists doesn't go beyond being mere slogans.",
            quoteAuthor: "Palestinian Journalist",
            totalJournalists: "Martyred Journalists",
            period: "Period"
        },
        sections: {
            journalists: "Journalists",
            statistics: "Statistics",
            timeline: "Timeline"
        },
        stats: {
            totalLoss: "Total Loss",
            year2023: "In 2023",
            year2024: "In 2024"
        },
        footer: {
            message: "In memory of all journalists who fight for press freedom...",
            dedication: "Journalism is never a crime."
        },
        journalistCard: {
            age: "Age",
            date: "Date",
            location: "Location",
            organization: "Organization"
        }
    }
};

let currentLanguage = 'tr';

function setLanguage(lang) {
    currentLanguage = lang;
    updatePageContent();
    localStorage.setItem('selectedLanguage', lang);
    
    // Dil değiştiğinde sayfa yönünü güncelle
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

function getCurrentTranslation() {
    return translations[currentLanguage];
}

function updatePageContent() {
    const t = getCurrentTranslation();
    
    // Sayfa başlığı
    document.title = t.siteTitle;
    
    // Logo
    const logo = document.querySelector('.logo');
    if (logo) logo.textContent = t.siteTitle;
    
    // Navigasyon
    const navItems = document.querySelectorAll('.nav-menu a');
    navItems[0].textContent = t.navigation.home;
    navItems[1].textContent = t.navigation.journalists;
    navItems[2].textContent = t.navigation.statistics;
    navItems[3].textContent = t.navigation.timeline;
    
    // Hero bölümü
    const heroTitle = document.querySelector('.hero h2');
    if (heroTitle) heroTitle.textContent = t.hero.title;
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = t.hero.subtitle;
    
    const heroQuote = document.querySelector('.hero-quote');
    if (heroQuote) heroQuote.textContent = t.hero.quote;
    
    const quoteAuthor = document.querySelector('.quote-author');
    if (quoteAuthor) quoteAuthor.textContent = `- ${t.hero.quoteAuthor}`;
    
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.hero.totalJournalists;
    if (statLabels[1]) statLabels[1].textContent = t.hero.period;
    
    // Bölüm başlıkları
    const sectionTitles = document.querySelectorAll('section h2');
    if (sectionTitles[0]) sectionTitles[0].textContent = t.sections.journalists;
    if (sectionTitles[1]) sectionTitles[1].textContent = t.sections.statistics;
    if (sectionTitles[2]) sectionTitles[2].textContent = t.sections.timeline;
    
    // İstatistik kartları
    const statCards = document.querySelectorAll('.stat-card h3');
    if (statCards[0]) statCards[0].textContent = t.stats.totalLoss;
    if (statCards[1]) statCards[1].textContent = t.stats.year2023;
    if (statCards[2]) statCards[2].textContent = t.stats.year2024;
    
    // Footer
    const footerMessages = document.querySelectorAll('footer p');
    if (footerMessages[0]) footerMessages[0].textContent = t.footer.message;
    if (footerMessages[1]) footerMessages[1].textContent = t.footer.dedication;
}

// Sayfa yüklendiğinde dil ayarını kontrol et
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'tr';
    setLanguage(savedLanguage);
});