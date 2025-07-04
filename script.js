// Navigation Toggle
// Entfernt: const menuToggle = document.getElementById('menu-toggle');
// Entfernt: const navbar = document.getElementById('navbar');
// Entfernt: menuToggle.addEventListener('click', ...);

// Animation für Gerichte- und Dessert-Blöcke
function animateOnHover() {
    const gerichtBlocks = document.querySelectorAll('.gericht-block');
    const dessertBlocks = document.querySelectorAll('.dessert-block');
    const mittagsmenueBlocks = document.querySelectorAll('.mittagsmenue-item');
    const vorspeisenBlocks = document.querySelectorAll('.vorspeisen-card');
    gerichtBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            const img = block.querySelector('.gericht-img');
            if(img) img.style.transform = 'scale(1.08)';
        });
        block.addEventListener('mouseleave', () => {
            const img = block.querySelector('.gericht-img');
            if(img) img.style.transform = 'scale(1)';
        });
    });
    dessertBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            const img = block.querySelector('.dessert-img');
            if(img) img.style.transform = 'scale(1.08)';
        });
        block.addEventListener('mouseleave', () => {
            const img = block.querySelector('.dessert-img');
            if(img) img.style.transform = 'scale(1)';
        });
    });
    mittagsmenueBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.transform = 'scale(1.04) translateY(-4px)';
            block.style.boxShadow = '0 8px 32px rgba(224,8,8,0.13)';
            block.style.background = '#fff7f2';
        });
        block.addEventListener('mouseleave', () => {
            block.style.transform = '';
            block.style.boxShadow = '';
            block.style.background = '';
        });
    });
    vorspeisenBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            block.style.transform = 'scale(1.025)';
            block.style.boxShadow = '0 8px 32px rgba(224,8,8,0.13)';
            block.style.background = '#FFF0F5';
        });
        block.addEventListener('mouseleave', () => {
            block.style.transform = '';
            block.style.boxShadow = '';
            block.style.background = '';
        });
    });
}

// Scroll-Animation für Gerichte-Blöcke
function animateOnScroll() {
    const blocks = document.querySelectorAll('.gericht-block, .dessert-block, .mittagsmenue-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    blocks.forEach(block => {
        block.classList.add('invisible');
        observer.observe(block);
    });
}

// Responsive Navigation Hamburger-Menü
function setupMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
    // Optional: Menü schließt beim Klick auf Link (mobil)
    const navLinks = navbar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
}

// Sprachdaten für Übersetzungen
const translations = {
    de: {
        // Navigation
        nav_home: 'Startseite',
        nav_buffet: 'Buffet Angebot',
        nav_menu: 'Speisekarte',
        nav_impressum: 'Impressum',
        
        // Hero Section
        hero_subtitle: 'Hotpot & more',
        hero_description: 'Erleben Sie ein unvergessliches All-You-Can-Eat Erlebnis mit frischen Zutaten und authentischen Geschmäckern.',
        hero_button: 'Speisekarte entdecken',
        
        // Buffet Section
        buffet_title: 'Unser Buffet Angebot',
        buffet_time_title: 'Zeitraum und Preis:',
        buffet_time_desc: 'Warmes Mittagsbuffet: 16,00 €',
        buffet_time_hours: 'Mo. - Fr. von 12:00 - 15:30 Uhr (außer an Feiertagen)',
        buffet_offer_title: 'Angebot:',
        buffet_offer_desc: 'Hier steht Ihnen unser Salatbuffet, das warme Buffet und das Nachtisch-Buffet zur Auswahl.',
        buffet_note_title: 'Hinweis:',
        buffet_note_desc: 'Bedienen Sie sich – so oft Sie mögen!',
        
        // Buffet à la Saigon Section
        buffet_saigon_title: 'Buffet à la Saigon',
        buffet_saigon_price: '35€',
        buffet_saigon_desc: 'Mehrgängiges Buffet - Bedienen Sie sich so oft wie es geht',
        buffet_saigon_includes_title: 'Inklusive:',
        buffet_saigon_includes_desc: 'Hotpot und Grill Maschine',
        buffet_saigon_prices_title: 'Preise:',
        buffet_saigon_prices_desc: 'Erwachsene: <span class="preis">35 €</span><br>Kinder bis 13 Jahre: <span class="preis">17,50 €</span>',
        
        // Öffnungszeiten
        opening_hours_title: 'Öffnungszeiten',
        opening_hours_desc: 'Montag bis Sonntag<br>12:00 – 22:00 Uhr',
        
        // Impressum
        impressum_title: 'Impressum',
        
        // Speisekarte
        menu_title: 'Unsere Speisekarte',
        menu_subtitle: 'Entdecken Sie unsere Vielfalt an frischen Zutaten und köstlichen Gerichten.',
        lunch_menu_title: 'Mittags-Menü',
        vorspeisen_title: 'Warme Vorspeisen & Salate',
        
        // Mittagsmenü
        m1_desc: 'Gebratener Eierreis mit Hühnerfleisch und Gemüse',
        m2_desc: 'Gebratene Eiernudeln mit Hühnerfleisch und Gemüse',
        m3_desc: 'Gebratene Reisnudeln mit Hühnerfleisch und Gemüse',
        m4_desc: 'Gebackenes Hähnchen kross mit Gemüse und Süß-Sauer-Sauce',
        m5_desc: 'Gebackene Ente kross mit Gemüse und Süß-Sauer-Sauce',
        m6_desc: 'Rindfleisch mit Zwiebeln',
        m7_desc: 'Knuspriges Szechuan-Tofu (pikant)',
        
        // Vorspeisen
        vorspeise_10_title: 'Vegetarische Minifrühlingsrolle',
        vorspeise_10_desc: '6 Stück mit Süß-sauer-Soße',
        vorspeise_11_title: 'Gebackene Wan-Tan',
        vorspeise_11_desc: '6 Stück mit Fleisch gefüllte, knusprige Teigtaschen mit Süß-sauer-Soße',
        vorspeise_12_title: 'Gebackene Großgarnelen',
        vorspeise_12_desc: '5 Stück mit Süß-sauer-Soße',
        vorspeise_13_title: 'Lemon chicken Wings',
        vorspeise_13_desc: '6 Stück mariniert und gebratene Hähnchenflügel mit Limettenblätter und Süß-sauer-Soße',
        vorspeise_14_title: 'Sommerrollen',
        vorspeise_14_desc: '2 Stück mit Salat, Reisnudeln und Hoisin-Erdnuss-Soße',
        vorspeise_14a: 'Tofu',
        vorspeise_14b: 'Hühnerfleisch / chicken',
        vorspeise_14c: 'Garnelen / prawns',
        vorspeise_15_title: 'Hausgemachte Frühlingsrollen',
        vorspeise_15_desc: '6 Stück mit Garnelen, Hackfleisch und Gemüsefüllung',
        vorspeise_16_title: 'Hühnersalat',
        vorspeise_16_desc: 'mit gehacktem Hühnerfleisch, Zwiebeln und verschiedene Kräuter',
        vorspeise_17_title: 'Mango Salat',
        vorspeise_17_desc: 'mit Mangostreifen, Zwiebeln, Thaikräutern und Fisch-Dressing-Sauce',
        vorspeise_18_title: 'Enten Salat',
        vorspeise_18_desc: 'mit gehacktem Entenfleisch und Thaikräutern',
        vorspeise_19_title: 'Glasnudel Salat',
        vorspeise_19_desc: 'mit Glasnudeln, Thai Kräutern und Dressing',
        vorspeise_19a: 'Tofu',
        vorspeise_19b: 'Hühnerfleisch / chicken',
        vorspeise_19c: 'Garnelen / prawns',
        vorspeise_20_title: 'Gemischter Salat',
        vorspeise_20_desc: 'mit Sesamdressing',
        
        // Hauptgerichte
        gericht_30_title: 'Phở',
        gericht_30_desc: 'Traditionelle vietnamesische Reisbandnudel-Suppe mit Rindfleisch und frischen Kräutern',
        gericht_31_title: 'Bún Bò Huế',
        gericht_31_desc: 'Aromatisch-scharfe mit Zitronengras gewürzte Rindfleisch-Reisnudelsuppe, Eisbein, vietnamesischer Fleischwurst und frischen Kräutern.',
        gericht_32_title: 'Hu tiu nam vang',
        gericht_32_desc: 'Saigonesische Hühner mit Reisnudeln, Garnelen, Tintenfisch, gehacktem Schweinefleisch und frischen Kräutern',
        gericht_33_title: 'Hu tiu nam vang kho',
        gericht_33_desc: 'Saigonesische Reisnudeln mit hausgemachter Sojasoße, Garnelen, Schweinefleisch und Wachteleiern zum Mischen, serviert mit extra Suppe',
        gericht_34_title: 'Bun Bo Nam Bo',
        gericht_34_desc: 'Reisfadennudeln, Rindfleisch, Zwiebeln, Zitronengras, Salat, Erdnüssen, Fischsoße',
        gericht_34_options: 'Auch mit Tofu 11,50€ oder Hühnerfleisch 12,50€',
        gericht_35_title: 'Bún chả giò',
        gericht_35_desc: 'Reisfadennudeln, Salat, Erdnüssen, Limetten, Dressing, Zwiebeln, Frühlingsrollen, Fischsoße.',
        gericht_36_title: 'Rotes Curry',
        gericht_36_desc: 'mit Kokosmilch, Gemüse',
        gericht_36_tofu: 'Tofu',
        gericht_36_chicken: 'Hühnerfleisch',
        gericht_36_shrimp: 'Garnelen',
        gericht_36_duck: 'Ente kross',
        gericht_36_chicken_crispy: 'Hühnerfleisch kross',
        gericht_37_title: 'Rau xào',
        gericht_37_desc: 'Gebratene Saisongemüse mit Thaikräuter, Knoblauch, scharf',
        gericht_37_tofu: 'Tofu',
        gericht_37_chicken: 'Hühnerfleisch',
        gericht_37_shrimp: 'Garnelen',
        gericht_37_beef: 'Rindfleisch',
        gericht_37_duck: 'Ente kross',
        gericht_38_title: 'Spezialgericht Süß-sauer-Sauce',
        gericht_38_desc: 'mit Ananas, Tomaten, Gemüse',
        gericht_38_tofu: 'Tofu',
        gericht_38_chicken_crispy: 'Hühnerfleisch kross',
        gericht_38_shrimp_crispy: 'Garnelen kross',
        gericht_38_duck: 'Ente kross',
        gericht_39_title: 'Phad Khing',
        gericht_39_desc: 'mit gebratenen Saisongemüse, Ingwer, Knoblauch',
        gericht_39_tofu: 'Tofu',
        gericht_39_chicken: 'Hühnerfleisch',
        gericht_39_shrimp: 'Garnelen',
        gericht_39_beef: 'Rindfleisch',
        gericht_39_duck: 'Ente kross',
        gericht_40_title: 'Gebratener Eierreis',
        gericht_40_desc: 'mit Gemüse',
        gericht_40_tofu: 'Tofu',
        gericht_40_chicken: 'Hühnerfleisch',
        gericht_40_shrimp: 'Garnelen',
        gericht_40_duck: 'Ente kross',
        gericht_40_chicken_crispy: 'Hühnerfleisch kross',
        gericht_41_title: 'Gebratene Eiernudeln',
        gericht_41_desc: 'mit Gemüse',
        gericht_41_tofu: 'Tofu',
        gericht_41_chicken: 'Hühnerfleisch',
        gericht_41_shrimp: 'Garnelen',
        gericht_41_duck: 'Ente kross',
        gericht_41_chicken_crispy: 'Hühnerfleisch kross',
        gericht_42_title: 'Pho Xao',
        gericht_42_desc: 'Gebratene Reisbandnudeln mit Gemüse',
        gericht_42_tofu: 'Tofu',
        gericht_42_chicken: 'Hühnerfleisch',
        gericht_42_shrimp: 'Garnelen',
        gericht_42_duck: 'Ente kross',
        
        // Suppen
        suppen_title: 'Suppen',
        suppe_1_title: 'Miso Suppe',
        suppe_1_desc: 'Japanische Sojabohnenpaste, Tofu, Algen, Frühlingszwiebeln',
        suppe_2_title: 'Sauer-Scharf Suppe',
        suppe_2_desc: 'Mit Huhn, Pilzen, Bambus, Chili, Ei',
        suppe_3_title: 'Tom Kha Gai',
        suppe_3_desc: 'Thailändische Kokosmilchsuppe mit Huhn, Champignons, Zitronengras',
        suppe_4_title: 'Wantan Suppe',
        suppe_4_desc: 'Mit gefüllten Teigtaschen, Gemüse, Frühlingszwiebeln',
        
        // Desserts
        dessert_title: 'Nachtisch / Dessert',
        dessert_1_title: 'Gebackene Bananen',
        dessert_1_desc: 'mit Honig & Vanilleeis',
        dessert_1_honey: 'mit Honig',
        dessert_1_honey_ice: 'mit Honig & Vanilleeis',
        dessert_2_title: 'Gemischtes Eis',
        dessert_2_desc: 'mit Sahne',
        dessert_3_title: 'Che chuoi',
        dessert_3_desc: 'mit Kokosmilch & Erdnüsse',
        dessert_4_title: 'Gebackene Bananen mit Honig',
        dessert_5_title: 'Banh tet chuoi',
        dessert_5_desc: 'Klebreis mit Kokosmilch & Erdnüsse',
        
        // Maps
        maps_title: 'Hier finden Sie uns',
        maps_button: 'Karte öffnen',
        maps_button_apple: 'In Apple Karten öffnen',
        maps_button_google: 'In Google Maps öffnen'
    },
    en: {
        // Navigation
        nav_home: 'Home',
        nav_buffet: 'Buffet Offer',
        nav_menu: 'Menu',
        nav_impressum: 'Legal Notice',
        
        // Hero Section
        hero_subtitle: 'Hotpot & more',
        hero_description: 'Experience an unforgettable All-You-Can-Eat experience with fresh ingredients and authentic flavors.',
        hero_button: 'Discover Menu',
        
        // Buffet Section
        buffet_title: 'Our Buffet Offer',
        buffet_time_title: 'Time and Price:',
        buffet_time_desc: 'Warm lunch buffet: 16.00 €',
        buffet_time_hours: 'Mon - Fri from 12:00 - 3:30 pm (holidays not included)',
        buffet_offer_title: 'Offer:',
        buffet_offer_desc: 'We provide a salad buffet, the warm buffet and the dessert buffet.',
        buffet_note_title: 'Note:',
        buffet_note_desc: 'Help yourself – as often as you like!',
        
        // Buffet à la Saigon Section
        buffet_saigon_title: 'Buffet à la Saigon',
        buffet_saigon_price: '35€',
        buffet_saigon_desc: 'Multi-course buffet - Help yourself as often as you like',
        buffet_saigon_includes_title: 'Including:',
        buffet_saigon_includes_desc: 'Hotpot and grill machine',
        buffet_saigon_prices_title: 'Prices:',
        buffet_saigon_prices_desc: 'Adults: <span class="preis">35 €</span><br>Children up to 13 years: <span class="preis">17.50 €</span>',
        
        // Öffnungszeiten
        opening_hours_title: 'Opening Hours',
        opening_hours_desc: 'Monday to Sunday<br>12:00 – 22:00',
        
        // Impressum
        impressum_title: 'Legal Notice',
        
        // Speisekarte
        menu_title: 'Our Menu',
        menu_subtitle: 'Discover our variety of fresh ingredients and delicious dishes.',
        lunch_menu_title: 'Lunch Menu',
        vorspeisen_title: 'Warm Appetizers & Salads',
        
        // Mittagsmenü
        m1_desc: 'Fried egg rice with chicken and vegetables',
        m2_desc: 'Fried egg noodles with chicken and vegetables',
        m3_desc: 'Fried rice noodles with chicken and vegetables',
        m4_desc: 'Crispy baked chicken with vegetables and sweet & sour sauce',
        m5_desc: 'Crispy baked duck with vegetables and sweet & sour sauce',
        m6_desc: 'Beef with onions',
        m7_desc: 'Crispy Szechuan tofu (spicy)',
        
        // Vorspeisen
        vorspeise_10_title: 'Vegetarian Mini Spring Rolls',
        vorspeise_10_desc: '6 pieces with sweet & sour sauce',
        vorspeise_11_title: 'Baked Wonton',
        vorspeise_11_desc: '6 crispy meat-filled dumplings with sweet & sour sauce',
        vorspeise_12_title: 'Baked King Prawns',
        vorspeise_12_desc: '5 pieces with sweet & sour sauce',
        vorspeise_13_title: 'Lemon Chicken Wings',
        vorspeise_13_desc: '6 marinated and grilled chicken wings with lemon leaves and sweet & sour sauce',
        vorspeise_14_title: 'Summer Rolls',
        vorspeise_14_desc: '2 pieces with salad, rice noodles and hoisin peanut sauce',
        vorspeise_14a: 'Tofu',
        vorspeise_14b: 'Chicken',
        vorspeise_14c: 'Prawns',
        vorspeise_15_title: 'Homemade Spring Rolls',
        vorspeise_15_desc: '6 pieces with prawns, minced meat and vegetables',
        vorspeise_16_title: 'Chicken Salad',
        vorspeise_16_desc: 'with minced chicken, onions and herbs',
        vorspeise_17_title: 'Mango Salad',
        vorspeise_17_desc: 'with mango strips, onions, thai herbs and fish dressing sauce',
        vorspeise_18_title: 'Duck Salad',
        vorspeise_18_desc: 'with minced duck and thai herbs',
        vorspeise_19_title: 'Glass Noodle Salad',
        vorspeise_19_desc: 'with glass noodles, thai herbs and dressing',
        vorspeise_19a: 'Tofu',
        vorspeise_19b: 'Chicken',
        vorspeise_19c: 'Prawns',
        vorspeise_20_title: 'Mixed Salad',
        vorspeise_20_desc: 'with sesame dressing',
        
        // Hauptgerichte
        gericht_30_title: 'Phở',
        gericht_30_desc: 'Traditional Vietnamese rice noodle soup with beef and fresh herbs',
        gericht_31_title: 'Bún Bò Huế',
        gericht_31_desc: 'Aromatic spicy beef rice noodle soup with lemongrass, pork knuckle, Vietnamese sausage and fresh herbs.',
        gericht_32_title: 'Hu tiu nam vang',
        gericht_32_desc: 'Saigon chicken with rice noodles, prawns, squid, minced pork and fresh herbs',
        gericht_33_title: 'Hu tiu nam vang kho',
        gericht_33_desc: 'Saigon rice noodles with homemade soy sauce, prawns, pork and quail eggs to mix, served with extra soup',
        gericht_34_title: 'Bun Bo Nam Bo',
        gericht_34_desc: 'Rice vermicelli, beef, onions, lemongrass, salad, peanuts, fish sauce',
        gericht_34_options: 'Also with tofu 11.50€ or chicken 12.50€',
        gericht_35_title: 'Bún chả giò',
        gericht_35_desc: 'Rice vermicelli, salad, peanuts, lime, dressing, onions, spring rolls, fish sauce.',
        gericht_36_title: 'Red Curry',
        gericht_36_desc: 'with coconut milk, vegetables',
        gericht_36_tofu: 'Tofu',
        gericht_36_chicken: 'Chicken',
        gericht_36_shrimp: 'Prawns',
        gericht_36_duck: 'Crispy duck',
        gericht_36_chicken_crispy: 'Crispy chicken',
        gericht_37_title: 'Rau xào',
        gericht_37_desc: 'Stir-fried seasonal vegetables with thai herbs, garlic, spicy',
        gericht_37_tofu: 'Tofu',
        gericht_37_chicken: 'Chicken',
        gericht_37_shrimp: 'Prawns',
        gericht_37_beef: 'Beef',
        gericht_37_duck: 'Crispy duck',
        gericht_38_title: 'Special Sweet & Sour Sauce Dish',
        gericht_38_desc: 'with pineapple, tomatoes, vegetables',
        gericht_38_tofu: 'Tofu',
        gericht_38_chicken_crispy: 'Crispy chicken',
        gericht_38_shrimp_crispy: 'Crispy prawns',
        gericht_38_duck: 'Crispy duck',
        gericht_39_title: 'Phad Khing',
        gericht_39_desc: 'with stir-fried seasonal vegetables, ginger, garlic',
        gericht_39_tofu: 'Tofu',
        gericht_39_chicken: 'Chicken',
        gericht_39_shrimp: 'Prawns',
        gericht_39_beef: 'Beef',
        gericht_39_duck: 'Crispy duck',
        gericht_40_title: 'Fried Egg Rice',
        gericht_40_desc: 'with vegetables',
        gericht_40_tofu: 'Tofu',
        gericht_40_chicken: 'Chicken',
        gericht_40_shrimp: 'Prawns',
        gericht_40_duck: 'Crispy duck',
        gericht_40_chicken_crispy: 'Crispy chicken',
        gericht_41_title: 'Fried Egg Noodles',
        gericht_41_desc: 'with vegetables',
        gericht_41_tofu: 'Tofu',
        gericht_41_chicken: 'Chicken',
        gericht_41_shrimp: 'Prawns',
        gericht_41_duck: 'Crispy duck',
        gericht_41_chicken_crispy: 'Crispy chicken',
        gericht_42_title: 'Pho Xao',
        gericht_42_desc: 'Stir-fried rice noodles with vegetables',
        gericht_42_tofu: 'Tofu',
        gericht_42_chicken: 'Chicken',
        gericht_42_shrimp: 'Prawns',
        gericht_42_duck: 'Crispy duck',
        
        // Suppen
        suppen_title: 'Soups',
        suppe_1_title: 'Miso Soup',
        suppe_1_desc: 'Japanese soybean paste, tofu, seaweed, spring onions',
        suppe_2_title: 'Hot & Sour Soup',
        suppe_2_desc: 'With chicken, mushrooms, bamboo, chili, egg',
        suppe_3_title: 'Tom Kha Gai',
        suppe_3_desc: 'Thai coconut milk soup with chicken, mushrooms, lemongrass',
        suppe_4_title: 'Wonton Soup',
        suppe_4_desc: 'With filled dumplings, vegetables, spring onions',
        
        // Desserts
        dessert_title: 'Dessert',
        dessert_1_title: 'Baked Bananas',
        dessert_1_desc: 'with honey & vanilla ice cream',
        dessert_1_honey: 'with honey',
        dessert_1_honey_ice: 'with honey & vanilla ice cream',
        dessert_2_title: 'Mixed Ice Cream',
        dessert_2_desc: 'with cream',
        dessert_3_title: 'Che chuoi',
        dessert_3_desc: 'with coconut milk & peanuts',
        dessert_4_title: 'Baked Bananas with Honey',
        dessert_5_title: 'Banh tet chuoi',
        dessert_5_desc: 'Sticky rice with coconut milk & peanuts',
        
        // Maps
        maps_title: 'Find us here',
        maps_button: 'Open map',
        maps_button_apple: 'Open in Apple Maps',
        maps_button_google: 'Open in Google Maps'
    },
    vi: {
        // Navigation
        nav_home: 'Trang chủ',
        nav_buffet: 'Món buffet',
        nav_menu: 'Thực đơn',
        nav_impressum: 'Thông tin pháp lý',
        
        // Hero Section
        hero_subtitle: 'Hotpot & more',
        hero_description: 'Trải nghiệm bữa ăn All-You-Can-Eat khó quên với nguyên liệu tươi và hương vị chân thực.',
        hero_button: 'Khám phá thực đơn',
        
        // Buffet Section
        buffet_title: 'Món Buffet Của Chúng Tôi',
        buffet_time_title: 'Thời gian và giá:',
        buffet_time_desc: 'Buffet trưa nóng: 16,00 €',
        buffet_time_hours: 'Thứ 2 - Thứ 6 từ 12:00 - 15:30 (trừ ngày lễ)',
        buffet_offer_title: 'Món ăn:',
        buffet_offer_desc: 'Chúng tôi cung cấp buffet salad, buffet nóng và buffet tráng miệng.',
        buffet_note_title: 'Lưu ý:',
        buffet_note_desc: 'Hãy tự phục vụ – bao nhiêu lần tùy thích!',
        
        // Buffet à la Saigon Section
        buffet_saigon_title: 'Buffet à la Saigon',
        buffet_saigon_price: '35€',
        buffet_saigon_desc: 'Buffet nhiều món - Hãy tự phục vụ bao nhiêu lần tùy thích',
        buffet_saigon_includes_title: 'Bao gồm:',
        buffet_saigon_includes_desc: 'Lẩu và máy nướng',
        buffet_saigon_prices_title: 'Giá:',
        buffet_saigon_prices_desc: 'Người lớn: <span class="preis">35 €</span><br>Trẻ em dưới 13 tuổi: <span class="preis">17,50 €</span>',
        
        // Öffnungszeiten
        opening_hours_title: 'Giờ mở cửa',
        opening_hours_desc: 'Thứ 2 đến Chủ nhật<br>12:00 – 22:00',
        
        // Impressum
        impressum_title: 'Thông tin pháp lý',
        
        // Speisekarte
        menu_title: 'Thực Đơn Của Chúng Tôi',
        menu_subtitle: 'Khám phá sự đa dạng nguyên liệu tươi và món ăn ngon của chúng tôi.',
        lunch_menu_title: 'Thực Đơn Trưa',
        vorspeisen_title: 'Khai Vị Nóng & Salad',
        
        // Mittagsmenü
        m1_desc: 'Cơm chiên trứng với thịt gà và rau',
        m2_desc: 'Mì chiên trứng với thịt gà và rau',
        m3_desc: 'Bún chiên với thịt gà và rau',
        m4_desc: 'Gà chiên giòn với rau và sốt chua ngọt',
        m5_desc: 'Vịt chiên giòn với rau và sốt chua ngọt',
        m6_desc: 'Thịt bò với hành tây',
        m7_desc: 'Đậu phụ Tứ Xuyên giòn (cay)',
        
        // Vorspeisen
        vorspeise_10_title: 'Chả giò chay mini',
        vorspeise_10_desc: '6 cái với sốt chua ngọt',
        vorspeise_11_title: 'Hoành thánh chiên',
        vorspeise_11_desc: '6 cái bánh bao nhân thịt giòn với sốt chua ngọt',
        vorspeise_12_title: 'Tôm sú chiên',
        vorspeise_12_desc: '5 con với sốt chua ngọt',
        vorspeise_13_title: 'Cánh gà chanh',
        vorspeise_13_desc: '6 cánh gà ướp và nướng với lá chanh và sốt chua ngọt',
        vorspeise_14_title: 'Gỏi cuốn',
        vorspeise_14_desc: '2 cuốn với rau, bún và sốt hoisin đậu phộng',
        vorspeise_14a: 'Đậu phụ',
        vorspeise_14b: 'Thịt gà',
        vorspeise_14c: 'Tôm',
        vorspeise_15_title: 'Chả giò nhà làm',
        vorspeise_15_desc: '6 cái với tôm, thịt băm và rau',
        vorspeise_16_title: 'Gỏi gà',
        vorspeise_16_desc: 'với thịt gà băm, hành tây và các loại rau thơm',
        vorspeise_17_title: 'Gỏi xoài',
        vorspeise_17_desc: 'với sợi xoài, hành tây, rau thơm Thái và sốt cá',
        vorspeise_18_title: 'Gỏi vịt',
        vorspeise_18_desc: 'với thịt vịt băm và rau thơm Thái',
        vorspeise_19_title: 'Gỏi miến',
        vorspeise_19_desc: 'với miến, rau thơm Thái và sốt trộn',
        vorspeise_19a: 'Đậu phụ',
        vorspeise_19b: 'Thịt gà',
        vorspeise_19c: 'Tôm',
        vorspeise_20_title: 'Gỏi trộn',
        vorspeise_20_desc: 'với sốt mè',
        
        // Hauptgerichte
        gericht_30_title: 'Phở',
        gericht_30_desc: 'Phở truyền thống Việt Nam với thịt bò và rau thơm tươi',
        gericht_31_title: 'Bún Bò Huế',
        gericht_31_desc: 'Bún bò Huế cay thơm với sả, giò heo, chả Huế và rau thơm tươi.',
        gericht_32_title: 'Hủ tiếu Nam Vang',
        gericht_32_desc: 'Hủ tiếu Sài Gòn với bún, tôm, mực, thịt heo băm và rau thơm tươi',
        gericht_33_title: 'Hủ tiếu Nam Vang khô',
        gericht_33_desc: 'Hủ tiếu Sài Gòn với nước tương nhà làm, tôm, thịt heo và trứng cút để trộn, kèm nước dùng thêm',
        gericht_34_title: 'Bún bò Nam Bộ',
        gericht_34_desc: 'Bún, thịt bò, hành tây, sả, rau, đậu phộng, nước mắm',
        gericht_34_options: 'Cũng có với đậu phụ 11,50€ hoặc thịt gà 12,50€',
        gericht_35_title: 'Bún chả giò',
        gericht_35_desc: 'Bún, rau, đậu phộng, chanh, sốt trộn, hành tây, chả giò, nước mắm.',
        gericht_36_title: 'Cà ri đỏ',
        gericht_36_desc: 'với nước cốt dừa, rau',
        gericht_36_tofu: 'Đậu phụ',
        gericht_36_chicken: 'Thịt gà',
        gericht_36_shrimp: 'Tôm',
        gericht_36_duck: 'Vịt chiên giòn',
        gericht_36_chicken_crispy: 'Gà chiên giòn',
        gericht_37_title: 'Rau xào',
        gericht_37_desc: 'Rau theo mùa xào với rau thơm Thái, tỏi, cay',
        gericht_37_tofu: 'Đậu phụ',
        gericht_37_chicken: 'Thịt gà',
        gericht_37_shrimp: 'Tôm',
        gericht_37_beef: 'Thịt bò',
        gericht_37_duck: 'Vịt chiên giòn',
        gericht_38_title: 'Món đặc biệt sốt chua ngọt',
        gericht_38_desc: 'với dứa, cà chua, rau',
        gericht_38_tofu: 'Đậu phụ',
        gericht_38_chicken_crispy: 'Gà chiên giòn',
        gericht_38_shrimp_crispy: 'Tôm chiên giòn',
        gericht_38_duck: 'Vịt chiên giòn',
        gericht_39_title: 'Phad Khing',
        gericht_39_desc: 'với rau theo mùa xào, gừng, tỏi',
        gericht_39_tofu: 'Đậu phụ',
        gericht_39_chicken: 'Thịt gà',
        gericht_39_shrimp: 'Tôm',
        gericht_39_beef: 'Thịt bò',
        gericht_39_duck: 'Vịt chiên giòn',
        gericht_40_title: 'Cơm chiên trứng',
        gericht_40_desc: 'với rau',
        gericht_40_tofu: 'Đậu phụ',
        gericht_40_chicken: 'Thịt gà',
        gericht_40_shrimp: 'Tôm',
        gericht_40_duck: 'Vịt chiên giòn',
        gericht_40_chicken_crispy: 'Gà chiên giòn',
        gericht_41_title: 'Mì chiên trứng',
        gericht_41_desc: 'với rau',
        gericht_41_tofu: 'Đậu phụ',
        gericht_41_chicken: 'Thịt gà',
        gericht_41_shrimp: 'Tôm',
        gericht_41_duck: 'Vịt chiên giòn',
        gericht_41_chicken_crispy: 'Gà chiên giòn',
        gericht_42_title: 'Phở xào',
        gericht_42_desc: 'Phở xào với rau',
        gericht_42_tofu: 'Đậu phụ',
        gericht_42_chicken: 'Thịt gà',
        gericht_42_shrimp: 'Tôm',
        gericht_42_duck: 'Vịt chiên giòn',
        
        // Suppen
        suppen_title: 'Súp',
        suppe_1_title: 'Súp Miso',
        suppe_1_desc: 'Tương đậu nành Nhật, đậu phụ, rong biển, hành lá',
        suppe_2_title: 'Súp chua cay',
        suppe_2_desc: 'Với gà, nấm, măng, ớt, trứng',
        suppe_3_title: 'Tom Kha Gai',
        suppe_3_desc: 'Súp nước cốt dừa Thái với gà, nấm, sả',
        suppe_4_title: 'Súp hoành thánh',
        suppe_4_desc: 'Với bánh bao nhân, rau, hành lá',
        
        // Desserts
        dessert_title: 'Tráng miệng',
        dessert_1_title: 'Chuối nướng',
        dessert_1_desc: 'với mật ong & kem vani',
        dessert_1_honey: 'với mật ong',
        dessert_1_honey_ice: 'với mật ong & kem vani',
        dessert_2_title: 'Kem trộn',
        dessert_2_desc: 'với kem tươi',
        dessert_3_title: 'Chè chuối',
        dessert_3_desc: 'với nước cốt dừa & đậu phộng',
        dessert_4_title: 'Chuối nướng với mật ong',
        dessert_5_title: 'Bánh tét chuối',
        dessert_5_desc: 'Xôi với nước cốt dừa & đậu phộng',
        
        // Maps
        maps_title: 'Tìm chúng tôi tại đây',
        maps_button: 'Mở bản đồ',
        maps_button_apple: 'Mở bằng Apple Maps',
        maps_button_google: 'Mở bằng Google Maps'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    // Navigation Links
    document.querySelectorAll('.navbar a[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Flaggen-Button aktiv setzen
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

// Sprach-Dropdown-Logik
function setupLanguageDropdown() {
    const currentBtn = document.getElementById('current-lang-btn');
    const dropdown = document.getElementById('lang-dropdown');
    const langBtns = dropdown.querySelectorAll('.lang-btn');
    let currentLang = 'de';

    // Flagge im Button aktualisieren
    function updateCurrentFlag(lang) {
        let flagSrc = {
            de: 'https://flagcdn.com/de.svg',
            en: 'https://flagcdn.com/gb.svg',
            vi: 'https://flagcdn.com/vn.svg'
        }[lang] || 'https://flagcdn.com/de.svg';
        currentBtn.querySelector('img').src = flagSrc;
    }

    // Dropdown anzeigen/verstecken
    currentBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    });
    // Dropdown schließen bei Klick außerhalb
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });
    // Sprache wechseln
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            updateCurrentFlag(lang);
            dropdown.style.display = 'none';
            currentLang = lang;
        });
    });
    // Initial Flagge
    updateCurrentFlag('de');
}

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenu();
    animateOnHover();
    animateOnScroll();
    // Sprachumschalter (Dropdown)
    setupLanguageDropdown();
    setLanguage('de'); // Standard: Deutsch
});

// CSS für Animationen ergänzen (invisible/visible)
// .invisible { opacity: 0; transform: translateY(40px); transition: opacity 0.7s, transform 0.7s; }
// .visible { opacity: 1; transform: translateY(0); }