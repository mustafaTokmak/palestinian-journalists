const journalists = [
    {
        id: 1,
        name: {
            tr: "Wael Dahdouh",
            ar: "وائل دحدوح",
            en: "Wael Dahdouh"
        },
        age: 53,
        organization: {
            tr: "Al Jazeera",
            ar: "الجزيرة",
            en: "Al Jazeera"
        },
        date: "2023-10-25",
        location: {
            tr: "Gazze",
            ar: "غزة",
            en: "Gaza"
        },
        description: {
            tr: "Al Jazeera muhabiri, Gazze'deki çatışmaları canlı yayınlarken yaralandı.",
            ar: "مراسل الجزيرة، أصيب أثناء تغطيته المباشرة للنزاع في غزة.",
            en: "Al Jazeera correspondent, wounded while broadcasting live from Gaza conflict."
        },
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=face",
        status: "injured"
    },
    {
        id: 2,
        name: {
            tr: "Shireen Abu Akleh",
            ar: "شيرين أبو عاقلة",
            en: "Shireen Abu Akleh"
        },
        age: 51,
        organization: {
            tr: "Al Jazeera",
            ar: "الجزيرة",
            en: "Al Jazeera"
        },
        date: "2022-05-11",
        location: {
            tr: "Cenin, Batı Şeria",
            ar: "جنين، الضفة الغربية",
            en: "Jenin, West Bank"
        },
        description: {
            tr: "Deneyimli gazetecilik kariyeri boyunca Filistin halkının hikayesini dünyaya anlattı.",
            ar: "روت قصة الشعب الفلسطيني للعالم خلال مسيرتها الصحفية المميزة.",
            en: "Told the story of Palestinian people to the world throughout her distinguished journalism career."
        },
        image: "https://images.unsplash.com/photo-1594736797933-d0ec2a02213e?w=300&h=300&fit=crop&crop=face",
        status: "killed"
    },
    {
        id: 3,
        name: {
            tr: "Issam Abdallah",
            ar: "عصام عبد الله",
            en: "Issam Abdallah"
        },
        age: 37,
        organization: {
            tr: "Reuters",
            ar: "رويترز",
            en: "Reuters"
        },
        date: "2023-10-13",
        location: {
            tr: "Güney Lübnan",
            ar: "جنوب لبنان",
            en: "South Lebanon"
        },
        description: {
            tr: "Reuters kameramanı, sınır bölgesinde haber takibi yaparken öldürüldü.",
            ar: "مصور رويترز، قُتل أثناء تغطيته الأخبار في المنطقة الحدودية.",
            en: "Reuters cameraman, killed while covering news in the border area."
        },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
        status: "killed"
    },
    {
        id: 4,
        name: {
            tr: "Ahmed Abu Hussein",
            ar: "أحمد أبو حسين",
            en: "Ahmed Abu Hussein"
        },
        age: 24,
        organization: {
            tr: "Yaser Murtaja Foundation",
            ar: "مؤسسة ياسر مرتجى",
            en: "Yaser Murtaja Foundation"
        },
        date: "2018-04-13",
        location: {
            tr: "Gazze Şeridi",
            ar: "قطاع غزة",
            en: "Gaza Strip"
        },
        description: {
            tr: "Fotoğrafçı gazeteci, Büyük Dönüş Yürüyüşü'nü belgeliyorken yaralandı ve sonrasında şehit oldu.",
            ar: "صحفي مصور، أصيب أثناء توثيقه مسيرات العودة الكبرى واستشهد لاحقاً.",
            en: "Photojournalist, wounded while documenting the Great March of Return and later martyred."
        },
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        status: "killed"
    },
    {
        id: 5,
        name: {
            tr: "Yaser Murtaja",
            ar: "ياسر مرتجى",
            en: "Yaser Murtaja"
        },
        age: 30,
        organization: {
            tr: "Ain Media",
            ar: "عين ميديا",
            en: "Ain Media"
        },
        date: "2018-04-06",
        location: {
            tr: "Gazze Şeridi",
            ar: "قطاع غزة",
            en: "Gaza Strip"
        },
        description: {
            tr: "Fotoğrafçı gazeteci, 'BASIN' yelekli olmasına rağmen protesto sırasında hedef alındı.",
            ar: "صحفي مصور، استُهدف أثناء الاحتجاجات رغم ارتدائه سترة 'صحافة'.",
            en: "Photojournalist, targeted during protests despite wearing 'PRESS' vest."
        },
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
        status: "killed"
    }
];

const timelineEvents = [
    {
        date: "2018-04-06",
        title: {
            tr: "Yaser Murtaja Şehit Edildi",
            ar: "استشهاد ياسر مرتجى",
            en: "Yaser Murtaja Martyred"
        },
        description: {
            tr: "Ain Media fotoğrafçısı Yaser Murtaja, Gazze'de protesto sırasında hedef alındı.",
            ar: "المصور في عين ميديا ياسر مرتجى استُهدف أثناء الاحتجاجات في غزة.",
            en: "Ain Media photographer Yaser Murtaja was targeted during protests in Gaza."
        }
    },
    {
        date: "2018-04-13",
        title: {
            tr: "Ahmed Abu Hussein Şehit Edildi",
            ar: "استشهاد أحمد أبو حسين",
            en: "Ahmed Abu Hussein Martyred"
        },
        description: {
            tr: "24 yaşındaki fotoğrafçı Ahmed Abu Hussein, yaralanmasının ardından şehit oldu.",
            ar: "المصور أحمد أبو حسين البالغ من العمر 24 عاماً استشهد متأثراً بجراحه.",
            en: "24-year-old photographer Ahmed Abu Hussein martyred from his injuries."
        }
    },
    {
        date: "2022-05-11",
        title: {
            tr: "Shireen Abu Akleh Şehit Edildi",
            ar: "استشهاد شيرين أبو عاقلة",
            en: "Shireen Abu Akleh Martyred"
        },
        description: {
            tr: "Al Jazeera'nın deneyimli muhabiri Shireen Abu Akleh, Cenin'de haber takibi sırasında hedef alındı.",
            ar: "مراسلة الجزيرة المخضرمة شيرين أبو عاقلة استُهدفت أثناء تغطيتها الأخبار في جنين.",
            en: "Al Jazeera's veteran correspondent Shireen Abu Akleh was targeted while covering news in Jenin."
        }
    },
    {
        date: "2023-10-13",
        title: {
            tr: "Issam Abdallah Şehit Edildi",
            ar: "استشهاد عصام عبد الله",
            en: "Issam Abdallah Martyred"
        },
        description: {
            tr: "Reuters kameramanı Issam Abdallah, Lübnan sınırında haber takibi yaparken öldürüldü.",
            ar: "مصور رويترز عصام عبد الله قُتل أثناء تغطيته الأخبار على الحدود اللبنانية.",
            en: "Reuters cameraman Issam Abdallah was killed while covering news on the Lebanese border."
        }
    }
];

const statistics = {
    totalDeaths: 127,
    deaths2023: 63,
    deaths2024: 45,
    injured: 89,
    detained: 156
};