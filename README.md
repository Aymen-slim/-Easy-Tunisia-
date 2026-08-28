# 🇹🇳 Easy Tunisia (إيزي تونس)

> **دليل المواطن الذكي والمبسط لاستخراج وتجديد بطاقة التعريف الوطنية وجواز السفر التونسي**
> *Smart citizen guide & interactive directory for Tunisian National ID (CIN) and Passport procedures.*

---

## 📖 Overview / نظرة عامة
**Easy Tunisia** is an independent, mobile-first web portal designed to simplify administrative procedures in Tunisia. It guides citizens step-by-step through the requirements for obtaining or renewing their **National Identity Card (CIN - بطاقة التعريف الوطنية)** and **Regular Passport (جواز السفر العادي)**, based on official public data from the Tunisian administrative portal **SICAD** (Ministry of Interior).

---

## ✨ Features / المميزات

- 🎯 **2-Choice Flow**: Streamlined wizard for Passport (`SICAD D1618`) and National ID (`SICAD D1309`).
- 📍 **Smart & Accurate Geolocation**:
  - High-precision GPS triangulation with reverse-geocoding.
  - Interactive map pinpoint picker (click or drag pin anywhere in Tunisia).
  - Live city & delegation search autocomplete across all 24 Tunisian governorates.
  - 1-tap quick pills for major Tunisian cities.
- 🗺️ **Interactive Leaflet Map & GPS Navigation**:
  - Live map highlighting nearest Police / National Guard stations, Municipalities, Tax Offices (Recette des Finances), and certified photo studios.
  - One-click Google Maps turn-by-turn routing directly from the user's doorstep.
- 💰 **Dynamic Budget & Cost Simulator**: Real-time breakdown of fiscal stamp fees (25 DT / 80 DT / 3 DT), photos, birth certificates, and total estimated budget.
- 📸 **Photo Compliance Guidelines**: Visual specifications for official document photo dimensions (3.5x4.5cm vs 3x4cm).
- 🌐 **Trilingual (ar, fr, en)**: Seamless switching between Arabic (RTL), French, and English.
- 📲 **Export & Sharing**: One-click checklist sharing via WhatsApp, clipboard copy, and printable PDF view.
- ❓ **Interactive FAQ**: Answers for common citizen inquiries (parental authorization, loss/theft, early renewal, online birth certificates via `e-houwiya`).

---

## 🚀 How to Run Locally / التشغيل المحلي

```bash
# Clone the repository
git clone https://github.com/Aymen-slim/-Easy-Tunisia-.git

# Navigate to project directory
cd -Easy-Tunisia-

# Serve locally using any static web server (e.g. serve, live-server, python http.server)
npx serve .
# or
python -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚖️ Disclaimer / تنبيه قانوني
*Easy Tunisia is an independent digital initiative created to assist Tunisian citizens and is not an official government entity. All legal guidelines and procedures are based on publicly accessible data from the Tunisian official administrative portal (SICAD).*

---

## 📜 Official References / المراجع الرسمية
- **بطاقة التعريف الوطنية (CIN)**: [SICAD Fiche D1309](http://www.sicad.gov.tn/Ar/__57_3_D1309) — Law No. 27 of 1993.
- **جواز السفر العادي (Passport)**: [SICAD Fiche D1618](http://www.sicad.gov.tn/Ar/_57_3_D1618) — Law No. 40 of 1975.
