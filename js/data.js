/**
 * Official Data extracted from SICAD Tunisia:
 * - CIN (بطاقة التعريف الوطنية): http://www.sicad.gov.tn/Ar/__57_3_D1309
 * - Passport (جواز السفر العادي): http://www.sicad.gov.tn/Ar/_57_3_D1618
 */

const SICAD_DATA = {
  governorates: [
    { id: "tunis", ar: "تونس", fr: "Tunis", en: "Tunis", lat: 36.8065, lng: 10.1815, delegations: ["تونس المدينة", "باب بحر", "المرسى", "باردو", "الكرم", "حلق الوادي", "المنازه", "حي الخضراء", "سيدي حسين", "الكبارية"] },
    { id: "ariana", ar: "أريانة", fr: "Ariana", en: "Ariana", lat: 36.8665, lng: 10.1647, delegations: ["أريانة المدينة", "سكرة", "رواد", "قلعة الأندلس", "سيدي ثابت", "المنيهلة"] },
    { id: "ben_arous", ar: "بن عروس", fr: "Ben Arous", en: "Ben Arous", lat: 36.7531, lng: 10.2189, delegations: ["بن عروس", "رادس", "مقرين", "المروج", "حمام الأنف", "حمام الشط", "بومهل", "الزهراء", "فوشانة", "المحمدية"] },
    { id: "manouba", ar: "منوبة", fr: "Manouba", en: "Manouba", lat: 36.8081, lng: 10.0972, delegations: ["منوبة", "دوار هيشر", "وادي الليل", "طبربة", "المرناقية", "برج العامري", "الجديدة", "البطان"] },
    { id: "nabeul", ar: "نابل", fr: "Nabeul", en: "Nabeul", lat: 36.4561, lng: 10.7376, delegations: ["نابل", "الحمامات", "قليبية", "منزل تميم", "قرمبالية", "بني خيار", "دار شعبان الفهري", "سليمان", "الهوارية", "تاكلسة"] },
    { id: "zaghouan", ar: "زغوان", fr: "Zaghouan", en: "Zaghouan", lat: 36.4029, lng: 10.1429, delegations: ["زغوان", "الفحص", "الناظور", "بئر مشارقة", "الزريبة", "صواف"] },
    { id: "bizerte", ar: "بنزرت", fr: "Bizerte", en: "Bizerte", lat: 37.2744, lng: 9.8739, delegations: ["بنزرت الشمالية", "بنزرت الجنوبية", "منزل بورقيبة", "ماطر", "رأس الجبل", "غار الملح", "العالية", "سجنان", "تينجة", "جومين"] },
    { id: "beja", ar: "باجة", fr: "Béja", en: "Beja", lat: 36.7256, lng: 9.1817, delegations: ["باجة الشمالية", "باجة الجنوبية", "مجاز الباب", "تستور", "تيبار", "تبرسق", "نفزة", "عمدون"] },
    { id: "jendouba", ar: "جندوبة", fr: "Jendouba", en: "Jendouba", lat: 36.5011, lng: 8.7802, delegations: ["جندوبة", "طبرقة", "عين دراهم", "بوسالم", "غار الدماء", "فرنانة", "بلطة بوعوان", "وادي مليز"] },
    { id: "kef", ar: "الكاف", fr: "Le Kef", en: "Le Kef", lat: 36.1822, lng: 8.7149, delegations: ["الكاف الشرقية", "الكاف الغربية", "الدهماني", "تاجروين", "السرس", "قلعة سنان", "نبر", "ساقية سيدي يوسف"] },
    { id: "siliana", ar: "سليانة", fr: "Siliana", en: "Siliana", lat: 36.0850, lng: 9.3708, delegations: ["سليانة الشمالية", "سليانة الجنوبية", "مكثر", "بوعرادة", "قعفور", "الكريب", "الروحية", "برقو", "كسرى"] },
    { id: "sousse", ar: "سوسة", fr: "Sousse", en: "Sousse", lat: 35.8256, lng: 10.6369, delegations: ["سوسة المدينة", "سوسة جوهرة", "سوسة الرياض", "حمام سوسة", "القلعة الكبرى", "القلعة الصغرى", "مساكن", "أكودة", "النفيضة", "بوفيشة"] },
    { id: "monastir", ar: "المنستير", fr: "Monastir", en: "Monastir", lat: 35.7780, lng: 10.8262, delegations: ["المنستير", "الساحلين", "الوردانين", "طبلبة", "قصر هلال", "المكنين", "جمال", "صيادة لمطة بوحجر", "بنبلة", "زرمدين"] },
    { id: "mahdia", ar: "المهدية", fr: "Mahdia", en: "Mahdia", lat: 35.5047, lng: 11.0622, delegations: ["المهدية", "قصور الساف", "الشابة", "الجم", "بومرداس", "السواسي", "سيدي علوان", "ملولش", "أولاد الشامخ"] },
    { id: "sfax", ar: "صفاقس", fr: "Sfax", en: "Sfax", lat: 34.7406, lng: 10.7603, delegations: ["صفاقس المدينة", "صفاقس الغربية", "صفاقس الجنوبية", "ساقية الزيت", "ساقية الدائر", "طينة", "عقارب", "جبنيانة", "المحرس", "قرقنة", "منزل شاكر"] },
    { id: "kairouan", ar: "القيروان", fr: "Kairouan", en: "Kairouan", lat: 35.6781, lng: 10.0963, delegations: ["القيروان الشمالية", "القيروان الجنوبية", "بوحجلة", "السبيخة", "حفوز", "الشبيكة", "الوسلاتية", "نصر الله", "العلا", "حاجب العيون"] },
    { id: "kasserine", ar: "القصرين", fr: "Kasserine", en: "Kasserine", lat: 35.1676, lng: 8.8365, delegations: ["القصرين الشمالية", "القصرين الجنوبية", "سبيطلة", "فوسانة", "فريانة", "تالة", "سبيبة", "ماجل بلعباس", "حيدرة"] },
    { id: "sidi_bouzid", ar: "سيدي بوزيد", fr: "Sidi Bouzid", en: "Sidi Bouzid", lat: 35.0382, lng: 9.4849, delegations: ["سيدي بوزيد الغربية", "سيدي بوزيد الشرقية", "الرقاب", "جلمة", "المكناسي", "سيدي علي بن عون", "منزل بوزيان", "بئر الحفي"] },
    { id: "gabes", ar: "قابس", fr: "Gabès", en: "Gabes", lat: 33.8815, lng: 10.0982, delegations: ["قابس المدينة", "قابس الغربية", "قابس الجنوبية", "الحامة", "مارث", "غنوش", "مطماطة", "مطماطة الجديدة", "منزل الحبيب"] },
    { id: "medenine", ar: "مدنين", fr: "Médenine", en: "Medenine", lat: 33.3549, lng: 10.5055, delegations: ["مدنين الشمالية", "مدنين الجنوبية", "جرجيس", "حومة السوق (جربة)", "ميدون (جربة)", "أجيم (جربة)", "بن قردان", "بني خداش", "سيدي مخلوف"] },
    { id: "tataouine", ar: "تطاوين", fr: "Tataouine", en: "Tataouine", lat: 32.9297, lng: 10.4518, delegations: ["تطاوين الشمالية", "تطاوين الجنوبية", "غمراسن", "رمادة", "بئر لحمر", "الصمار", "ذهيبة"] },
    { id: "gafsa", ar: "قفصة", fr: "Gafsa", en: "Gafsa", lat: 34.4250, lng: 8.7842, delegations: ["قفصة المدينة", "قفصة الجنوبية", "المتلوي", "الرديف", "أم العرائس", "القصر", "السند", "القطار", "بلخير", "المظيلة"] },
    { id: "tozeur", ar: "توزر", fr: "Tozeur", en: "Tozeur", lat: 33.9197, lng: 8.1335, delegations: ["توزر", "نفطة", "دقاش", "حامة الجريد", "تمغزة"] },
    { id: "kebili", ar: "قبلي", fr: "Kébili", en: "Kebili", lat: 33.7044, lng: 8.9690, delegations: ["قبلي الشمالية", "قبلي الجنوبية", "دوز الشمالية", "دوز الجنوبية", "سوق الأحد", "الفوار"] },
    { id: "abroad", ar: "مقيم بالخارج (قنصلية)", fr: "Résident à l'étranger (Consulat)", en: "Resident Abroad (Consulate)", lat: 48.8566, lng: 2.3522, delegations: ["أوروبا (فرنسا، إيطاليا، ألمانيا...)", "الخليج العربي والشرق الأوسط", "أمريكا الشمالية (كندا، أمريكا)", "بقية دول العالم"] }
  ],

  idCard: {
    id: "cin",
    title: { ar: "بطاقة التعريف الوطنية", fr: "Carte d'Identité Nationale (CIN)", en: "National ID Card (CIN)" },
    subtitle: { ar: "استخراج لأول مرة، تجديد، أو تعويض ضياع", fr: "Première délivrance, renouvellement ou remplacement", en: "First-time issuance, renewal or replacement" },
    legalRef: {
      ar: "القانون عدد 27 لسنة 1993 المؤرخ في 22 مارس 1993 المتعلق ببطاقة التعريف الوطنية والأمر عدد 717 لسنة 1993",
      fr: "Loi n° 27 de 1993 du 22 mars 1993 et décret n° 717 de 1993",
      en: "Law No. 27 of 1993 dated March 22, 1993 and Decree No. 717 of 1993"
    },
    validity: { ar: "غير محددة زمنيا (صلوحية دائمة)", fr: "Illimitée (permanente)", en: "Unlimited validity (permanent)" },
    processingTime: { ar: "خلال 15 يوما من تاريخ تقديم الطلب", fr: "Sous 15 jours à compter du dépôt", en: "Within 15 days from submission date" },
    officialFormUrl: "http://www.sicad.gov.tn/upload/1447943384.pdf",
    formName: { ar: "مطلب بطاقة التعريف الوطنية", fr: "Formulaire de demande de CIN", en: "CIN Application Form" },
    depositPlace: {
      ar: "مركز الأمن (شرطة أو حرس وطني) مرجع النظر لإقامة الطالب أو القنصلية بالخارج",
      fr: "Poste de police ou garde nationale territorialement compétent ou consulat à l'étranger",
      en: "Police station or National Guard according to residence or Consulate abroad"
    }
  },

  passport: {
    id: "passport",
    title: { ar: "جواز السفر العادي", fr: "Passeport Ordinaire Tunisien", en: "Tunisian Regular Passport" },
    subtitle: { ar: "استخراج لأول مرة أو تجديد للمقيمين بتونس أو بالخارج", fr: "Première délivrance ou renouvellement en Tunisie ou à l'étranger", en: "First issuance or renewal in Tunisia or abroad" },
    legalRef: {
      ar: "القانون عدد 40 لسنة 1975 المؤرخ في 14 ماي 1975 المتعلق بجوازات السفر ووثائق السفر",
      fr: "Loi n° 40 de 1975 du 14 mai 1975 relative aux passeports et documents de voyage",
      en: "Law No. 40 of 1975 dated May 14, 1975 regarding Passports and Travel Documents"
    },
    validity: { ar: "5 سنوات (قابلة للتمديد حسب الشروط)", fr: "5 ans", en: "5 years" },
    processingTime: { ar: "خلال 15 يوما من تاريخ تقديم الطلب", fr: "Sous 15 jours à compter du dépôt", en: "Within 15 days from submission date" },
    officialFormUrl: "http://www.sicad.gov.tn/upload/1447943391.pdf",
    formName: { ar: "مطلب استخراج أو تجديد جواز سفر عادي", fr: "Formulaire de passeport ordinaire", en: "Passport Application Form" },
    depositPlace: {
      ar: "مركز الأمن (شرطة أو حرس وطني) مرجع النظر لإقامة الطالب أو البعثة الدبلوماسية/القنصلية بالخارج",
      fr: "Poste de police ou garde nationale de la circonscription de résidence ou consulat",
      en: "Police station or National Guard of residence district or Consulate abroad"
    }
  },

  photoGuidelines: {
    passport: {
      count: "4 صور شمسية",
      dimensions: "3.5 × 4.5 صم",
      background: "خلفية بيضاء ناصعة وفاتحة",
      rules: [
        "الوجه في المنتصف ويشغل من 70% إلى 80% من مساحة الصورة",
        "العينان مفتوحتان والشعر مصفف ولا يحجب ملامح الوجه",
        "تجنب النظارات العاكسة أو الداكنة والتعبيرات غير الطبيعية",
        "أن تكون الصور حديثة العهد وغير مستعملة سابقاً"
      ]
    },
    cin: {
      count: "3 صور فوتوغرافية",
      dimensions: "3.0 × 4.0 صم",
      background: "خلفية بيضاء أو فاتحة",
      rules: [
        "بمقياس 10/1 وتبين ملامح الوجه والشعر والعينين بوضوح",
        "خلفية موحدة ناصعة بدون ظلال",
        "التقاط الصورة وجهاً لوجه"
      ]
    }
  },

  faqs: [
    {
      q: { ar: "هل يمكن للأم ترخيص سفر أو استخراج جواز سفر لأبنائها القصر؟", fr: "La mère peut-elle autoriser l'obtention du passeport pour ses enfants mineurs ?", en: "Can a mother authorize a passport for her minor children?" },
      a: { ar: "نعم، طبقاً للقانون التونسي يحق للأم أو الأب بصفتها ولياً شرعياً منح ترخيص السفر أو استخراج جواز السفر للقصر مصحوباً بنسخة من بطاقة التعريف الوطنية للولي ومعرفاً بالإمضاء في البلدية.", fr: "Oui, la législation tunisienne permet au père ou à la mère en qualité de tuteur légal de signer l'autorisation parentale légalisée à la mairie.", en: "Yes, under Tunisian law, either parent as legal guardian can sign the parental authorization certified at the municipality." }
    },
    {
      q: { ar: "ماذا أفعل في حالة ضياع جواز السفر أو بطاقة التعريف؟", fr: "Que faire en cas de perte de mon passeport ou de ma CIN ?", en: "What should I do if my passport or ID card is lost?" },
      a: { ar: "يجب التوجه فوراً لأقرب مركز شرطة أو حرس وطني لتحرير تصريح بالضياع (شهادة ضياع)، ثم تقديم ملف التجديد مصحوباً بشهادة الضياع والوثائق المطلوبة.", fr: "Présentez-vous immédiatement au poste de police le plus proche pour établir une déclaration de perte, puis déposez votre dossier de remplacement.", en: "Report the loss immediately to the nearest police station to get a loss certificate, then submit your replacement application." }
    },
    {
      q: { ar: "كيف يمكنني استخراج مضمون ولادة عبر الإنترنت به رمز الاستجابة السريعة (QR)؟", fr: "Comment obtenir un extrait de naissance en ligne avec QR Code ?", en: "How can I get an online birth certificate with QR code?" },
      a: { ar: "يمكن للمواطنين الحاملين للهوية الرقمية على الجوال (ء-هوية) استخراج مضمون ولادة رسمي مجاناً أو عبر بوابة الحالة المدنية الإلكترونية (madania.gov.tn) المعترف بها لدى مراكز الأمن.", fr: "Vous pouvez obtenir un extrait de naissance électronique officiel via l'identité numérique MobileID (e-houwiya) ou le portail madania.gov.tn.", en: "You can download an official electronic birth certificate through MobileID (e-houwiya) or the citizen portal madania.gov.tn." }
    },
    {
      q: { ar: "هل يمكن تجديد جواز السفر قبل انتهاء صلوحيته؟", fr: "Peut-on renouveler le passeport avant son expiration ?", en: "Can I renew my passport before its expiration date?" },
      a: { ar: "نعم، يمكن طلب تجديد الجواز في السنة الأخيرة من صلوحيته أو في حال امتلاء الصفحات بالتأشيرات، أو عند تغيير المهنة أو الحالة المدنية.", fr: "Oui, le renouvellement est possible durant la dernière année de validité ou si les pages de visas sont épuisées.", en: "Yes, renewal is permitted during the final year of validity, when pages are full, or upon status changes." }
    }
  ]
};
