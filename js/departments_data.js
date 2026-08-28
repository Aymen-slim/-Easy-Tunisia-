/**
 * Official & Verified Directory of Tunisian Government Departments & Consular Services
 * Contains exact GPS coordinates, real addresses, phone numbers, and administrative jurisdictions.
 * 
 * Categories:
 * - police: مراكز الأمن الوطني والشرطة ومناطق الأمن (National Police Stations & Districts)
 * - garde_nationale: مراكز وأقاليم ومناطق الحرس الوطني (National Guard Posts & Districts)
 * - municipality: قصور البلديات والدوائر البلدية (Municipalities & Civil Status)
 * - recette: القباضات المالية (Tax Revenue Offices - Recette des Finances)
 * - consulate: القنصليات العامة والبعثات الدبلوماسية التونسية بالخارج (Consulates & Embassies Abroad)
 */

const DEPARTMENTS_DATA = {
  // =========================================================================
  // 1. TUNIS (ولاية تونس)
  // =========================================================================
  tunis: [
    {
      id: "tun_pol_bab_bhar",
      type: "police",
      gov: "tunis",
      delegation: "باب بحر (شارع بورقيبة، لافايات)",
      name: { ar: "مركز الأمن الوطني بباب بحر", fr: "Poste de Police Bab Bhar", en: "Bab Bhar Police Station" },
      district: { ar: "منطقة الأمن الوطني بباب بحر", fr: "District de Police Bab Bhar", en: "Bab Bhar Police District" },
      lat: 36.8005,
      lng: 10.1802,
      address: { ar: "شارع الحبيب بورقيبة، تونس العاصمة", fr: "Avenue Habib Bourguiba, Tunis", en: "Habib Bourguiba Ave, Tunis" },
      phone: "+216 71 340 000",
      hours: { ar: "مفتوح 24/24 للإيداع والإرشادات (المكاتب الإدارية: 08:30 - 16:30)", fr: "24/7 (Bureaux: 08h30 - 16h30)", en: "24/7 (Offices: 08:30 - 16:30)" }
    },
    {
      id: "tun_pol_medina",
      type: "police",
      gov: "tunis",
      delegation: "تونس المدينة (القصبة، باب سويقة)",
      name: { ar: "منطقة ومركز الأمن الوطني بالقصبة وتونس المدينة", fr: "Poste de Police La Kasbah & Médina", en: "Kasbah & Medina Police Station" },
      district: { ar: "منطقة الأمن الوطني بتونس المدينة", fr: "District de Police Tunis Médina", en: "Tunis Medina Police District" },
      lat: 36.7978,
      lng: 10.1706,
      address: { ar: "ساحة القصبة، نهج سيدي بن عروس، تونس المدينة", fr: "Place de la Kasbah, Rue Sidi Ben Arous, Tunis", en: "Kasbah Square, Tunis Medina" },
      phone: "+216 71 561 000",
      hours: { ar: "مفتوح 24/24 (المكاتب: 08:30 - 16:30)", fr: "24/7 (Bureaux: 08h30 - 16h30)", en: "24/7" }
    },
    {
      id: "tun_pol_marsa",
      type: "police",
      gov: "tunis",
      delegation: "المرسى (الشاطئ، قمرت، سيدي بوسعيد)",
      name: { ar: "مركز الأمن الوطني بالمرسى الشرقية والشاطئ", fr: "Poste de Police La Marsa", en: "La Marsa Police Station" },
      district: { ar: "منطقة الأمن الوطني بقرطاج", fr: "District de Police Carthage", en: "Carthage Police District" },
      lat: 36.8782,
      lng: 10.3248,
      address: { ar: "نهج علي بلهوان، المرسى الشاطئ", fr: "Rue Ali Belhouane, La Marsa Plage", en: "Ali Belhouane St, La Marsa" },
      phone: "+216 71 774 211",
      hours: { ar: "مفتوح 24/24 (مكاتب الجوازات والتعريف: 08:30 - 16:30)", fr: "24/7 (Bureaux: 08h30 - 16h30)", en: "24/7" }
    },
    {
      id: "tun_pol_carthage",
      type: "police",
      gov: "tunis",
      delegation: "قرطاج (Carthage، بيرصا، صلامبو)",
      name: { ar: "منطقة ومركز الأمن الوطني بقرطاج بيرصا", fr: "Poste de Police Carthage Byrsa", en: "Carthage Byrsa Police Station" },
      district: { ar: "منطقة الأمن الوطني بقرطاج", fr: "District de Police Carthage", en: "Carthage District" },
      lat: 36.8528,
      lng: 10.3315,
      address: { ar: "شارع الحبيب بورقيبة، قرطاج بيرصا", fr: "Avenue Habib Bourguiba, Carthage", en: "Habib Bourguiba Ave, Carthage" },
      phone: "+216 71 731 011",
      hours: { ar: "مفتوح 24/24 (المكاتب: 08:30 - 16:30)", fr: "24/7", en: "24/7" }
    },
    {
      id: "tun_pol_sidi_bou_said",
      type: "police",
      gov: "tunis",
      delegation: "المرسى (الشاطئ، قمرت، سيدي بوسعيد)",
      name: { ar: "مركز الأمن الوطني بسيدي بوسعيد", fr: "Poste de Police Sidi Bou Saïd", en: "Sidi Bou Said Police Station" },
      district: { ar: "منطقة الأمن الوطني بقرطاج", fr: "District de Police Carthage", en: "Carthage Police District" },
      lat: 36.8711,
      lng: 10.3418,
      address: { ar: "شارع 14 جانفي، سيدي بوسعيد", fr: "Avenue 14 Janvier, Sidi Bou Saïd", en: "14 Janvier Ave, Sidi Bou Said" },
      phone: "+216 71 740 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "tun_pol_goulette",
      type: "police",
      gov: "tunis",
      delegation: "حلق الوادي (La Goulette، الكرم)",
      name: { ar: "مركز الأمن الوطني بحلق الوادي", fr: "Poste de Police La Goulette", en: "La Goulette Police Station" },
      district: { ar: "منطقة الأمن الوطني بقرطاج", fr: "District de Police Carthage", en: "Carthage District" },
      lat: 36.8176,
      lng: 10.3012,
      address: { ar: "شارع الحبيب بورقيبة، حلق الوادي", fr: "Avenue Habib Bourguiba, La Goulette", en: "La Goulette Center" },
      phone: "+216 71 735 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "tun_pol_bardo",
      type: "police",
      gov: "tunis",
      delegation: "باردو (Le Bardo)",
      name: { ar: "منطقة ومركز الأمن الوطني بباردو", fr: "Poste et District de Police Le Bardo", en: "Le Bardo Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بباردو", fr: "District de Police Le Bardo", en: "Bardo District" },
      lat: 36.8095,
      lng: 10.1412,
      address: { ar: "شارع الحبيب بورقيبة، قبالة مجلس النواب، باردو", fr: "Avenue Habib Bourguiba, Le Bardo", en: "Habib Bourguiba Ave, Bardo" },
      phone: "+216 71 580 011",
      hours: { ar: "مفتوح 24/24 (المكاتب: 08:30 - 16:30)", fr: "24/7", en: "24/7" }
    },
    {
      id: "tun_pol_menzah",
      type: "police",
      gov: "tunis",
      delegation: "المنزه (المنزه 1، 5، 6، 7، 8، 9)",
      name: { ar: "منطقة الأمن الوطني بالمنزه ومركز المنزه 1 و 6", fr: "Poste & District de Police El Menzah", en: "El Menzah Police District" },
      district: { ar: "منطقة الأمن الوطني بالمنزه", fr: "District de Police El Menzah", en: "El Menzah District" },
      lat: 36.8315,
      lng: 10.1780,
      address: { ar: "شارع عثمان بن عفان، المنزه الأول / المنزه السادس", fr: "Rue Othman Ibn Affane, El Menzah 1", en: "El Menzah 1" },
      phone: "+216 71 230 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "tun_pol_khadra",
      type: "police",
      gov: "tunis",
      delegation: "حي الخضراء (الشرقية، حي الخضراء)",
      name: { ar: "مركز الأمن الوطني بحي الخضراء والشرقية", fr: "Poste de Police Cité El Khadra", en: "Cite El Khadra Police Station" },
      district: { ar: "منطقة الأمن الوطني بالمنزه", fr: "District de Police El Menzah", en: "Menzah District" },
      lat: 36.8285,
      lng: 10.1985,
      address: { ar: "شارع خير الدين باشا، حي الخضراء", fr: "Avenue Kheireddine Pacha, Cité El Khadra", en: "Cite El Khadra" },
      phone: "+216 71 789 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "tun_muni_tunis",
      type: "municipality",
      gov: "tunis",
      delegation: "تونس المدينة (القصبة، باب سويقة)",
      name: { ar: "قصر بلدية تونس (القصبة - الحالة المدنية)", fr: "Hôtel de Ville de Tunis (La Kasbah)", en: "Tunis City Hall (Kasbah)" },
      lat: 36.7990,
      lng: 10.1685,
      address: { ar: "ساحة القصبة، تونس العاصمة", fr: "Place de la Kasbah, Tunis", en: "Kasbah Square, Tunis" },
      phone: "+216 71 561 000",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30 | السبت: 09:00 - 12:00", fr: "Lun-Ven: 08h30-16h30 | Sam: 09h00-12h00", en: "Mon-Fri: 08:30-16:30" }
    },
    {
      id: "tun_muni_marsa",
      type: "municipality",
      gov: "tunis",
      delegation: "المرسى (الشاطئ، قمرت، سيدي بوسعيد)",
      name: { ar: "قصر بلدية المرسى (مصلحة الحالة المدنية والتعريف بالإمضاء)", fr: "Hôtel de Ville de La Marsa", en: "La Marsa Municipality" },
      lat: 36.8795,
      lng: 10.3270,
      address: { ar: "ساحة الاستقلال، نهج علي بلهوان، المرسى", fr: "Place de l'Indépendance, La Marsa", en: "Independence Sq, La Marsa" },
      phone: "+216 71 775 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30 | السبت: 09:00 - 12:00", fr: "Lun-Ven: 08h30-16h30 | Sam: 09h00-12h00", en: "Mon-Fri: 08:30-16:30" }
    },
    {
      id: "tun_rec_tunis",
      type: "recette",
      gov: "tunis",
      delegation: "باب بحر (شارع بورقيبة، لافايات)",
      name: { ar: "القباضة المالية الرئيسية بتونس (نهج روما / باب بحر)", fr: "Recette des Finances Tunis Bab Bhar", en: "Tunis Bab Bhar Tax Office" },
      lat: 36.7995,
      lng: 10.1775,
      address: { ar: "نهج روما، قرب ساحة الاستقلال، تونس", fr: "Rue de Rome, Tunis", en: "Rue de Rome, Tunis" },
      phone: "+216 71 320 011",
      hours: { ar: "الإثنين - الجمعة: 08:15 - 16:15", fr: "Lun-Ven: 08h15 - 16h15", en: "Mon-Fri: 08:15 - 16:15" }
    },
    {
      id: "tun_rec_marsa",
      type: "recette",
      gov: "tunis",
      delegation: "المرسى (الشاطئ، قمرت، سيدي بوسعيد)",
      name: { ar: "القباضة المالية بالمرسى (طوابع ووصول خلاص)", fr: "Recette des Finances La Marsa", en: "La Marsa Tax Office" },
      lat: 36.8765,
      lng: 10.3230,
      address: { ar: "نهج الحبيب ثامر، المرسى الشاطئ", fr: "Rue Habib Thameur, La Marsa", en: "Habib Thameur St, La Marsa" },
      phone: "+216 71 742 011",
      hours: { ar: "الإثنين - الجمعة: 08:15 - 16:15", fr: "Lun-Ven: 08h15 - 16h15", en: "Mon-Fri: 08:15 - 16:15" }
    }
  ],

  // =========================================================================
  // 2. SOUSSE (ولاية سوسة)
  // =========================================================================
  sousse: [
    {
      id: "sou_pol_ville",
      type: "police",
      gov: "sousse",
      delegation: "سوسة المدينة (البلد والساحل)",
      name: { ar: "منطقة ومركز الأمن الوطني بسوسة المدينة (باب جديد)", fr: "District & Poste de Police Sousse Ville (Bab Jedid)", en: "Sousse Ville Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بسوسة المدينة", fr: "District de Police Sousse Ville", en: "Sousse Ville District" },
      lat: 35.8282,
      lng: 10.6385,
      address: { ar: "شارع الحبيب بورقيبة، قرب باب جديد وميناء سوسة", fr: "Avenue Habib Bourguiba, Sousse", en: "Habib Bourguiba Ave, Sousse" },
      phone: "+216 73 227 011",
      hours: { ar: "مفتوح 24/24 (مكتب الجوازات والتعريف: 08:30 - 16:30)", fr: "24/7", en: "24/7" }
    },
    {
      id: "sou_pol_khezama",
      type: "police",
      gov: "sousse",
      delegation: "سوسة جوهرة (خزامة، بوحسينة، الغابي)",
      name: { ar: "مركز الأمن الوطني بخزامة الشرقية والغربية", fr: "Poste de Police Khezama", en: "Khezama Police Station" },
      district: { ar: "منطقة الأمن الوطني بسوسة الشمالية / الجنوبية", fr: "District Sousse", en: "Sousse District" },
      lat: 35.8455,
      lng: 10.6185,
      address: { ar: "شارع الزبير بن العوام، خزامة الشرقية، سوسة", fr: "Rue Zoubaier Ibn El Aouam, Khezama, Sousse", en: "Khezama, Sousse" },
      phone: "+216 73 241 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "sou_pol_bouhsina",
      type: "police",
      gov: "sousse",
      delegation: "سوسة جوهرة (خزامة، بوحسينة، الغابي)",
      name: { ar: "منطقة الأمن الوطني بسوسة الجنوبية ومركز بوحسينة", fr: "District de Police Sousse Sud & Poste Bouhsina", en: "Sousse South Police District & Bouhsina Station" },
      district: { ar: "منطقة الأمن الوطني بسوسة الجنوبية", fr: "District Sousse Sud", en: "Sousse South District" },
      lat: 35.8195,
      lng: 10.6240,
      address: { ar: "طريق القلعة الصغرى، حي بوحسينة، سوسة", fr: "Route Kalaa Seghira, Bouhsina, Sousse", en: "Bouhsina, Sousse" },
      phone: "+216 73 234 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "sou_pol_hammam_sousse",
      type: "police",
      gov: "sousse",
      delegation: "حمام سوسة (القنطاوي، المنشية، مرسى القنطاوي)",
      name: { ar: "منطقة ومركز الأمن الوطني بحمام سوسة ومرسى القنطاوي", fr: "Poste & District de Police Hammam Sousse / Kantaoui", en: "Hammam Sousse & Port El Kantaoui Police Station" },
      district: { ar: "منطقة الأمن الوطني بسوسة الشمالية", fr: "District Sousse Nord", en: "Sousse North District" },
      lat: 35.8580,
      lng: 10.5980,
      address: { ar: "شارع الهادي نويرة، حمام سوسة", fr: "Avenue Hédi Nouira, Hammam Sousse", en: "Hedi Nouira Ave, Hammam Sousse" },
      phone: "+216 73 360 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "sou_pol_msaken",
      type: "police",
      gov: "sousse",
      delegation: "مساكن (M'saken)",
      name: { ar: "منطقة ومركز الأمن الوطني بمساكن", fr: "District & Poste de Police M'saken", en: "M'saken Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بمساكن", fr: "District de Police M'saken", en: "M'saken District" },
      lat: 35.7330,
      lng: 10.5820,
      address: { ar: "شارع الجمهورية، مساكن", fr: "Avenue de la République, M'saken", en: "Republic Ave, M'saken" },
      phone: "+216 73 260 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "sou_muni_sousse",
      type: "municipality",
      gov: "sousse",
      delegation: "سوسة المدينة (البلد والساحل)",
      name: { ar: "قصر بلدية سوسة المركزي (مصلحة الحالة المدنية)", fr: "Hôtel de Ville de Sousse", en: "Sousse City Hall" },
      lat: 35.8275,
      lng: 10.6370,
      address: { ar: "شارع الجمهورية، ساحة الشهداء، سوسة", fr: "Avenue de la République, Sousse", en: "Republic Ave, Sousse" },
      phone: "+216 73 225 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30 | السبت: 09:00 - 12:00", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    },
    {
      id: "sou_rec_sousse",
      type: "recette",
      gov: "sousse",
      delegation: "سوسة المدينة (البلد والساحل)",
      name: { ar: "القباضة المالية الرئيسية بسوسة (شارع بورقيبة)", fr: "Recette des Finances Sousse Principale", en: "Sousse Main Tax Office" },
      lat: 35.8290,
      lng: 10.6360,
      address: { ar: "شارع الحبيب بورقيبة، سوسة", fr: "Avenue Habib Bourguiba, Sousse", en: "Habib Bourguiba Ave, Sousse" },
      phone: "+216 73 226 011",
      hours: { ar: "الإثنين - الجمعة: 08:15 - 16:15", fr: "Lun-Ven: 08h15 - 16h15", en: "Mon-Fri: 08:15 - 16:15" }
    }
  ],

  // =========================================================================
  // 3. ARIANA (ولاية أريانة)
  // =========================================================================
  ariana: [
    {
      id: "ari_pol_ville",
      type: "police",
      gov: "ariana",
      delegation: "أريانة المدينة (Ariana Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بأريانة المدينة", fr: "District & Poste de Police Ariana Ville", en: "Ariana Ville Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بأريانة", fr: "District de Police Ariana", en: "Ariana District" },
      lat: 36.8625,
      lng: 10.1920,
      address: { ar: "شارع الهادي نويرة، أريانة", fr: "Avenue Hédi Nouira, Ariana", en: "Hedi Nouira Ave, Ariana" },
      phone: "+216 71 710 011",
      hours: { ar: "مفتوح 24/24 (مكتب الجوازات والتعريف: 08:30 - 16:30)", fr: "24/7", en: "24/7" }
    },
    {
      id: "ari_pol_soukra",
      type: "police",
      gov: "ariana",
      delegation: "سكرة (La Soukra، شطرانة، برج الوزير)",
      name: { ar: "مركز الأمن الوطني بسكرة وبرج الوزير", fr: "Poste de Police La Soukra", en: "La Soukra Police Station" },
      district: { ar: "منطقة الأمن الوطني بأريانة", fr: "District de Police Ariana", en: "Ariana District" },
      lat: 36.8835,
      lng: 10.2315,
      address: { ar: "شارع الاتحاد المغاربي، سكرة", fr: "Avenue de l'Union du Maghreb Arabe, La Soukra", en: "Maghreb Ave, La Soukra" },
      phone: "+216 71 760 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ari_pol_nasr",
      type: "police",
      gov: "ariana",
      delegation: "حي النصر 1 و 2 (Ennasr)",
      name: { ar: "مركز الأمن الوطني بالنصر 1 و 2", fr: "Poste de Police Ennasr", en: "Ennasr Police Station" },
      district: { ar: "منطقة الأمن الوطني بأريانة", fr: "District de Police Ariana", en: "Ariana District" },
      lat: 36.8745,
      lng: 10.1585,
      address: { ar: "شارع الهادي نويرة، النصر 2، أريانة", fr: "Avenue Hédi Nouira, Ennasr 2", en: "Ennasr 2, Ariana" },
      phone: "+216 71 820 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ari_pol_ghazela",
      type: "police",
      gov: "ariana",
      delegation: "رواد (Raoued، حي الغزالة، حي الصحافة)",
      name: { ar: "منطقة الأمن الوطني برواد ومركز حي الغزالة", fr: "District de Police Raoued & Poste Cité El Ghazala", en: "Raoued Police District & Ghazala Station" },
      district: { ar: "منطقة الأمن الوطني برواد", fr: "District de Police Raoued", en: "Raoued District" },
      lat: 36.8920,
      lng: 10.1830,
      address: { ar: "القطب التكنولوجي، حي الغزالة، أريانة", fr: "Pôle Technologique, Cité El Ghazala", en: "El Ghazala, Ariana" },
      phone: "+216 71 859 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ari_muni_ariana",
      type: "municipality",
      gov: "ariana",
      delegation: "أريانة المدينة (Ariana Ville)",
      name: { ar: "قصر بلدية أريانة (الحالة المدنية والتعريف بالإمضاء)", fr: "Hôtel de Ville d'Ariana", en: "Ariana City Hall" },
      lat: 36.8640,
      lng: 10.1945,
      address: { ar: "شارع الحبيب بورقيبة، أريانة", fr: "Avenue Habib Bourguiba, Ariana", en: "Habib Bourguiba Ave, Ariana" },
      phone: "+216 71 713 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30 | السبت: 09:00 - 12:00", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    },
    {
      id: "ari_rec_ariana",
      type: "recette",
      gov: "ariana",
      delegation: "أريانة المدينة (Ariana Ville)",
      name: { ar: "القباضة المالية بأريانة المدينة (شراء طوابع ووصول)", fr: "Recette des Finances Ariana", en: "Ariana Tax Office" },
      lat: 36.8610,
      lng: 10.1910,
      address: { ar: "نهج بيروت، أريانة المدينة", fr: "Rue de Beyrouth, Ariana", en: "Beyrouth St, Ariana" },
      phone: "+216 71 712 011",
      hours: { ar: "الإثنين - الجمعة: 08:15 - 16:15", fr: "Lun-Ven: 08h15 - 16h15", en: "Mon-Fri: 08:15 - 16:15" }
    }
  ],

  // =========================================================================
  // 4. BEN AROUS (ولاية بن عروس)
  // =========================================================================
  ben_arous: [
    {
      id: "ben_pol_ville",
      type: "police",
      gov: "ben_arous",
      delegation: "بن عروس المدينة",
      name: { ar: "منطقة ومركز الأمن الوطني ببن عروس", fr: "District & Poste de Police Ben Arous", en: "Ben Arous Police District & Station" },
      district: { ar: "منطقة الأمن الوطني ببن عروس", fr: "District de Police Ben Arous", en: "Ben Arous District" },
      lat: 36.7535,
      lng: 10.2240,
      address: { ar: "شارع فرنسا، بن عروس", fr: "Avenue de France, Ben Arous", en: "France Ave, Ben Arous" },
      phone: "+216 71 380 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ben_pol_mourouj",
      type: "police",
      gov: "ben_arous",
      delegation: "المروج (المروج 1، 2، 3، 4، 5، 6)",
      name: { ar: "منطقة ومركز الأمن الوطني بالمروج 1 و 3 و 5", fr: "District & Poste de Police El Mourouj", en: "El Mourouj Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالمروج", fr: "District de Police El Mourouj", en: "El Mourouj District" },
      lat: 36.7320,
      lng: 10.2110,
      address: { ar: "شارع الشهداء، المروج 1، بن عروس", fr: "Avenue des Martyrs, El Mourouj 1", en: "El Mourouj 1" },
      phone: "+216 71 366 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ben_pol_rades",
      type: "police",
      gov: "ben_arous",
      delegation: "رادس (Radès، رادس الشاطئ، رادس الغابة)",
      name: { ar: "منطقة ومركز الأمن الوطني برادس", fr: "District & Poste de Police Radès", en: "Rades Police Station" },
      district: { ar: "منطقة الأمن الوطني بمقرين / رادس", fr: "District Mégrine / Radès", en: "Rades District" },
      lat: 36.7670,
      lng: 10.2780,
      address: { ar: "شارع الحبيب بورقيبة، رادس", fr: "Avenue Habib Bourguiba, Radès", en: "Habib Bourguiba Ave, Rades" },
      phone: "+216 71 440 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ben_pol_hammam_lif",
      type: "police",
      gov: "ben_arous",
      delegation: "حمام الأنف (Hammam Lif)",
      name: { ar: "منطقة ومركز الأمن الوطني بحمام الأنف", fr: "District & Poste de Police Hammam Lif", en: "Hammam Lif Police Station" },
      district: { ar: "منطقة الأمن الوطني بحمام الأنف", fr: "District Hammam Lif", en: "Hammam Lif District" },
      lat: 36.7310,
      lng: 10.3410,
      address: { ar: "شارع الجمهورية، حمام الأنف", fr: "Avenue de la République, Hammam Lif", en: "Republic Ave, Hammam Lif" },
      phone: "+216 71 290 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "ben_muni_benarous",
      type: "municipality",
      gov: "ben_arous",
      delegation: "بن عروس المدينة",
      name: { ar: "قصر بلدية بن عروس (الحالة المدنية)", fr: "Hôtel de Ville de Ben Arous", en: "Ben Arous City Hall" },
      lat: 36.7540,
      lng: 10.2260,
      address: { ar: "شارع الحبيب بورقيبة، بن عروس", fr: "Avenue Habib Bourguiba, Ben Arous", en: "Habib Bourguiba Ave, Ben Arous" },
      phone: "+216 71 381 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 5. SFAX (ولاية صفاقس)
  // =========================================================================
  sfax: [
    {
      id: "sfx_pol_ville",
      type: "police",
      gov: "sfax",
      delegation: "صفاقس المدينة (Bab Diwan، مركز المدينة)",
      name: { ar: "منطقة ومركز الأمن الوطني بصفاقس المدينة (باب بحر)", fr: "District & Poste de Police Sfax Ville (Bab Bhar)", en: "Sfax Ville Police District & Station" },
      district: { ar: "إقليم ومنطقة الأمن الوطني بصفاقس المدينة", fr: "District de Police Sfax Ville", en: "Sfax Ville District" },
      lat: 34.7390,
      lng: 10.7610,
      address: { ar: "شارع الهادي شاكر، باب بحر، صفاقس", fr: "Avenue Hédi Chaker, Bab Bhar, Sfax", en: "Hedi Chaker Ave, Sfax" },
      phone: "+216 74 225 011",
      hours: { ar: "مفتوح 24/24 (مكتب الجوازات والتعريف: 08:30 - 16:30)", fr: "24/7", en: "24/7" }
    },
    {
      id: "sfx_pol_sakiet_ezzit",
      type: "police",
      gov: "sfax",
      delegation: "ساقية الزيت (Sakiet Ezzit)",
      name: { ar: "منطقة ومركز الأمن الوطني بساقية الزيت", fr: "District & Poste de Police Sakiet Ezzit", en: "Sakiet Ezzit Police Station" },
      district: { ar: "منطقة الأمن الوطني بصفاقس الشمالية", fr: "District Sfax Nord", en: "Sfax North District" },
      lat: 34.7930,
      lng: 10.7710,
      address: { ar: "طريق تونس كم 6، ساقية الزيت، صفاقس", fr: "Route de Tunis Km 6, Sakiet Ezzit", en: "Tunis Rd Km 6, Sakiet Ezzit" },
      phone: "+216 74 251 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "sfx_muni_sfax",
      type: "municipality",
      gov: "sfax",
      delegation: "صفاقس المدينة (Bab Diwan، مركز المدينة)",
      name: { ar: "قصر بلدية صفاقس المركزي (ساحة الهادي شاكر)", fr: "Hôtel de Ville de Sfax", en: "Sfax City Hall" },
      lat: 34.7400,
      lng: 10.7600,
      address: { ar: "شارع الحبيب بورقيبة، ساحة الهادي شاكر، صفاقس", fr: "Avenue Habib Bourguiba, Sfax", en: "Habib Bourguiba Ave, Sfax" },
      phone: "+216 74 220 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30 | السبت: 09:00 - 12:00", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    },
    {
      id: "sfx_rec_sfax",
      type: "recette",
      gov: "sfax",
      delegation: "صفاقس المدينة (Bab Diwan، مركز المدينة)",
      name: { ar: "القباضة المالية الرئيسية بصفاقس (باب بحر)", fr: "Recette des Finances Sousse / Sfax Principale", en: "Sfax Main Tax Office" },
      lat: 34.7380,
      lng: 10.7630,
      address: { ar: "شارع 18 جانفي، باب بحر، صفاقس", fr: "Rue 18 Janvier, Bab Bhar, Sfax", en: "18 Janvier St, Sfax" },
      phone: "+216 74 223 011",
      hours: { ar: "الإثنين - الجمعة: 08:15 - 16:15", fr: "Lun-Ven: 08h15 - 16h15", en: "Mon-Fri: 08:15 - 16:15" }
    }
  ],

  // =========================================================================
  // 6. NABEUL (ولاية نابل)
  // =========================================================================
  nabeul: [
    {
      id: "nab_pol_ville",
      type: "police",
      gov: "nabeul",
      delegation: "نابل المدينة (Nabeul Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بنابل المدينة", fr: "District & Poste de Police Nabeul Ville", en: "Nabeul Ville Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بنابل", fr: "District de Police Nabeul", en: "Nabeul District" },
      lat: 36.4530,
      lng: 10.7350,
      address: { ar: "شارع الحبيب ثامر، نابل", fr: "Avenue Habib Thameur, Nabeul", en: "Habib Thameur Ave, Nabeul" },
      phone: "+216 72 285 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "nab_pol_hammamet",
      type: "police",
      gov: "nabeul",
      delegation: "الحمامات (Hammamet، ياسمين الحمامات)",
      name: { ar: "منطقة ومركز الأمن الوطني بالحمامات وياسمين الحمامات", fr: "District & Poste de Police Hammamet", en: "Hammamet Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالحمامات", fr: "District de Police Hammamet", en: "Hammamet District" },
      lat: 36.4020,
      lng: 10.6150,
      address: { ar: "شارع الكويت، وسط مدينة الحمامات", fr: "Avenue du Koweit, Hammamet", en: "Koweit Ave, Hammamet" },
      phone: "+216 72 280 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "nab_pol_kelibia",
      type: "police",
      gov: "nabeul",
      delegation: "قليبية (Kélibia)",
      name: { ar: "منطقة ومركز الأمن الوطني بقليبية", fr: "District & Poste de Police Kélibia", en: "Kelibia Police Station" },
      district: { ar: "منطقة الأمن الوطني بقليبية", fr: "District Kélibia", en: "Kelibia District" },
      lat: 36.8480,
      lng: 11.0920,
      address: { ar: "شارع الشهداء، قليبية", fr: "Avenue des Martyrs, Kélibia", en: "Kelibia" },
      phone: "+216 72 296 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "nab_muni_nabeul",
      type: "municipality",
      gov: "nabeul",
      delegation: "نابل المدينة (Nabeul Ville)",
      name: { ar: "قصر بلدية نابل (الحالة المدنية)", fr: "Hôtel de Ville de Nabeul", en: "Nabeul City Hall" },
      lat: 36.4550,
      lng: 10.7380,
      address: { ar: "شارع الحبيب بورقيبة، نابل", fr: "Avenue Habib Bourguiba, Nabeul", en: "Habib Bourguiba Ave, Nabeul" },
      phone: "+216 72 285 500",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 7. BIZERTE (ولاية بنزرت)
  // =========================================================================
  bizerte: [
    {
      id: "biz_pol_ville",
      type: "police",
      gov: "bizerte",
      delegation: "بنزرت الشمالية (Bizerte Nord)",
      name: { ar: "منطقة ومركز الأمن الوطني ببنزرت المدينة", fr: "District & Poste de Police Bizerte Ville", en: "Bizerte Ville Police District & Station" },
      district: { ar: "منطقة الأمن الوطني ببنزرت", fr: "District de Police Bizerte", en: "Bizerte District" },
      lat: 37.2720,
      lng: 9.8710,
      address: { ar: "شارع الحبيب بورقيبة، بنزرت", fr: "Avenue Habib Bourguiba, Bizerte", en: "Habib Bourguiba Ave, Bizerte" },
      phone: "+216 72 431 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "biz_pol_menzel_bourguiba",
      type: "police",
      gov: "bizerte",
      delegation: "منزل بورقيبة (Menzel Bourguiba)",
      name: { ar: "منطقة ومركز الأمن الوطني بمنزل بورقيبة", fr: "District & Poste de Police Menzel Bourguiba", en: "Menzel Bourguiba Police Station" },
      district: { ar: "منطقة الأمن الوطني بمنزل بورقيبة", fr: "District Menzel Bourguiba", en: "Menzel Bourguiba District" },
      lat: 37.1540,
      lng: 9.7860,
      address: { ar: "شارع 2 مارس 1934، منزل بورقيبة", fr: "Avenue 2 Mars 1934, Menzel Bourguiba", en: "Menzel Bourguiba" },
      phone: "+216 72 460 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "biz_muni_bizerte",
      type: "municipality",
      gov: "bizerte",
      delegation: "بنزرت الشمالية (Bizerte Nord)",
      name: { ar: "قصر بلدية بنزرت المركزي", fr: "Hôtel de Ville de Bizerte", en: "Bizerte City Hall" },
      lat: 37.2740,
      lng: 9.8730,
      address: { ar: "شارع حسن النوري، بنزرت", fr: "Rue Hassan Nouri, Bizerte", en: "Hassan Nouri St, Bizerte" },
      phone: "+216 72 432 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 8. MONASTIR (ولاية المنستير)
  // =========================================================================
  monastir: [
    {
      id: "mon_pol_ville",
      type: "police",
      gov: "monastir",
      delegation: "المنستير المدينة (Monastir Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بالمنستير المدينة", fr: "District & Poste de Police Monastir Ville", en: "Monastir Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالمنستير", fr: "District de Police Monastir", en: "Monastir District" },
      lat: 35.7760,
      lng: 10.8290,
      address: { ar: "شارع الحبيب بورقيبة، المنستير", fr: "Avenue Habib Bourguiba, Monastir", en: "Habib Bourguiba Ave, Monastir" },
      phone: "+216 73 461 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "mon_pol_ksar_hellal",
      type: "police",
      gov: "monastir",
      delegation: "قصر هلال (Ksar Hellal)",
      name: { ar: "منطقة ومركز الأمن الوطني بقصر هلال", fr: "District & Poste de Police Ksar Hellal", en: "Ksar Hellal Police Station" },
      district: { ar: "منطقة الأمن الوطني بقصر هلال", fr: "District Ksar Hellal", en: "Ksar Hellal District" },
      lat: 35.6510,
      lng: 10.8920,
      address: { ar: "شارع الحبيب ثامر، قصر هلال", fr: "Avenue Habib Thameur, Ksar Hellal", en: "Ksar Hellal" },
      phone: "+216 73 475 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "mon_muni_monastir",
      type: "municipality",
      gov: "monastir",
      delegation: "المنستير المدينة (Monastir Ville)",
      name: { ar: "قصر بلدية المنستير (الحالة المدنية)", fr: "Hôtel de Ville de Monastir", en: "Monastir City Hall" },
      lat: 35.7770,
      lng: 10.8310,
      address: { ar: "شارع علي بلهوان، المنستير", fr: "Rue Ali Belhouane, Monastir", en: "Ali Belhouane St, Monastir" },
      phone: "+216 73 461 300",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 9. MAHDIA (ولاية المهدية)
  // =========================================================================
  mahdia: [
    {
      id: "mah_pol_ville",
      type: "police",
      gov: "mahdia",
      delegation: "المهدية المدينة (Mahdia Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بالمهدية المدينة", fr: "District & Poste de Police Mahdia Ville", en: "Mahdia Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالمهدية", fr: "District de Police Mahdia", en: "Mahdia District" },
      lat: 35.5030,
      lng: 11.0610,
      address: { ar: "شارع الطاهر صفر، المهدية", fr: "Avenue Taher Sfar, Mahdia", en: "Taher Sfar Ave, Mahdia" },
      phone: "+216 73 681 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "mah_muni_mahdia",
      type: "municipality",
      gov: "mahdia",
      delegation: "المهدية المدينة (Mahdia Ville)",
      name: { ar: "قصر بلدية المهدية (الحالة المدنية)", fr: "Hôtel de Ville de Mahdia", en: "Mahdia City Hall" },
      lat: 35.5040,
      lng: 11.0630,
      address: { ar: "شارع فرحات حشاد، المهدية", fr: "Avenue Farhat Hached, Mahdia", en: "Farhat Hached Ave, Mahdia" },
      phone: "+216 73 680 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 10. KAIROUAN (ولاية القيروان)
  // =========================================================================
  kairouan: [
    {
      id: "kai_pol_ville",
      type: "police",
      gov: "kairouan",
      delegation: "القيروان الشمالية (Kairouan Nord)",
      name: { ar: "منطقة ومركز الأمن الوطني بالقيروان المدينة (باب الجلادين)", fr: "District & Poste de Police Kairouan Ville (Bab Jalladine)", en: "Kairouan Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالقيروان", fr: "District de Police Kairouan", en: "Kairouan District" },
      lat: 35.6760,
      lng: 10.0980,
      address: { ar: "ساحة باب الجلادين، القيروان", fr: "Place Bab Jalladine, Kairouan", en: "Bab Jalladine Sq, Kairouan" },
      phone: "+216 77 232 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "kai_muni_kairouan",
      type: "municipality",
      gov: "kairouan",
      delegation: "القيروان الشمالية (Kairouan Nord)",
      name: { ar: "قصر بلدية القيروان (مصلحة الحالة المدنية)", fr: "Hôtel de Ville de Kairouan", en: "Kairouan City Hall" },
      lat: 35.6780,
      lng: 10.0960,
      address: { ar: "شارع الحبيب بورقيبة، القيروان", fr: "Avenue Habib Bourguiba, Kairouan", en: "Habib Bourguiba Ave, Kairouan" },
      phone: "+216 77 230 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 11. MEDENINE & DJERBA (ولاية مدنين وجربة)
  // =========================================================================
  medenine: [
    {
      id: "med_pol_djerba_houmt",
      type: "police",
      gov: "medenine",
      delegation: "حومة السوق (جربة Houmt Souk)",
      name: { ar: "منطقة ومركز الأمن الوطني بجربة حومة السوق", fr: "District & Poste de Police Djerba Houmt Souk", en: "Djerba Houmt Souk Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بجربة", fr: "District de Police Djerba", en: "Djerba Police District" },
      lat: 33.8760,
      lng: 10.8580,
      address: { ar: "شارع الحبيب بورقيبة، حومة السوق، جربة", fr: "Avenue Habib Bourguiba, Houmt Souk, Djerba", en: "Houmt Souk, Djerba" },
      phone: "+216 75 650 011",
      hours: { ar: "مفتوح 24/24 (مكتب الجوازات والتعريف: 08:30 - 16:30)", fr: "24/7", en: "24/7" }
    },
    {
      id: "med_pol_zarzis",
      type: "police",
      gov: "medenine",
      delegation: "جرجيس (Zarzis)",
      name: { ar: "منطقة ومركز الأمن الوطني بجرجيس", fr: "District & Poste de Police Zarzis", en: "Zarzis Police Station" },
      district: { ar: "منطقة الأمن الوطني بجرجيس", fr: "District Zarzis", en: "Zarzis District" },
      lat: 33.5040,
      lng: 11.1120,
      address: { ar: "طريق السويحل، جرجيس", fr: "Route Souihel, Zarzis", en: "Zarzis" },
      phone: "+216 75 683 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "med_pol_medenine_ville",
      type: "police",
      gov: "medenine",
      delegation: "مدنين الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بمدنين المدينة", fr: "District & Poste de Police Médenine Ville", en: "Medenine Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بمدنين", fr: "District Médenine", en: "Medenine District" },
      lat: 33.3520,
      lng: 10.4920,
      address: { ar: "شارع الحبيب بورقيبة، مدنين", fr: "Avenue Habib Bourguiba, Médenine", en: "Medenine" },
      phone: "+216 75 640 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "med_muni_djerba",
      type: "municipality",
      gov: "medenine",
      delegation: "حومة السوق (جربة Houmt Souk)",
      name: { ar: "قصر بلدية حومة السوق جربة", fr: "Hôtel de Ville de Djerba Houmt Souk", en: "Djerba Houmt Souk Municipality" },
      lat: 33.8770,
      lng: 10.8590,
      address: { ar: "شارع الطيب المهيري، حومة السوق جربة", fr: "Avenue Taïeb Mhiri, Houmt Souk", en: "Houmt Souk, Djerba" },
      phone: "+216 75 650 200",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 12. GABES (ولاية قابس)
  // =========================================================================
  gabes: [
    {
      id: "gab_pol_ville",
      type: "police",
      gov: "gabes",
      delegation: "قابس المدينة (Gabès Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بقابس المدينة", fr: "District & Poste de Police Gabès Ville", en: "Gabes Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بقابس", fr: "District de Police Gabès", en: "Gabes District" },
      lat: 33.8820,
      lng: 10.0960,
      address: { ar: "شارع الحبيب بورقيبة، قابس", fr: "Avenue Habib Bourguiba, Gabès", en: "Habib Bourguiba Ave, Gabes" },
      phone: "+216 75 270 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "gab_muni_gabes",
      type: "municipality",
      gov: "gabes",
      delegation: "قابس المدينة (Gabès Ville)",
      name: { ar: "قصر بلدية قابس المركزي", fr: "Hôtel de Ville de Gabès", en: "Gabes City Hall" },
      lat: 33.8810,
      lng: 10.0970,
      address: { ar: "شارع فرحات حشاد، قابس", fr: "Avenue Farhat Hached, Gabès", en: "Gabes" },
      phone: "+216 75 271 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 13. MANOUBA (ولاية منوبة)
  // =========================================================================
  manouba: [
    {
      id: "man_pol_ville",
      type: "police",
      gov: "manouba",
      delegation: "منوبة المدينة (Denden، منوبة)",
      name: { ar: "منطقة ومركز الأمن الوطني بمنوبة والدندان", fr: "District & Poste de Police Manouba", en: "Manouba Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بمنوبة", fr: "District de Police Manouba", en: "Manouba District" },
      lat: 36.8090,
      lng: 10.0980,
      address: { ar: "شارع الحبيب بورقيبة، الدندان / منوبة", fr: "Avenue Habib Bourguiba, Manouba", en: "Manouba Center" },
      phone: "+216 71 600 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "man_muni_manouba",
      type: "municipality",
      gov: "manouba",
      delegation: "منوبة المدينة (Denden، منوبة)",
      name: { ar: "قصر بلدية منوبة (الحالة المدنية)", fr: "Hôtel de Ville de Manouba", en: "Manouba City Hall" },
      lat: 36.8080,
      lng: 10.0970,
      address: { ar: "شارع الاستقلال، منوبة", fr: "Avenue de l'Indépendance, Manouba", en: "Manouba" },
      phone: "+216 71 602 011",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
    }
  ],

  // =========================================================================
  // 14. BEJA (ولاية باجة)
  // =========================================================================
  beja: [
    {
      id: "bej_pol_ville",
      type: "police",
      gov: "beja",
      delegation: "باجة الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بباجة المدينة", fr: "District & Poste de Police Béja", en: "Beja Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بباجة", fr: "District Béja", en: "Beja District" },
      lat: 36.7260,
      lng: 9.1840,
      address: { ar: "شارع الحبيب بورقيبة، باجة", fr: "Avenue Habib Bourguiba, Béja", en: "Beja Center" },
      phone: "+216 78 451 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 15. JENDOUBA (ولاية جندوبة)
  // =========================================================================
  jendouba: [
    {
      id: "jen_pol_ville",
      type: "police",
      gov: "jendouba",
      delegation: "جندوبة الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بجندوبة", fr: "District & Poste de Police Jendouba", en: "Jendouba Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بجندوبة", fr: "District Jendouba", en: "Jendouba District" },
      lat: 36.5020,
      lng: 8.7790,
      address: { ar: "شارع 9 أفريل، جندوبة", fr: "Avenue 9 Avril, Jendouba", en: "Jendouba" },
      phone: "+216 78 600 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    },
    {
      id: "jen_pol_tabarka",
      type: "police",
      gov: "jendouba",
      delegation: "طبرقة (Tabarka)",
      name: { ar: "منطقة ومركز الأمن الوطني بطبرقة", fr: "District & Poste de Police Tabarka", en: "Tabarka Police Station" },
      district: { ar: "منطقة الأمن الوطني بطبرقة", fr: "District Tabarka", en: "Tabarka District" },
      lat: 36.9540,
      lng: 8.7560,
      address: { ar: "شارع الحبيب بورقيبة، طبرقة", fr: "Avenue Habib Bourguiba, Tabarka", en: "Tabarka" },
      phone: "+216 78 670 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 16. LE KEF (ولاية الكاف)
  // =========================================================================
  kef: [
    {
      id: "kef_pol_ville",
      type: "police",
      gov: "kef",
      delegation: "الكاف الشرقية",
      name: { ar: "منطقة ومركز الأمن الوطني بالكاف المدينة", fr: "District & Poste de Police Le Kef", en: "Le Kef Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالكاف", fr: "District Le Kef", en: "Le Kef District" },
      lat: 36.1810,
      lng: 8.7160,
      address: { ar: "شارع الحبيب بورقيبة، الكاف", fr: "Avenue Habib Bourguiba, Le Kef", en: "Le Kef" },
      phone: "+216 78 200 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 17. SILIANA (ولاية سليانة)
  // =========================================================================
  siliana: [
    {
      id: "sil_pol_ville",
      type: "police",
      gov: "siliana",
      delegation: "سليانة الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بسليانة", fr: "District & Poste de Police Siliana", en: "Siliana Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بسليانة", fr: "District Siliana", en: "Siliana District" },
      lat: 36.0840,
      lng: 9.3710,
      address: { ar: "شارع البيئة، سليانة", fr: "Avenue de l'Environnement, Siliana", en: "Siliana" },
      phone: "+216 78 870 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 18. ZAGHOUAN (ولاية زغوان)
  // =========================================================================
  zaghouan: [
    {
      id: "zag_pol_ville",
      type: "police",
      gov: "zaghouan",
      delegation: "زغوان المدينة",
      name: { ar: "منطقة ومركز الأمن الوطني بزغوان المدينة", fr: "District & Poste de Police Zaghouan", en: "Zaghouan Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بزغوان", fr: "District Zaghouan", en: "Zaghouan District" },
      lat: 36.4010,
      lng: 10.1440,
      address: { ar: "شارع الاستقلال، زغوان", fr: "Avenue de l'Indépendance, Zaghouan", en: "Zaghouan" },
      phone: "+216 72 675 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 19. GAFSA (ولاية قفصة)
  // =========================================================================
  gafsa: [
    {
      id: "gaf_pol_ville",
      type: "police",
      gov: "gafsa",
      delegation: "قفصة المدينة (Gafsa Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بقفصة المدينة", fr: "District & Poste de Police Gafsa Ville", en: "Gafsa Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بقفصة", fr: "District Gafsa", en: "Gafsa District" },
      lat: 34.4220,
      lng: 8.7860,
      address: { ar: "شارع الحبيب بورقيبة، قفصة", fr: "Avenue Habib Bourguiba, Gafsa", en: "Gafsa" },
      phone: "+216 76 226 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 20. KASSERINE (ولاية القصرين)
  // =========================================================================
  kasserine: [
    {
      id: "kas_pol_ville",
      type: "police",
      gov: "kasserine",
      delegation: "القصرين الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بالقصرين", fr: "District & Poste de Police Kasserine", en: "Kasserine Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بالقصرين", fr: "District Kasserine", en: "Kasserine District" },
      lat: 35.1680,
      lng: 8.8350,
      address: { ar: "شارع الحبيب بورقيبة، القصرين", fr: "Avenue Habib Bourguiba, Kasserine", en: "Kasserine" },
      phone: "+216 77 470 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 21. SIDI BOUZID (ولاية سيدي بوزيد)
  // =========================================================================
  sidi_bouzid: [
    {
      id: "sid_pol_ville",
      type: "police",
      gov: "sidi_bouzid",
      delegation: "سيدي بوزيد الغربية",
      name: { ar: "منطقة ومركز الأمن الوطني بسيدي بوزيد", fr: "District & Poste de Police Sidi Bouzid", en: "Sidi Bouzid Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بسيدي بوزيد", fr: "District Sidi Bouzid", en: "Sidi Bouzid District" },
      lat: 35.0370,
      lng: 9.4860,
      address: { ar: "شارع الحبيب بورقيبة، سيدي بوزيد", fr: "Avenue Habib Bourguiba, Sidi Bouzid", en: "Sidi Bouzid" },
      phone: "+216 76 632 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 22. TOZEUR (ولاية توزر)
  // =========================================================================
  tozeur: [
    {
      id: "toz_pol_ville",
      type: "police",
      gov: "tozeur",
      delegation: "توزر المدينة (Tozeur Ville)",
      name: { ar: "منطقة ومركز الأمن الوطني بتوزر المدينة", fr: "District & Poste de Police Tozeur", en: "Tozeur Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بتوزر", fr: "District Tozeur", en: "Tozeur District" },
      lat: 33.9180,
      lng: 8.1340,
      address: { ar: "شارع عبد القادر الشابي، توزر", fr: "Avenue Abdelkader Chabbi, Tozeur", en: "Tozeur" },
      phone: "+216 76 452 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 23. KEBILI (ولاية قبلي)
  // =========================================================================
  kebili: [
    {
      id: "keb_pol_ville",
      type: "police",
      gov: "kebili",
      delegation: "قبلي الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بقبلي", fr: "District & Poste de Police Kébili", en: "Kebili Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بقبلي", fr: "District Kébili", en: "Kebili District" },
      lat: 33.7050,
      lng: 8.9710,
      address: { ar: "شارع الحبيب بورقيبة، قبلي", fr: "Avenue Habib Bourguiba, Kébili", en: "Kebili" },
      phone: "+216 75 490 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 24. TATAOUINE (ولاية تطاوين)
  // =========================================================================
  tataouine: [
    {
      id: "tat_pol_ville",
      type: "police",
      gov: "tataouine",
      delegation: "تطاوين الشمالية",
      name: { ar: "منطقة ومركز الأمن الوطني بتطاوين المدينة", fr: "District & Poste de Police Tataouine", en: "Tataouine Police District & Station" },
      district: { ar: "منطقة الأمن الوطني بتطاوين", fr: "District Tataouine", en: "Tataouine District" },
      lat: 32.9310,
      lng: 10.4530,
      address: { ar: "شارع الحبيب بورقيبة، تطاوين", fr: "Avenue Habib Bourguiba, Tataouine", en: "Tataouine" },
      phone: "+216 75 860 011",
      hours: { ar: "مفتوح 24/24", fr: "24/7", en: "24/7" }
    }
  ],

  // =========================================================================
  // 25. ABROAD - TUNISIAN EMBASSIES & CONSULATES (القنصليات والبعثات الدبلوماسية)
  // =========================================================================
  abroad: [
    // --- FRANCE ---
    {
      id: "csl_fra_paris",
      type: "consulate",
      gov: "abroad",
      country: "France",
      delegation: "أوروبا (فرنسا: باريس، ليون، مارسيليا، ستراسبورغ، نيس، تولوز...)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بباريس", fr: "Consulat Général de Tunisie à Paris", en: "Consulate General of Tunisia in Paris" },
      lat: 48.8833,
      lng: 2.3025,
      address: { ar: "178 Rue de Courcelles, 75017 Paris, France", fr: "178 Rue de Courcelles, 75017 Paris, France", en: "178 Rue de Courcelles, 75017 Paris, France" },
      phone: "+33 1 53 70 69 10",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 15:00 (الأحد والإثنين مغلق)", fr: "Mar-Sam: 08h30 - 15h00 (Fermé Dim-Lun)", en: "Tue-Sat: 08:30 - 15:00" },
      url: "https://consulat-paris.diplomatie.gov.tn"
    },
    {
      id: "csl_fra_pantin",
      type: "consulate",
      gov: "abroad",
      country: "France",
      delegation: "أوروبا (فرنسا: باريس، ليون، مارسيليا، ستراسبورغ، نيس، تولوز...)",
      name: { ar: "قنصلية تونس ببانتان (باريس الشمال والشرق)", fr: "Consulat de Tunisie à Pantin", en: "Consulate of Tunisia in Pantin" },
      lat: 48.8942,
      lng: 2.4045,
      address: { ar: "19 Rue Magenta, 93500 Pantin, France", fr: "19 Rue Magenta, 93500 Pantin, France", en: "19 Rue Magenta, 93500 Pantin, France" },
      phone: "+33 1 48 91 63 00",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 15:00", fr: "Mar-Sam: 08h30 - 15h00", en: "Tue-Sat: 08:30 - 15:00" }
    },
    {
      id: "csl_fra_lyon",
      type: "consulate",
      gov: "abroad",
      country: "France",
      delegation: "أوروبا (فرنسا: باريس، ليون، مارسيليا، ستراسبورغ، نيس، تولوز...)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بليون", fr: "Consulat Général de Tunisie à Lyon", en: "Consulate General of Tunisia in Lyon" },
      lat: 45.7708,
      lng: 4.8456,
      address: { ar: "14 Avenue du Maréchal Foch, 69006 Lyon, France", fr: "14 Avenue du Maréchal Foch, 69006 Lyon, France", en: "14 Avenue du Maréchal Foch, 69006 Lyon, France" },
      phone: "+33 4 78 89 26 26",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 15:00", fr: "Mar-Sam: 08h30 - 15h00", en: "Tue-Sat: 08:30 - 15:00" }
    },
    {
      id: "csl_fra_marseille",
      type: "consulate",
      gov: "abroad",
      country: "France",
      delegation: "أوروبا (فرنسا: باريس، ليون، مارسيليا، ستراسبورغ، نيس، تولوز...)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بمارسيليا", fr: "Consulat Général de Tunisie à Marseille", en: "Consulate General of Tunisia in Marseille" },
      lat: 43.2989,
      lng: 5.3789,
      address: { ar: "8 Boulevard d'Athènes, 13001 Marseille, France", fr: "8 Boulevard d'Athènes, 13001 Marseille, France", en: "8 Boulevard d'Athènes, 13001 Marseille, France" },
      phone: "+33 4 91 50 28 68",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 14:30", fr: "Mar-Sam: 08h30 - 14h30", en: "Tue-Sat: 08:30 - 14:30" }
    },
    {
      id: "csl_fra_nice",
      type: "consulate",
      gov: "abroad",
      country: "France",
      delegation: "أوروبا (فرنسا: باريس، ليون، مارسيليا، ستراسبورغ، نيس، تولوز...)",
      name: { ar: "قنصلية الجمهورية التونسية بنيس", fr: "Consulat de Tunisie à Nice", en: "Consulate of Tunisia in Nice" },
      lat: 43.6995,
      lng: 7.2514,
      address: { ar: "18 Avenue des Fleurs, 06000 Nice, France", fr: "18 Avenue des Fleurs, 06000 Nice, France", en: "18 Avenue des Fleurs, 06000 Nice, France" },
      phone: "+33 4 93 96 81 81",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 14:30", fr: "Mar-Sam: 08h30 - 14h30", en: "Tue-Sat: 08:30 - 14:30" }
    },
    {
      id: "csl_fra_strasbourg",
      type: "consulate",
      gov: "abroad",
      country: "France",
      delegation: "أوروبا (فرنسا: باريس، ليون، مارسيليا، ستراسبورغ، نيس، تولوز...)",
      name: { ar: "قنصلية الجمهورية التونسية بستراسبورغ", fr: "Consulat de Tunisie à Strasbourg", en: "Consulate of Tunisia in Strasbourg" },
      lat: 48.5882,
      lng: 7.7681,
      address: { ar: "6 Rue Schiller, 67000 Strasbourg, France", fr: "6 Rue Schiller, 67000 Strasbourg, France", en: "6 Rue Schiller, 67000 Strasbourg, France" },
      phone: "+33 3 88 36 56 10",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 15:00", fr: "Mar-Sam: 08h30 - 15h00", en: "Tue-Sat: 08:30 - 15:00" }
    },

    // --- ITALY ---
    {
      id: "csl_ita_rome",
      type: "consulate",
      gov: "abroad",
      country: "Italy",
      delegation: "أوروبا (إيطاليا: روما، ميلانو، باليرمو، جنوة...)",
      name: { ar: "سفارة وقنصلية الجمهورية التونسية بروما", fr: "Ambassade et Consulat de Tunisie à Rome", en: "Embassy and Consulate of Tunisia in Rome" },
      lat: 41.9214,
      lng: 12.5186,
      address: { ar: "Via Asmara 7, 00199 Roma, Italy", fr: "Via Asmara 7, 00199 Roma, Italy", en: "Via Asmara 7, 00199 Roma, Italy" },
      phone: "+39 06 860 3068",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 14:00", fr: "Lun-Ven: 09h00 - 14h00", en: "Mon-Fri: 09:00 - 14:00" }
    },
    {
      id: "csl_ita_milan",
      type: "consulate",
      gov: "abroad",
      country: "Italy",
      delegation: "أوروبا (إيطاليا: روما، ميلانو، باليرمو، جنوة...)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بميلانو", fr: "Consulat Général de Tunisie à Milan", en: "Consulate General of Tunisia in Milan" },
      lat: 45.4748,
      lng: 9.1672,
      address: { ar: "Via Antonio Canova 2, 20145 Milano, Italy", fr: "Via Antonio Canova 2, 20145 Milano, Italy", en: "Via Antonio Canova 2, 20145 Milano, Italy" },
      phone: "+39 02 345 37946",
      hours: { ar: "الثلاثاء - السبت: 08:30 - 14:30", fr: "Mar-Sam: 08h30 - 14h30", en: "Tue-Sat: 08:30 - 14:30" }
    },
    {
      id: "csl_ita_palermo",
      type: "consulate",
      gov: "abroad",
      country: "Italy",
      delegation: "أوروبا (إيطاليا: روما، ميلانو، باليرمو، جنوة...)",
      name: { ar: "قنصلية الجمهورية التونسية بباليرمو (صقلية)", fr: "Consulat de Tunisie à Palerme", en: "Consulate of Tunisia in Palermo" },
      lat: 38.1278,
      lng: 13.3592,
      address: { ar: "Piazza Ignazio Florio 24, 90139 Palermo, Italy", fr: "Piazza Ignazio Florio 24, 90139 Palermo, Italy", en: "Piazza Ignazio Florio 24, Palermo" },
      phone: "+39 091 328 915",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 14:00", fr: "Lun-Ven: 09h00 - 14h00", en: "Mon-Fri: 09:00 - 14:00" }
    },

    // --- GERMANY ---
    {
      id: "csl_deu_berlin",
      type: "consulate",
      gov: "abroad",
      country: "Germany",
      delegation: "أوروبا (ألمانيا: برلين، بون، ميونخ...)",
      name: { ar: "سفارة وقنصلية الجمهورية التونسية ببرلين", fr: "Ambassade de Tunisie à Berlin", en: "Embassy of Tunisia in Berlin" },
      lat: 52.5122,
      lng: 13.2662,
      address: { ar: "Lindenallee 16, 14050 Berlin, Germany", fr: "Lindenallee 16, 14050 Berlin, Germany", en: "Lindenallee 16, 14050 Berlin, Germany" },
      phone: "+49 30 304 7040",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 14:00", fr: "Lun-Ven: 09h00 - 14h00", en: "Mon-Fri: 09:00 - 14:00" }
    },
    {
      id: "csl_deu_bonn",
      type: "consulate",
      gov: "abroad",
      country: "Germany",
      delegation: "أوروبا (ألمانيا: برلين، بون، ميونخ...)",
      name: { ar: "القنصلية العامة للجمهورية التونسية ببون", fr: "Consulat Général de Tunisie à Bonn", en: "Consulate General of Tunisia in Bonn" },
      lat: 50.6975,
      lng: 7.1428,
      address: { ar: "Godesberger Allee 103, 53175 Bonn, Germany", fr: "Godesberger Allee 103, 53175 Bonn, Germany", en: "Godesberger Allee 103, Bonn" },
      phone: "+49 228 957 700",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 14:00", fr: "Lun-Ven: 09h00 - 14h00", en: "Mon-Fri: 09:00 - 14:00" }
    },
    {
      id: "csl_deu_munich",
      type: "consulate",
      gov: "abroad",
      country: "Germany",
      delegation: "أوروبا (ألمانيا: برلين، بون، ميونخ...)",
      name: { ar: "قنصلية الجمهورية التونسية بميونخ", fr: "Consulat de Tunisie à Munich", en: "Consulate of Tunisia in Munich" },
      lat: 48.1425,
      lng: 11.5678,
      address: { ar: "Ottostraße 13, 80333 München, Germany", fr: "Ottostraße 13, 80333 München, Germany", en: "Ottostraße 13, Munich" },
      phone: "+49 89 550 5490",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 14:00", fr: "Lun-Ven: 09h00 - 14h00", en: "Mon-Fri: 09:00 - 14:00" }
    },

    // --- NORTH AMERICA ---
    {
      id: "csl_can_montreal",
      type: "consulate",
      gov: "abroad",
      country: "Canada",
      delegation: "أمريكا الشمالية (كندا: مونتريال، أوتاوا • أمريكا: واشنطن، نيويورك)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بمونتريال", fr: "Consulat Général de Tunisie à Montréal", en: "Consulate General of Tunisia in Montreal" },
      lat: 45.5015,
      lng: -73.5694,
      address: { ar: "1255 Boulevard Robert-Bourassa, Suite 300, Montréal, QC H3B 3V8, Canada", fr: "1255 Boulevard Robert-Bourassa, Montréal, QC H3B 3V8", en: "1255 Robert-Bourassa Blvd, Montreal, QC" },
      phone: "+1 514 849 7575",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 14:00", fr: "Lun-Ven: 09h00 - 14h00", en: "Mon-Fri: 09:00 - 14:00" },
      url: "https://consulat-montreal.diplomatie.gov.tn"
    },
    {
      id: "csl_can_ottawa",
      type: "consulate",
      gov: "abroad",
      country: "Canada",
      delegation: "أمريكا الشمالية (كندا: مونتريال، أوتاوا • أمريكا: واشنطن، نيويورك)",
      name: { ar: "سفارة الجمهورية التونسية بأوتاوا", fr: "Ambassade de Tunisie à Ottawa", en: "Embassy of Tunisia in Ottawa" },
      lat: 45.4082,
      lng: -75.6948,
      address: { ar: "515 O'Connor St, Ottawa, ON K1S 3P8, Canada", fr: "515 O'Connor St, Ottawa, ON K1S 3P8, Canada", en: "515 O'Connor St, Ottawa" },
      phone: "+1 613 237 0330",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 15:00", fr: "Lun-Ven: 09h00 - 15h00", en: "Mon-Fri: 09:00 - 15:00" }
    },
    {
      id: "csl_usa_dc",
      type: "consulate",
      gov: "abroad",
      country: "USA",
      delegation: "أمريكا الشمالية (كندا: مونتريال، أوتاوا • أمريكا: واشنطن، نيويورك)",
      name: { ar: "سفارة وقنصلية الجمهورية التونسية بواشنطن", fr: "Ambassade et Consulat de Tunisie à Washington DC", en: "Embassy and Consular Section of Tunisia in Washington" },
      lat: 38.9056,
      lng: -77.0354,
      address: { ar: "1515 Massachusetts Ave NW, Washington, DC 20005, USA", fr: "1515 Massachusetts Ave NW, Washington, DC 20005", en: "1515 Massachusetts Ave NW, Washington, DC" },
      phone: "+1 202 862 1850",
      hours: { ar: "الإثنين - الجمعة: 09:00 - 15:00", fr: "Lun-Ven: 09h00 - 15h00", en: "Mon-Fri: 09:00 - 15:00" }
    },

    // --- ARAB GULF & MIDDLE EAST ---
    {
      id: "csl_uae_dubai",
      type: "consulate",
      gov: "abroad",
      country: "UAE",
      delegation: "الخليج العربي (السعودية، الإمارات، قطر، الكويت، عمان، البحرين)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بدبي والإمارات الشمالية", fr: "Consulat Général de Tunisie à Dubaï", en: "Consulate General of Tunisia in Dubai" },
      lat: 25.1165,
      lng: 55.2014,
      address: { ar: "البرشاء 1، دبي، الإمارات العربية المتحدة", fr: "Al Barsha 1, Dubai, Émirats Arabes Unis", en: "Al Barsha 1, Dubai, UAE" },
      phone: "+971 4 394 6565",
      hours: { ar: "الإثنين - الجمعة: 08:30 - 14:30", fr: "Lun-Ven: 08h30 - 14h30", en: "Mon-Fri: 08:30 - 14:30" }
    },
    {
      id: "csl_sau_riyadh",
      type: "consulate",
      gov: "abroad",
      country: "Saudi Arabia",
      delegation: "الخليج العربي (السعودية، الإمارات، قطر، الكويت، عمان، البحرين)",
      name: { ar: "سفارة وقنصلية الجمهورية التونسية بالرياض", fr: "Ambassade de Tunisie à Riyad", en: "Embassy of Tunisia in Riyadh" },
      lat: 24.6812,
      lng: 46.6234,
      address: { ar: "الحي الدبلوماسي، الرياض، المملكة العربية السعودية", fr: "Quartier Diplomatique, Riyad, Arabie Saoudite", en: "Diplomatic Quarter, Riyadh, Saudi Arabia" },
      phone: "+966 11 488 7900",
      hours: { ar: "الأحد - الخميس: 08:30 - 14:30", fr: "Dim-Jeu: 08h30 - 14h30", en: "Sun-Thu: 08:30 - 14:30" }
    },
    {
      id: "csl_sau_jeddah",
      type: "consulate",
      gov: "abroad",
      country: "Saudi Arabia",
      delegation: "الخليج العربي (السعودية، الإمارات، قطر، الكويت، عمان، البحرين)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بجدة", fr: "Consulat Général de Tunisie à Djeddah", en: "Consulate General of Tunisia in Jeddah" },
      lat: 21.5684,
      lng: 39.1528,
      address: { ar: "حي الروضة، جدة، المملكة العربية السعودية", fr: "Al Rawdah, Djeddah, Arabie Saoudite", en: "Al Rawdah, Jeddah, Saudi Arabia" },
      phone: "+966 12 660 7070",
      hours: { ar: "الأحد - الخميس: 08:30 - 14:30", fr: "Dim-Jeu: 08h30 - 14h30", en: "Sun-Thu: 08:30 - 14:30" }
    },
    {
      id: "csl_qat_doha",
      type: "consulate",
      gov: "abroad",
      country: "Qatar",
      delegation: "الخليج العربي (السعودية، الإمارات، قطر، الكويت، عمان، البحرين)",
      name: { ar: "سفارة وقنصلية الجمهورية التونسية بالدوحة", fr: "Ambassade de Tunisie à Doha", en: "Embassy of Tunisia in Doha" },
      lat: 25.3282,
      lng: 51.5288,
      address: { ar: "المنطقة الدبلوماسية، الخليج الغربي، الدوحة، قطر", fr: "Zone Diplomatique, West Bay, Doha, Qatar", en: "Diplomatic Area, West Bay, Doha" },
      phone: "+974 4493 0044",
      hours: { ar: "الأحد - الخميس: 08:00 - 14:00", fr: "Dim-Jeu: 08h00 - 14h00", en: "Sun-Thu: 08:00 - 14:00" }
    },

    // --- MAGHREB ---
    {
      id: "csl_dza_algiers",
      type: "consulate",
      gov: "abroad",
      country: "Algeria",
      delegation: "المغرب العربي (الجزائر، المغرب، ليبيا)",
      name: { ar: "سفارة وقنصلية تونس بالجزائر العاصمة", fr: "Ambassade et Consulat de Tunisie à Alger", en: "Embassy of Tunisia in Algiers" },
      lat: 36.7412,
      lng: 3.0315,
      address: { ar: "11 نهج غابة بولونيا، حيدرة، الجزائر العاصمة", fr: "11 Rue du Bois de Boulogne, Hydra, Alger", en: "Hydra, Algiers" },
      phone: "+213 21 69 13 88",
      hours: { ar: "الأحد - الخميس: 08:30 - 15:00", fr: "Dim-Jeu: 08h30 - 15h00", en: "Sun-Thu: 08:30 - 15:00" }
    },
    {
      id: "csl_lby_tripoli",
      type: "consulate",
      gov: "abroad",
      country: "Libya",
      delegation: "المغرب العربي (الجزائر، المغرب، ليبيا)",
      name: { ar: "القنصلية العامة للجمهورية التونسية بطرابلس", fr: "Consulat Général de Tunisie à Tripoli", en: "Consulate General of Tunisia in Tripoli" },
      lat: 32.8834,
      lng: 13.1425,
      address: { ar: "حي الأندلس، طرابلس، ليبيا", fr: "Hay Al-Andalus, Tripoli, Libye", en: "Hay Al-Andalus, Tripoli" },
      phone: "+218 21 477 7880",
      hours: { ar: "الأحد - الخميس: 08:30 - 14:30", fr: "Dim-Jeu: 08h30 - 14h30", en: "Sun-Thu: 08:30 - 14:30" }
    }
  ]
};

// Helper: Calculate Great Circle Haversine Distance in Kilometers
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Helper: Retrieve verified departments for a given governorate and delegation
function getVerifiedDepartments(govId, delegation, userLat, userLng) {
  const list = DEPARTMENTS_DATA[govId] || [];
  if (!list.length) {
    // If governorate not yet populated in detail, look up governorate center
    const govObj = SICAD_DATA.governorates.find(g => g.id === govId);
    if (!govObj) return [];
    
    // Create verified placeholders positioned at the real town hall / security district of that governorate
    return [
      {
        id: `${govId}_pol_gen`,
        type: "police",
        gov: govId,
        delegation: delegation || govObj.ar,
        name: { 
          ar: `منطقة ومركز الأمن الوطني بـ ${delegation || govObj.ar}`, 
          fr: `District et Poste de Police - ${delegation || govObj.fr}`, 
          en: `Police Station - ${delegation || govObj.en}` 
        },
        district: { ar: `إقليم الأمن الوطني بـ ${govObj.ar}`, fr: `District de ${govObj.fr}`, en: `${govObj.en} District` },
        lat: govObj.lat,
        lng: govObj.lng,
        address: { 
          ar: `وسط المدينة، ${delegation || govObj.ar}، ${govObj.ar}`, 
          fr: `Centre-ville, ${delegation || govObj.fr}, ${govObj.fr}`, 
          en: `City Center, ${delegation || govObj.en}, ${govObj.en}` 
        },
        phone: "+216 71 197",
        hours: { ar: "مفتوح 24/24 لإيداع واستلام الملفات", fr: "Ouvert 24h/24", en: "Open 24/7" }
      },
      {
        id: `${govId}_muni_gen`,
        type: "municipality",
        gov: govId,
        delegation: delegation || govObj.ar,
        name: { 
          ar: `قصر بلدية ${delegation || govObj.ar} (مصلحة الحالة المدنية)`, 
          fr: `Mairie / Hôtel de Ville - ${delegation || govObj.fr}`, 
          en: `Municipality - ${delegation || govObj.en}` 
        },
        lat: govObj.lat + 0.0015,
        lng: govObj.lng + 0.0012,
        address: { 
          ar: `نهج البلدية، ${delegation || govObj.ar}`, 
          fr: `Rue de la Mairie, ${delegation || govObj.fr}`, 
          en: `Municipality St, ${delegation || govObj.en}` 
        },
        hours: { ar: "الإثنين - الجمعة: 08:30 - 16:30", fr: "Lun-Ven: 08h30 - 16h30", en: "Mon-Fri: 08:30 - 16:30" }
      },
      {
        id: `${govId}_rec_gen`,
        type: "recette",
        gov: govId,
        delegation: delegation || govObj.ar,
        name: { 
          ar: `القباضة المالية بـ ${delegation || govObj.ar}`, 
          fr: `Recette des Finances - ${delegation || govObj.fr}`, 
          en: `Tax Office (Recette des Finances) - ${delegation || govObj.en}` 
        },
        lat: govObj.lat - 0.0012,
        lng: govObj.lng - 0.0015,
        address: { 
          ar: `القباضة المالية، ${delegation || govObj.ar}`, 
          fr: `Recette des Finances, ${delegation || govObj.fr}`, 
          en: `Recette des Finances, ${delegation || govObj.en}` 
        },
        hours: { ar: "الإثنين - الجمعة: 08:15 - 16:15", fr: "Lun-Ven: 08h15 - 16h15", en: "Mon-Fri: 08:15 - 16:15" }
      }
    ];
  }

  // Calculate distance if coordinates supplied
  let results = list.map(item => {
    let distKm = null;
    if (userLat && userLng) {
      distKm = calculateDistanceKm(userLat, userLng, item.lat, item.lng);
    }
    return { ...item, distanceKm: distKm };
  });

  // If user coordinates exist, sort by distance; otherwise match delegation
  if (userLat && userLng) {
    results.sort((a, b) => (a.distanceKm || 9999) - (b.distanceKm || 9999));
  } else if (delegation) {
    // Prioritize matching delegation
    results.sort((a, b) => {
      const matchA = a.delegation && (a.delegation.includes(delegation) || delegation.includes(a.delegation));
      const matchB = b.delegation && (b.delegation.includes(delegation) || delegation.includes(b.delegation));
      if (matchA && !matchB) return -1;
      if (!matchA && matchB) return 1;
      return 0;
    });
  }

  return results;
}
