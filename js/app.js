/**
 * Tunisian Passport & National ID Card (CIN) Smart Guide
 * Reactive Multi-Step Wizard & Interactive Map Engine
 */

const AppState = {
  lang: localStorage.getItem('tun_id_lang') || 'ar',
  theme: localStorage.getItem('tun_id_theme') || 'light',
  currentScreen: 'screen-choice',
  selectedDoc: 'passport', // 'passport' | 'cin'
  ageCategory: '18plus', // 'under7' | '7to17' | '18plus'
  status: 'student', // 'student' | 'employed' | 'other'
  procedure: 'first_time', // 'first_time' | 'renewal' | 'lost'
  governorateId: 'tunis',
  delegation: 'تونس المدينة',
  userCoords: null, // { lat, lng }
  isAbroad: false,
  docSearchQuery: '',
  checkedDocs: new Set(JSON.parse(localStorage.getItem('tun_id_checked_docs') || '[]'))
};

let mapInstance = null;
let mapMarkersGroup = null;
let stepPickerMapInstance = null;
let stepPickerMarker = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  populateGovernorates();
  setupEventListeners();
  setupCitySearch();
  renderFaqs();
  goToScreen('screen-choice');
  
  window.addEventListener('resize', () => {
    if (mapInstance && AppState.currentScreen === 'screen-results') {
      mapInstance.invalidateSize();
    }
    if (stepPickerMapInstance && AppState.currentScreen === 'screen-step-location') {
      stepPickerMapInstance.invalidateSize();
    }
  });
});

function t(key, replacements = {}) {
  const dict = TRANSLATIONS[AppState.lang] || TRANSLATIONS.ar;
  let text = dict[key] || key;
  for (const [placeholder, val] of Object.entries(replacements)) {
    text = text.replace(new RegExp(`\\{${placeholder}\\}`, 'g'), val);
  }
  return text;
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('tun_id_theme', AppState.theme);
  document.documentElement.setAttribute('data-theme', AppState.theme);
  updateThemeIcon();
}

function updateThemeIcon() {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.innerHTML = AppState.theme === 'dark' 
      ? '<span class="theme-icon">☀️</span> <span class="theme-text">' + t('themeToggleLight') + '</span>'
      : '<span class="theme-icon">🌙</span> <span class="theme-text">' + t('themeToggleDark') + '</span>';
  }
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  AppState.lang = lang;
  localStorage.setItem('tun_id_lang', lang);
  initLanguage();
  populateGovernorates();
  renderFaqs();
  if (AppState.currentScreen === 'screen-results') {
    renderResults();
  }
}

function initLanguage() {
  document.documentElement.lang = AppState.lang;
  document.documentElement.dir = AppState.lang === 'ar' ? 'rtl' : 'ltr';
  
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === AppState.lang);
  });
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  const searchInput = document.getElementById('doc-search-input');
  if (searchInput) searchInput.placeholder = t('docSearchPlaceholder');

  updateThemeIcon();
}

// Navigation & Screen Controller
function goToScreen(screenId) {
  AppState.currentScreen = screenId;
  
  document.querySelectorAll('.flow-screen').forEach(screen => {
    screen.classList.remove('active-screen');
  });

  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active-screen');
  }

  // Update bottom navigation dock buttons
  document.querySelectorAll('.dock-nav-btn').forEach(btn => btn.classList.remove('active'));
  if (screenId === 'screen-choice') {
    const b = document.getElementById('dock-btn-choice');
    if (b) b.classList.add('active');
  } else if (screenId === 'screen-results') {
    const b = document.getElementById('dock-btn-results');
    if (b) b.classList.add('active');
  } else {
    const b = document.getElementById(AppState.selectedDoc === 'passport' ? 'dock-btn-passport' : 'dock-btn-cin');
    if (b) b.classList.add('active');
  }

  // Header reset button visibility
  const resetBtn = document.getElementById('header-reset-btn');
  if (resetBtn) {
    resetBtn.style.display = (screenId === 'screen-choice') ? 'none' : 'inline-flex';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (screenId === 'screen-step-location') {
    setTimeout(() => {
      initStepPickerMap();
    }, 250);
  }

  if (screenId === 'screen-results') {
    renderResults();
    setTimeout(() => {
      initOrUpdateMap();
    }, 250);
  }
}

function selectDocument(docType) {
  AppState.selectedDoc = docType;
  
  // Update UI pill
  const pill = document.getElementById('selected-doc-pill');
  if (pill) {
    if (docType === 'passport') {
      pill.textContent = AppState.lang === 'ar' ? 'جواز السفر 📕' : AppState.lang === 'fr' ? 'Passeport 📕' : 'Passport 📕';
      pill.className = 'selected-doc-pill pill-passport';
    } else {
      pill.textContent = AppState.lang === 'ar' ? 'بطاقة التعريف الوطنية 🪪' : AppState.lang === 'fr' ? 'Carte d\'Identité 🪪' : 'National ID 🪪';
      pill.className = 'selected-doc-pill pill-cin';
    }
  }

  goToScreen('screen-step-age');
}

function proceedToLocationStep() {
  const ageRadio = document.querySelector('input[name="wiz-age"]:checked');
  if (ageRadio) AppState.ageCategory = ageRadio.value;

  const statRadio = document.querySelector('input[name="wiz-status"]:checked');
  if (statRadio) AppState.status = statRadio.value;

  const procRadio = document.querySelector('input[name="wiz-procedure"]:checked');
  if (procRadio) AppState.procedure = procRadio.value;

  goToScreen('screen-step-location');
}

function proceedToResults() {
  goToScreen('screen-results');
}

// Location & Geolocation logic
function populateGovernorates() {
  const govSelect = document.getElementById('gov-select');
  if (!govSelect) return;
  
  const currentGov = AppState.governorateId;
  govSelect.innerHTML = '';
  
  SICAD_DATA.governorates.forEach(gov => {
    const opt = document.createElement('option');
    opt.value = gov.id;
    opt.textContent = gov[AppState.lang] || gov.ar;
    if (gov.id === currentGov) opt.selected = true;
    govSelect.appendChild(opt);
  });
  
  updateDelegationList();
}

function updateDelegationList() {
  const delegSelect = document.getElementById('delegation-select');
  if (!delegSelect) return;
  
  const selectedGov = SICAD_DATA.governorates.find(g => g.id === AppState.governorateId) || SICAD_DATA.governorates[0];
  delegSelect.innerHTML = '';
  
  selectedGov.delegations.forEach(del => {
    const opt = document.createElement('option');
    opt.value = del;
    opt.textContent = del;
    if (del === AppState.delegation) opt.selected = true;
    delegSelect.appendChild(opt);
  });
  
  if (!selectedGov.delegations.includes(AppState.delegation)) {
    AppState.delegation = selectedGov.delegations[0] || '';
  }
}

function onGovernorateChange() {
  const govSelect = document.getElementById('gov-select');
  if (!govSelect) return;
  AppState.governorateId = govSelect.value;
  AppState.isAbroad = (AppState.governorateId === 'abroad');
  updateDelegationList();
}

function onDelegationChange() {
  const delegSelect = document.getElementById('delegation-select');
  if (!delegSelect) return;
  AppState.delegation = delegSelect.value;
}

// Request Browser Geolocation (GPS) with High Accuracy & Reverse Geocoding
async function requestUserLocation() {
  const badge = document.getElementById('gps-status-badge');
  const btnText = document.getElementById('gps-btn-text');

  if (!navigator.geolocation) {
    if (badge) {
      badge.style.display = 'block';
      badge.className = 'gps-status-badge error';
      badge.textContent = t('gpsError');
    }
    return;
  }

  if (badge) {
    badge.style.display = 'block';
    badge.className = 'gps-status-badge info';
    badge.innerHTML = `<span>🛰️</span> ${t('gpsDetecting')}`;
  }

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const accuracy = Math.round(position.coords.accuracy || 10);
      AppState.userCoords = { lat, lng, accuracy };

      let detectedGovName = "";
      let detectedDelegationName = "";
      let displayAddress = "";

      // Try Reverse Geocoding with OpenStreetMap Nominatim for exact city & suburb
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=ar,fr,en`, {
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          const data = await response.json();
          if (data && data.address) {
            const addr = data.address;
            displayAddress = data.display_name || "";
            
            // Extract state / governorate
            const rawState = addr.state || addr.county || addr.province || "";
            // Extract city / suburb / town / neighbourhood
            const rawCity = addr.city || addr.town || addr.suburb || addr.neighbourhood || addr.village || "";
            
            // Match governorate in Tunisian data
            const matchedGov = SICAD_DATA.governorates.find(g => {
              const cleanState = rawState.replace(/ولاية|gouvernorat de|governorate/gi, '').trim();
              return g.ar.includes(cleanState) || g.fr.toLowerCase().includes(cleanState.toLowerCase()) || g.en.toLowerCase().includes(cleanState.toLowerCase());
            });

            if (matchedGov) {
              AppState.governorateId = matchedGov.id;
              detectedGovName = matchedGov[AppState.lang] || matchedGov.ar;

              // Match delegation
              const matchedDeleg = matchedGov.delegations.find(d => {
                return d.includes(rawCity) || rawCity.includes(d);
              });

              if (matchedDeleg) {
                AppState.delegation = matchedDeleg;
                detectedDelegationName = matchedDeleg;
              } else if (rawCity) {
                // If rawCity is valid, add or use first delegation
                detectedDelegationName = rawCity;
                if (!matchedGov.delegations.includes(rawCity)) {
                  matchedGov.delegations.unshift(rawCity);
                }
                AppState.delegation = rawCity;
              }
            }
          }
        }
      } catch (geoErr) {
        console.warn("Nominatim reverse geocode notice (fallback to coordinate math):", geoErr);
      }

      // Mathematical Fallback if Nominatim didn't match
      if (!detectedGovName) {
        let closestGov = SICAD_DATA.governorates[0];
        let minDistance = Infinity;

        SICAD_DATA.governorates.forEach(gov => {
          if (gov.lat && gov.lng) {
            const d = Math.hypot(gov.lat - lat, gov.lng - lng);
            if (d < minDistance) {
              minDistance = d;
              closestGov = gov;
            }
          }
        });

        AppState.governorateId = closestGov.id;
        AppState.delegation = closestGov.delegations[0] || '';
        detectedGovName = closestGov[AppState.lang] || closestGov.ar;
        detectedDelegationName = AppState.delegation;
      }

      AppState.isAbroad = false;

      // Update Form Controls
      const govSelect = document.getElementById('gov-select');
      if (govSelect) govSelect.value = AppState.governorateId;
      updateDelegationList();

      const delegSelect = document.getElementById('delegation-select');
      if (delegSelect) delegSelect.value = AppState.delegation;

      if (badge) {
        badge.className = 'gps-status-badge success';
        badge.innerHTML = `
          <div><strong>✓ تم تحديد موقعك بدقة عالية:</strong></div>
          <div style="margin-top: 4px; font-size: 0.82rem;">📍 ${detectedDelegationName}، ${detectedGovName} (دقة: ±${accuracy} م)</div>
        `;
      }

      if (btnText) {
        btnText.textContent = `✓ ${detectedDelegationName}، ${detectedGovName} (GPS)`;
      }

      showToast(`✓ تم تحديد موقعك: ${detectedDelegationName}، ${detectedGovName}`);
      
      if (stepPickerMapInstance) {
        stepPickerMapInstance.setView([lat, lng], 13);
        if (stepPickerMarker) stepPickerMarker.setLatLng([lat, lng]);
      }
    },
    (err) => {
      console.warn("Geolocation denied or error:", err);
      if (badge) {
        badge.className = 'gps-status-badge error';
        badge.textContent = t('gpsError');
      }
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

// Step 2: Interactive Location Picker Map
function initStepPickerMap() {
  const container = document.getElementById('step-picker-map');
  if (!container || typeof L === 'undefined') return;

  const gov = SICAD_DATA.governorates.find(g => g.id === AppState.governorateId) || SICAD_DATA.governorates[0];
  let centerLat = AppState.userCoords ? AppState.userCoords.lat : (gov.lat || 36.8065);
  let centerLng = AppState.userCoords ? AppState.userCoords.lng : (gov.lng || 10.1815);

  if (!stepPickerMapInstance) {
    stepPickerMapInstance = L.map('step-picker-map', {
      zoomControl: true,
      tap: false
    }).setView([centerLat, centerLng], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(stepPickerMapInstance);

    const userIcon = L.divIcon({
      className: 'custom-map-pin pin-user',
      html: '<div class="pin-inner user-pulse">📍 انقر لتحديد موقعك</div>',
      iconSize: [120, 30],
      iconAnchor: [60, 30]
    });

    stepPickerMarker = L.marker([centerLat, centerLng], { icon: userIcon, draggable: true }).addTo(stepPickerMapInstance);

    stepPickerMarker.on('dragend', (e) => {
      const pos = e.target.getLatLng();
      onMapLocationPicked(pos.lat, pos.lng);
    });

    stepPickerMapInstance.on('click', (e) => {
      stepPickerMarker.setLatLng(e.latlng);
      onMapLocationPicked(e.latlng.lat, e.latlng.lng);
    });
  } else {
    stepPickerMapInstance.setView([centerLat, centerLng], 10);
    stepPickerMapInstance.invalidateSize();
    if (stepPickerMarker) stepPickerMarker.setLatLng([centerLat, centerLng]);
  }
}

async function onMapLocationPicked(lat, lng) {
  AppState.userCoords = { lat, lng, accuracy: 5 };
  
  // Find closest governorate
  let closestGov = SICAD_DATA.governorates[0];
  let minDistance = Infinity;

  SICAD_DATA.governorates.forEach(gov => {
    if (gov.lat && gov.lng) {
      const d = Math.hypot(gov.lat - lat, gov.lng - lng);
      if (d < minDistance) {
        minDistance = d;
        closestGov = gov;
      }
    }
  });

  AppState.governorateId = closestGov.id;
  AppState.isAbroad = (closestGov.id === 'abroad');

  // Try reverse geocode to get exact delegation
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}&accept-language=ar,fr,en`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.address) {
        const rawCity = data.address.city || data.address.town || data.address.suburb || data.address.neighbourhood || data.address.village || "";
        const matchedDeleg = closestGov.delegations.find(d => d.includes(rawCity) || rawCity.includes(d));
        if (matchedDeleg) {
          AppState.delegation = matchedDeleg;
        } else if (rawCity) {
          AppState.delegation = rawCity;
          if (!closestGov.delegations.includes(rawCity)) closestGov.delegations.unshift(rawCity);
        }
      }
    }
  } catch (err) {
    console.warn("Reverse geocode notice:", err);
  }

  const govSelect = document.getElementById('gov-select');
  if (govSelect) govSelect.value = AppState.governorateId;
  updateDelegationList();

  const delegSelect = document.getElementById('delegation-select');
  if (delegSelect) delegSelect.value = AppState.delegation;

  const badge = document.getElementById('gps-status-badge');
  if (badge) {
    badge.style.display = 'block';
    badge.className = 'gps-status-badge success';
    badge.innerHTML = `
      <div><strong>✓ تم تحديد موقعك من الخريطة:</strong></div>
      <div style="margin-top: 4px; font-size: 0.82rem;">📍 ${AppState.delegation}، ${closestGov[AppState.lang] || closestGov.ar}</div>
    `;
  }

  showToast(`✓ تم تحديد الموقع: ${AppState.delegation}، ${closestGov[AppState.lang] || closestGov.ar}`);
}

// Live City Search Autocomplete
function setupCitySearch() {
  const input = document.getElementById('city-search-input');
  const dropdown = document.getElementById('city-search-dropdown');
  if (!input || !dropdown) return;

  const searchableList = [];
  SICAD_DATA.governorates.forEach(gov => {
    gov.delegations.forEach(del => {
      searchableList.push({
        govId: gov.id,
        govNameAr: gov.ar,
        govNameFr: gov.fr,
        govNameEn: gov.en,
        delegation: del,
        lat: gov.lat,
        lng: gov.lng
      });
    });
  });

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q || q.length < 1) {
      dropdown.style.display = 'none';
      return;
    }

    const matches = searchableList.filter(item => 
      item.delegation.toLowerCase().includes(q) || 
      item.govNameAr.toLowerCase().includes(q) || 
      item.govNameFr.toLowerCase().includes(q) || 
      item.govNameEn.toLowerCase().includes(q)
    ).slice(0, 8);

    if (matches.length === 0) {
      dropdown.innerHTML = '<div class="city-search-no-res">❌ لم يتم العثور على مدينة مطابقة، يرجى الاختيار من القائمة</div>';
      dropdown.style.display = 'block';
      return;
    }

    dropdown.innerHTML = '';
    matches.forEach(m => {
      const itemEl = document.createElement('div');
      itemEl.className = 'city-search-item';
      itemEl.innerHTML = `
        <span class="city-name">📍 <strong>${m.delegation}</strong></span>
        <span class="city-gov-badge">${m.govNameAr}</span>
      `;
      itemEl.onclick = () => {
        selectCityQuick(m.govId, m.delegation);
        input.value = `${m.delegation} (${m.govNameAr})`;
        dropdown.style.display = 'none';
      };
      dropdown.appendChild(itemEl);
    });

    dropdown.style.display = 'block';
  });

  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = 'none';
    }
  });
}

function selectCityQuick(govId, delegation) {
  AppState.governorateId = govId;
  AppState.delegation = delegation;
  AppState.isAbroad = (govId === 'abroad');

  const gov = SICAD_DATA.governorates.find(g => g.id === govId) || SICAD_DATA.governorates[0];
  AppState.userCoords = { lat: gov.lat, lng: gov.lng, accuracy: 50 };

  const govSelect = document.getElementById('gov-select');
  if (govSelect) govSelect.value = govId;
  updateDelegationList();

  const delegSelect = document.getElementById('delegation-select');
  if (delegSelect) delegSelect.value = delegation;

  if (stepPickerMapInstance && gov.lat && gov.lng) {
    stepPickerMapInstance.setView([gov.lat, gov.lng], 11);
    if (stepPickerMarker) stepPickerMarker.setLatLng([gov.lat, gov.lng]);
  }

  const badge = document.getElementById('gps-status-badge');
  if (badge) {
    badge.style.display = 'block';
    badge.className = 'gps-status-badge success';
    badge.innerHTML = `
      <div><strong>✓ تم اختيار المدينة:</strong></div>
      <div style="margin-top: 4px; font-size: 0.82rem;">📍 ${delegation}، ${gov[AppState.lang] || gov.ar}</div>
    `;
  }

  showToast(`✓ تم اختيار: ${delegation}، ${gov[AppState.lang] || gov.ar}`);
}

function setupEventListeners() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  const headerReset = document.getElementById('header-reset-btn');
  if (headerReset) headerReset.addEventListener('click', () => goToScreen('screen-choice'));

  // Document search filter
  const searchInput = document.getElementById('doc-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.docSearchQuery = e.target.value.toLowerCase().trim();
      renderChecklistOnly();
    });
  }
}

// Fee calculations
function getPassportFee() {
  if (AppState.ageCategory === 'under7') {
    return {
      numValue: 25,
      amount: "25 د.ت (TND)",
      badge: AppState.lang === 'ar' ? 'تعريفة مخفضة (أقل من 7 سنوات)' : AppState.lang === 'fr' ? 'Tarif Réduit (< 7 ans)' : 'Reduced Fee (< 7 yrs)'
    };
  }
  if (AppState.status === 'student') {
    return {
      numValue: 25,
      amount: "25 د.ت (TND)",
      badge: AppState.lang === 'ar' ? 'تعريفة مخفضة (تلاميذ وطلبة)' : AppState.lang === 'fr' ? 'Tarif Réduit (Élèves & Étudiants)' : 'Reduced Fee (Students)'
    };
  }
  return {
    numValue: 80,
    amount: "80 د.ت (TND)",
    badge: AppState.lang === 'ar' ? 'التعريفة العادية للبالغين' : AppState.lang === 'fr' ? 'Tarif Standard (Adultes)' : 'Standard Adult Fee'
  };
}

function getCinFee() {
  return {
    numValue: 3,
    amount: "3 د.ت (TND)",
    badge: AppState.lang === 'ar' ? 'معلوم قار (وصل خلاص من القباضة)' : AppState.lang === 'fr' ? 'Tarif Fixe (Quittance Recette)' : 'Fixed Fee (Tax Receipt)'
  };
}

// Required Documents computation
function computeDocuments() {
  const isPassport = AppState.selectedDoc === 'passport';
  const isAr = AppState.lang === 'ar';
  const isFr = AppState.lang === 'fr';
  const docs = [];

  if (isPassport) {
    docs.push({
      id: "pass_form",
      title: isAr ? "إستمارة الحصول على جواز سفر عادي مقروء آليا" : isFr ? "Formulaire de demande de passeport ordinaire lisible à la machine" : "Machine-readable Passport Application Form",
      desc: isAr ? "يتم تعميرها وإمضاؤها شخصياً داخل الخانة المعدة للغرض" : isFr ? "À renseigner et signer personnellement dans le cadre prévu" : "Fill and sign in designated signature box",
      source: t('sourcePolice'),
      sourceType: 'police',
      downloadUrl: SICAD_DATA.passport.officialFormUrl,
      important: true
    });

    if (AppState.ageCategory === 'under7' || AppState.ageCategory === '7to17') {
      docs.push({
        id: "pass_birth_cert_minor",
        title: isAr ? "مضمون ولادة أصلي للطفل / القاصر لم يمض عليه أكثر من 3 أشهر" : isFr ? "Extrait de naissance original du mineur (< 3 mois)" : "Original Birth Certificate for minor (< 3 months)",
        desc: isAr ? "مستخرج من السجلات الأصلية للحالة المدنية بالبلدية أو عبر الإنترنت" : isFr ? "Délivré par les registres d'état civil de la mairie ou en ligne" : "Issued from civil status register",
        source: t('sourceMunicipality'),
        sourceType: 'municipality',
        important: true
      });
    } else {
      docs.push({
        id: "pass_cin_copy",
        title: isAr ? "نسخة من بطاقة التعريف الوطنية مع الاستظهار بالأصل" : isFr ? "Copie de la Carte d'Identité Nationale avec présentation de l'original" : "Copy of National ID Card (CIN) + Original for verification",
        desc: isAr ? "سارية المفعول ومطابقة للمهنة والحالة المدنية الحالية" : isFr ? "Valide et conforme à la situation actuelle" : "Valid CIN matching current status",
        source: isAr ? "وثيقة شخصية بحوزتك" : isFr ? "Document personnel" : "Personal document",
        sourceType: 'personal',
        important: true
      });
    }

    docs.push({
      id: "pass_photos",
      title: isAr ? "04 صور شمسية حديثة بخلفية بيضاء (مقاس 3.5 / 4.5 صم)" : isFr ? "4 photos d'identité récentes fond blanc (3,5 x 4,5 cm)" : "4 recent passport photos on white background (3.5 x 4.5 cm)",
      desc: isAr ? "مواصفات سيكاد: خلفية بيضاء ناصعة، الوجه واضح، العينان والشعر بارزان" : isFr ? "Normes SICAD : fond blanc uni, visage dégagé, yeux et cheveux visibles" : "White background, clear face, visible eyes and hair",
      source: t('sourcePhoto'),
      sourceType: 'photo',
      important: true
    });

    if (AppState.status === 'student' || AppState.ageCategory === '7to17') {
      docs.push({
        id: "pass_student_proof",
        title: isAr ? "شهادة حضور مدرسية أو شهادة ترسيم جامعي للسنة الجارية" : isFr ? "Certificat de scolarité ou attestation d'inscription universitaire" : "School attendance or university enrollment certificate",
        desc: isAr ? "ضرورية للتمتع بالتعريفة المخفضة (25 ديناراً)" : isFr ? "Indispensable pour bénéficier du tarif réduit (25 DT)" : "Required for 25 TND reduced fee eligibility",
        source: t('sourceSchool'),
        sourceType: 'school',
        important: true
      });
    }

    if (AppState.ageCategory === 'under7' || AppState.ageCategory === '7to17') {
      docs.push({
        id: "pass_guardian_auth",
        title: isAr ? "ترخيص الولي الشرعي مع نسخة من بطاقة تعريفه الوطنية" : isFr ? "Autorisation du tuteur légal avec copie de sa CIN" : "Legal guardian authorization + copy of guardian's CIN",
        desc: isAr ? "معرف بالإمضاء لدى البلدية من طرف الأب أو الأم بصفتها ولياً شرعياً" : isFr ? "Signature légalisée à la municipalité par le tuteur" : "Certified signature from municipality",
        source: isAr ? "الولي الشرعي + مصادقة البلدية" : isFr ? "Tuteur légal + légalisation municipalité" : "Guardian + Municipality",
        sourceType: 'guardian',
        important: true
      });
    }

    const fee = getPassportFee();
    docs.push({
      id: "pass_recette_voucher",
      title: (isAr ? "وصل خلاص من القباضة المالية بقيمة: " : isFr ? "Quittance fiscale de la Recette des Finances d'un montant de : " : "Tax receipt from Recette des Finances: ") + fee.amount,
      desc: isAr ? "يتم خلاصها مباشرة في أي قباضة مالية تونسية" : isFr ? "À acquitter dans n'importe quelle Recette des Finances" : "Payable at any Tunisian tax office",
      source: t('sourceRecette'),
      sourceType: 'recette',
      important: true
    });

    if (AppState.procedure === 'renewal') {
      docs.push({
        id: "pass_old_passport",
        title: isAr ? "إضافة الجواز القديم المنتهي أو المراد تعويضه" : isFr ? "Présentation de l'ancien passeport expiré ou à remplacer" : "Submission of the old/expired passport",
        desc: isAr ? "يمكنك تقديم طلب كتابي على ورق عادي للاحتفاظ بالجواز القديم ملغى" : isFr ? "Possibilité de formuler une demande écrite pour conserver l'ancien passeport annulé" : "Handwritten request allowed if keeping canceled passport",
        source: isAr ? "بحوزتك" : isFr ? "En votre possession" : "In your possession",
        sourceType: 'personal',
        important: true
      });
    } else if (AppState.procedure === 'lost') {
      docs.push({
        id: "pass_lost_cert",
        title: isAr ? "شهادة تصريح بضياع جواز السفر (مسلمة من مركز الأمن أو القنصلية)" : isFr ? "Déclaration de perte délivrée par le poste de police ou consulat" : "Official Loss Declaration Certificate issued by police/consulate",
        desc: isAr ? "يتم التصريح بالضياع فوراً بمجرد فقدان الوثيقة" : isFr ? "À déclarer immédiatement auprès des autorités de police" : "Report immediately to security authorities",
        source: t('sourcePolice'),
        sourceType: 'police',
        important: true
      });
    }

  } else {
    // CIN REQUIREMENTS
    const isMinor = (AppState.ageCategory === 'under7' || AppState.ageCategory === '7to17');

    docs.push({
      id: "cin_form",
      title: isAr ? "مطبوعة إدارية لطلب بطاقة التعريف الوطنية للتعمير والإمضاء" : isFr ? "Formulaire administratif de demande de CIN à remplir et signer" : "National ID Card Application Form to fill and sign",
      desc: isAr ? "تسحب مجاناً من مركز الأمن أو تحمل مباشرة" : isFr ? "Disponible gratuitement au poste de police ou téléchargeable" : "Free at police station or downloadable",
      source: t('sourcePolice'),
      sourceType: 'police',
      downloadUrl: SICAD_DATA.idCard.officialFormUrl,
      important: true
    });

    docs.push({
      id: "cin_birth_cert",
      title: isAr ? "مضمون ولادة مستخرج من السجلات الأصلية للحالة المدنية لم يمض عليه أكثر من 3 أشهر" : isFr ? "Extrait de naissance original délivré depuis moins de 3 mois" : "Original Birth Certificate issued within the last 3 months",
      desc: isAr ? "مستخرج من البلدية أو عبر خدمة الحالة المدنية الإلكترونية (ء-هوية)" : isFr ? "Extrait original des registres de l'état civil ou en ligne (e-houwiya)" : "From municipality civil status or online portal",
      source: t('sourceMunicipality'),
      sourceType: 'municipality',
      important: true
    });

    if (AppState.procedure === 'first_time') {
      docs.push({
        id: "cin_nationality_cert",
        title: isAr ? "شهادة في الجنسية التونسية أو إثبات الجنسية" : isFr ? "Certificat de nationalité tunisienne" : "Certificate of Tunisian Nationality",
        desc: isAr ? "يطلب في حالة الاستخراج لأول مرة" : isFr ? "Requis lors de la première délivrance" : "Required for first-time issuance",
        source: isAr ? "محكمة الناحية أو وزارة العدل" : isFr ? "Tribunal cantonal ou Ministère de la Justice" : "District Court / Ministry of Justice",
        sourceType: 'court',
        important: true
      });
    }

    docs.push({
      id: "cin_residence_cert",
      title: isAr ? "شهادة إقامة مسلمة من مركز الأمن مرجع النظر" : isFr ? "Certificat de résidence délivré par le poste de police compétent" : "Certificate of Residence issued by local police station",
      desc: isAr ? "تثبت مقر السكنى الفعلي للطالب بدائرة المركز" : isFr ? "Atteste du domicile réel dans la circonscription" : "Proves residential address within district",
      source: t('sourcePolice'),
      sourceType: 'police',
      important: true
    });

    if (AppState.status === 'student') {
      docs.push({
        id: "cin_student_proof",
        title: isAr ? "شهادة حضور مدرسي أو شهادة تسجيل جامعي للسنة الجارية" : isFr ? "Certificat de scolarité ou attestation d'inscription universitaire" : "School attendance or university enrollment certificate",
        desc: isAr ? "لتسجيل صفة (تلميذ / طالب) على بطاقة التعريف" : isFr ? "Pour mentionner la profession (Élève / Étudiant) sur la CIN" : "To register Student status on the ID card",
        source: t('sourceSchool'),
        sourceType: 'school',
        important: true
      });
    } else if (AppState.status === 'employed') {
      docs.push({
        id: "cin_work_proof",
        title: isAr ? "شهادة عمل أو بيان في المهنة / بطاقة خلاص / تصريح بالدخل" : isFr ? "Attestation de travail ou justificatif de profession / bulletin de paie" : "Employment certificate / proof of occupation",
        desc: isAr ? "لتثبيت صفتك المهنية على ظهر بطاقة التعريف" : isFr ? "Pour enregistrer votre titre professionnel au verso de la CIN" : "To register professional occupation on the CIN",
        source: t('sourceEmployer'),
        sourceType: 'employer',
        important: true
      });
    }

    docs.push({
      id: "cin_photos",
      title: isAr ? "03 صور فوتوغرافية للمعني بالأمر (حجم 4/3 صم، خلفية بيضاء أو فاتحة)" : isFr ? "3 photos d'identité conformes (format 3 x 4 cm, fond blanc ou clair)" : "3 ID photos (format 3 x 4 cm, white or light background)",
      desc: isAr ? "بمقياس 10/1 وتبين الوجه والشعر والعينين بوضوح" : isFr ? "Échelle 1/10e, visage net, cheveux et yeux bien visibles" : "1/10 scale showing clear face, hair, and eyes",
      source: t('sourcePhoto'),
      sourceType: 'photo',
      important: true
    });

    docs.push({
      id: "cin_recette_voucher",
      title: isAr ? "وصل خلاص تسلمه قباضات المالية قيمته 3 دنانير (3 TND)" : isFr ? "Quittance fiscale de la Recette des Finances d'une valeur de 3 DT" : "Tax receipt from Recette des Finances for 3 TND",
      desc: isAr ? "معلوم الطابع الجبائي الإداري لبطاقة التعريف" : isFr ? "Droit de timbre fiscal administratif pour la CIN" : "Administrative tax stamp fee for National ID",
      source: t('sourceRecette'),
      sourceType: 'recette',
      important: true
    });

    if (isMinor) {
      docs.push({
        id: "cin_minor_auth",
        title: isAr ? "ترخيص معلل من الولي الشرعي معرف بالإمضاء + نسخة من بطاقة تعريفه" : isFr ? "Autorisation motivée du tuteur légal légalisée + copie de sa CIN" : "Justified Legal Guardian authorization with certified signature + Parent CIN copy",
        desc: isAr ? "خاص بالقصر دون 18 سنة مع توضيح سبب الاستخراج (مهني، تربوي، رياضي)" : isFr ? "Requis pour les mineurs (< 18 ans) avec justification (études, sport, emploi)" : "For minors under 18 with justification (educational, sports, career)",
        source: isAr ? "الولي الشرعي + البلدية" : isFr ? "Tuteur légal + Municipalité" : "Guardian + Municipality",
        sourceType: 'guardian',
        important: true
      });
    }

    docs.push({
      id: "cin_blood_cert",
      title: isAr ? "شهادة في الفصيلة الدموية (اختيارية)" : isFr ? "Carte ou certificat de groupe sanguin (Facultatif)" : "Blood group certificate (Optional)",
      desc: isAr ? "لتضمين زمرة الدم على بطاقة التعريف لغايات طبية وطارئة" : isFr ? "Pour mentionner le groupe sanguin sur la carte en cas d'urgence" : "To include blood type on ID card for emergency safety",
      source: t('sourceHospital'),
      sourceType: 'hospital',
      important: false
    });

    if (AppState.procedure === 'lost') {
      docs.push({
        id: "cin_lost_cert",
        title: isAr ? "شهادة تصريح بضياع بطاقة التعريف الوطنية" : isFr ? "Déclaration officielle de perte de CIN" : "Official CIN Loss Certificate",
        desc: isAr ? "مسلمة من مركز الأمن أو القنصلية" : isFr ? "Délivrée par le poste de police ou le consulat" : "Issued by local police station or consulate",
        source: t('sourcePolice'),
        sourceType: 'police',
        important: true
      });
    } else if (AppState.procedure === 'renewal') {
      docs.push({
        id: "cin_old_card",
        title: isAr ? "إرجاع بطاقة التعريف القديمة مع الوثيقة المؤيدة للتغيير (إن وجد)" : isFr ? "Restitution de l'ancienne CIN et justificatif de modification (le cas échéant)" : "Old CIN card surrender + justification document for any changes",
        desc: isAr ? "مثال: عقد زواج، شهادة عمل جديدة، أو تغيير مقر السكنى" : isFr ? "Exemple : extrait de mariage, nouvelle attestation de travail, etc." : "Example: marriage certificate, new employer proof, etc.",
        source: isAr ? "بحوزتك" : isFr ? "En votre possession" : "In your possession",
        sourceType: 'personal',
        important: true
      });
    }
  }

  return docs;
}

function toggleDocCheck(docId) {
  if (AppState.checkedDocs.has(docId)) {
    AppState.checkedDocs.delete(docId);
  } else {
    AppState.checkedDocs.add(docId);
  }
  try {
    localStorage.setItem('tun_id_checked_docs', JSON.stringify(Array.from(AppState.checkedDocs)));
  } catch (e) {
    console.warn("Storage write failed", e);
  }
  renderChecklistProgress();
}

function renderResults() {
  const isPassport = AppState.selectedDoc === 'passport';
  const data = isPassport ? SICAD_DATA.passport : SICAD_DATA.idCard;
  const gov = SICAD_DATA.governorates.find(g => g.id === AppState.governorateId) || SICAD_DATA.governorates[0];

  // Top Summary Chips
  const docBadge = document.getElementById('res-doc-badge');
  const ageChip = document.getElementById('res-age-chip');
  const statChip = document.getElementById('res-status-chip');
  const locChip = document.getElementById('res-loc-chip');
  const mapLocalityPill = document.getElementById('map-locality-pill');

  if (docBadge) {
    docBadge.textContent = isPassport ? 'جواز السفر 📕' : 'بطاقة التعريف الوطنية 🪪';
    docBadge.className = isPassport ? 'doc-type-badge-result badge-pass' : 'doc-type-badge-result badge-cin';
  }

  const ageText = AppState.ageCategory === 'under7' 
    ? t('ageUnder7') 
    : AppState.ageCategory === '7to17' 
    ? t('ageBetween7and17') 
    : t('age18Plus');
  if (ageChip) ageChip.textContent = `${t('ageLabel')} ${ageText}`;

  const statText = AppState.status === 'student' 
    ? t('statusStudent') 
    : AppState.status === 'employed' 
    ? t('statusEmployed') 
    : t('statusOther');
  if (statChip) statChip.textContent = statText;

  const locText = `${gov[AppState.lang] || gov.ar} - ${AppState.delegation}`;
  if (locChip) locChip.textContent = `📍 ${locText}`;
  if (mapLocalityPill) mapLocalityPill.textContent = `📍 ${locText}`;

  // Card Header
  const headerBg = document.getElementById('doc-card-header-bg');
  const docIcon = document.getElementById('res-doc-icon');
  const docTitle = document.getElementById('res-doc-title');
  const docSubtitle = document.getElementById('res-doc-subtitle');
  const validityVal = document.getElementById('res-validity-val');
  const timeVal = document.getElementById('res-time-val');
  const legalVal = document.getElementById('res-legal-val');

  if (headerBg) headerBg.className = isPassport ? 'doc-details-top card-header-passport' : 'doc-details-top card-header-cin';
  if (docIcon) docIcon.textContent = isPassport ? '📕' : '🪪';
  if (docTitle) docTitle.textContent = data.title[AppState.lang] || data.title.ar;
  if (docSubtitle) docSubtitle.textContent = data.subtitle[AppState.lang] || data.subtitle.ar;
  if (validityVal) validityVal.textContent = data.validity[AppState.lang] || data.validity.ar;
  if (timeVal) timeVal.textContent = data.processingTime[AppState.lang] || data.processingTime.ar;
  if (legalVal) legalVal.textContent = data.legalRef[AppState.lang] || data.legalRef.ar;

  // Fee computation
  const fee = isPassport ? getPassportFee() : getCinFee();
  const feeBadge = document.getElementById('res-fee-badge');
  if (feeBadge) {
    feeBadge.innerHTML = `
      <div class="fee-main">${fee.amount}</div>
      <div class="fee-sub">${fee.badge}</div>
    `;
  }

  // Budget Simulator
  renderBudgetSimulator(fee.numValue);

  // Photo Guide Box
  renderPhotoGuide(isPassport);

  // Documents checklist
  renderChecklistOnly();

  renderChecklistProgress();
  updateMapsUrls();
}

function renderChecklistOnly() {
  const docsList = document.getElementById('results-docs-list');
  if (!docsList) return;

  const allDocs = computeDocuments();
  const q = AppState.docSearchQuery;
  const docs = q 
    ? allDocs.filter(d => d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || d.source.toLowerCase().includes(q))
    : allDocs;

  docsList.innerHTML = '';

  if (docs.length === 0) {
    docsList.innerHTML = `<div class="empty-search-msg">❌ لا توجد وثائق مطابقة للبحث "${q}"</div>`;
    return;
  }

  docs.forEach(doc => {
    const isChecked = AppState.checkedDocs.has(doc.id);
    const item = document.createElement('div');
    item.className = `doc-item ${isChecked ? 'checked' : ''} ${doc.important ? 'important-doc' : ''}`;
    item.onclick = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
      toggleDocCheck(doc.id);
      item.classList.toggle('checked', AppState.checkedDocs.has(doc.id));
    };

    item.innerHTML = `
      <div class="doc-checkbox">
        <input type="checkbox" id="${doc.id}" ${isChecked ? 'checked' : ''} onchange="toggleDocCheck('${doc.id}')">
        <span class="custom-checkbox"></span>
      </div>
      <div class="doc-content">
        <div class="doc-header">
          <h4 class="doc-title">${doc.title}</h4>
          ${doc.important ? `<span class="doc-badge-req">${AppState.lang === 'ar' ? 'إجباري' : AppState.lang === 'fr' ? 'Obligatoire' : 'Required'}</span>` : `<span class="doc-badge-opt">${AppState.lang === 'ar' ? 'اختياري' : AppState.lang === 'fr' ? 'Optionnel' : 'Optional'}</span>`}
        </div>
        <p class="doc-desc">${doc.desc}</p>
        <div class="doc-footer">
          <span class="doc-source-tag source-${doc.sourceType}">
            <span class="source-icon">📍</span>
            <span class="source-name"><strong>${t('docSourceLabel')}:</strong> ${doc.source}</span>
          </span>
          ${doc.downloadUrl ? `
            <a href="${doc.downloadUrl}" target="_blank" rel="noopener" class="doc-download-btn" title="${t('downloadFormBtn')}">
              📥 ${t('downloadFormBtn')}
            </a>
          ` : ''}
        </div>
      </div>
    `;
    docsList.appendChild(item);
  });
}

function renderBudgetSimulator(timbreVal) {
  const photoVal = 8;
  const birthVal = 1.5;
  const total = timbreVal + photoVal + birthVal;

  const container = document.getElementById('budget-simulator-box');
  if (!container) return;

  container.innerHTML = `
    <div class="budget-header">
      <span>🪙</span> <strong>${t('budgetTitle')}</strong>
    </div>
    <div class="budget-rows">
      <div class="budget-row">
        <span>${t('budgetTimbre')}</span>
        <strong>${timbreVal} د.ت</strong>
      </div>
      <div class="budget-row">
        <span>${t('budgetPhotos')}</span>
        <span>~${photoVal} د.ت</span>
      </div>
      <div class="budget-row">
        <span>${t('budgetBirth')}</span>
        <span>~${birthVal} د.ت</span>
      </div>
      <div class="budget-row-total">
        <span>${t('budgetTotal')}</span>
        <span class="budget-total-num">~${total.toFixed(1)} د.ت (TND)</span>
      </div>
    </div>
  `;
}

function renderPhotoGuide(isPassport) {
  const guide = isPassport ? SICAD_DATA.photoGuidelines.passport : SICAD_DATA.photoGuidelines.cin;
  const container = document.getElementById('photo-guide-card');
  if (!container) return;

  container.innerHTML = `
    <div class="photo-guide-top">
      <div class="photo-cam-icon">📸</div>
      <div>
        <h4>${t('photoGuideTitle')}</h4>
        <p>${t('photoGuideSubtitle')}</p>
      </div>
    </div>
    <div class="photo-specs-chips">
      <span class="photo-spec-chip">📐 المقاس: <strong>${guide.dimensions}</strong></span>
      <span class="photo-spec-chip">🔢 العدد: <strong>${guide.count}</strong></span>
      <span class="photo-spec-chip">🎨 الخلفية: <strong>${guide.background}</strong></span>
    </div>
    <ul class="photo-rules-list">
      ${guide.rules.map(r => `<li><span>✓</span> ${r}</li>`).join('')}
    </ul>
  `;
}

function renderFaqs() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  container.innerHTML = '';
  SICAD_DATA.faqs.forEach((faq, idx) => {
    const item = document.createElement('div');
    item.className = 'faq-accordion-item';
    item.innerHTML = `
      <button type="button" class="faq-question-btn" onclick="toggleFaq(${idx})">
        <span>❓ ${faq.q[AppState.lang] || faq.q.ar}</span>
        <span class="faq-chevron" id="faq-chevron-${idx}">▼</span>
      </button>
      <div class="faq-answer-panel" id="faq-answer-${idx}">
        <p>${faq.a[AppState.lang] || faq.a.ar}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

function toggleFaq(idx) {
  const panel = document.getElementById(`faq-answer-${idx}`);
  const chevron = document.getElementById(`faq-chevron-${idx}`);
  if (!panel) return;

  const isOpen = panel.classList.contains('open');
  document.querySelectorAll('.faq-answer-panel').forEach(p => p.classList.remove('open'));
  document.querySelectorAll('.faq-chevron').forEach(c => c.style.transform = 'rotate(0deg)');

  if (!isOpen) {
    panel.classList.add('open');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  }
}

function renderChecklistProgress() {
  const docs = computeDocuments();
  const checked = docs.filter(d => AppState.checkedDocs.has(d.id)).length;
  const pct = Math.round((checked / docs.length) * 100) || 0;

  const bar = document.getElementById('res-progress-bar');
  const txt = document.getElementById('res-progress-text');

  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = t('completedDocs', { count: checked, total: docs.length }) + ` (${pct}%)`;
}

function updateMapsUrls() {
  const gov = SICAD_DATA.governorates.find(g => g.id === AppState.governorateId) || SICAD_DATA.governorates[0];
  const queryBase = `${AppState.delegation} ${gov.ar} تونس`;

  let policeUrl, muniUrl, recetteUrl, photoUrl;

  if (AppState.userCoords && AppState.userCoords.lat) {
    const origin = `${AppState.userCoords.lat},${AppState.userCoords.lng}`;
    policeUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent('مركز شرطة أو حرس وطني ' + queryBase)}`;
    muniUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent('بلدية أو دائرة بلدية ' + queryBase)}`;
    recetteUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent('قباضة مالية ' + queryBase)}`;
    photoUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${encodeURIComponent('استوديو تصوير فوتوغرافي ' + queryBase)}`;
  } else {
    policeUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('مركز شرطة أو حرس وطني ' + queryBase)}`;
    muniUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('بلدية أو دائرة بلدية ' + queryBase)}`;
    recetteUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('قباضة مالية ' + queryBase)}`;
    photoUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('استوديو تصوير فوتوغرافي ' + queryBase)}`;
  }

  const pBtn = document.getElementById('res-map-link-police');
  const mBtn = document.getElementById('res-map-link-municipality');
  const rBtn = document.getElementById('res-map-link-recette');
  const phBtn = document.getElementById('res-map-link-photo');

  if (pBtn) pBtn.href = policeUrl;
  if (mBtn) mBtn.href = muniUrl;
  if (rBtn) rBtn.href = recetteUrl;
  if (phBtn) phBtn.href = photoUrl;
}

// Leaflet Interactive Map
function initOrUpdateMap() {
  const mapDiv = document.getElementById('map-container');
  if (!mapDiv || typeof L === 'undefined') return;

  const gov = SICAD_DATA.governorates.find(g => g.id === AppState.governorateId) || SICAD_DATA.governorates[0];
  let centerLat = AppState.userCoords ? AppState.userCoords.lat : (gov.lat || 36.8065);
  let centerLng = AppState.userCoords ? AppState.userCoords.lng : (gov.lng || 10.1815);

  if (!mapInstance) {
    mapInstance = L.map('map-container', {
      zoomControl: true,
      tap: false
    }).setView([centerLat, centerLng], 14);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(mapInstance);

    mapMarkersGroup = L.featureGroup().addTo(mapInstance);
  } else {
    mapInstance.setView([centerLat, centerLng], 14);
    mapInstance.invalidateSize();
    if (mapMarkersGroup) mapMarkersGroup.clearLayers();
  }

  // Add User Marker if GPS
  if (AppState.userCoords) {
    const userIcon = L.divIcon({
      className: 'custom-map-pin pin-user',
      html: '<div class="pin-inner user-pulse">📍 موقعك</div>',
      iconSize: [60, 30],
      iconAnchor: [30, 30]
    });
    L.marker([centerLat, centerLng], { icon: userIcon })
      .bindPopup(`<strong>موقعك الحالي</strong><br>دائرة: ${AppState.delegation}`)
      .addTo(mapMarkersGroup);
  }

  // Create markers for local administrations
  const locName = `${AppState.delegation} - ${gov[AppState.lang] || gov.ar}`;

  const places = [
    {
      title: t('nearestPoliceTitle'),
      desc: "مركز شرطة أو حرس وطني",
      iconEmoji: "👮",
      colorClass: "pin-police",
      latOffset: 0.003,
      lngOffset: 0.002,
      query: `مركز شرطة ${locName}`
    },
    {
      title: t('nearestMunicipalityTitle'),
      desc: "بلدية / دائرة بلدية (الحالة المدنية)",
      iconEmoji: "🏛️",
      colorClass: "pin-muni",
      latOffset: -0.003,
      lngOffset: -0.0025,
      query: `بلدية ${locName}`
    },
    {
      title: t('nearestRecetteTitle'),
      desc: "القباضة المالية (وصول الخلاص والتمبر)",
      iconEmoji: "🏦",
      colorClass: "pin-recette",
      latOffset: 0.002,
      lngOffset: -0.004,
      query: `قباضة مالية ${locName}`
    },
    {
      title: t('nearestPhotoTitle'),
      desc: "استوديو تصوير شمسية للمستندات",
      iconEmoji: "📸",
      colorClass: "pin-photo",
      latOffset: -0.002,
      lngOffset: 0.0035,
      query: `استوديو تصوير ${locName}`
    }
  ];

  places.forEach(p => {
    const pLat = centerLat + p.latOffset;
    const pLng = centerLng + p.lngOffset;

    const customIcon = L.divIcon({
      className: `custom-map-pin ${p.colorClass}`,
      html: `<div class="pin-inner">${p.iconEmoji}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36]
    });

    const googleNavUrl = `https://www.google.com/maps/dir/?api=1&destination=${pLat},${pLng}`;

    const popupHtml = `
      <div class="map-popup-box">
        <h4>${p.title}</h4>
        <p>${p.desc} - ${locName}</p>
        <a href="${googleNavUrl}" target="_blank" rel="noopener" class="popup-nav-btn">
          🚀 فتح مسار الطريق (Navigation GPS)
        </a>
      </div>
    `;

    L.marker([pLat, pLng], { icon: customIcon })
      .bindPopup(popupHtml)
      .addTo(mapMarkersGroup);
  });

  if (mapMarkersGroup.getLayers().length > 0) {
    mapInstance.fitBounds(mapMarkersGroup.getBounds().pad(0.2));
  }
}

// Sharing & Export Helpers
function shareOnWhatsApp() {
  const isPassport = AppState.selectedDoc === 'passport';
  const docName = isPassport ? 'جواز السفر التونسي 📕' : 'بطاقة التعريف الوطنية 🪪';
  const docs = computeDocuments();
  const fee = isPassport ? getPassportFee() : getCinFee();

  let text = `🇹🇳 *قائمة وثائق استخراج ${docName}*\n\n`;
  text += `💰 *الرسوم:* ${fee.amount} (${fee.badge})\n`;
  text += `⏱️ *أجل الإنجاز:* 15 يوماً\n`;
  text += `📍 *المنطقة:* ${AppState.delegation}\n\n`;
  text += `📄 *الوثائق المطلوبة:*\n`;

  docs.forEach((d, i) => {
    text += `${i + 1}. ${d.title} (المصدر: ${d.source})\n`;
  });

  text += `\n🔗 *تم الإعداد عبر دليل سيكاد الذكي:* ${window.location.href}`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function copyChecklistToClipboard() {
  const isPassport = AppState.selectedDoc === 'passport';
  const docName = isPassport ? 'جواز السفر التونسي 📕' : 'بطاقة التعريف الوطنية 🪪';
  const docs = computeDocuments();
  const fee = isPassport ? getPassportFee() : getCinFee();

  let text = `قائمة وثائق استخراج ${docName}\n`;
  text += `الرسوم: ${fee.amount}\n\nالوثائق المطلوبة:\n`;
  docs.forEach((d, i) => {
    text += `- ${d.title} [${d.source}]\n`;
  });

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(t('copySuccess'));
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
