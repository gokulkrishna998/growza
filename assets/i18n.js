(() => {
  const translations = {
    en: {nav_home:"Home",nav_about:"About",nav_courses:"Courses",nav_academy:"Influencer Academy",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Talk to an Advisor ↗"},
    ar: {nav_home:"الرئيسية",nav_about:"من نحن",nav_courses:"الدورات",nav_academy:"أكاديمية المؤثرين",nav_blog:"المدونة",nav_contact:"اتصل بنا",nav_cta:"تحدث إلى مستشار ↗"},
    es: {nav_home:"Inicio",nav_about:"Nosotros",nav_courses:"Cursos",nav_academy:"Academia de influencers",nav_blog:"Blog",nav_contact:"Contacto",nav_cta:"Habla con un asesor ↗"},
    nl: {nav_home:"Home",nav_about:"Over ons",nav_courses:"Cursussen",nav_academy:"Influencer Academy",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Praat met een adviseur ↗"},
    fr: {nav_home:"Accueil",nav_about:"À propos",nav_courses:"Formations",nav_academy:"Académie des influenceurs",nav_blog:"Blog",nav_contact:"Contact",nav_cta:"Parler à un conseiller ↗"},
    de: {nav_home:"Startseite",nav_about:"Über uns",nav_courses:"Kurse",nav_academy:"Influencer-Akademie",nav_blog:"Blog",nav_contact:"Kontakt",nav_cta:"Beratung anfragen ↗"},
    hi: {nav_home:"होम",nav_about:"हमारे बारे में",nav_courses:"कोर्स",nav_academy:"इन्फ्लुएंसर अकादमी",nav_blog:"ब्लॉग",nav_contact:"संपर्क",nav_cta:"सलाहकार से बात करें ↗"},
    ml: {nav_home:"ഹോം",nav_about:"ഞങ്ങളേക്കുറിച്ച്",nav_courses:"കോഴ്‌സുകൾ",nav_academy:"ഇൻഫ്ലുവൻസർ അക്കാദമി",nav_blog:"ബ്ലോഗ്",nav_contact:"ബന്ധപ്പെടുക",nav_cta:"അഡ്വൈസറുമായി സംസാരിക്കുക ↗"}
  };
  const languageNames={en:"English",ar:"العربية",es:"Español",nl:"Nederlands",fr:"Français",de:"Deutsch",hi:"हिन्दी",ml:"മലയാളം"};
  const directionFor=lang=>lang==="ar"?"rtl":"ltr";
  const applyLanguage=lang=>{
    const dictionary=translations[lang]||translations.en;
    document.documentElement.lang=lang;
    document.documentElement.dir=directionFor(lang);
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key=el.getAttribute("data-i18n");
      if(dictionary[key]) el.textContent=dictionary[key];
    });
    const switcher=document.getElementById("languageSwitcher");
    if(switcher) switcher.value=lang;
    try{localStorage.setItem("growza-language",lang)}catch(e){}
  };
  const applyTheme=theme=>{
    document.documentElement.dataset.theme=theme;
    const button=document.getElementById("themeToggle");
    if(button){
      button.textContent=theme==="dark"?"☀":"☾";
      button.setAttribute("aria-label",theme==="dark"?"Switch to light mode":"Switch to dark mode");
      button.title=theme==="dark"?"Switch to light mode":"Switch to dark mode";
    }
    try{localStorage.setItem("growza-theme",theme)}catch(e){}
  };
  let savedLang="en",savedTheme="light";
  try{savedLang=localStorage.getItem("growza-language")||"en";savedTheme=localStorage.getItem("growza-theme")||"light"}catch(e){}
  applyTheme(savedTheme);
  document.addEventListener("DOMContentLoaded",()=>{
    applyLanguage(savedLang);
    const switcher=document.getElementById("languageSwitcher");
    if(switcher)switcher.addEventListener("change",e=>applyLanguage(e.target.value));
    const themeButton=document.getElementById("themeToggle");
    if(themeButton)themeButton.addEventListener("click",()=>applyTheme(document.documentElement.dataset.theme==="dark"?"light":"dark"));
  });
})();
