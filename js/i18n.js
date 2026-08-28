const TRANSLATIONS = {
  ar: {
    appTitle: "Easy Tunisia",
    appSubtitle: "دليل المواطن الذكي والمبسط لاستخراج وتجديد بطاقة التعريف الوطنية وجواز السفر وتحديد المقرات الإدارية",
    badgeOfficial: "دليل مستقل مبسط • يعتمد بيانات سيكاد (SICAD)",
    
    // Disclaimer Banner
    disclaimerText: "⚠️ تنبيه هام: موقع Easy Tunisia هو مبادرة رقمية مستقلة وغير رسمية، تهدف إلى تبسيط الإجراءات الإدارية وتسهيل التوجيه للمواطن التونسي وفقاً للبيانات المنشورة ببوابة سيكاد الرسمية.",
    
    // Initial 2-Choice Landing Screen
    heroChoiceTitle: "ما هي الوثيقة التي ترغب في استخراجها أو تجديدها؟",
    heroChoiceSubtitle: "اختر نوع الوثيقة لنرشدك خطوة بخطوة حسب عمرك وموقعك الجغرافي",
    choosePassportBtn: "اختيار جواز السفر 📕",
    chooseCinBtn: "اختيار بطاقة التعريف 🪪",
    passportShortDesc: "جواز سفر عادي مقروء آليا صالح لـ 5 سنوات لجميع المواطنين التونسيين",
    cinShortDesc: "بطاقة التعريف الوطنية الإلزامية ابتداءً من 18 سنة وذات صلوحية دائمة",
    
    // Controls
    langName: "العربية",
    themeToggleDark: "الوضع الليلي",
    themeToggleLight: "الوضع النهاري",
    changeDocBtn: "🔄 تغيير الوثيقة أو البدء من جديد",
    
    // Wizard steps
    stepAgeTitle: "1. العمر والصفة والوضعية",
    stepLocationTitle: "2. تحديد موقعك والإقامة",
    stepResultsTitle: "3. الوثائق المطلوبة والخريطة التفاعلية",
    
    ageLabel: "العمر / السن:",
    ageUnder7: "أقل من 7 سنوات (👶 طفل)",
    ageBetween7and17: "من 7 إلى 17 سنة (🧑 قاصر)",
    age18Plus: "18 سنة فما فوق (👨‍💼 راشد)",
    
    statusLabel: "الصفة / المهنة:",
    statusStudent: "تلميذ أو طالب",
    statusEmployed: "موظف / صاحب مهنة / عامل",
    statusOther: "بدون عمل / أخرى",
    
    procedureLabel: "نوع الإجراء:",
    procFirstTime: "استخراج لأول مرة",
    procRenewal: "تجديد عادي (انتهاء صلوحية / تعويض)",
    procLost: "ضياع أو سرقة أو تلف",
    
    // Location & GPS Permission
    locationPromptTitle: "أين تقيم حالياً؟",
    locationPromptDesc: "نحتاج لمعرفة موقعك أو مدينتك لنرشدك بدقة إلى أقرب مركز شرطة، بلدية، وقباضة مالية تابعة لك",
    gpsBtn: "📍 استخدام موقعي الحالي بدقة (GPS)",
    gpsDetecting: "جارٍ تحديد موقعك الجغرافي...",
    gpsSuccess: "✓ تم تحديد موقعك بنجاح!",
    gpsError: "تعذر الحصول على الموقع تلقائياً، يمكنك الاختيار من القائمة أسفله",
    gpsDesktopWarning: "💡 إذا لم يتطابق الموقع المقترح تلقائياً مع مدينتك الحقيقية (بسبب مزود الإنترنت)، يمكنك البحث عن مدينتك أو النقر على الخريطة فوراً أدناه لتصحيحه.",
    citySearchPlaceholder: "🔍 ابحث عن مدينتك أو معتمديتك (مثال: المرسى، سوسة، نابل، صفاقس، بنزرت...)",
    clickMapHint: "🗺️ انقر في أي مكان على الخريطة لتحديد موقعك بدقة:",
    quickCitiesTitle: "اختيار سريع للمدن الرئيسية:",
    manualLocationOr: "أو اختر يدوياً من قائمة الولايات والمعتمديات:",
    locationLabel: "الولاية:",
    delegationLabel: "المعتمدية / المنطقة:",
    residentAbroad: "أقيم بالخارج (إجراءات قنصلية)",
    
    nextBtn: "متابعة وعرض الوثائق والخريطة ⬅️",
    backBtn: "رجوع",
    
    // Results
    resultsHeaderTitle: "ملفك المخصص لاستخراج {docName}",
    feeLabel: "معلوم الطابع الجبائي / وصل الخلاص",
    validityLabel: "مدة الصلوحية",
    processingTimeLabel: "أجل الإنجاز",
    depositPlaceLabel: "مكان الإيداع والتسليم",
    requiredDocsTitle: "قائمة الوثائق المطلوبة (مخصصة لوضعيتك)",
    docCheckHint: "اضغط على الوثيقة لتأكيد تجهيزها (يتم الحفظ تلقائياً)",
    docSearchPlaceholder: "🔍 ابحث في الوثائق...",
    docSourceLabel: "مكان استخراج الوثيقة",
    downloadFormBtn: "تحميل المطبوعة الرسمية (PDF)",
    printChecklistBtn: "طباعة وتحميل قائمة الوثائق (PDF)",
    shareWhatsappBtn: "مشاركة القائمة عبر واتساب 📲",
    copyListBtn: "نسخ القائمة للحافظة 📋",
    copySuccess: "✓ تم نسخ القائمة بنجاح!",
    
    // Budget Calculator
    budgetTitle: "الميزانية التقديرية التامة للملف",
    budgetTimbre: "وصل خلاص القباضة (الطابع الجبائي)",
    budgetPhotos: "الصور الشمسية (تقديري)",
    budgetBirth: "مضمون ولادة (تقديري)",
    budgetTotal: "المجموع التقديري التقريبي:",
    
    // Photo Guidelines
    photoGuideTitle: "المواصفات الفنية للصور الشمسية المعتمدة",
    photoGuideSubtitle: "تأكد من مطابقة الصور لتفادي رفض الملف لدى مركز الأمن",
    
    // Online Service
    onlineBirthPortalBtn: "🌐 استخراج مضمون ولادة عبر الإنترنت (ء-هوية)",
    
    // Where to get
    sourceMunicipality: "البلدية أو الدائرة البلدية (أو بوابة الحالة المدنية على الخط)",
    sourcePolice: "مركز الأمن (شرطة أو حرس وطني) مرجع النظر",
    sourceRecette: "القباضة المالية (Recette des Finances)",
    sourcePhoto: "مصور فوتوغرافي مرخص",
    sourceSchool: "المدرسة أو المعهد أو الكلية (شهادة حضور/تسجيل)",
    sourceEmployer: "المؤجر أو المشغل / شهادة في بيان المهنة",
    sourceHospital: "مخبر تحاليل أو مستشفى أو طبيب (اختياري)",
    sourceCourt: "محكمة الناحية أو مركز الأمن (شهادة ضياع)",
    sourceConsulate: "القنصلية أو البعثة الدبلوماسية التونسية بالخارج",

    // Maps & Verified Departments
    mapsSectionTitle: "الخريطة التفاعلية: أقرب المصالح الإدارية إليك",
    mapsSubtitle: "تحديد دقيق للمقرات الأمنية، البلديات، والقباضات المالية مع المسارات المباشرة",
    nearestPoliceTitle: "أقرب مركز شرطة / حرس وطني",
    nearestPoliceDesc: "لإيداع المطلب واستلام الوثيقة (مرجع النظر الترابي)",
    nearestMunicipalityTitle: "أقرب بلدية / دائرة بلدية",
    nearestMunicipalityDesc: "لاستخراج مضمون الولادة والتعريف بالإمضاء",
    nearestRecetteTitle: "أقرب قباضة مالية",
    nearestRecetteDesc: "لدفع رسوم الطابع الجبائي ووصل الخلاص",
    nearestPhotoTitle: "أقرب ستوديو تصوير فوتوغرافي",
    nearestPhotoDesc: "لأخذ الصور الشمسية المطابقة للمواصفات",
    
    verifiedBadge: "مقر رسمي مؤكد ✓",
    consulateBadge: "بعثة دبلوماسية وقنصلية",
    distanceKm: "{dist} كم من موقعك",
    distanceM: "{dist} م من موقعك",
    callOffice: "اتصال هاتفي 📞",
    centerOnMap: "عرض في الخريطة 📍",
    openGoogleMapsNav: "مسار الطريق عبر الخريطة (GPS)",
    consulateInfo: "💡 للمواطنين المقيمين بالخارج: يتم إيداع واستلام جواز السفر وبطاقة التعريف لدى القنصلية أو السفارة التونسية التابعين لها بالخارج.",
    officialHours: "أوقات العمل:",
    
    getDirectionsBtn: "مسار الطريق عبر الخريطة (GPS Navigation)",
    openInGoogleMaps: "فتح في خرائط Google",
    
    // Timeline steps
    stepsTitle: "المراحل الأربعة لاستكمال الملف",
    step1Title: "1. جمع الوثائق",
    step1Desc: "استخراج المضمون وتجهيز الصور والشهائد والمطبوعة الإدارية",
    step2Title: "2. دفع الرسوم",
    step2Desc: "اقتناء وصل الخلاص أو الطابع الجبائي من أقرب قباضة مالية",
    step3Title: "3. إيداع الملف",
    step3Desc: "التوجه لمركز الشرطة أو الحرس الوطني مرجع نظر الإقامة",
    step4Title: "4. الاستلام",
    step4Desc: "استلام الجواز أو بطاقة التعريف تامة الموجب خلال 15 يوماً",

    // FAQs
    faqTitle: "الأسئلة الشائعة والإجابات الرسمية (FAQ)",
    
    // Special tips
    tipsTitle: "توصيات وملاحظات هامة جداً",
    tipPassport1: "يحجر إلحاق أي تشطيب أو تغيير أو إضافات على الجواز إلا من طرف السلطة المختصة.",
    tipPassport2: "كل ضياع لجواز السفر يوجب إعلام مركز الأمن فوراً أو أقرب قنصلية بالخارج.",
    tipPassport3: "تحجر إعارة الجواز أو إرساله عبر البريد ولا يمكن حمله إلا من طرف صاحبه.",
    tipCin1: "صلوحية بطاقة التعريف الوطنية غير محددة زمنياً (دائمة) ما لم تتغير المهنة أو المقر أو الحالة المدنية.",
    tipCin2: "السن القانوني الإجباري لاستخراج بطاقة التعريف هو 18 سنة، ويمكن للقصر دون 18 سنة استخراجها استثنائياً بترخيص معلل من الولي.",
    
    // Progress
    progressTitle: "جاهزية الملف:",
    completedDocs: "تم تجهيز {count} من {total} وثائق",
    
    // Bottom Dock Navigation
    dockHome: "الرئيسية",
    dockPassport: "الجواز 📕",
    dockCin: "التعريف 🪪",
    dockResults: "الوثائق والخريطة 🗺️",
    
    // Source Attribution
    sicadSource: "المصدر الرسمي للمعلومات: بوابة الخدمات الإدارية التونسية (سيكاد - SICAD)",
    cinSourceLinkText: "رابط بطاقة التعريف (سيكاد D1309)",
    passportSourceLinkText: "رابط جواز السفر (سيكاد D1618)"
  },
  
  fr: {
    appTitle: "Easy Tunisia",
    appSubtitle: "Guide intelligent et simplifié du citoyen pour l'obtention et le renouvellement de la CIN et du Passeport",
    badgeOfficial: "Guide Indépendant Simplifié • Basé sur SICAD",
    
    // Disclaimer Banner
    disclaimerText: "⚠️ Avis important : Le site Easy Tunisia est une initiative numérique indépendante non officielle, créée pour simplifier les démarches administratives et orienter les citoyens selon les données publiques de SICAD.",
    
    // Initial 2-Choice Landing Screen
    heroChoiceTitle: "Quel document souhaitez-vous obtenir ou renouveler ?",
    heroChoiceSubtitle: "Choisissez votre document pour être guidé étape par étape selon votre âge et votre localisation",
    choosePassportBtn: "Choisir le Passeport 📕",
    chooseCinBtn: "Choisir la Carte d'Identité (CIN) 🪪",
    passportShortDesc: "Passeport ordinaire lisible à la machine, valable 5 ans pour tous les citoyens tunisiens",
    cinShortDesc: "Carte d'identité nationale obligatoire à partir de 18 ans et à validité permanente",
    
    // Controls
    langName: "Français",
    themeToggleDark: "Mode Sombre",
    themeToggleLight: "Mode Clair",
    changeDocBtn: "🔄 Changer de document / Recommencer",
    
    // Wizard steps
    stepAgeTitle: "1. Âge, statut et situation",
    stepLocationTitle: "2. Localisation et résidence",
    stepResultsTitle: "3. Documents requis et carte interactive",
    
    ageLabel: "Âge :",
    ageUnder7: "Moins de 7 ans (👶 Enfant)",
    ageBetween7and17: "De 7 à 17 ans (🧑 Mineur)",
    age18Plus: "18 ans et plus (👨‍💼 Adulte)",
    
    statusLabel: "Statut / Profession :",
    statusStudent: "Élève ou Étudiant",
    statusEmployed: "Salarié / Professionnel / Fonctionnaire",
    statusOther: "Sans profession / Autre",
    
    procedureLabel: "Type de démarche :",
    procFirstTime: "Première délivrance",
    procRenewal: "Renouvellement ordinaire",
    procLost: "Perte, vol ou détérioration",
    
    // Location & GPS Permission
    locationPromptTitle: "Où résidez-vous actuellement ?",
    locationPromptDesc: "Nous avons besoin de connaître votre position ou votre ville pour vous orienter précisément vers le poste de police, la mairie et la recette des finances les plus proches",
    gpsBtn: "📍 Utiliser ma position actuelle (GPS)",
    gpsDetecting: "Détection de votre position en cours...",
    gpsSuccess: "✓ Position détectée avec succès !",
    gpsError: "Impossible de détecter la position automatiquement, veuillez choisir dans la liste ci-dessous",
    gpsDesktopWarning: "💡 Si la localisation automatique n'est pas exacte (due à votre fournisseur internet), vous pouvez rechercher votre ville ou cliquer directement sur la carte ci-dessous.",
    citySearchPlaceholder: "🔍 Recherchez votre ville ou délégation (ex: La Marsa, Sousse, Nabeul, Sfax...)",
    clickMapHint: "🗺️ Cliquez n'importe où sur la carte pour pointer votre ville :",
    quickCitiesTitle: "Accès rapide par ville :",
    manualLocationOr: "Ou sélectionnez manuellement votre gouvernorat et délégation :",
    locationLabel: "Gouvernorat :",
    delegationLabel: "Délégation / Ville :",
    residentAbroad: "Résident à l'étranger (Consulat)",
    
    nextBtn: "Continuer vers les documents et la carte ➡️",
    backBtn: "Retour",
    
    // Results
    resultsHeaderTitle: "Votre dossier personnalisé pour {docName}",
    feeLabel: "Droit de timbre fiscal / Quittance",
    validityLabel: "Durée de validité",
    processingTimeLabel: "Délai d'obtention",
    depositPlaceLabel: "Lieu de dépôt et de retrait",
    requiredDocsTitle: "Liste des documents requis (personnalisée)",
    docCheckHint: "Cochez chaque document dès sa préparation (sauvegarde automatique)",
    docSearchPlaceholder: "🔍 Rechercher un document...",
    docSourceLabel: "Où obtenir ce document ?",
    downloadFormBtn: "Télécharger le formulaire officiel (PDF)",
    printChecklistBtn: "Imprimer et Exporter la liste (PDF)",
    shareWhatsappBtn: "Partager sur WhatsApp 📲",
    copyListBtn: "Copier la liste 📋",
    copySuccess: "✓ Liste copiée avec succès !",
    
    // Budget Calculator
    budgetTitle: "Estimation du coût global du dossier",
    budgetTimbre: "Quittance Recette des Finances (Timbre)",
    budgetPhotos: "Photos d'identité (estimation)",
    budgetBirth: "Extrait de naissance (estimation)",
    budgetTotal: "Budget total estimé :",
    
    // Photo Guidelines
    photoGuideTitle: "Normes officielles des photos d'identité",
    photoGuideSubtitle: "Vérifiez vos photos pour éviter tout rejet lors du dépôt",
    
    // Online Service
    onlineBirthPortalBtn: "🌐 Extrait de naissance en ligne (e-houwiya)",
    
    // Where to get
    sourceMunicipality: "Municipalité / Arrondissement municipal (ou en ligne e-houwiya)",
    sourcePolice: "Poste de police ou garde nationale territorialement compétent",
    sourceRecette: "Recette des Finances (Quittance fiscale)",
    sourcePhoto: "Photographe agréé",
    sourceSchool: "Établissement scolaire ou universitaire (certificat de scolarité)",
    sourceEmployer: "Employeur / Attestation de travail ou justificatif de profession",
    sourceHospital: "Laboratoire d'analyses ou médecin (facultatif)",
    sourceCourt: "Tribunal cantonal ou poste de police (certificat de perte)",
    sourceConsulate: "Consulat ou mission diplomatique tunisienne à l'étranger",

    // Maps & Verified Departments
    mapsSectionTitle: "Carte Interactive : Les administrations près de chez vous",
    mapsSubtitle: "Localisation exacte et vérifiée des postes de police, mairies et recettes des finances",
    nearestPoliceTitle: "Poste de Police / Garde Nationale",
    nearestPoliceDesc: "Pour le dépôt du dossier et le retrait du document (compétence territoriale)",
    nearestMunicipalityTitle: "Municipalité / État Civil",
    nearestMunicipalityDesc: "Pour l'extrait de naissance et la légalisation de signature",
    nearestRecetteTitle: "Recette des Finances",
    nearestRecetteDesc: "Pour le paiement du timbre fiscal et de la quittance",
    nearestPhotoTitle: "Studio Photo Agréé",
    nearestPhotoDesc: "Pour les photos d'identité aux normes requises",
    
    verifiedBadge: "Lieu Officiel Vérifié ✓",
    consulateBadge: "Mission Consulaire & Diplomatique",
    distanceKm: "à {dist} km de votre position",
    distanceM: "à {dist} m de votre position",
    callOffice: "Appeler 📞",
    centerOnMap: "Voir sur la carte 📍",
    openGoogleMapsNav: "Itinéraire GPS (Google Maps)",
    consulateInfo: "💡 Pour les citoyens résidant à l'étranger : Le dépôt et le retrait de la CIN et du passeport s'effectuent auprès de votre consulat ou ambassade de rattachement.",
    officialHours: "Horaires d'ouverture :",
    
    getDirectionsBtn: "Itinéraire GPS Navigation",
    openInGoogleMaps: "Ouvrir dans Google Maps",
    
    // Timeline steps
    stepsTitle: "Les 4 étapes pour finaliser votre dossier",
    step1Title: "1. Rassembler les pièces",
    step1Desc: "Extraits de naissance, photos conformes, certificats et formulaires",
    step2Title: "2. Paiement des taxes",
    step2Desc: "Achat de la quittance / timbre à la Recette des Finances la plus proche",
    step3Title: "3. Dépôt du dossier",
    step3Desc: "Dépôt physique au poste de police ou de la garde nationale de résidence",
    step4Title: "4. Retrait du document",
    step4Desc: "Retrait de la CIN ou du Passeport finalisé sous 15 jours",

    // FAQs
    faqTitle: "Foire Aux Questions (FAQ)",
    
    // Special tips
    tipsTitle: "Recommandations et remarques importantes",
    tipPassport1: "Il est strictement interdit d'effectuer des ratures ou altérations sur le passeport.",
    tipPassport2: "Toute perte du passeport doit être immédiatement déclarée à la police ou au consulat.",
    tipPassport3: "Le prêt ou l'envoi par courrier postal du passeport est formellement interdit.",
    tipCin1: "La validité de la CIN est permanente sauf en cas de changement de situation.",
    tipCin2: "L'âge légal obligatoire pour la CIN est 18 ans. Une délivrance anticipée pour les mineurs requiert une autorisation parentale motivée.",
    
    // Progress
    progressTitle: "Progression du dossier :",
    completedDocs: "{count} sur {total} documents prêts",
    
    // Bottom Dock Navigation
    dockHome: "Accueil",
    dockPassport: "Passeport 📕",
    dockCin: "CIN 🪪",
    dockResults: "Docs & Carte 🗺️",
    
    // Source Attribution
    sicadSource: "Source Officielle : Portail des services administratifs (SICAD Tunisie)",
    cinSourceLinkText: "Fiche SICAD CIN (D1309)",
    passportSourceLinkText: "Fiche SICAD Passeport (D1618)"
  },
  
  en: {
    appTitle: "Easy Tunisia",
    appSubtitle: "Smart and simplified citizen guide for obtaining and renewing Tunisian ID Card and Passport",
    badgeOfficial: "Independent Guide • Based on official SICAD data",
    
    // Disclaimer Banner
    disclaimerText: "⚠️ Important Notice: Easy Tunisia is an independent, non-governmental digital initiative created to make administrative procedures easier to navigate and locate offices based on official SICAD public data.",
    
    // Initial 2-Choice Landing Screen
    heroChoiceTitle: "Which document do you want to issue or renew?",
    heroChoiceSubtitle: "Select a document type to get a personalized step-by-step guide based on your age and location",
    choosePassportBtn: "Choose Passport 📕",
    chooseCinBtn: "Choose National ID (CIN) 🪪",
    passportShortDesc: "Machine-readable regular passport valid for 5 years for all Tunisian citizens",
    cinShortDesc: "National Identity Card mandatory from 18 years old with permanent validity",
    
    // Controls
    langName: "English",
    themeToggleDark: "Dark Mode",
    themeToggleLight: "Light Mode",
    changeDocBtn: "🔄 Change Document / Start Over",
    
    // Wizard steps
    stepAgeTitle: "1. Age, Status & Situation",
    stepLocationTitle: "2. Location & Residence",
    stepResultsTitle: "3. Required Documents & Interactive Map",
    
    ageLabel: "Age Category:",
    ageUnder7: "Under 7 years old (👶 Child)",
    ageBetween7and17: "7 to 17 years old (🧑 Minor)",
    age18Plus: "18+ years old (👨‍💼 Adult)",
    
    statusLabel: "Status / Profession:",
    statusStudent: "Student / Pupil",
    statusEmployed: "Employed / Professional / Civil Servant",
    statusOther: "Unemployed / Other",
    
    procedureLabel: "Procedure Type:",
    procFirstTime: "First-time Issuance",
    procRenewal: "Standard Renewal",
    procLost: "Lost, Stolen or Damaged",
    
    // Location & GPS Permission
    locationPromptTitle: "Where do you currently live?",
    locationPromptDesc: "We need your location or city to accurately guide you to the nearest Police Station, Municipality, and Tax Office",
    gpsBtn: "📍 Use My Exact Location (GPS)",
    gpsDetecting: "Detecting your location...",
    gpsSuccess: "✓ Location detected successfully!",
    gpsError: "Could not detect location automatically, please choose from the list below",
    gpsDesktopWarning: "💡 If automatic location is not accurate (due to your internet provider IP), you can search your city or click directly on the map below.",
    citySearchPlaceholder: "🔍 Search your city or delegation (e.g. La Marsa, Sousse, Nabeul, Sfax...)",
    clickMapHint: "🗺️ Click anywhere on the map to pinpoint your exact location:",
    quickCitiesTitle: "Quick City Selection:",
    manualLocationOr: "Or manually select your governorate and delegation:",
    locationLabel: "Governorate:",
    delegationLabel: "Delegation / Area:",
    residentAbroad: "Living Abroad (Consulate Procedure)",
    
    nextBtn: "Continue to Documents & Map ➡️",
    backBtn: "Back",
    
    // Results
    resultsHeaderTitle: "Your Personalized File for {docName}",
    feeLabel: "Fiscal Stamp / Tax Receipt Fee",
    validityLabel: "Document Validity",
    processingTimeLabel: "Turnaround Time",
    depositPlaceLabel: "Submission & Pick-up Office",
    requiredDocsTitle: "Required Documents (Personalized Checklist)",
    docCheckHint: "Check each document once you have prepared it (saves automatically)",
    docSearchPlaceholder: "🔍 Search in documents...",
    docSourceLabel: "Where to get this document?",
    downloadFormBtn: "Download Official Form (PDF)",
    printChecklistBtn: "Print and Export Checklist (PDF)",
    shareWhatsappBtn: "Share via WhatsApp 📲",
    copyListBtn: "Copy Checklist 📋",
    copySuccess: "✓ Checklist copied to clipboard!",
    
    // Budget Calculator
    budgetTitle: "Estimated Total Cost Breakdown",
    budgetTimbre: "Tax Receipt (Fiscal Stamp)",
    budgetPhotos: "Photos (estimated)",
    budgetBirth: "Birth certificate (estimated)",
    budgetTotal: "Approximate Total Budget:",
    
    // Photo Guidelines
    photoGuideTitle: "Official Photo Specifications",
    photoGuideSubtitle: "Ensure photos meet official standards to avoid submission rejection",
    
    // Online Service
    onlineBirthPortalBtn: "🌐 Get Online Birth Certificate (e-houwiya)",
    
    // Where to get
    sourceMunicipality: "Municipality / Civil Status Office (or online via e-houwiya)",
    sourcePolice: "Police or National Guard Station of residence district",
    sourceRecette: "Recette des Finances (Tax / Treasury Office)",
    sourcePhoto: "Certified Photo Studio",
    sourceSchool: "School / University (Certificate of attendance/enrollment)",
    sourceEmployer: "Employer / Proof of profession certificate",
    sourceHospital: "Medical lab or physician (Blood group certificate, optional)",
    sourceCourt: "District Court or Police Station (Loss Certificate)",
    sourceConsulate: "Tunisian Consulate or Embassy abroad",

    // Maps & Verified Departments
    mapsSectionTitle: "Interactive Map: Administrative Offices Near You",
    mapsSubtitle: "Verified exact locations for Police stations, Municipalities, and Tax Revenue Offices",
    nearestPoliceTitle: "Nearest Police / Guard Station",
    nearestPoliceDesc: "For file submission and document pick-up (territorial jurisdiction)",
    nearestMunicipalityTitle: "Nearest Municipality (Baladiya)",
    nearestMunicipalityDesc: "For birth certificate and signature certification",
    nearestRecetteTitle: "Nearest Tax Office (Recette des Finances)",
    nearestRecetteDesc: "For fiscal stamp payment and receipt",
    nearestPhotoTitle: "Nearest Certified Photo Studio",
    nearestPhotoDesc: "For compliant ID / passport photos",
    
    verifiedBadge: "Verified Official Office ✓",
    consulateBadge: "Consular & Diplomatic Mission",
    distanceKm: "{dist} km away",
    distanceM: "{dist} m away",
    callOffice: "Call Office 📞",
    centerOnMap: "View on Map 📍",
    openGoogleMapsNav: "GPS Directions (Google Maps)",
    consulateInfo: "💡 For citizens living abroad: Passport and ID Card applications and renewals are processed at your local Tunisian Consulate or Embassy.",
    officialHours: "Office Hours:",
    
    getDirectionsBtn: "GPS Navigation Route",
    openInGoogleMaps: "Open in Google Maps",
    
    // Timeline steps
    stepsTitle: "4 Steps to Complete Your Application",
    step1Title: "1. Gather Documents",
    step1Desc: "Collect birth certificate, photos, work/school proof, and forms",
    step2Title: "2. Pay Government Fee",
    step2Desc: "Purchase the tax voucher at the nearest Recette des Finances",
    step3Title: "3. Submit File",
    step3Desc: "Hand in your file at your local Police or National Guard station",
    step4Title: "4. Receive Document",
    step4Desc: "Pick up your completed ID or Passport within 15 days",

    // FAQs
    faqTitle: "Frequently Asked Questions (FAQ)",
    
    // Special tips
    tipsTitle: "Important Guidelines & Legal Warnings",
    tipPassport1: "Modifying, altering or marking the passport yourself is strictly forbidden by law.",
    tipPassport2: "Any loss of passport must be reported immediately to the police or nearest consulate.",
    tipPassport3: "Lending or mailing the passport is strictly prohibited; only the holder may carry it.",
    tipCin1: "National ID Card (CIN) has unlimited permanent validity unless personal data or profession changes.",
    tipCin2: "Legal age for CIN is 18. Minors under 18 can request early issuance only with justified guardian authorization.",
    
    // Progress
    progressTitle: "File Readiness:",
    completedDocs: "{count} of {total} documents ready",
    
    // Bottom Dock Navigation
    dockHome: "Home",
    dockPassport: "Passport 📕",
    dockCin: "ID Card 🪪",
    dockResults: "Docs & Map 🗺️",
    
    // Source Attribution
    sicadSource: "Official Source: Tunisian Administrative Services Portal (SICAD)",
    cinSourceLinkText: "SICAD ID Card Page (D1309)",
    passportSourceLinkText: "SICAD Passport Page (D1618)"
  }
};
